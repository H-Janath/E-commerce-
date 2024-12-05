import { Category, Product } from "@/sanity.types";
import ProductGrid from "./ProductGrid";


interface ProductsViewProps {
    products: Product[];
    categories: Category[];
}

function ProductsView({ products, categories }: ProductsViewProps) {
    return (
        <div className="flex flex-col">
            <div className="w-full sm:w-[200px] ">

            </div>
            <hr className="w-1/2 sm:w-3/4" />
            <div className="flex-1 mt-6">
                <ProductGrid products={products} />

            </div>
        </div>
    );
};

export default ProductsView;
