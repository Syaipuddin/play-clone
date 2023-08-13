import { Box, Image } from '@chakra-ui/react'

export default function Video(){

    return(
        <Box
            w={['90vw', '90vw', '100%', '100%']}
            h={['50vw', '50vw', '74.8%', '100%']}
            borderRadius='5px'
            mt={['15vh', '15vh', '0']}
            mb={['2vw', '0.7vw']}
        >
            <Image
                src='https://picsum.photos/720'
                w='100%'
                h='100%'
                borderRadius='5px'
            />  
        </Box>
    )
}