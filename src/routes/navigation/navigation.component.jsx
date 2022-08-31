import { Fragment, useContext } from 'react';
import { Outlet, Link } from 'react-router-dom'
import { ReactComponent as CrownLogo } from '../../assets/crown.svg';
import { UserContext } from '../../contexts/user.context';
import { CartContext } from '../../contexts/cart.context';
import { signOutUser } from '../../utils/firebase/firebase.uils';
import CartIcon from '../../components/cart-icon/cart-icon.component';
import CartDropdown from '../../components/cart-dropdown/cart-dropdown.component';
import { NavigationContainer, LogoContainer, NavLinksContainer, NavLink } from './navigation.styles'

const Navigation = () => {
  const { currentUser } = useContext(UserContext);
  const { isCartOpen } = useContext(CartContext);

  return (
    <Fragment>
      <NavigationContainer>
        <LogoContainer to='/'>
          <CrownLogo className='logo'/>
        </LogoContainer>
          <NavLinksContainer>
            <NavLink to='/shop'>
              SHOP
            </NavLink>
            {
              currentUser ? (
                <span className='nav-link' onClick={signOutUser}>SIGN OUT</span>)
                : (<NavLink to='/auth'>
                SING IN
              </NavLink>
              )
            }
            <CartIcon />
          </NavLinksContainer>
          {isCartOpen && <CartDropdown/>}
      </NavigationContainer>
      <Outlet/>
    </Fragment>
  )
}

export default Navigation;