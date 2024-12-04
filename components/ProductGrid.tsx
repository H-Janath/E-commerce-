import { Product } from "@/sanity.types";
import { AnimatePresence ,motion} from 'framer-motion'
function ProductGrid({ products }: { products: Product[] }) {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols4 gap-4">
            {products?.map((product) => {
                return (
                    <AnimatePresence>
                        <motion.div
                            layout
                            initial={{opacity: 0.2}}
                            animate={{opacity: 1}}
                            exit={{opacity: 0}}
                            className="flex justify-center"
                        >
                           <ProductThumb key={product._id} product={product} />
                        </motion.div>
                        
                    </AnimatePresence>
                )
            })}
        </div>
    )
}

export default ProductGrid;