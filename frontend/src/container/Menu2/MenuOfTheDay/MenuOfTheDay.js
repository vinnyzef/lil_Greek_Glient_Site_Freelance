import React from "react";
import ListItem from "../../../components/ListItem/ListItem";
import "./MenuOfTheDay.css";
import images from "../../../constants/images";

const menuData = [
  {
    title: "Greek Gyro",
    description: "fries, tzatziki, tomato, onion, and our fresh choice of protein in a 6-inch pita",
    price: 10.00,
  },
  {
    title: "Gyro Bowl",
    description: `B.Y.0 Bowl with our homemade Greek lemon rice or fresh greens, choice of protein, Greek salad, feta,
    fries, Kalamata olives, Warm pitas, and two sauces`,
    price: 15.55,
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
