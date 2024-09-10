import { CDN_URL } from "../utils/constant";

const ResCard = ({ resData }) => {
  const { name, cloudinaryImageId, cuisines, avgRating } = resData.info;
  const { deliveryTime } = resData.info.sla;

  return (
    <div
      className="m-4 p-4 w-56 border border-black bg-gray-200 hover:scale-105 duration-300 overflow-hidden rounded-md cursor-pointer"
      style={{ color: "green" }}
    >
      <img
        className="rounded-md w-full h-40"
        alt="res-log"
        src={CDN_URL + cloudinaryImageId}
      />
      <div>
        <h3 className="font-bold">Name : {name}</h3>
        <h4 className="line-clamp-2">Cuisines : {cuisines.join(",")}</h4>
        <h4>rating : {avgRating} </h4>
        <h4 className="text-red-500">Delivery Time : {deliveryTime} minutes</h4>
      </div>
    </div>
  );
};

//higer order component
//input - RestaurantCard => RestaurantCardPromoted

export const withPromotedLabel = (ResCard) => {
  return (props) => {
    return (
      <div>
        <label>Promoted</label>
        <ResCard {...props} />
      </div>
    );
  };
};
export default ResCard;
