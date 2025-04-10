import { CDN_LINK } from "../utils/constant";

const RestaurantCard = ({ restData }) => {
  const { cloudinaryImageId, name, cuisines, avgRating, sla } =
    restData?.info || [];
  return (
    <div className="res-card">
      <img
        className="imgcard"
        src={`${CDN_LINK}${cloudinaryImageId}`}
        alt="res-logo"
      />
      <h5 className="prodt_name">{name}</h5>
      <h5 className="cuisine">{cuisines.join(", ")}</h5>
      <h5>{avgRating}</h5>
      <h5>{sla.slaString}</h5>
      {/* <h5 >{avgRating}</h5> */}
    </div>
  );
};
export default RestaurantCard;
