import classes from './AvailableCakes.module.css';
import BakeItem from './cakeItems/BakeItem';

import carrotCake from '../../assets/carrot_cake.jpeg'
import rasmalaiCake from '../../assets/rasmalai_cake.jpeg'
import blackForestCake from '../../assets/black_forest_cake.jpg'
import babyShowerCake from '../../assets/baby_shower_cake.jpeg'
import chocolateCake from '../../assets/chocolate_cake.jpg'
import chocolateWalnutCake from '../../assets/chocolate_walnut_cake.jpg'
import gulabJamunCake from '../../assets/gulab_jamun_cake.jpg'
import lemonCoconutCake from '../../assets/Lemon coconut.jpg'
import lemonCake from '../../assets/lemon_cake.jpg'
import mangoCheeseCake from '../../assets/mango_cheese_cake.jpg'
import pineappleCake from '../../assets/pineapple_cake.jpg'
import strawberryCake from '../../assets/strawberry_cake.jpg'


const AvailableCakes = () => {
  
  const DUMMY_DATA = [
    {
      id: 'm1',
      name: 'Pineapple Cake',
      description: 'Finest Cake',
      price: 52.99,
      img: pineappleCake
    },
    {
      id: 'm2',
      name: 'Carrot Cake',
      description: 'A german specialty!',
      price: 48.5,
      img: carrotCake
    },
    {
      id: 'm3',
      name: 'Rasmalai Cake',
      description: 'Indian, savvy!',
      price: 62.99,
      img: rasmalaiCake
    },
    {
      id: 'm4',
      name: 'Black Forest',
      description: 'Chocolate King!',
      price: 48.99,
      img: blackForestCake
    },
    {
      id: 'm5',
      name: 'Mango Cake',
      description: 'Seasonal Summer fever!',
      price: 58.99,
      img: mangoCheeseCake
    },
    {
      id: 'm6',
      name: 'Strawberry Cake',
      description: 'Chocolate King!',
      price: 48.99,
      img: strawberryCake
    },
    {
      id: 'm7',
      name: 'BabyShower Theme',
      description: 'Cream Cheese Frosting!',
      price: 48.99,
      img: babyShowerCake
    },
    {
      id: 'm8',
      name: 'Gulab Jamun Cake',
      description: 'Cream Cheese Frosting!',
      price: 48.99,
      img: gulabJamunCake
    },
    {
      id: 'm9',
      name: 'Lemon Cake',
      description: 'Cream Cheese Frosting!',
      price: 48.99,
      img: lemonCake
    },
    {
      id: 'm10',
      name: 'Chocolate Cake',
      description: 'Cream Cheese Frosting!',
      price: 48.99,
      img: chocolateCake
    },
    {
      id: 'm11',
      name: 'Lemon Coconut Cake',
      description: 'Awesome One!',
      price: 68.99,
      img: lemonCoconutCake
    },
    {
      id: 'm12',
      name: 'Muffins',
      description: 'Added Bakery!',
      price: 10.99,
      img: chocolateWalnutCake
    },
  ];

  return (
    <div className={classes.wrapper}>
      {
        DUMMY_DATA.map((cake) => (
          <BakeItem
            key={cake.id}
            id={cake.id}
            name={cake.name}
            description={cake.description}
            price={cake.price}
            cakeImage={cake.img}
          />
        ))
      }
    </div>
  );
};

export default AvailableCakes;
