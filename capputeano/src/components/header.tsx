"use client"

import styled from "styled-components"
import { Saira_Stencil_One } from "next/font/google";
import { InputWithSearchLoupe } from "./input-seach";
import { CartControl } from "./cart-control";

const sairaStencil = Saira_Stencil_One({ 
  weight: ['400'],
  subsets: ["latin"] 
});


interface HeaderProps {

}

const TagHeader = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px 160px;

    > div {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 24px;
    }

`
const Logo = styled.a`
    font-weight: 400;
    font-size: 40px;
    line-height: 150%;
    color: var(--logo-color);
`

export function Header (props: HeaderProps) {
    return(
        <TagHeader>
            <Logo className={sairaStencil.className}>capputeeno</Logo>
            <div>
                <InputWithSearchLoupe placeholder={"Procurando por algo específico?"}/>
                <CartControl/>
            </div>
        </TagHeader>
    )
}
