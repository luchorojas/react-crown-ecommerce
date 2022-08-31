import { CheckoutContainer, CheckoutHeader, HeaderBlock, Total } from './checkout.styles';

import { useContext } from 'react';
import { CartContext } from '../../contexts/cart.context';
import CheckoutItem from '../checkout-item/checkout-item.component';

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
    const { cartItems, cartTotal } = useContext(CartContext);
    return (
        <CheckoutContainer>
            {getHeader()}
            { cartItems.map(cartItem => (
                <CheckoutItem key={cartItem.id} cartItem={cartItem}/>
            ))}
            <Total>Total: ${cartTotal}</Total>
        </CheckoutContainer>
    );
}

export default Checkout;