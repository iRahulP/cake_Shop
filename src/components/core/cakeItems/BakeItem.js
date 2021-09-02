import { useContext } from 'react';
import cakeImage from '../../../assets/pexels-cake.jpg';

import classes from './BakeItem.module.css';
import BakeItemForm from './BakeItemForm';
import CartContext from '../../store/CartContext';

const BakeItem = (props) => {
  const cartCtx = useContext(CartContext);
  const price = `${props.price.toFixed(2)}`;
  const addToCartHandler = amount => {
    cartCtx.addItem({
      id: props.id,
      name: props.name,
      amount: amount,
      price: props.price
    });
  };

  return (
    <div className={classes.cake}>
      <img className={classes.cake__img} src={cakeImage} alt='Cake' />
      <div className={classes.cake__body}>  
        <h2 className={classes.cake__title}>
          {props.name}
        </h2>
        <p className={classes.cake__description}>
          {props.description}
        </p>
        <h3 className={classes.cake__price}>
          {price}
        </h3>
        <div className={classes.cake__btn}>
          <BakeItemForm onAddToCart={addToCartHandler} />
        </div>
      </div>
    </div>
  );
};

export default BakeItem;
