import React from "react";
import ListItem2 from "../../../components/ListItem2/ListItem2";
import "./PartyPack.scss";
import images from "../../../constants/images";

const menuDataLeft = [
  {
    title: "pita setup (kalamata olives, onion, tomato, feta, cucumber)",
    description: "",
    img:null,
    },
    {
        title: "One choice of base (Greek Lemon rice or Fresh Greens)",
        description: "",
        img:null,
        },
        {
            title: "Two choices of protein (Gyro, Chicken Gyro, Grilled chicken, Falafel,) or Steak for an extra +$1.95 per person",
            description: "",
            img:null,
            },

         
 
];

const menuDataRight = [

    {
        title: "One choice of side (Green Beans, Greek Potato’s, or Greek Salad)",
        description: "",
        img:null,
        },

        {
            title: "Two Homemade Sauces (Greek Dressing, Tzatziki, Hummus, Lil Spicy Greek sauce, garlic cream)",
            description: "",
            img:null,
            },
            {
              title: "*Utensils & Pitas Included*",
              description: "",
              img:null,
              },
            ]

const PartyPack = () => {
  return (
    <div className="container add-to-cart">

         <h1 className="heading-secondary">
        <span>Not So Lil' </span> Greek Party Pack
      </h1>

      <div className="grid-container">
        <div>
          {menuDataLeft.map((data, i) => (
            <ListItem2
              title={data.title}
              description={data.description}
              itemImage={data.img}
            />
          ))}
        </div>

        <div>
          {menuDataRight.map((data, i) => (
            <ListItem2
              title={data.title}
              description={data.description}
              itemImage={data.img}
            />
          ))}
        </div>
      </div>

    </div>
  );
};

export default PartyPack;
