import { CDN_URL } from "../utils/constant";

const ResCard = ({ resData }) => {
  const { name, cloudinaryImageId, cuisines, avgRating } =
    resData.card.card.info;
  const { deliveryTime } = resData.card.card.info.sla;

  return (
    <div className="res-card" style={{ color: "green" }}>
      <img
        className="res-logo"
        alt="res-log"
        src={CDN_URL + cloudinaryImageId}
      />
      <div>
        <h3>{name}</h3>
        <h4>{cuisines.join(",")}</h4>
        <h4>{avgRating} rating</h4>
        <h4>{deliveryTime}</h4>
      </div>
    </div>
  );
};

export default ResCard;
