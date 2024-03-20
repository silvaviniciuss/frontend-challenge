import { FilterType } from "@/types/filter-types";
import { OrganizeType } from "@/types/organize-type";

export function getCategoryByType (type: FilterType) {
    switch (type) {
        case FilterType.MUG:
            return "mugs"
        case FilterType.SHIRT:
            return "t-shirts"
        default:
            return ""
    }
    
}

export function getFieldByOrganize(organize: OrganizeType) {
    switch(organize) {
        case OrganizeType.NEWS:
            return {field: "created_at", order: "ASC"}
        case OrganizeType.BIGGEST_PRICE:
            return {field: "price_in_cents", order: "ASC"}
        case OrganizeType.MINOR_PRICE:
            return {field: "price_in_cents", order: "DSC"}
        default:
            return {field: "sales", order: "ASC"}
    }
}

export const mountQuery = (type: FilterType, organize: OrganizeType) => {
    if (type === FilterType.ALL && organize === OrganizeType.POPULARITY) return `query {
        allProducts (sortField: "sales", sortOrder: "DSC") {
            id
            name
            price_in_cents
            image_url
        }
    }`
    const sortSettings = getFieldByOrganize(organize)
    const categoryFilter = getCategoryByType(type)
    return `query {
        allProducts (sortField: "${sortSettings.field}" , sortOrder: "${sortSettings.order}",${categoryFilter ? `filter: {category: "${categoryFilter}"}`: ''})
        {
            id
            name
            price_in_cents
            image_url
        }
    }`
}
