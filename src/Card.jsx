import image from "./assets/rome1.jpeg" 
import "./index.css"
function Card(){
    return(
      
       
      <div className="travel-card">
      <img src={image} alt="" />
      <div className="travel-details">
        <h3>place</h3>
        <p>price</p>
      </div>

      <div className="travel-days">
        <img src="public/travelicon.jpg" alt="" />
        <p>duration</p>
      </div>
    </div>
            
    );
}

export default Card
