import { useState } from "react";

export function useLocalStorage<T>(item: string) {
    const [value, setValue] = useState(JSON.parse(localStorage.getItem(item) ?? ''))

    // useEffect(()=>{
    //     if(typeof window === 'undefined') return;
    //     let value = localStorage.getItem(item)
    //     if(value) setValue(JSON.parse(value))
    // },[window])

    const updateLocalStorage = (newValue: T) => {
        setValue(newValue)
        localStorage.setItem(item, JSON.stringify(newValue))
    }

    return {
        value,
        updateLocalStorage
    }

}