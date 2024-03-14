"use client"

import styled from "styled-components"
import { FilterByType } from "./filter-by-type"
import { OrganizeBy } from "./organize-by"

interface FilterBar {

}

const FilterContainer = styled.div`
    display: flex;
    width: 100%;
    align-items: start;
    justify-content: space-between;
`

export function FilterBar (props:FilterBar) {
    return (
        <FilterContainer>
            <FilterByType/>
            <OrganizeBy/>
        </FilterContainer>
    )
}

