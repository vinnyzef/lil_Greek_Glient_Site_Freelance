import React from "react";

import "./CoffeeSelection.css";
import images from "../../../constants/images";

import ListItem from "../../../components/ListItem/ListItem";



const menuDataRight = [
  {
    title: "Greek Gyro",
    description: "Fries, tzatziki, tomato, onion, and our fresh choice of protein in a pita",
    price: 10.55,
  },
  {
    title: "The Gyro Burger",
    description: "Our Gyro Burger comes with Our seasoned 8oz 100% beef patty, feta, Spring Mix, Onion, Tomato, Fresh Cut Gyro, homemade fries, and homemade Tzatziki sauce to top it off",
    price: 14.55,
  },
  {
    title: "Greek Pita",
    description: `B.Y.O Pita, Choice of one homemade sauce and three cold toppings (Protein options- gr.
      Chicken, Gyro, Falafel`,
    price: 9.55,
  },
  {
    title: "Gyro Bowl",
    description: `B.Y.0 Bowl with our homemade Greek lemon rice or fresh greens, choice of protein, Greek salad, feta,
    fries, Kalamata olives, Warm pitas, and two sauces`,
    price: 13.55,
  },
  {
    title: " Gyro Plate",
    description: `Plate with our homemade Greek rice or fresh greens, choice of protein, Greek salad, feta,
    fries, olives, Warm pitas, and two sauces`,
    price: 15.55,
  },
  {
    title: "Toppings",
    description: `Kalamata olives, tomato, cucumber, onion, banana peppers, garbanzo, red peppers, feta, spicy feta
    .55cents an extra topping`,
    price: .55,
  },
  {
    title: "Seasonings",
    description: `Oregano, pepper, Greek salt, parsley, rosemary and garlic salt`,
    price: 0,
  },

];

const CoffeeSelection = () => {
  return (
    <div className="container coffee-selection">
      <h1 className="heading-secondary">
        Main<span> Dishes</span>
      </h1>

      <div className="grid-container">
        <div>
          <img src={images.gyro}alt="coffee items" />
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
