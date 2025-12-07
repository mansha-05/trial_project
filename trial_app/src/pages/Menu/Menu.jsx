import React, { useState } from "react";
import SearchBar from "../../components/SearchBar/SearchBar"
import CategoryFilter from "../../components/CategoryFilter/CategoryFilter"
import DishGrid from "../../components/Dishgrid/Dishgrid";
import "./Menu.css";
import onionPizza from '../../assets/images/dishes/onion-pizza.webp'
import paneerParatha from '../../assets/images/dishes/paneerParatha.jpg'
import biryani from '../../assets/images/dishes/biryani.jpg'
import chocoLava from '../../assets/images/dishes/chocoLava.webp'

const Menu = () => {
  const dishes = [
    {
      title: "Onion Pizza",
      price: "499",
      description: "Classic pizza with fresh onion, mozzarella, basil, and tomato sauce.",
      image: onionPizza
    },
    {
      title: "Paneer Paratha",
      price: "79",
      description: "Paneer Paratha is an unleavened wheat flatbread stuffed with paneer aka Indian cottage cheese, spices and herbs.",
      image: paneerParatha
    },
    {
      title: "Biryani",
      price: "289",
      description: "A fragrant rice dish slow-cooked with aromatic spices, tender meat or vegetables, and saffron, served with rich flavors in every bite.",
      image: biryani
    },
    {
      title: "Chocolate Lava Cake",
      price: "99",
      description: "Warm chocolate cake with molten center, served with ice cream.",
      image: chocoLava
    }
  ];

  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredDishes = dishes.filter((dish) => {
    const matchSearch = dish.title.toLowerCase().includes(search.toLowerCase());
    const matchCategory =
      activeCategory === "All" || dish.category === activeCategory;

    return matchSearch && matchCategory;
  });

  return (
    <div className="menu-container">
      <h2 className="menu-title">Our Menu</h2>
      <p className="menu-subtitle">Browse our dishes</p>

      <SearchBar search={search} setSearch={setSearch} />

      <CategoryFilter
        activeCategory={activeCategory}
        setActiveCategory={setActiveCategory}
      />

      <DishGrid dishes={filteredDishes} />
    </div>
  );
};

export default Menu;

