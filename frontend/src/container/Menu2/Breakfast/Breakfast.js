import React from "react";

import "./Breakfast.css";
import ListItem from "../../../components/ListItem/ListItem";
import images from "../../../constants/images";

const menuDataLeft = [
  {
    title: "Home Cut Fries",
    description: `Our Home cut fries seasoned with our Lil Greek Seasoning`,
    price: "5.50",
  },
  {
    title: "**Greek Fries**",
    description: `Our home cut Fries mixed with feta, oregano, a splash of Greek dressing and our Lil Greek Seasoning`,
    price: "6.50",
  },
  {
      title: "Spanakopita",
      description: `Fresh Spinach pie made with phyllo dough and stuffed with spinach and feta (made to order)`,
      price: "5.50",
    },
    {
      title: "Fried Greek Calamari Rings",
      description: `Our Greek Calamari rings mixed in with a splash of our own seasonings and our Lil Greek Dressing with slices of lemon.`,
      price: "8",
    },
  // {
  //   title: "Hot Side",
  //   description: `Green beans, Greek Potato’s, Greek Lemon Rice, or Freshly Baked Carrots`,
  //   price: "5.95",
  // },
  {
    title: "Lil' Greek Salad",
    description: `Homemade Greek salad with tomato,  sliced red onion,  sliced cucumber, Kalamata olives, feta, mixed in our homemade Greek dressing`,
    price: "5",
  },
  {
    title: "Side of Greek Lemon Rice",
    description: `Our homemade Greek Lemon rice squeezed with fresh Lemon to top it off and our fresh seasonings mixed in`,
    price: "3",
  },
];

const menuDataRight = [
  {
    title: "Freshly Made Hummus w/ Cut Pita 's",
    description: `Our Freshly made Hummus with a side of our warm mini Pita's `,
    price: "6",
  },
  {
    title: "Greek Dolmades",
    description: ` 5 Grape leaves wrapped with a delicious herb rice and a squeeze of lemon and cut lemon on the side`,
    price: "5",
  },
  {
    title: "Homemade Avgolemono Soup",
    description: `Our Homemade Avgo soup made fresh`,
    price: "6.5",
  },
  {
    title: "Falafel W/ Sauce",
    description: `Our Falafel is all veggie and comes with a side of sauce of your choice`,
    price: "6",
  },
  {
    title: "Greek Lemon Potato's",
    description: `Our Home cut Lil' Greek Potato's seasoned and baked fresh in our Lil Greek Kitchen`,
    price: "6",
  },
  {
    title: "**Cheesy Baked Potato Soup**",
    description: `Our Cheesy Baked Potato Soup`,
    price: "6",
  },

];

const Breakfast = () => {
  return (
    <div className="container breakfast">
      <h1 className="heading-secondary">
        <span>Starters</span>
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
