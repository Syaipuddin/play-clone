import { Box, Heading, Text } from '@chakra-ui/react'
import PropTypes from 'prop-types'

export default function Description({description}){
    return(
        <Box
            bg='#353333'
            w={['90vw', '90vw', '90vw', '100%']}
            h='100%'
            borderRadius='5px'
            p={['2vh 5vw', '2vh 5vw', '2vh 5vw', '2vh 2vw']}
            mb={['2vw', '1vw']}
            >
            <Heading
                fontSize='20px'
                textColor='white'
                mb='15px'
                >Product Description</Heading>
            <Box
                h='100%'
                w='100%'
                >
                <Text
                    textColor='white'
                    fontSize={['12px', '14px']}
                    noOfLines={4}
                >{description.desc}</Text>
            </Box>
        </Box>
    )
}

Description.propTypes = {
    description : PropTypes.object
}