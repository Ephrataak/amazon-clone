import React from 'react'
import './Checkout.css'
import Subtotal from './../Subtotal/Subtotal';
import Checkoutproduct from './Checkoutproduct';
import { useStateValue } from './../../StateProvider';

function Checkout() {
  const [{ basket, user }, dispatch] = useStateValue();
  return (
    <div className="checkout">
      <div className="checkout__left">
        <img
          className="checkout__ad"
          src="https://images-na.ssl-images-amazon.com/images/G/01/DiscoTec/2022/BTSOTC/OTC/Billboard/Billboard_3000x336.jpg"
          alt=""
        />
        <div>
          <h3>Hello </h3>
          <h2 className="checkout__title">Your shopping Basket</h2>
          {basket.map((item) => (
            <Checkoutproduct
              id={item.id}
              title={item.title}
              image={item.image}
              price={item.price}
              rating={item.rating}
            />
           ))} 
        </div>
      </div>
      <div className="checkout__right">
        <Subtotal />
      </div>
    </div>
  );
}

export default Checkout