import { useSelector } from 'react-redux';
import { selectCartItems, selectCartTotal } from '../../store/cart/cart.selector';

import CheckoutItem from '../../components/checkout-item/checkout-item.component';
import PaymentForm from '../../components/payment-form/payment-form.component';

import { CheckoutContainer, CheckoutHeader, HeaderBlock, Total } from './checkout.styles';

const getHeader = () => {
    const columns = ["product", "description", "quantity", "price", "remove"];
    return (
        <CheckoutHeader> 
            {columns.map(column => {
                return (
                    <HeaderBlock key={column}>
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
            { cartItems.map(cartItem => {
                return <CheckoutItem key={`list-${cartItem.id}`} cartItem={cartItem}/>
            })}
            <Total>Total: $ {cartTotal ? cartTotal : 0}</Total>
            <PaymentForm />
        </CheckoutContainer>
    );
}

export default Checkout;