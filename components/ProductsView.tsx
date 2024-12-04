import { Category, Product } from "@/sanity.types";

interface ProductViewProps {
    products: Product[];
    categories: Category[];
}

const ProductsView = ({ products }: ProductViewProps) => {
    return (
        <div className="flex flex-col">
            <div className="w-full sm:w-[200px]">
             
                {/* <CategorySelectorComponent categories={categories} /> */}
            </div>
            <div className="flex-1">
                <div>
                  
                    <ProductGrid products={products} />
                    <hr />
                </div>
            </div>
        </div>
    );
};

export default ProductsView;
