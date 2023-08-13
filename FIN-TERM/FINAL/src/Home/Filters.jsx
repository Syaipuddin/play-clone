import { List, ListItem, Box, Button } from "@chakra-ui/react"
import {useEffect, useState } from 'react'
import PropTypes from 'prop-types'

function InactiveFilter({name, onClick}) {
    return(
        <Button
        borderColor='#353333'
        textColor='#fff'
        variant='outline'
        _hover={{bg : '#353333'}}
        onClick={onClick}
        >
           {name}
        </Button>
    )
}

function ActiveFilter({name}) {

    return(
        <Button
        bg='#353333'
        textColor='#fff'
        variant='outline'
        >
            {name}
        </Button>
    )
}

export default function Filters() {

    const [filter, setFilter] = useState({
        f_1 : { id : 1, name: "All", isClicked : true},
        f_2 : { id : 2, name: "Trending", isClicked : false},
        f_3 : { id : 3, name: "Discount", isClicked : false}
    });


    useEffect(() => {



    }, [filter])

    const filterList = Object.keys(filter).map(e =>{
        return(
            <ListItem key={filter[e].id}>
                {filter[e].isClicked === true? 
                    <ActiveFilter 
                    name={filter[e].name}/> : 

                    <InactiveFilter 
                    name={filter[e].name} 
                    onClick={()=> {
                        setFilter({...filter, 
                                    f_1 : {...filter.f_1, isClicked : false},
                                    f_2 : {...filter.f_2, isClicked : false},
                                    f_3 : {...filter.f_3, isClicked : false},
                                    [e] : {...filter[e], isClicked:true},
                                });
                        console.log(filter);
                    }}/>
                    }
            </ListItem>
                
        )
    })
    return(
        <Box mt='15vh' mx='2vw'>
            <List display='flex' gap='12px'>
                {filterList}
            </List>
        </Box>
    )
}

InactiveFilter.propTypes = {
    name : PropTypes.string,
    onClick : PropTypes.func
}

ActiveFilter.propTypes = {
    name : PropTypes.string
}