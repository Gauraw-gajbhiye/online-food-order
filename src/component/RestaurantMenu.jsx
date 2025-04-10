import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
function RestaurantMenu() {
  const { restId } = useParams();

  const resinfo = useRestaurantMenu(restId);
  if (resinfo === null) return <p>..loading</p>;

  const restaurantInfo = resinfo?.data?.cards?.[2]?.card?.card?.info;
  const { avgRating, name, cuisines, costForTwoMessage, totalRatingsString } =
    restaurantInfo;

  const itemCards =
    resinfo?.data?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.[1]
      ?.card?.card?.itemCards || [];

  console.log("itemCards", itemCards);
  console.log(
    "cards",
    resinfo?.data?.cards[4].groupedCard.cardGroupMap.REGULAR.cards[1]
  );

  return (
    <div>
      <h1>
        <b>{name}</b>
      </h1>
      <div>
        <h5>
          {avgRating}({totalRatingsString}) - {costForTwoMessage}
        </h5>
        <h6>{cuisines}</h6>
        <ul>
          {itemCards.length > 0 ? (
            itemCards.map((card) => (
              <li key={card.card.info.id}>{card?.card?.info?.name}</li>
            ))
          ) : (
            <p>Loading</p>
          )}
        </ul>
      </div>
    </div>
  );
}

export default RestaurantMenu;
