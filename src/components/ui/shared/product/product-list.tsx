
import { Button } from "@/components/ui/button";
import ProductCard from "./product-card";

const ProductList = ({
  data,
  title,
  limit,
}: {
  data: any;
  title?: string;
  limit?: number;
}) => {

  const products = limit ? data.slice(0, limit) : data;
 
  return (
    <section>
      <div className="flex items-center justify-between">
        <h2>{title}</h2>
        <Button variant="link">View All</Button>
      </div>
      <ul className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {products.length > 0 ? products.map((product: any) => (
          <ProductCard key={product.name} product={product} />
        )) : <p>No products found</p>}
      </ul>
    </section>
  );
};

export default ProductList;