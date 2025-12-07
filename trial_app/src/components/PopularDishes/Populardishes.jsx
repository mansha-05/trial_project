import DishCard from '../Dishcard/DishCard'
import './PopularDishes.css'
import onionPizza from '../../assets/images/dishes/onion-pizza.webp'
import paneerParatha from '../../assets/images/dishes/paneerParatha.jpg'
import biryani from '../../assets/images/dishes/biryani.jpg'
import chocoLava from '../../assets/images/dishes/chocoLava.webp'
import { useNavigate } from 'react-router-dom'

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

function PopularDishes(){
  const navigate = useNavigate()
    return(
        <div className="top">
            <div className="pill-tag-container">
            <div className="pill-tag" style={{justifyItems: "center"}}>Customer Favorites</div>
            </div>
            <h2 className='heading'>Popular Dishes</h2>
            <div className="popular-container">
            {dishes.map((dish,index) => (
                <DishCard
                key={index}
                title={dish.title}
                price={dish.price}
                description={dish.description}
                image={dish.image}
                />
            ))}
            </div>
            <div className="button">
            <button className="btn mt-4" onClick={()=> navigate("/menu")}>View Full Menu</button>
            </div> 
        </div>
    )
}

export default PopularDishes;