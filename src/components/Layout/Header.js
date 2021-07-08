import { Fragment } from 'react';

import mealsImage from '../../assets/meals.jpeg';
import classes from './Header.module.css';
import HeaderCartButton from './HeaderCartButton'

const Header = props => {
    return <Fragment>
        <header className={classes.header}>
            <h1>DaniMeals</h1>
            < HeaderCartButton />
        </header>
        <div className={classes['main-image']}>
            <img src={mealsImage} alt='The Great Supper' />
        </div>
    </Fragment>
};

export default Header;