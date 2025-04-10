import React, { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import RestaurantCard from "./RestaurantCard";
import { Link } from "react-router-dom";

const Body = () => {
  const [listofrestaurant, setLitofRestaurant] = useState([]);
  console.log("lidt", listofrestaurant);

  const [filterData, setFilterData] = useState([]);
  console.log("filterdata", filterData);

  const [searchtext, setsearchText] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    // const data = await fetch('https://www.swiggy.com/dapi/restaurants/list/v5?lat=21.99740&lng=79.00110&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING')
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.0759837&lng=72.8776559&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    console.log("json js", json);

    setLitofRestaurant(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    // console.log("data", json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    console.log(
      "data",
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilterData(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setLoading(false);
  };

  if (loading) {
    return <Shimmer />;
  }
  return (
    <div className="main">
      <div className="search">
        <div className="search-input">
          <input
            placeholder="search"
            value={searchtext}
            onChange={(e) => setsearchText(e.target.value)}
          />
          <button
            onClick={() => {
              const filter = listofrestaurant.filter((filt) =>
                filt?.info?.name
                  .toLowerCase()
                  .includes(searchtext.toLowerCase())
              );
              // setLitofRestaurant(filter)
              setFilterData(filter);
              setsearchText("");
            }}
          >
            search
          </button>
        </div>
        <button
          className="filter-btn"
          onClick={() => {
            const filteredList = listofrestaurant.filter(
              (fil) => fil.info.avgRating > 4.5
            );
            // setLitofRestaurant(filteredList)
            setFilterData(filteredList);
          }}
        >
          Top Rated Restaurant
        </button>
      </div>
      <div className="res-container">
        {filterData.map((list) => (
          <Link to={`${/restaurants/}${list.info.id}`} key={list.info.id}>
            <RestaurantCard restData={list} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
