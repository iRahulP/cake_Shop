import classes from './AvailableCakes.module.css';
import BakeItem from './cakeItems/BakeItem';

const DUMMY_DATA = [
  {
    id: 'm1',
    name: 'Pineapple Cake',
    description: 'Finest Cake',
    price: 52.99,
  },
  {
    id: 'm2',
    name: 'Carrot Cake',
    description: 'A german specialty!',
    price: 48.5,
  },
  {
    id: 'm3',
    name: 'Rasmalai Cake',
    description: 'Indian, savvy!',
    price: 62.99,
  },
  {
    id: 'm4',
    name: 'Black Forest',
    description: 'Chocolate King!',
    price: 48.99,
  },
  {
    id: 'm5',
    name: 'Mango Cake',
    description: 'Seasonal Summer fever!',
    price: 58.99,
  },
  {
    id: 'm6',
    name: 'Strawberry Cake',
    description: 'Chocolate King!',
    price: 48.99,
  },
  {
    id: 'm7',
    name: 'Red Velvet',
    description: 'Cream Cheese Frosting!',
    price: 48.99,
  },
  {
    id: 'm8',
    name: 'Gulab Jamun Cake',
    description: 'Cream Cheese Frosting!',
    price: 48.99,
  },
  {
    id: 'm9',
    name: 'Lemon Cake',
    description: 'Cream Cheese Frosting!',
    price: 48.99,
  },
  {
    id: 'm10',
    name: 'Chocolate Cake',
    description: 'Cream Cheese Frosting!',
    price: 48.99,
  },
  {
    id: 'm11',
    name: 'Cheese Cake',
    description: 'Awesome One!',
    price: 68.99,
  },
];

const AvailableCakes = () => {
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
          />
        ))
      }
    </div>
  );
};

export default AvailableCakes;
