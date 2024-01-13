import { CDN_URL } from "../utils/constants";

const styleCard = {
    backgroundColor: "#f0f0f0",
  };

const RestaurantCard = (props) => {
    const { resData } = props;
    const {
      cloudinaryImageId,
      name,
      cuisines,
      avgRatingString,
      costForTwo,
      sla,
    } = resData?.info;
    return (
      <div className="res-card" style={styleCard}>
        <img
          className="res-logo"
          alt="res-logo"
          src={CDN_URL +
            cloudinaryImageId }
          style={{ width: "200px" }}
        />
        <h3>{name}</h3>
        <h4>{cuisines.join(", ")}</h4>
        <h4>{avgRatingString}</h4>
        <h4>{sla.slaString}</h4>
        <h4>{costForTwo}</h4>
      </div>
    );
  };

  export default RestaurantCard;