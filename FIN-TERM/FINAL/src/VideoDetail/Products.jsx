import { Box, Flex, Heading, Image, Text, Show } from '@chakra-ui/react'
import { useEffect, useState } from 'react'
import { usePrevious } from '../customHooks'
import PropTypes from 'prop-types'


function InactiveProduct({e, onClick}){
    return(
        <Box
            border={['solid #636060', 'solid #636060', 'solid #636060', 'none']}
            p={['2px', '2px', '2px', '5px 0.5vw']}
            w={['10vw', '10vw', '8vw', '100%']}
            h={['10vw', '10vw', '8vw', '4vw']}
            borderRadius='5px'
            onClick={onClick}
            display='flex'
            alignItems='center'
            justifyContent={['center', 'center', 'center', 'start']}
            gap='1vw'
            _hover={{ bg : '#484848', border : '#484848'}}
            >
            
            <Image
                w={['9vw', '9vw', '7vw', '3vw']}
                h={['9vw', '9vw', '7vw','3vw']}
                src={e.url}
                borderRadius='5px'
            />
            <Show breakpoint='(min-width: 993px)'>
                <Text
                    color= 'white'
                    fontSize='12px'
                    fontWeight='bold'
                    whiteSpace='nowrap'
                    >{e.name}</Text>
            </Show>
        </Box>
    )
}

function ActiveProduct({e}){
    return(
        <Box
            bg='white'
            p={['2px', '2px', '2px', '5px 0.5vw']}
            w={['10vw', '10vw', '8vw', '100%']}
            h={['10vw', '10vw', '8vw', '4vw']}
            borderRadius='5px'
            display='flex'
            alignItems='center'
            justifyContent={['center', 'center', 'center', 'start']}
            gap='1vw'>
                
            <Image
                src={e.url}
                w={['9vw', '9vw', '7vw', '3vw']}
                h={['9vw', '9vw', '7vw','3vw']}
                borderRadius='5px'
            />  
            <Show breakpoint='(min-width: 993px)'>
                <Text
                    color= 'Black'
                    fontSize='12px'
                    fontWeight='bold'
                    whiteSpace='nowrap'
                    >{e.name}</Text>
            </Show>
        </Box>
    )
}

function ProductList(){
    const [data, setData] = useState(
        {
           p_1 : {
                    id : 1,
                    name : `Product 1`,
                    isClicked : true,
                    url : `https://picsum.photos/id/1/64`
                 },
            p_2 : {
                    id : 2,
                    name : `Product 2`,
                    isClicked : false,
                    url : `https://picsum.photos/id/2/64`
                  },
            p_3 : {
                    id : 3,
                    name : `Product 3`,
                    isClicked : false,
                    url : `https://picsum.photos/id/3/64`
                   },
           p_4 : {
                    id : 4,
                    name : `Product 4`,
                    isClicked : false,
                    url : `https://picsum.photos/id/5/64`
                },
            p_5 :  {
                        id : 5,
                        name : `Product 5`,
                        isClicked : false,
                        url : `https://picsum.photos/id/5/64`
                    }
        }
    );
    const prevData = usePrevious({data});

    useEffect(() => {

    }, [data, prevData])

    const lists = Object.keys(data).map(e => {

       return(
        <>
            {data[e].isClicked? 
                <ActiveProduct 
                    key={data[e].id} 
                    e={data[e]} /> : 
                    <InactiveProduct 
                        key={data[e].id} 
                        e={data[e]}
                        onClick={() => setData(
                            data => {
                                const newData = {}
                                Object.keys(data).forEach(key => {
                                    newData[key] = {...data[key], isClicked : false}
                                })
                                newData[e] = {...data[e], isClicked : true}
                                return newData;
                            })
                         }/> }
        </>
            
       )
    })

    return(
        <Box
            w='100%'
            display='flex'
            flexDir={['row', 'row', 'row', 'column']}
            gap={['4vw', '4vw', '4vw', '1vw']}
            overflowX={['scroll', 'scroll', 'scroll', 'hidden']}
            overflowY={['hidden', 'hidden', 'hidden', 'scroll']}
            sx={{
                '&::-webkit-scrollbar' : {
                    bg : "#353333"
                },
                '&::-webkit-scrollbar-track' : {
                    bg : '#353333',
                    w : '1px'
                }
            }}
        >
            {lists}
        </Box>
    )
}

export default function Products(){

    return(
        <Box
            bg='#353333'
            w={['90vw', '90vw', '100%', '100%']}
            h={['23.9%','23.9%','23.9%', '100%']}
            px={['5vw', '5vw', '2vw']}
            py='1vh'
            mb={['2vw', '1vw']}
            borderRadius='5px'
            >
            
            <Heading
                textColor='white'
                fontSize='20px'
                >Products</Heading>
            <Flex 
            width='100%'
            h='100%'
            my='3vh'
            >
                <ProductList />
            </Flex>
        </Box>
    )
}

InactiveProduct.propTypes ={
    e : PropTypes.object,
    onClick : PropTypes.func
}

ActiveProduct.propTypes ={
    e : PropTypes.object
}