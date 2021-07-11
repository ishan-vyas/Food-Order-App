import React from 'react';
import styles from './Header.module.css';
import mealsImage from "../../assets/meals.jpeg";

// Adding css styles with "-" styles["main-image"];

const Header = (props) => {
    return (
        <React.Fragment>
            <header className={styles.header}>
                <h1>ReactMeals</h1>
            </header>
            <div className={styles['main-image']}>
                <img src={mealsImage} alt="A table full of delicious meals"/>
            </div>
        </React.Fragment>
    );
}

export default Header;