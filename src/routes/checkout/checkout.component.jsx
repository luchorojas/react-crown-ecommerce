import { useSelector } from 'react-redux';
import { CheckoutContainer, CheckoutHeader, HeaderBlock, Total } from './checkout.styles';

import CheckoutItem from '../../components/checkout-item/checkout-item.component';
import { selectCartItems, selectCartTotal } from '../../store/cart/cart.selector';

const getHeader = () => {
    const columns = ["product", "description", "quantity", "price", "remove"];
    return (
        <CheckoutHeader> 
            {columns.map(column => {
                return (
                    <HeaderBlock>
                        <span>{column}</span>
                    </HeaderBlock>
                )
            })}
        </CheckoutHeader>
    )
}

const Checkout = () => {
    const cartItems = useSelector(selectCartItems);
    const cartTotal = useSelector(selectCartTotal);
    return (
        <CheckoutContainer>
            {getHeader()}
            { cartItems.map(cartItem => (
                <CheckoutItem key={cartItem.id} cartItem={cartItem}/>
            ))}
            <Total>Total: $ {cartTotal ? cartTotal : 0}</Total>
        </CheckoutContainer>
    );
}

export default Checkout;