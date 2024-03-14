import { Product } from "./product"

export interface ProductsFetcher {
    data: {
        allProducts: Product[]
    }
}