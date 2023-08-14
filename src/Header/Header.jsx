import { Text, Flex, IconButton } from '@chakra-ui/react';
import { ArrowBackIcon } from '@chakra-ui/icons';

export default function Header() {

    return(
            <Flex 
            align='center' 
            w='100%' 
            h='9vh' 
            px='2vw'
            top='0'
            left='0'
            gap='2vw'
            borderBottom='solid gray 1px'
            sx={{zIndex : 10}} >
                <IconButton 
                    colorScheme='#353333'
                    icon={<ArrowBackIcon boxSize={7}/>} />
                <Text
                fontSize={'xl'}
                textColor={'white'}
                fontWeight={600}
                >Play</Text>
            </Flex>
    )
}