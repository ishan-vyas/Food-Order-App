import styles from './HeaderCartButton.module.css';
import React, { useContext , useEffect, useState } from 'react';
import CartContext from '../../store/cart-context';
import CartIcon from '../Cart/CartIcon';

const HeaderCartButton = (props) => {

    const [btnIsHigh, setBtnIsHigh ] = useState(false);

    const cartCtx = useContext(CartContext);

    // .reduce reduces an array to a single number.
    const numberOfCartItems = cartCtx.items.reduce((curNum, item) => {
        return curNum + item.amount;
    }, 0);

    const btnClasses = `${styles.button} ${btnIsHigh ? styles.bump : ''}`;

    useEffect(() => {
        if(cartCtx.items.length === 0){
            return;
        }
        setBtnIsHigh(true);

        const timer = setTimeout(
            () => {
                setBtnIsHigh(false);
            }, 300
        );
        
        // Clean up function, good practice
        return () => {
            clearTimeout(timer);
        };

    }, [cartCtx.items]);

    return (
        <button className={btnClasses} onClick={props.onClick}>
            <span className={styles.icon}>
                <CartIcon></CartIcon>
            </span>
            <span>Your Cart</span>
            <span className={styles.badge}>{numberOfCartItems}</span>
        </button>
    );
};

export default HeaderCartButton;