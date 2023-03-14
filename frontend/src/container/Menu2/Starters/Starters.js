import React from "react";

import "../CoffeeSelection/CoffeeSelection.css"
import images from "../../../constants/images";

import ListItem from "../../../components/ListItem/ListItem";



const menuDataRight = [
  {
    title: "Baklava",
    description: "Locally Made Baklava Drizzled with delicious honey and sprinkled with cinnamon sugar",
    price: 5.5,
  },
  {
    title: "**Homemade Rizogalo (The Best)**",
    description: "Our  Homemade Rizogalo ",
    price: 5.5,
  },


];

const Starters = () => {
  return (
    <div className="container coffee-selection">
      <h1 className="heading-secondary">
        <span>Desserts</span>
      </h1>

      <div className="grid-container">
        <div>
          <img src={images.bak}alt="greek gyro pitas" />
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

export default Starters;