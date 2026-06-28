import { auth } from "@/auth";

const ShopPage = async () => {
  const session = await auth();

  return (
    <div>
      <h1>Shop</h1>

      <p>{session?.user?.email}</p>
    </div>
  );
};
export default ShopPage;