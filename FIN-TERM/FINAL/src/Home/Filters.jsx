import { Box, Button } from "@chakra-ui/react"
import {useEffect, useState } from 'react'

function InactiveFilter({onClick}) {
    return(
        <Button
        borderColor='#353333'
        textColor='#fff'
        variant='outline'
        _hover={{bg : '#353333'}}
        onClick={onClick}
        >
            Filter
        </Button>
    )
}

function ActiveFilter() {

    return(
        <Button
        bg='#353333'
        textColor='#fff'
        variant='outline'
        >
            Filter
        </Button>
    )
}

export default function Filters() {

    const [filter, setFilter] = useState({all : true, trend : false});
    const [clicked, setClicked] = useState(1);


    useEffect(() => {

        switch(clicked){
            case 1 :
                setFilter({...filter, all : true, trend : false});
                break;
    
            case 2 :
                setFilter({...filter, all : false, trend : true});
        }

    }, [filter, clicked])

    let data = for(let i = 0; i < 5; i++) {
        
    }

    return(
        <Box>
            { }
        </Box>
    )
}