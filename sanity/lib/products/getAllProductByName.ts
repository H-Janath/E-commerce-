import { defineQuery } from "next-sanity";
import { sanityFetch } from "../live";

export const searchProductsByName = async (searchParams: string) => {
    // Define the Sanity query to search for products by name
    const PRODUCT_SEARCH_QUERY = defineQuery(`
        *[
            _type == "product"
            && name match $searchParam
        ] | order(name asc)
    `);

    try {
        // Fetch data from Sanity using the defined query
        const products = await sanityFetch({
            query: PRODUCT_SEARCH_QUERY,
            params: {
                searchParam: `${searchParams}*`, // Wildcard for partial matches
            },
        });

        // Return fetched data or an empty array if no data is found
        return products?.data || [];
    } catch (error) {
        // Log the error for debugging purposes
        console.error("Error fetching products by name: ", error);
        return [];
    }
};
