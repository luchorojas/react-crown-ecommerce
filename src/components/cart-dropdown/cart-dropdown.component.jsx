import './cart-dropdown.styles.jsx';
import Button from '../button/button.component';
import CartItem from '../cart-item/cart-item.component';

import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { selectCartItems, selectIsCartOpen } from '../../store/cart/cart.selector.js';
import { setIsCartOpen } from '../../store/cart/cart.action';

import { CartDropdownContainer, EmptyMessage, CartItems } from './cart-dropdown.styles.jsx';

const CartDropdown = () => {
    const dispatch = useDispatch();
    const isCartOpen = useSelector(selectIsCartOpen);

    const cartItems = useSelector(selectCartItems);
    const navigate = useNavigate();

    const goToCheckoutHandler = () => {
        dispatch(setIsCartOpen(!isCartOpen));
        navigate('/checkout');
    }
    return (
        <CartDropdownContainer>
            <CartItems>
                { cartItems.length ? (cartItems.map(item => (
                    <CartItem key= {`cart-${item.id}`} cartItem={item} />
                ))) : ( <EmptyMessage> Your cart is empty </EmptyMessage> )
                }
            </CartItems>
            <Button onClick={goToCheckoutHandler}>GO TO CHECKOUT</Button>
        </CartDropdownContainer>
    );
}

export default CartDropdown;