import { shoe8 } from "../assets/images";
import Button from "../components/Button";
const SuperQuality = () => {
  return (
    <div
      id="about-us"
      className="flex justify-between items-center max-lg:flex-col gap-10 max-container w-full"
    >
      <div className="flex flex-1 flex-col">
        <h2 className="text-4xl font-palanquin font-bold lg:max-w-lg">
          We Provide You <span className="text-coral-red">Super Quality</span>{" "}
          Shoes
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
        <div className="mt-11">
          <Button label="View Details" />
        </div>
      </div>
      <div className="flex flex-1 justify-center items-center">
        <img
          src={shoe8}
          alt="Super Quality"
          width={570}
          className="object-contain"
        />
      </div>
    </div>
  );
};

export default SuperQuality;
