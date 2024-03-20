import { ProductsFetcher } from "@/types/productsFetcher";
import {  mountQuery } from "@/utils/graphql-filters";
import { useQuery } from "@tanstack/react-query";
import axios, { AxiosPromise } from "axios";
import { useFilter } from "./useFilter";
import { useDeferredValue } from "react";

const API_URL = process.env.NEXT_PUBLIC_API as string
const fetcher = (query: string): AxiosPromise<ProductsFetcher> => {
    return axios.post(API_URL,
        { query })
}

export function useProducts() {
    const { type, organize, search } = useFilter()

    const searchDeferred = useDeferredValue(search)

    const query = mountQuery(type, organize)
    const { data } = useQuery({
        queryFn: () => fetcher(query),
        queryKey: ['products', type, organize]
    })

    const products = data?.data?.data?.allProducts

    const filteredProducts = products?.filter(product=>
        product.name.toLowerCase().includes(searchDeferred.toLowerCase())
    )

    return {
        data: filteredProducts
    }

}

