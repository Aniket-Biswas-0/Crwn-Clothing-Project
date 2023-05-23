import { Fragment } from 'react';
import { Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';

import CartIcon from '../../components/cart-icon/cart-icon.component';
import CartDropdown from '../../components/cart-dropdown/cart-dropdown.component';
import UserDropdown from '../../components/user-dropdown/user-dropdown.component';

import { selectIsCartOpen } from '../../store/cart/cart.selector';
import { selectCurrentUser } from '../../store/user/user.selector';

import { ReactComponent as CrwnLogo } from '../../assets/crown.svg';
import './navigation.styles.scss';

import {
  NavigationContainer,
  NavLinks,
  NavLink,
  LogoContainer,
} from './navigation.styles';



const Navigation = () => {
  const currentUser = useSelector(selectCurrentUser);
  const isCartOpen = useSelector(selectIsCartOpen);

  return (
    <Fragment>
      <NavigationContainer>
        <LogoContainer to='/'>
          <CrwnLogo className='logo' />
          <span>Crown Clothing</span>
        </LogoContainer>
        <NavLinks>
          <NavLink to='/shop'>SHOP</NavLink>
          <CartIcon />
          {currentUser ? (
              <NavLink as='span'>
                <UserDropdown />
              </NavLink>
          ) : (
            <NavLink to='/auth'>SIGN IN</NavLink>
          )}
        </NavLinks>
        {isCartOpen && <CartDropdown />}
        </NavigationContainer>
        <div className="spacer layer1"></div>
        <Outlet />
    </Fragment>
  );
};

export default Navigation;