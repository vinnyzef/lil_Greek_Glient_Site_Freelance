import React from "react";
import ListItem from "../../../components/ListItem/ListItem";
import "./AddToCart.css";
import images from "../../../constants/images";

const menuDataLeft = [
  {
    title: "Tray of Grilled Steak",
    description: "",
    price: 69.55,
    img:null,
    },
  {
    title: "Tray of grilled chicken",
    description: "",
    price: 62.55,
    img:null,
  },
  {
    title: "Tray of Gyro",
    description: "",
    price: 56.55,
    img:null,
  },  
  {
    title: "Tray of Greek Potatoes",
    description: "",
    price: 56.55,
    img:null,
  },  
    {
    title: "Tray of Falafel",
    description: "",
    price: 51.55,
    img:null,
  }, 
  {
    title: "Tray of Greek Salad",
    description: "",
    price: 25.55,
    img:null,
    },
    
    {
    title: "Tray of Greek Lemon Rice",
    description: "",
    price: 22.55,
    img:null,
  },
  {
  title: "Tray of Pitas",
  description: "",
  price: 12.55,
  img:null,
  },

    {
      title: "Tray of Green Beans",
      description: "",
      price: 21.55,
      img:null,
      },
  {
    title: "Tray of Baklava",
    description: "",
    price: 51.55,
    img:null,
  },
  {
  title: "Tray of Spanakopita",
  description: "",
  price: 42.55,
  img:null,
},
  {
    title: "Tray of Rizogalo",
    description: "",
    price: 25.95,
    img:null,
  },
];

const menuDataRight = [
  {
    title: "Jug of Lemonade or Sweet/Unsweet Tea",
    description: "",
    price: 9.55,
    img:null,
  },
  {
    title: "Canned Beverages",
    description: "Pepsi, Diet Pepsi, Sierra Mist, Mt. Dew, Water...",
    price: 1.95,
    img:null,
  },
  {
    title: "Case of Canned Beverages (x25)",
    description: "",
    price: 30,
    img:null,
  },

];

const AddToCart = () => {
  return (
    <div className="container add-to-cart">
      <h1 className="heading-secondary">
        <span>Catering </span> Menu
      </h1>

      <div className="grid-container">
        <div>
          {menuDataLeft.map((data, i) => (
            <ListItem
              title={data.title}
              description={data.description}
              price={data.price}
              itemImage={data.img}
            />
          ))}
        </div>

        <div>
          {menuDataRight.map((data, i) => (
            <ListItem
              title={data.title}
              description={data.description}
              price={data.price}
              itemImage={data.img}
            />
          ))}
        </div>
      </div>

    </div>
  );
};

export default AddToCart;
