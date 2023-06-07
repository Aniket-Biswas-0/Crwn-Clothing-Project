import { FC } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { selectCartItems } from '../../store/cart/cart.selector';
import {
  addItemToCart,
  clearItemFromCart,
  removeItemFromCart,
} from '../../store/cart/cart.action';

import {
  CartItemContainer,
  BaseSpan,
  Quantity,
  Arrow,
  Value,
  RemoveButton,
  ItemDetails,
} from './cart-item.styles';

import { CartItem } from '../../store/cart/cart.types';

type CartItemProps = {
  cartItem: CartItem;
};

const Cart: FC<CartItemProps> = ({ cartItem }) => {
  const { name, imageUrl, price, quantity } = cartItem;
  const cartItems = useSelector(selectCartItems);
  const dispatch = useDispatch();

  const clearItemHandler = () =>
    dispatch(clearItemFromCart(cartItems, cartItem));
  const addItemHandler = () => dispatch(addItemToCart(cartItems, cartItem));
  const removeItemHandler = () =>
    dispatch(removeItemFromCart(cartItems, cartItem));

  return (
    <CartItemContainer>
      <img src={imageUrl} alt={`${name}`} />
      <ItemDetails>
        <BaseSpan> {name} </BaseSpan>
        <Quantity>
          <BaseSpan>₹{price}  </BaseSpan>
          <Arrow onClick={removeItemHandler}>&#10094;</Arrow>
          <Value>{quantity}</Value>
          <Arrow onClick={addItemHandler}>&#10095;</Arrow>
        </Quantity>
      </ItemDetails>
      <RemoveButton onClick={clearItemHandler}>&#10005;</RemoveButton>
    </CartItemContainer>
  );
};

export default Cart;