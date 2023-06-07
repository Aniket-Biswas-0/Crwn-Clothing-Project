import React, { useState } from 'react';
import { storeUserAddress, AddressData } from '../../utils/firebase/firebase.utils';
import { AddressFormContainer, FormContainer, SubmitButton } from './address.styles';

import FormInput from '../form-input/form-input.component';
import { BUTTON_TYPE_CLASSES } from '../button/button.component';

interface AddressFormProps {
  userId: string;
  onAddressSubmit: () => void;
}

const AddressForm: React.FC<AddressFormProps> = ({ userId, onAddressSubmit }) => {
  const [address, setAddress] = useState<AddressData>({
    street: '',
    city: '',
    state: '',
    zip: 0, // Initialize zip as a number
    phoneNo: 0, // Add phoneNo field
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setAddress((prevState: AddressData) => ({
      ...prevState,
      [name]: name === 'zip' ? parseInt(value, 10) : value, // Convert zip to a number
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
      zip: 0,
      phoneNo: 0,
    });

    onAddressSubmit();
  };

  return (
    <AddressFormContainer>
      <h2>Enter Your Address</h2>
      <FormContainer onSubmit={handleSubmit}>
        <FormInput
          label='Street'
          type="text"
          id="street"
          name="street"
          value={address.street}
          onChange={handleChange}
          required
        />

        <FormInput
          label='City'
          type="text"
          id="city"
          name="city"
          value={address.city}
          onChange={handleChange}
          required
        />

        <FormInput
          label='State'
          type="text"
          id="state"
          name="state"
          value={address.state}
          onChange={handleChange}
          required
        />

        <FormInput
          label='ZIP'
          type="number"
          id="zip"
          name="zip"
          value={address.zip || ''}
          onChange={handleChange}
          required
          autoComplete="off" // Add autoComplete attribute to disable autofill
          inputMode="numeric" // Specify input mode as numeric
          pattern="\d*" // Set pattern to accept only numeric input
        />

        <FormInput
          label='Phone No.'
          type="tel" // Change input type to "tel"
          id="phoneNo"
          name="phoneNo"
          value={address.phoneNo || ''}
          onChange={handleChange}
          required
          autoComplete="off" // Add autoComplete attribute to disable autofill
          inputMode="numeric" // Specify input mode as numeric
          pattern="\d*" // Set pattern to accept only numeric input
        />


        <SubmitButton buttonType={BUTTON_TYPE_CLASSES.inverted}>Save Address</SubmitButton>
      </FormContainer>
    </AddressFormContainer>
  );
};

export default AddressForm;
