import ProductList from "@/components/ui/shared/product/product-list";
import { getLatestProducts } from "@/lib/actions/product.action";

export const metadata = {
  title: "Home",
};

export default async function Home() {
  const products = await getLatestProducts();

  return (
    <>
      <div className="wrapper px-4 py-8">
      <ProductList title={"Product List"} data={products} />
      </div>
    </>
  );
}
