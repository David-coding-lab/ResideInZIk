import { For, HStack, Skeleton } from '@chakra-ui/react'
import { useEffect, useState } from "react"

import FilterOption from './FilterOption'

// Towns Available Component Container
function FilterOptionContainer({fetchUrl, fetchingWhat}) {
    const [isCurrent, setIsCurrent] = useState('All')

    const [loading, setLoading] = useState(false)

    const fetchLimit = 8

    const [townsList, setTownsList] = useState([])

    // this fetched the towns available
    useEffect(() => {
        if (loading || fetchLimit === townsList.length) return; // ✅ Stop fetching if no more data or already loading

        fetchFilterOptions(setLoading, setTownsList, fetchUrl);
    }, []);

    return (
        <HStack
            width="100%"
            overflowX="auto"
            gap={{ base: "15px", sm: "20px" }}
            p="10px"
            css={{
                "&::-webkit-scrollbar": { height: "0" },
                "&::-webkit-scrollbar-thumb":
                    {   background: "rgba(61, 18, 135, 0.34)",
                        borderRadius: "3px"
                    },
            }}
        >
            {
                !loading ?
                    <For each={townsList}>
                    {(item, index)=> (
                        <FilterOption
                            subsequentPrice={fetchingWhat === 'prices' && item.subsiquentPrice}
                            filterOption ={fetchingWhat === 'locations'? item.location: item.price}
                            setIsCurrent={setIsCurrent}
                            isCurrent={isCurrent}
                            key={index}
                        />
                    )}
                </For> :
                (
                    <>
                        <For each={['', '', '', '']}>
                            {(item, index)=> (
                                <Skeleton
                                    w="100px" // Fixing the width
                                    h='45px'
                                    borderRadius="20px"
                                    zIndex='1'
                                    bgColor= 'rgba(61, 18, 135, 0.23)'
                                    key={index}
                                />
                            )}
                        </For>
                    </>
                )
            }
        </HStack>
    )
}

export default FilterOptionContainer



const fetchFilterOptions = async (setLoading, setTownsList, fetchUrl) => {
    setLoading(true)

    try {
        const response = await fetch(fetchUrl);
        if (!response.ok) {
            throw new Error(`HTTP Error! Status: ${response.status}`);
        }

        const data = await response.json();
        setTownsList(data)


    } catch (error) {
        console.error("Error fetching data:", error);

    } finally {
        setLoading(false);
    }

}