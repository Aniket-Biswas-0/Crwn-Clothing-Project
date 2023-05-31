import React, { useState } from 'react';
import { storeUserAddress, AddressData } from '../../utils/firebase/firebase.utils';

interface AddressFormProps {
  userId: string;
}

const AddressForm: React.FC<AddressFormProps> = ({ userId }) => {
  const [address, setAddress] = useState<AddressData>({
    street: '',
    city: '',
    state: '',
    zip: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setAddress((prevState: any) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Store the address in Firestore
    await storeUserAddress(userId, address);

    // Reset the form
    setAddress({
      street: '',
      city: '',
      state: '',
      zip: '',
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="street">Street</label>
      <input
        type="text"
        id="street"
        name="street"
        value={address.street}
        onChange={handleChange}
        required
      />

      <label htmlFor="city">City</label>
      <input
        type="text"
        id="city"
        name="city"
        value={address.city}
        onChange={handleChange}
        required
      />

      <label htmlFor="state">State</label>
      <input
        type="text"
        id="state"
        name="state"
        value={address.state}
        onChange={handleChange}
        required
      />

      <label htmlFor="zip">ZIP</label>
      <input
        type="text"
        id="zip"
        name="zip"
        value={address.zip}
        onChange={handleChange}
        required
      />

      <button type="submit">Save Address</button>
    </form>
  );
};

export default AddressForm;