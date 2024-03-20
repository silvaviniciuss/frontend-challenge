import styled from "styled-components";
import { SearchLoupe } from "./icons/search-loupe";
import { InputHTMLAttributes } from "react";

export const InputSearch = styled.input`
    width: 100%;
    padding: 10px 16px;
    border: none;
    border-radius: 8px;
    background-color: var(--background-color-input);
    font-family: inherit;
    font-size: 12px;
    font-weight: 400;
    line-height: 20px;
    color: var(--text-dark);

    @media (min-width: ${({theme}) => theme.desktopBreakpoint}) {
        font-size: 14px;
        line-height: 22px;
    }
`

const InputContainer = styled.div`
    position: relative;
    width: 250px;

    svg {
        position: absolute;
        right: 20px;
        top: 50%;
        transform: translateY(-50%);
    }

    @media (min-width: ${({theme}) => theme.desktopBreakpoint}) {
        width: 352px;
    }
`

interface InputProps extends InputHTMLAttributes<HTMLInputElement>{
    value: string,
    handleChange: (value: string) => void
}

export function InputWithSearchLoupe (props: InputProps) {
    return (
        <InputContainer>
            <InputSearch onChange={(e:any) => props.handleChange(e.target.value)} {...props}/>
            <SearchLoupe/>
        </InputContainer>
    )
}
