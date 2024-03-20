"use client"

import { FilterContextProvider } from "@/context/filter-context"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { ReactNode } from "react"
import { ThemeProvider } from "styled-components"

interface DefaultProps {
    children: ReactNode
}

const theme = {
    mobileBreakpoint: "605px",
    tabletBreakpoint: "768px",
    desktopBreakpoint: "1000px"
}

export function DefaultProviders({ children }: DefaultProps) {
    const client = new QueryClient()

    return (
        <QueryClientProvider client={client}>
            <FilterContextProvider>
                <ThemeProvider theme={theme}>
                    {children}
                </ThemeProvider>
            </FilterContextProvider>
        </QueryClientProvider>
    )
}

