import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import {
  selectCartItems,
  selectCartTotal,
} from '../../store/cart/cart.selector';
import CheckoutItem from '../../components/checkout-item/checkout-item.component';
import PaymentForm from '../../components/payment-form/payment-form.component';
import AddressForm from '../../components/address/address.components';
import { getCurrentUserId, fetchUserAddress, AddressData } from '../../utils/firebase/firebase.utils';
import {
  CheckoutContainer,
  CheckoutHeader,
  HeaderBlock,
  Total,
  AddressContainer,
  AddressTitle,
  AddressText,
} from './checkout.styles';

const Checkout = () => {
  const cartItems = useSelector(selectCartItems);
  const cartTotal = useSelector(selectCartTotal);
  const [userId, setUserId] = useState<string | undefined>(undefined);
  const [address, setAddress] = useState<AddressData | null>(null);

  useEffect(() => {
    async function fetchUserData() {
      try {
        const myUserId: string = await getCurrentUserId();
        setUserId(myUserId);
        const userAddress: AddressData | null = await fetchUserAddress(myUserId);
        setAddress(userAddress);
      } catch (error) {
        console.log(error);
      }
    }

    fetchUserData();
  }, []);

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
      {address && (
        <AddressContainer>
          <AddressTitle>Shipping Address:</AddressTitle>
          <AddressText>{address.street}</AddressText>
          <AddressText>{address.city}, {address.state}, {address.zip}</AddressText>
        </AddressContainer>
      )}
      {userId && <AddressForm userId={userId} />}
      <PaymentForm />
    </CheckoutContainer>
  );
};

export default Checkout;
