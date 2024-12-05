
import BlackFridayBanner from "@/components/BlackFridayBanner";
import ProductsView from "@/components/ProductsView";
import { getAllCategories } from "@/sanity/lib/products/getAllCategories";
import { getAllProducts } from "@/sanity/lib/products/getAllProduct";

export default async function Home() {

  const product = await getAllProducts();
  const categories = await getAllCategories();
  
  return (
    <div className="">
      <BlackFridayBanner/>
    <div className="min-h-screen bg-gray-100 p-4">
        <ProductsView products={product} categories={categories}/>
    </div>
    </div>
  );
}
