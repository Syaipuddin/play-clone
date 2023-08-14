import { Box, Flex, Heading, Image, Text, Show } from '@chakra-ui/react'
import PropTypes from 'prop-types'

function ActiveProduct({e, description, setDescription, index}){

    if(description !== null){
        return(
            <Box
                bg={ description?.location == index ? 'white' : 'none'} 
                border='solid white 1px'
                p={['2px', '2px', '2px', '5px 0.5vw']}
                w={['10vw', '10vw', '8vw', '100%']}
                h={['10vw', '10vw', '8vw', '4vw']}
                borderRadius='5px'
                display='flex'
                alignItems='center'
                justifyContent={['center', 'center', 'center', 'start']}
                gap='1vw'
                onClick={() => setDescription({location : `${index}` , desc : `${e.productId?.description}`})}
                    >
                
                <Image
                    src={e.productId.image}
                    w={['9vw', '9vw', '7vw', '3vw']}
                    h={['9vw', '9vw', '7vw','3vw']}
                    borderRadius='5px'
                />  
                <Show breakpoint='(min-width: 993px)'>
                    <Text
                        color= {description?.location == index ? 'black' : 'white'}
                        fontSize='12px'
                        fontWeight='bold'
                        >{e.productId.title}</Text>
                </Show>
            </Box>
        )
    }
}

function ProductList({data, description, setDescription}){
    

    if(data !== null){
        const lists = data.data?.products?.map(e => {
            const thisElement = (element) =>  element == e;
            const index = data?.data?.products.findIndex(thisElement);

            return(
             <Box key={e.productId._id} >
                     <ActiveProduct e={e} description={description} setDescription={setDescription} index={index} />
             </Box>
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

}

export default function Products({data, description, setDescription}){


    return(
        <Box
            bg='#353333'
            w={['90vw', '90vw', '100%', '100%']}
            h={['23.9%','23.9%','23.9%', '59vh', '29vw']}
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
            h='80%'
            >
                <ProductList 
                    data={data}
                    description={description}
                    setDescription={setDescription}/>
            </Flex>
        </Box>
    )
}

ActiveProduct.propTypes ={
    e : PropTypes.object,
    description : PropTypes.object,
    setDescription : PropTypes.func,
    index : PropTypes.number

}

ProductList.propTypes = {
    data : PropTypes.object,
    description : PropTypes.object,
    setDescription : PropTypes.func
}

Products.propTypes = {
    data : PropTypes.object,
    description : PropTypes.object,
    setDescription : PropTypes.func
}