import ProductList from "@/components/ui/shared/product/product-list";
import { getLatestProducts } from "@/lib/actions/product.action";

export const metadata = {
  title: "Home",
};

export default async function Home() {
  const products = await getLatestProducts();

  return (
    <>
      <br />
      <ProductList title={"Product List"} data={products} />
      <br />
    </>
  );
}
