import ServiceCard from "../components/ServiceCard";
import { services } from "../constants";

const Service = () => {
  return (
    <div className="max-container flex flex-wrap gap-9 justify-center">
      {services.map(({ imgURL, label, subtext }) => (
        <ServiceCard
          key={label}
          label={label}
          subtext={subtext}
          imgURL={imgURL}
        />
      ))}
    </div>
  );
};

export default Service;
