import React from "react";
import "./CategoryFilter.css";

const categories = ["All", "Starters", "Desserts", "Burgers", "Pizza", "Pasta", "Steaks", "Sushi"];

const CategoryFilter = ({ activeCategory, setActiveCategory }) => {
  return (
    <div className="category-container">
      {categories.map((cat) => (
        <button
          key={cat}
          className={`category-btn ${activeCategory === cat ? "active" : ""}`}
          onClick={() => setActiveCategory(cat)}
        >
          {cat}
        </button>
      ))}
    </div>
  );
};

export default CategoryFilter;
