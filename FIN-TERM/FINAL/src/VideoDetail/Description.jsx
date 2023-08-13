import { Box, Heading, Text } from '@chakra-ui/react'

export default function Description(){
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
            <Box>
                <Text
                    textColor='white'
                    fontSize={['12px', '14px']}
                >{"Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of de Finibus Bonorum et Malorum"}</Text>
            </Box>
        </Box>
    )
}