import React from "react";
import ListItem from "../../../components/ListItem/ListItem";
import "./MenuOfTheDay.css";
import images from "../../../constants/images";

const menuData = [
  {
    title: "Greek Gyro",
    description: "fries, tomato, onion, and our fresh choice of protein in a warm pita and a side of our tzatziki and hummus sauces",
    price: 10.25,
  },
  {
    title: "Gyro Bowl",
    description: `B.Y.0 Bowl with our homemade Greek lemon rice or fresh greens, choice of protein, Greek salad, feta, Kalamata olives, Warm pitas, and choice of sauces`,
    price: 13.55,
  },
  {
    title: "Gyro Fry Bowl",
    description: `Our Fresh cut fry's mixed with gyro, drizzled with tzatziki and sprinkled with feta and our fresh seasonings to top it off`,
    price: 9.55,
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
