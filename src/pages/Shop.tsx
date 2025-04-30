import t1 from "@/assets/images/t1.png";
import t2 from "@/assets/images/t2.png";
import t3 from "@/assets/images/t3.png";
import ProductCard from "@/components/productCard";

const products = [
  { id: 1, name: "T-Shirt", price: 20, image: t1 },
  { id: 2, name: "Jean", price: 40, image: t2 },
  { id: 3, name: "Jacket", price: 60, image: t3 },
];

function Shop() {
  return (
    <section className="flex grow bg-gray-100">
      <div className="container mx-auto">
        <div className="gird-cols-1 mt-2 grid gap-1.5 md:grid-cols-3">
          {products.map((product) => (
            <ProductCard {...product} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Shop;
