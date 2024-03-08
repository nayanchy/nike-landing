import { arrowRight } from "../assets/icons";
import { offer } from "../assets/images";
import Button from "../components/Button";

const SpecialOffer = () => {
  return (
    <div className="flex justify-between items-center gap-10 max-container w-full max-xl:flex-col-reverse">
      <div className="flex-1">
        <img
          src={offer}
          alt="offer"
          width={773}
          className="w-full object-contain"
        />
      </div>
      <div className="flex flex-1 flex-col">
        <h2 className="text-4xl font-palanquin font-bold lg:max-w-lg">
          <span className="text-coral-red">Special</span> Offer
        </h2>
        <p className="mt-4 lg:max-w-lg info-text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore ipsa
          beatae minima non, sit illum quae totam hic quaerat distinctio iure ex
          possimus eveniet? Voluptate quod blanditiis vitae rem fuga.
        </p>
        <p className="mt-6 info-text lg:max-w-lg">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolor,
          voluptate consequatur voluptatum quo.
        </p>
        <div className="mt-11 flex gap-6 max-sm:gap-2 flex-wrap">
          <Button label="Shop Now" iconURL={arrowRight} />
          <Button label="Learn More" type="transparent" />
        </div>
      </div>
    </div>
  );
};

export default SpecialOffer;
