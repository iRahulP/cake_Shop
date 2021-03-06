import { Fragment } from 'react';
import HeaderCartButton from './HeaderCartButton';
import cakeImage from '../../assets/cake.jpg';
import classes from './Header.module.css';

const Header = (props) => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>Cake Shop</h1>
        <HeaderCartButton onClick={props.onShowCart} />
      </header>
      <div className={classes['main-image']}>
        <img src={cakeImage} alt='Cakes!' />
      </div>
    </Fragment>
  );
};

export default Header;
