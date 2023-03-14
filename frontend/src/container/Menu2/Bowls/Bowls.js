import React from "react";

import "../Breakfast/Breakfast.css"
import ListItem from "../../../components/ListItem/ListItem";
import images from "../../../constants/images";

const menuDataLeft = [
    {
    title: "**B.Y.O Bowl**",
    description: ` Our B.Y.0 Bowl  comes with your choice of base, choice of protein(Gyro off the spit, Chicken gyro, Greek Grilled chicken, or falafel), toppings, sauces, and seasonings.  Our B.Y.O. Bowl also comes with a Greek salad on the side,  a Warm 7 inch pita,  and a side of our homemade tzatziki.`,
    price: 13.5,
  },
  {
      title: "Greek Bowl Options",
      description: `Choose from our multiple tasty bowl options (*PRICES MAY VARY*): 
     Gyro Fry Bowl, Traditional Gyro Rice Bowl, Chicken Gyro Rice Bowl, Falafel Rice Bowl, Greek Grilled Chicken Rice Bowl, Greek Shrimp Rice Bowl,
      Spicy Chicken Gyro Rice Bowl, Spicy Traditional Gyro Rice Bowl, Spicy Greek Grilled Chicken Rice Bowl, Greek Fried Calamri Rice Bowl
      `,
      price: "12.50",
    },

];

const menuDataRight = [
  {
    title: "Lil Greek B.Y.O Salad Bowl",
    description: `Our Build your own Salad bowl Comes with our fresh spring mix and a warm pita,. Your choice of protein, sauce, and toppings.`,
    price: 12.25,
  },
  {
    title: "Greek Salad Bowl Options",
    description: `Choose from our multiple tasty bowl options (*PRICES MAY VARY*):
    Traditional Gyro Salad Bowl, Greek Grilled Chicken Salad Bowl, Falafel Salad Bowl, Chicken Gyro Salad Bowl, Spicy Traditional Gyro Salad Bowl, Spicy Greek Grilled Chicken Salad Bowl, Spicy Chicken Gyro Salad Bowl`,
    price: 12.75,
  },


];

const Bowls = () => {
  return (
    <div className="container breakfast">
      <h1 className="heading-secondary">
        <span>Bowls</span>
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

export default Bowls;
