import styled from "styled-components";
import { SearchLoupe } from "./search-loupe";
import { InputHTMLAttributes } from "react";

export const InputSearch = styled.input`
    width: 352px;
    padding: 10px 16px;
    border: none;
    border-radius: 8px;
    background-color: var(--background-color-input);
    font-family: inherit;
    font-size: 14px;
    font-weight: 400;
    line-height: 22px;
    color: var(--text-dark);
`

const InputContainer = styled.div`
    position: relative;
    width: 352px;

    svg {
        position: absolute;
        right: 20px;
        top: 50%;
        transform: translateY(-50%);
    }

`

interface InputProps extends InputHTMLAttributes<HTMLInputElement>{}

export function InputWithSearchLoupe ({placeholder}: InputProps) {
    return (
        <InputContainer>
            <InputSearch placeholder={placeholder}/>
            <SearchLoupe/>
        </InputContainer>
    )
}
