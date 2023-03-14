import React from "react";
import ListItem from "../../../components/ListItem/ListItem";
import "./MenuOfTheDay.css";
import images from "../../../constants/images";

const menuData = [
  {
    title: "B.Y.O Bowl",
    description: ` Our B.Y.0 Bowl  comes with your choice of base, choice of protein(Gyro off the spit, Chicken gyro, Greek Grilled chicken, or falafel), toppings, sauces, and seasonings.  Our B.Y.O. Bowl also comes with a Greek salad on the side,  a Warm 7 inch pita,  and a side of our homemade tzatziki.`,
    price: 13.5,
  },
  {
    title: "B.Y.O Pita",
    description: "Build your own pita- Comes in a 7 inch warm pita with your choice of protein, (Gyro cut off the spit, Fresh chicken gyro cut off the spit, Greek Grilled Chicken, or Falafel,) pick your cold toppings and sauce also.",
    price: 14,
  },
  {
    title: "The Gyro Plate",
    description: `Our Gyro Plate comes with your choice of base,  our delicious Gyro cut right off the spit,  a side of our Home Cut Fries, Feta, Kalamata olives, Greek salad, a warm 7 inch pita and a side of Tzatziki`,
    price: 16.5,
  },
];




const MenuOfTheDay = () => {
  return (
    <div className="section">
      <div className="container menu-of-the-day">
        <h1 className="heading-secondary">
          <span>Lil' Greek </span>Top Picks
        </h1>
        {menuData.map((data, i) => (
          <ListItem
            title={data.title}
            description={data.description}
            price={data.price}
            itemImage={data.img}
          />
        ))}
      </div>
    </div>
  );
};

export default MenuOfTheDay;
