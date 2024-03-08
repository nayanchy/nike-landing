import { useState } from "react";
import { arrowRight } from "../assets/icons";
import { bigShoe1 } from "../assets/images";
import Button from "../components/Button";
import ShoeCard from "../components/ShoeCard";
import { shoes, statistics } from "../constants";

const Hero = () => {
  const [heroImg, setHeroImg] = useState(bigShoe1);
  return (
    <section
      id="home"
      className="w-full flex xl:flex-row flex-col justify-center min-h-screen gap-10 max-container "
    >
      <div className="relative xl:w-2/5 flex flex-col justify-center items-start w-full max-xl:padding-x pt-28">
        <p className="text-xl font-montserrat text-coral-red">
          Our Summer collection
        </p>
        <h1 className="mt-10 font-palanquin text-8xl max-sm:text-[72px] max-sm:leading-[82px] font-bold">
          <span className="xl:bg-white xl:whitespace-nowrap relative z-10 pr-10">
            The New Arrival
          </span>
          <br />
          <span className="text-coral-red inline-block mt-3">Nike</span> Shoes
        </h1>
        <p className="font-montserrat text-slate-gray mt-6 leading-8 mb-14 sm:max-w-sm">
          Discover stylish Nike arrivals, quality, comfort and innovation for
          your active life.
        </p>
        <Button label="Shop Now" iconURL={arrowRight} />
        <div className="flex justify-start items-start flex-wrap w-full mt-20 gap-16">
          {statistics.map(({ value, label }, index) => (
            <div key={index}>
              <p className="font-palanquin font-bold text-4xl">{value}</p>
              <p className="leading-7 font-montserrat text-slate-gray">
                {label}
              </p>
            </div>
          ))}
        </div>
      </div>
      <div className="flex flex-1 justify-center items-center relative xl:min-h-screen max-xl:py-40 bg-primary bg-hero bg-center bg-cover">
        <img
          src={heroImg}
          alt="Shoe Collection"
          width={610}
          height={500}
          className="object-contian relative z-10"
        />
        <div className="flex sm:gap-6 gap-4 absolute -bottom-[10%] max-sm:px-6">
          {shoes.map((shoe, index) => (
            <div key={index}>
              <ShoeCard
                imgURL={shoe}
                changeBigShoeImg={() => {
                  setHeroImg(shoe.bigShoe);
                }}
                bigShoeImg={heroImg}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
