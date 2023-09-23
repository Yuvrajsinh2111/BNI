"use client";

import getAllMemberCard from '@/Utils/contentful'
import {
    createContext,
    FC,
    useEffect,
    useState,
} from 'react'

export const GlobalContext = createContext<any>({
    onBoardingModalData: [],
    onLoadMemberData: (searchText: string) => {
        /* This is intentional*/
    },
})

const GlobalProvider = ({ children }:any) => {
    const [onBoardingModalData, setOnBoardingModalData] = useState<any>([])
    const onLoadMemberData = async (searchText: string) => {
        try {
            const result = await getAllMemberCard(searchText);
            setOnBoardingModalData(result)
        } catch (error) {
            console.error(error)
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }


    return (
        <GlobalContext.Provider
            value={{
                onBoardingModalData,
                onLoadMemberData
            }}
        >
            {children}
        </GlobalContext.Provider>
    )
}

export default GlobalProvider