import CartIcon from '../Cart/CartIcon';
import classes from '../Cart/CartIcon.module.css'

const HeaderCartButton = props => {
    return <button className={classes.button}>
        <span className={classes.icon}>
            <CartIcon />
        </span>
        <span>Your Cart</span>
        <span className={classes.badge}>
            9
        </span>
    </button>
};

export default HeaderCartButton;