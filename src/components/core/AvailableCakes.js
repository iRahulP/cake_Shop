import classes from './AvailableCakes.module.css';
import BakeItem from './cakeItems/BakeItem';
import carrotCake from '../../assets/carrot_cake.jpeg'
import rasmalaiCake from '../../assets/rasmalai_cake.jpeg'

const DUMMY_DATA = [
  {
    id: 'm1',
    name: 'Pineapple Cake',
    description: 'Finest Cake',
    price: 52.99,
    img: 'https://images.pexels.com/photos/6942043/pexels-photo-6942043.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
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
    img: 'https://images.pexels.com/photos/3740237/pexels-photo-3740237.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
  },
  {
    id: 'm5',
    name: 'Mango Cake',
    description: 'Seasonal Summer fever!',
    price: 58.99,
    img: 'https://images.pexels.com/photos/9419867/pexels-photo-9419867.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
  },
  {
    id: 'm6',
    name: 'Strawberry Cake',
    description: 'Chocolate King!',
    price: 48.99,
    img: 'https://images.pexels.com/photos/2323201/pexels-photo-2323201.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
  },
  {
    id: 'm7',
    name: 'Red Velvet',
    description: 'Cream Cheese Frosting!',
    price: 48.99,
    img: 'https://images.pexels.com/photos/806363/pexels-photo-806363.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
  },
  {
    id: 'm8',
    name: 'Gulab Jamun Cake',
    description: 'Cream Cheese Frosting!',
    price: 48.99,
    img: 'https://images.pexels.com/photos/1291712/pexels-photo-1291712.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
  },
  {
    id: 'm9',
    name: 'Lemon Cake',
    description: 'Cream Cheese Frosting!',
    price: 48.99,
    img: 'https://images.pexels.com/photos/8211178/pexels-photo-8211178.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
  },
  {
    id: 'm10',
    name: 'Chocolate Cake',
    description: 'Cream Cheese Frosting!',
    price: 48.99,
    img: 'https://images.pexels.com/photos/291528/pexels-photo-291528.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
  },
  {
    id: 'm11',
    name: 'Cheese Cake',
    description: 'Awesome One!',
    price: 68.99,
    img: 'https://images.pexels.com/photos/1098592/pexels-photo-1098592.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
  },
  {
    id: 'm12',
    name: 'Muffins',
    description: 'Added Bakery!',
    price: 10.99,
    img: 'https://images.pexels.com/photos/6025766/pexels-photo-6025766.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
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
            cakeImage={cake.img}
          />
        ))
      }
    </div>
  );
};

export default AvailableCakes;
