import { initializeApp } from 'firebase/app';

import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  NextOrObserver,
  User,
} from 'firebase/auth';
import {
  getFirestore,
  doc,
  getDoc,
  setDoc,
  collection,
  writeBatch,
  query,
  getDocs,
  QueryDocumentSnapshot,
  addDoc,
  updateDoc,
} from 'firebase/firestore';

import { Category } from '../../store/categories/category.types';

const firebaseConfig = {
  apiKey: "AIzaSyAhF2VESlKw02l4PPjB3btdtN9mhjjA9rE",
  authDomain: "crwn-clothing-f3f4a.firebaseapp.com",
  projectId: "crwn-clothing-f3f4a",
  storageBucket: "crwn-clothing-f3f4a.appspot.com",
  messagingSenderId: "995114780298",
  appId: "1:995114780298:web:d070fde2e81a75817f8f73"
};


const firebaseApp = initializeApp(firebaseConfig);

const googleProvider = new GoogleAuthProvider();

googleProvider.setCustomParameters({
  prompt: 'select_account',
});

export const auth = getAuth();
export const signInWithGooglePopup = () =>
  signInWithPopup(auth, googleProvider);
export const signInWithGoogleRedirect = () =>
  signInWithRedirect(auth, googleProvider);

export const db = getFirestore();

export type ObjectToAdd = {
  title: string;
};

export const addCollectionAndDocuments = async <T extends ObjectToAdd>(
  collectionKey: string,
  objectsToAdd: T[]
): Promise<void> => {
  const collectionRef = collection(db, collectionKey);
  const batch = writeBatch(db);

  objectsToAdd.forEach((object) => {
    const docRef = doc(collectionRef, object.title.toLowerCase());
    batch.set(docRef, object);
  });

  await batch.commit();
  console.log('done');
};

export const getCategoriesAndDocuments = async (): Promise<Category[]> => {
  const collectionRef = collection(db, 'categories');
  const q = query(collectionRef);

  const querySnapshot = await getDocs(q);
  return querySnapshot.docs.map(
    (docSnapshot) => docSnapshot.data() as Category
  );
};

export type AdditionalInformation = {
  displayName?: string;
};

export type UserData = {
  addressId: any;
  createdAt: Date;
  displayName: string;
  email: string;
};

export const createUserDocumentFromAuth = async (
  userAuth: User,
  additionalInformation = {} as AdditionalInformation
): Promise<void | QueryDocumentSnapshot<UserData>> => {
  if (!userAuth) return;

  const userDocRef = doc(db, 'users', userAuth.uid);

  const userSnapshot = await getDoc(userDocRef);

  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      // Create the user document
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
        ...additionalInformation,
      });

      // Retrieve the address ID from the "addresses" collection
      const addressRef = await addDoc(collection(db, 'addresses'), {});
      const addressId = addressRef.id;

      // Update the user document with the address ID
      await updateDoc(userDocRef, {
        addressId: addressId
      });
    } catch (error) {
      console.log('Error creating the user', error);
    }
  }

  return userSnapshot as QueryDocumentSnapshot<UserData>;
};

export const createAuthUserWithEmailAndPassword = async (
  email: string,
  password: string
) => {
  if (!email || !password) return;

  return await createUserWithEmailAndPassword(auth, email, password);
};

export const signInAuthUserWithEmailAndPassword = async (
  email: string,
  password: string
) => {
  if (!email || !password) return;

  return await signInWithEmailAndPassword(auth, email, password);
};

export const signOutUser = async () => await signOut(auth);

export const onAuthStateChangedListener = (callback: NextOrObserver<User>) =>
  onAuthStateChanged(auth, callback);

export const getCurrentUser = (): Promise<User | null> => {
  return new Promise((resolve, reject) => {
    const unsubscribe = onAuthStateChanged(
      auth,
      (userAuth) => {
        unsubscribe();
        resolve(userAuth);
      },
      reject
    );
  });
};

export const getCurrentUserId = (): Promise<string> => {
  return new Promise((resolve, reject) => {
    const auth = getAuth();
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        resolve(user.uid);
      } else {
        reject(new Error('No user signed in.'));
      }
      unsubscribe();
    });
  });
};

let UserId: string;

export const storeUserAddress = async (
  userId: string,
  addressData: AddressData
): Promise<void> => {
  try {
    // Store the address in the "addresses" collection
    const addressRef = await addDoc(collection(db, 'addresses'), addressData);
    const addressId = addressRef.id;

    // Update the user document to reference the address
    const userDocRef = doc(db, 'users', userId);
    await updateDoc(userDocRef, {
      addressId: addressId,
    });

    // Update the address document to reference the user
    const addressDocRef = doc(db, 'addresses', addressId);
    await updateDoc(addressDocRef, {
      userId: userId,
    });

    console.log('Address stored successfully!');
  } catch (error) {
    console.error('Error storing address:', error);
  }
};

export const fetchUserAddress = async (userId: string) => {
  try {
    const userDocRef = doc(db, 'users', userId);
    const userSnapshot = await getDoc(userDocRef);

    if (userSnapshot.exists()) {
      const userData = userSnapshot.data() as UserData;
      const addressId = userData.addressId;

      if (addressId) {
        const addressDocRef = doc(db, 'addresses', addressId);
        const addressSnapshot = await getDoc(addressDocRef);

        if (addressSnapshot.exists()) {
          const addressData = addressSnapshot.data() as AddressData;
          return addressData;
        }
      }
    }

    return null;
  } catch (error) {
    console.error('Error fetching user address:', error);
    return null;
  }
};

export type AddressData = {
  street: string;
  city: string;
  state: string;
  zip: number;
  phoneNo: number;
};