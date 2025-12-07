import React from "react";
import DishCard from "../Dishcard/DishCard";
import "./DishGrid.css";

const DishGrid = ({ dishes }) => {
  return (
    <div className="menu-grid">
      {dishes.map((dish) => (
        <DishCard
          key={dish.id}
          image={dish.image}
          title={dish.title}
          description={dish.description}
          price={dish.price}
        />
      ))}
    </div>
  );
};

export default DishGrid;
