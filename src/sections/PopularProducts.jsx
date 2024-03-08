import PopularProductCard from "../components/PopularProductCard";
import { products } from "../constants";

const PopularProducts = () => {
  return (
    <div className="max-container max-sm:pt-12" id="products">
      <div className="flex flex-col justify-start gap-5">
        <h2 className="text-4xl font-palanquin font-bold">
          Our <span className="text-coral-red">Popular</span> Products
        </h2>
        <p className="font-montserrat text-slate-gray mt-6 leading-8 mb-14 lg:max-w-xl">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nobis
          nesciunt inventore tenetur nihil magnam laudantium, obcaecati
          laboriosam voluptatem deserunt reprehenderit suscipit non eveniet
          consequuntur dolorem modi molestias culpa at distinctio!
        </p>
        <div className="mt-16 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 sm:gap-4 gap-16">
          {products.map((product) => {
            return <PopularProductCard key={product.name} {...product} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default PopularProducts;
