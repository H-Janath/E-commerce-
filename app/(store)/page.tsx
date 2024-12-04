import { getAllProducts } from "@/sanity/lib/products/getAllProduct";

export default async function Home() {

  const products = await getAllProducts();

  return (
    <div className="">
      {/* render all the products */}
    </div>
  );
}
