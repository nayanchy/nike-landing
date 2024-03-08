import { star } from "../assets/icons";

const PopularProductCard = ({ price, imgURL, name }) => {
  return (
    <div className="rounded-xl ">
      <div className="flex flex-1 max-sm:w-full flex-col w-full">
        <img
          src={imgURL}
          alt="Shoe Thumbnail"
          width={127}
          height={103}
          className="w-[280px] h-[280px]"
        />
        <div className="mt-8 flex justify-start gap-2.5">
          <img src={star} alt="star" width={24} height={24} />
          <p className="text-xl font-montserrat text-slate-gray leading-normal">
            (4.5)
          </p>
        </div>
        <h3 className="mt-2 text-2xl font-palanquin leading-normal font-semibold">
          {name}
        </h3>
        <p className="mt-2 font-montserrat text-2xl text-coral-red">{price}</p>
      </div>
    </div>
  );
};

export default PopularProductCard;
