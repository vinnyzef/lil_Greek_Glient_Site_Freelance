import React from "react";
import "./Beverages.css";
import ListItem from "../../../components/ListItem/ListItem";

const menuDataLeft = [
  {
    title: "Pepsi",
    price: 1.5,
  },
  {
    title: "Diet Pepsi",
    price: 1.5,
  },


];

const menuDataMiddle = [
  {
    title: "Mountain Dew",
    price: 1.5,
  },
   {
    title: "Sprite",
    price: 1.5,
  },
];

const menuDataRight = [

  {
    title: "Bottled Water",
    price: 1.5,
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
