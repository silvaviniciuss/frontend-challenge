import styled from "styled-components"
import { ArrowIcon } from "./arrow-icon"
import { useState } from "react"
import { useFilter } from "@/hooks/useFilter"
import { OrganizeType } from "@/types/organize-type"

interface OrganizeByProps {

}

const OrganizeContainer = styled.div`
    display: flex;
    align-items: center;
    position: relative;

    button {
        border: none;
        background: transparent;
        cursor: pointer;
        font-family: inherit;
        color: var(--text-dark);
        font-weight: 400;
        font-size: 14px;
        line-height: 22px;

        display: flex;
        align-items: center;
        justify-content: center;

        svg {
            margin-left: 16px;
        }
    }
`

const OrganizeFilter = styled.ul`
    position: absolute;
    width: 176px;
    background: #FFFFFF;
    box-shadow: 0px 4px 12px rgba(0,0,0,.1);
    border-radius: 4px;
    padding: 12px 16px;

    list-style: none;

    top: 100%;

    li {
        color: var(--text-dark);
        font-weight: 400;
        font-size: 14px;
        line-height: 22px;
        cursor: pointer;
    }

    li:hover{
        font-weight:600;
    }

    li + li {
        margin-top: 4px;
    }
`

export function OrganizeBy(props: OrganizeByProps) {
    const [isOpen, setIsOpen] = useState(false)
    const { setOrganize} = useFilter()
    
    const handleOpen = () => {
        setIsOpen(!isOpen)
    }

    const handleupdateOrganize = (value: OrganizeType) => {
        setOrganize(value)
        setIsOpen(!isOpen)
    }

    return (
        <OrganizeContainer>
            <button onClick={handleOpen}>
                Organizar por
                <ArrowIcon />
            </button>
            {isOpen &&
            <OrganizeFilter>
                <li onClick={()=> handleupdateOrganize(OrganizeType.NEWS)}>Novidades</li>
                <li onClick={()=> handleupdateOrganize(OrganizeType.BIGGEST_PRICE)}>Preço: Maior - menor</li>
                <li onClick={()=> handleupdateOrganize(OrganizeType.MINOR_PRICE)}>Preço: Menor - maior</li>
                <li onClick={()=> handleupdateOrganize(OrganizeType.POPULARITY)}>Mais Vendidos</li>
            </OrganizeFilter>
            }
        </OrganizeContainer>
    )
}