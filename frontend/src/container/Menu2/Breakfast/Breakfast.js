import React from "react";

import "./Breakfast.css";
import ListItem from "../../../components/ListItem/ListItem";
import images from "../../../constants/images";

const menuDataLeft = [
  {
    title: "Fries",
    description: `with Greek sea salt`,
    price: "3.55",
  },
  {
    title: "Greek Fries",
    description: `Oregano, splash of Greek dressing, feta, Garlic salt, and squeeze of lemon`,
    price: "5.95",
  },
  {
    title: "Hot Sides",
    description: `Green beans/Greek Potato’s`,
    price: "5.95",
  },
  {
    title: "Greek Salad",
    description: `Homemade Greek salad with tomato, onion, cucumber, Kalamata olives, feta, mixed in our homemade Greek dressing`,
    price: "5.95",
  },

];

const menuDataRight = [
  {
    title: "Homemade Hummus with pita",
    description: ``,
    price: "6.95",
  },
  {
    title: "Imported Greek Dolmades",
    description: ``,
    price: "5.95",
  },
  {
    title: "Spanakopita",
    description: `Fresh Spinach pie made to order`,
    price: "5.95",
  },
  {
    title: "Locally made Baklava",
    description: ``,
    price: "5.95",
  },


];

const Breakfast = () => {
  return (
    <div className="container breakfast">
      <h1 className="heading-secondary">
        <span>Sides</span>
      </h1>

      <div className="grid-container">
        <div>
          {menuDataLeft.map((data, i) => (
            <ListItem
              title={data.title}
              description={data.description}
              price={data.price}
            />
          ))}
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

export default Breakfast;
