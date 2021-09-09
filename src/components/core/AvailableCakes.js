import classes from './AvailableCakes.module.css';
import BakeItem from './cakeItems/BakeItem';
import { useEffect, useState } from 'react';
import { collection, getDocs, addDoc } from "firebase/firestore";
import { db } from '../../App';


const AvailableCakes = () => {
  const [products, setProducts ] = useState([]);
  useEffect(() => {
    const getProducts = async () => {
      const querySnapshot = await getDocs(collection(db, "products"));
      const data = [];
      await querySnapshot.forEach((doc) => {
        let temp = doc.data();
        temp.key = doc.id;
        data.push(doc.data());
      });
      console.log(data);
      setProducts(data);
      console.log(products);
    }
    getProducts();

    // const addProduct = async () => {
    //   const docRef = await addDoc(collection(db, "products"), {
    //     id: 'dummyID',
    //     name: 'dummyProduct',
    //     description: 'dummyDec!',
    //     price: 10.99,
    //     img: 'dummyIMGRef'
    //   });
    // }
    // addProduct();
  }, [])

  // const DUMMY_DATA = [
  //   {
  //     key: 'm1',
  //     name: 'Pineapple Cake',
  //     description: 'Finest Cake',
  //     price: 52.99,
  //     img: pineappleCake
  //   },
  //   {
  //     id: 'm2',
  //     name: 'Carrot Cake',
  //     description: 'A german specialty!',
  //     price: 48.5,
  //     img: carrotCake
  //   },
  //   {
  //     id: 'm3',
  //     name: 'Rasmalai Cake',
  //     description: 'Indian, savvy!',
  //     price: 62.99,
  //     img: rasmalaiCake
  //   },
  //   {
  //     id: 'm4',
  //     name: 'Black Forest',
  //     description: 'Chocolate King!',
  //     price: 48.99,
  //     img: blackForestCake
  //   },
  //   {
  //     id: 'm5',
  //     name: 'Mango Cake',
  //     description: 'Seasonal Summer fever!',
  //     price: 58.99,
  //     img: mangoCheeseCake
  //   },
  //   {
  //     id: 'm6',
  //     name: 'Strawberry Cake',
  //     description: 'Chocolate King!',
  //     price: 48.99,
  //     img: strawberryCake
  //   },
  //   {
  //     id: 'm7',
  //     name: 'BabyShower Theme',
  //     description: 'Cream Cheese Frosting!',
  //     price: 48.99,
  //     img: babyShowerCake
  //   },
  //   {
  //     id: 'm8',
  //     name: 'Gulab Jamun Cake',
  //     description: 'Cream Cheese Frosting!',
  //     price: 48.99,
  //     img: gulabJamunCake
  //   },
  //   {
  //     id: 'm9',
  //     name: 'Lemon Cake',
  //     description: 'Cream Cheese Frosting!',
  //     price: 48.99,
  //     img: lemonCake
  //   },
  //   {
  //     id: 'm10',
  //     name: 'Chocolate Cake',
  //     description: 'Cream Cheese Frosting!',
  //     price: 48.99,
  //     img: chocolateCake
  //   },
  //   {
  //     id: 'm11',
  //     name: 'Lemon Coconut Cake',
  //     description: 'Awesome One!',
  //     price: 68.99,
  //     img: lemonCoconutCake
  //   },
  //   {
  //     id: 'm12',
  //     name: 'Muffins',
  //     description: 'Added Bakery!',
  //     price: 10.99,
  //     img: chocolateWalnutCake
  //   },
  // ];

  const listData = products.map((cake) => (
    <BakeItem
      key={cake.id}
      id={cake.id}
      name={cake.name}
      description={cake.description}
      price={cake.price}
      cakeImage={cake.img}
    />
  ))

  return (
    <div className={classes.wrapper}>
      {
       listData 
      }
    </div>
  );
};

export default AvailableCakes;
