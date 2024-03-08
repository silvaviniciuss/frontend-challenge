import { useLocalStorage } from "@/hooks/useLocalStorage";
import { ShoppingBag } from "./shopping-bag";
import styled from "styled-components";

const CartCount = styled.span`
    width: 17px;
    height: 17px;
    background-color: var(--delete-color);
    color: white;

    border-radius: 100%;
    padding: 0 5px;
    font-size: 10px;

    margin-left: -10px;
    
`

export function CartControl() {
    const { value } = useLocalStorage('cart-items')

    return (
        <div>
            <ShoppingBag />
            {value.length && <CartCount>{value.length}</CartCount>}
        </div>
    )
}