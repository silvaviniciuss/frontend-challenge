"use client"
import { FilterType } from "@/types/filter-types";
import { OrganizeType } from "@/types/organize-type";
import { ReactNode, createContext, useState } from "react";

export const FilterContext = createContext({
    search: '',
    page: 0,
    type: FilterType.ALL,
    organize: OrganizeType.NEWS,
    setOrganize: (value: OrganizeType) => { },
    setSearch: (value: string) => { },
    setPage: (value: number) => { },
    setType: (value: FilterType) => { },
})

interface ProviderProps {
    children: ReactNode
}

export function FilterContextProvider({ children }: ProviderProps) {
    const [search, setSearch] = useState('')
    const [page, setPage] = useState(0)
    const [type, setType] = useState(FilterType.ALL)
    const [organize, setOrganize] = useState(OrganizeType.POPULARITY)

    return (
        <FilterContext.Provider value={
            { search, setSearch, page, setPage, type, setType, organize, setOrganize }
        }>
            {children}
        </FilterContext.Provider>
    )
}
