import React from "react"
import './DishCard.css'
// import { useNavigate } from "react-router-dom";

function DishCard({ image, title, description, price }){
    // const navigate = useNavigate()
    return(
        <div className="card dish-card" style={{ width: "18rem "}}>
        <img src={image} className="card-img-top" alt={title} />
        <div className="card-body dish-card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            <span className="price-tag">Rs. {price}</span>
            <div className="button1">
            <button className="btn1 mt-4" >Add to Cart</button> {/* onClick={() => navigate("/menu")} */}
            </div>
        </div>
        </div>
    )
}

export default DishCard;