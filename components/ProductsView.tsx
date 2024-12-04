import { Category, Product } from "@/sanity.types";
import ProductGrid from "./ProductGrid";


interface ProductsViewProps {
    products: Product[];
    categories: Category[];
}

function ProductsView  ({ products, categories }: ProductsViewProps)  {
    return (
        <div className="flex flex-col">
            <div className="w-full sm:w-[200px]">
               
            </div><hr />
            <div className="flex-1">
                <ProductGrid products={products} />
                
            </div>
        </div>
    );
};

export default ProductsView;
