import Header from '../Header/Header'
import { useState } from 'react'
import { Box, Text, Input, Grid, GridItem, Flex, Button, Image } from '@chakra-ui/react'
import { useFetch } from '../customHooks';

function Title(){
    return(
        <Box
            mb='2vh'
            >
            <Text
            my='1vh'
                textColor='white'
                fontSize={['18px', '24px']}
                fontWeight='semibold'
                >
                Title
            </Text>
            <Input
                textColor='white'
                placeholder='Input your Video Title'
                _placeholder={{textColor : 'gray'}}
                />
        </Box>
    )
}
export function Url(){
    return(
        <Box
            mb='2vh'
            >
            <Text
                textColor='white'
                fontSize={['18px', '24px']}
                fontWeight='semibold'
                >
                URL
            </Text>
            <Input 
                textColor='white'
                placeholder='Use Youtube URL Only!'
                _placeholder={{textColor : 'gray'}}
                />
        </Box>
    )
}

function AttachedProducts(){
    const {data : products, error} = useFetch('/api/products');
    const [products, setProducts] = useState([]);
    
   if(!error) { 
        const list = products?.data?.map(e => {

            return(
                <GridItem 
                    display='flex'
                    gap='1vw'
                    alignItems='center'
                    bg={ e.isClicked? 'white' : 'none'}
                    border='solid 1px white'
                    p='1vw'
                    borderRadius='5px'
                    colSpan={2}
                    key={e.id}
                    onClick={()=> {}}
                        >
                    <Image 
                        borderRadius='5px'
                        h={['10vw', '10vw', '5vw',]}
                        w={['10vw', '10vw', '5vw',]}
                        src={data[e].url} />
                    <Text
                        fontWeight='semibold'
                        fontSize='18px'
                        textColor={data[e].isClicked? 'black' : 'white'}
                        >{data[e].name}</Text>
                </GridItem>
            )
        });

        return(
            <Box
                mb='2vh'
                >
                <Text
                    textColor='white'
                    fontSize={['18px', '24px']}
                    fontWeight='semibold'
                    >
                    Attached Products
                </Text>
                <Grid
                    maxH='25vh'
                    border= 'solid 1px white'
                    borderRadius='10px'
                    gap='2vw'
                    p='2vw 2vw'
                    overflowX='scroll'
                    templateColumns={['repeat(4, 1fr)', 'repeat(4, 1fr)', 'repeat(6, 1fr)', 'repeat(8   , 1fr)']}
                    >
                        {list}  
                </Grid>
            </Box>
        )
    }
}

export function FormButtons(){

    return(
        <Box
            display='flex'
            justifyContent='end'
            gap='1vw'
            >
            <Button 
                variant='outline'
                // bg='white' 
                textColor='white'
                size='sm'
                fontSize='18px'
                fontWeight='600'
                _hover={{bg: 'black', textColor: 'white'}}
                >Cancel</Button>
            <Button 
                bg='white' 
                textColor='black'
                size='sm'
                fontSize='18px'
                fontWeight='600'
                _hover={{bg: 'black', textColor: 'white'}}
                >Confirm</Button>
        
        </Box>
    )
}

export default function AddVideo() {

    return(
        <Flex
            justify='center'
            >
            <Grid
                mt='10vh'
                w='90vw'
                bg='#353333'
                templateColumns='repeat(1, 1fr)'
                borderRadius='10'
                >
                <GridItem
                    colSpan='1'
                    gap='1vw'
                    p='2vw 2vw'

                    >
                    <Header />
                    <Title />
                    <Url />
                    <AttachedProducts />
                    <FormButtons />
                </GridItem>
            </Grid>
        </Flex>        
    )
}