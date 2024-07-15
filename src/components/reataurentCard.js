
import { COMMON_IMG_URL } from "./config"
const RestaurantCard = ({name , cuisines , lastMileTravel, cloudinaryImageId})=>{

    return (<div className = "card">
        <img src = {`${COMMON_IMG_URL}/${cloudinaryImageId}`}/>

<h3>{name}</h3> 
<h3>{cuisines.join(", ")}</h3>
<h3>{lastMileTravel}</h3>
</div>

)
    
}

export default RestaurantCard;