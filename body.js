    import React, { useState } from "react"; // Import React and useState
    import { restaurantList } from "./config"; // Import your restaurant data
    import RestaurantCard from "./reataurentCard"; // Corrected component name

    function filterData(searchTxt, restaurants) {
        const filteredData = restaurants.filter((restaurant) => {
            return restaurant.data.name.includes(searchTxt);
        });
        return filteredData;
    }

    export const Body = () => {
        const [inputTxt, setInputTxt] = useState("");
        const [restaurants, setRestaurants] = useState(restaurantList);


        return (
            <>
                <div>
                    <input
                        type="text"
                        placeholder=" Search by restaurant name..."
                        className="search-input"
                        value={inputTxt}
                        onChange={(event) => {
                            setInputTxt(event.target.value);
                        }}
                    />
                    <button
                        onClick={() => {
                            const data = filterData(inputTxt, restaurants);
                            setRestaurants(data);

                        }}


                    >
                        Search
                    </button>
                </div>

                <div className="restaurant-list">
                    {restaurants.map((restaurant) => (
                        <RestaurantCard key={restaurant.id} {...restaurant.data} />
                    ))}
                </div>
            </>
        );
    };
