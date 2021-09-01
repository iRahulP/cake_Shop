import Card from '../ui/Card';
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
];

const AvailableCakes = () => {
  const mealsList = DUMMY_DATA.map((cake) => (
    <BakeItem
      key={cake.id}
      id={cake.id}
      name={cake.name}
      description={cake.description}
      price={cake.price}
    />
  ));

  return (
    <section className={classes.cakes}>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
};

export default AvailableCakes;
