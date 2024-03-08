import { star } from "../assets/icons";

const ReviewCard = ({ imgURL, customerName, feedback, rating }) => {
  return (
    <div className="flex flex-col items-center">
      <img
        src={imgURL}
        alt="Feedback"
        className="rounded-full w-[120px] h-[120px] object-cover"
      />
      <p className="mt-6 max-w-sm text-center info-text">{feedback}</p>
      <div className="mt-4 flex gap-4">
        <img src={star} alt="Star" /> <p className="info-text">({rating})</p>
      </div>
      <p className="text-3xl font-palanquin font-bold">{customerName}</p>
    </div>
  );
};

export default ReviewCard;
