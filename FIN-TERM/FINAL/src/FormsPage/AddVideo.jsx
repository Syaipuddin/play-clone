import Header from '../Header/Header'
import { useState } from 'react'
import { Box, Text, Input, Grid, GridItem, Flex, Button, Image } from '@chakra-ui/react'

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
    const [data, setData] = useState(
        {
           p_1 : {
                    id : 1,
                    name : `Product 1`,
                    isClicked : false,
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

    const list = Object.keys(data).map(e => {
        return(
            <GridItem 
                display='flex'
                gap='1vw'
                alignItems='center'
                bg={ data[e].isClicked? 'white' : 'none'}
                border='solid 1px white'
                p='1vw'
                borderRadius='5px'
                colSpan={2}
                key={data[e].id}
                onClick={()=> {
                    if(data[e].isClicked){
                        setData({...data, [e] : {...data[e], isClicked : false}})
                    } else {
                        setData({...data, [e] : {...data[e], isClicked : true}})
                    }
                }}
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