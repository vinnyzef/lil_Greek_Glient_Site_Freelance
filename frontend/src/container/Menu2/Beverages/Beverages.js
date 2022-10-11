import React from "react";
import "./Beverages.css";
import ListItem from "../../../components/ListItem/ListItem";
import images from "../../../constants/images";

const menuDataLeft = [
  {
    title: "Pepsi",
    price: 2.25,
  },
  {
    title: "Diet Pepsi",
    price: 2.25,
  },


];

const menuDataMiddle = [
  {
    title: "Mountain Dew",
    price: 2.25,
  },
   {
    title: "Sprite",
    price: 2.25,
  },
];

const menuDataRight = [

  {
    title: "Bottled Water",
    price: 2.00,
  },
 

];

const Beverages = () => {
  return (
    <div className="section">
      <div className="container beverages">
        <h1 className="heading-secondary">
        Canned<span> Beverages</span>
        </h1>

        <div className="grid-container">
          <div>
            {menuDataLeft.map((data, i) => (
              <ListItem
                key={i}
                title={data.title}
                description={data.description}
                price={data.price}
              />
            ))}
          </div>

          <div>
            {menuDataMiddle.map((data, i) => (
              <ListItem
                key={i}
                title={data.title}
                description={data.description}
                price={data.price}
              />
            ))}
          </div>

          <div>
            {menuDataRight.map((data, i) => (
              <ListItem
                key={i}
                title={data.title}
                description={data.description}
                price={data.price}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Beverages;
