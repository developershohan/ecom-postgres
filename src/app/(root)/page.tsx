import ProductList from "@/components/ui/shared/product/product-list";
import sampleProducts from "@/db/sample-data";


export const metadata = {
  title: "Home",
};

export default function Home() {


  return (
    <>
      <ProductList title={"Product List"} data={sampleProducts.products} limit={4} />
    </>
  );
}
