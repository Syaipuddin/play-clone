import Header from '../Header/Header'
import { Box, Text, Input, Grid, GridItem, Flex, InputGroup, InputLeftAddon, Image} from '@chakra-ui/react'
import { FormButtons, Url } from './AddVideo'
import '../main.css'


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
function Price(){

    return(
        <Box
            mb='2vh'
            >
            <Text
                textColor='white'
                fontSize={['18px', '24px']}
                fontWeight='semibold'
                >
                Price
            </Text>
            <InputGroup>
                <InputLeftAddon 
                    bg='transparent'
                    textColor='white'
                    children='Rp' />
                <Input 
                    textColor='white'
                    placeholder='Example : 7000'
                    _placeholder={{textColor : 'gray'}}
                    />
            </InputGroup>
        </Box>
    )
}

function FileInput(){

    return(
        <Box
        textColor='white'
        fontSize={['18px', '24px']}
        fontWeight='semibold'
            >
            <Text>Upload Thumbnail</Text>
            <label 
                id='file-form'
                htmlFor='prod-thumb'>
                    <Image 
                        src='/addPhoto.svg'
                        sx={{filter: 'invert(100%) sepia(4%) saturate(157%) hue-rotate(349deg) brightness(117%) contrast(100%)'}} />
                </label>
            <input type='file' id='prod-thumb' />
        </Box>
    )
}


export default function AddProduct() {
    const [body, setBody] = useState({
        title : '',
        price : '',
        url : '',
        
    })

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
                    <Title setTitle={setTitle}/>
                    <Price />
                    <Url />
                    <FileInput />
                    <FormButtons />
                </GridItem>
            </Grid>
        </Flex>        
    )
}