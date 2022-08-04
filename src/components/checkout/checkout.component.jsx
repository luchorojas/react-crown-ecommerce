import './checkout.styles.scss';

import { useContext } from 'react';
import { CartContext } from '../../contexts/cart.context';
import CheckoutItem from '../checkout-item/checkout-item.component';

const getHeader = () => {
    const columns = ["product", "description", "quantity", "price", "remove"];
    return (
        <div className='checkout-header'> 
            {columns.map(column => {
                return (
                    <div className='header-block'>
                        <span>{column}</span>
                    </div>
                )
            })}
        </div>
    )
}

const Checkout = () => {
    const { cartItems, cartTotal } = useContext(CartContext);
    return (
        <div className='checkout-container'>
            {getHeader()}
            { cartItems.map(cartItem => (
                <CheckoutItem key={cartItem.id} cartItem={cartItem}/>
            ))}
            <span className='total'>Total: ${cartTotal}</span>
        </div>
    );
}

export default Checkout;