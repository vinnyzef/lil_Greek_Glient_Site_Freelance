import React from "react";

import "./CoffeeSelection.css";
import images from "../../../constants/images";

import ListItem from "../../../components/ListItem/ListItem";



const menuDataRight = [
  {
    title: "**B.Y.O Pita**",
    description: "Build your own pita- Comes in a 7 inch warm pita with your choice of protein, (Gyro cut off the spit, Fresh chicken gyro cut off the spit, Greek Grilled Chicken, or Falafel,) pick your cold toppings and sauce also.",
    price: 14,
  },
  {
    title: "**Greek Traditional Gyro**",
    description: "Our Greek Gyro Pita comes with Home Cut Fries,  Fresh cut off the spit Gyro, homemade tzatziki, tomato, red onion all wrapped in a 7 inch warm pita",
    price: 14,
  },
  {
    title: "Greek Pita Options",
    description: `Choose from our multiple tasty pita options (*PRICES MAY VARY*):
                  Greek Grilled Chicken Pita, Greek Falafel Pita, Greek Chicken Gyro Pita, Greek Shrimp Pita, Traditional Gyro Pita, Grilled Chicken Pita, Chicken Gyro Pita, Falafel Pita`,
    price: 11.50,
  },
  {
    title: "**The Gyro Plate**",
    description: `Our Gyro Plate comes with your choice of base,  our delicious Gyro cut right off the spit,  a side of our Home Cut Fries, Feta, Kalamata olives, Greek salad, a warm 7 inch pita and a side of Tzatziki`,
    price: 16.5,
  },
  {
    title: "Hamburger/Cheese Burger",
    description: `Our 8 oz Burger plain OR our 8 oz Burger with American Cheese for $.50 more!`,
    price: 10,
  },
  {
    title: "The Gyro Burger",
    description: `Our Gyro Burger comes with Our seasoned 8oz 100% beef patty, feta, , Onion, Tomato, Fresh Cut Gyro, homemade fries, and homemade Tzatziki sauce to top it off`,
    price: 14.5,
  },
  {
    title: "**Cheezy Burger**",
    description: `8oz All Beef Burger seasoned in Lil greek seasoning loaded with American Cheese, red onion, mustard, and Ketchup`,
    price: 11.5,
  },
  {
    title: "Chef's Burger of the Month",
    description: `Chef's Burger of February- Hearty Heat Burger: 8oz all beef patty with melted Pepper Jack Cheese,  Hot Giardiniera, and our Lil Spicy Sauce to top it off.`,
    price: 11.5,
  }
  // {
  //   title: "Toppings",
  //   description: `Kalamata olives, tomato, cucumber, Giardiniera, onion, banana peppers, garbanzo, red peppers, feta, spicy feta
  //   .55cents an extra topping`,
  //   price: .30,
  // },
  // {
  //   title: "Seasonings",
  //   description: `Oregano, pepper, Greek salt, parsley, rosemary and garlic salt, Lil Greek Seasoning, red pepper flakes`,
  //   price: 0,
  // },

];

const CoffeeSelection = () => {
  return (
    <div className="container coffee-selection">
      <h1 className="heading-secondary">
       Gyros, Pitas, <span>& Burgers!</span>
      </h1>

      <div className="grid-container">
        <div>
          <img src={images.threePitas}alt="greek gyro pitas" />
        </div>

        <div>
          {menuDataRight.map((data, i) => (
            <ListItem
              title={data.title}
              description={data.description}
              price={data.price}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CoffeeSelection;
