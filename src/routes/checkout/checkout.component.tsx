import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { selectCartItems, selectCartTotal } from '../../store/cart/cart.selector';
import CheckoutItem from '../../components/checkout-item/checkout-item.component';
import PaymentForm from '../../components/payment-form/payment-form.component';
import AddressForm from '../../components/address/address.components';
import SignInForm from '../../components/sign-in-form/sign-in-form.component';
import {
  getCurrentUserId,
  fetchUserAddress,
  AddressData,
  auth // Import the auth instance from firebase
} from '../../utils/firebase/firebase.utils';
import {
  CheckoutContainer,
  CheckoutHeader,
  HeaderBlock,
  Total,
  AddressContainer,
  AddressTitle,
  AddressText,
  PaymentContainer,
  ProceedToPay,
  SignInButton,
} from './checkout.styles';

const Checkout = () => {
  const cartItems = useSelector(selectCartItems);
  const cartTotal = useSelector(selectCartTotal);
  const [userId, setUserId] = useState<string | undefined>(undefined);
  const [address, setAddress] = useState<AddressData | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(async (user) => {
      if (user) {
        try {
          const myUserId: string = await getCurrentUserId();
          setUserId(myUserId);
          const userAddress: AddressData | null = await fetchUserAddress(myUserId);
          setAddress(userAddress);
        } catch (error) {
          console.log(error);
        }
      } else {
        setUserId(undefined);
        setAddress(null);
      }
    });

    return () => {
      unsubscribe(); // Cleanup the subscription when the component unmounts
    };
  }, []);

  const handleAuthRedirect = () => {
    navigate('/auth');
  };

  const handleAddressSubmit = async () => {
    if (userId) {
      try {
        const userAddress = await fetchUserAddress(userId);
        setAddress(userAddress);
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <CheckoutContainer>
      <CheckoutHeader>
        <HeaderBlock>
          <span>Product</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Description</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Quantity</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Price ₹</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Remove</span>
        </HeaderBlock>
      </CheckoutHeader>
      {cartItems.map((cartItem) => (
        <CheckoutItem key={cartItem.id} cartItem={cartItem} />
      ))}
      <Total>Total: ₹{cartTotal}</Total>
      {userId ? (
        <PaymentContainer>
          {address ? (
          <React.Fragment>
            <AddressForm userId={userId} onAddressSubmit={handleAddressSubmit}/>
            <ProceedToPay>
              <AddressContainer>
                <AddressTitle>Shipping Address</AddressTitle>
                <AddressText>
                  {address.street}, {address.city}, {address.state}, Pincode: {address.zip}
                </AddressText>
                <AddressText>Contact No: {address.phoneNo}</AddressText>
              </AddressContainer>
              <PaymentForm />
            </ProceedToPay>
          </React.Fragment>
        ) : (
          <React.Fragment>
            <AddressForm userId={userId} onAddressSubmit={handleAddressSubmit}/>
            <ProceedToPay>
              <h1>You donot have a saved address</h1>
              <h1>Add an address to continue</h1>
            <PaymentForm />
            </ProceedToPay>
          </React.Fragment>
        )}
        </PaymentContainer>
      ) : (
        <SignInButton onClick={handleAuthRedirect}>Sign In to Proceed</SignInButton>
      )}
    </CheckoutContainer>
  );
};

export default Checkout;
