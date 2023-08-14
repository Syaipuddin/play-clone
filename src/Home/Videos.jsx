import { ViewIcon } from '@chakra-ui/icons'
import { useState } from 'react'
import { Box, Flex, GridItem, Text, SimpleGrid } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import { useFetch } from '../customHooks'

function MockVideo(){  
    const [arr] = useState([1,2,3,4,5,6])
    
    const mockVideo = arr.map(e => {
        return(
            <Box 
                bg='#353333'
                borderRadius='10px'
                key={e} 
                    >
                <GridItem 
                    as='button' 
                    height={['79vw','55vw', '40vw', '30vw']}
                    width={['45vw','30vw', '23vw', '15.5vw']}
                    borderRadius='10px'
                    display='flex'
                    flexDir='column'
                    justifyContent='space-between' >
                    </GridItem> 
            </Box>
        )
    })
 
    return(
        <>
            {mockVideo}
        </>
    )
}

export default function Videos(){
    const { data : videos, isLoading} = useFetch('/api/videos')

    let videoList = '';

    if(videos !== null){
        videoList = videos.data.map(e => {
            return(
                <Link 
                    key={e._id}
                    to={`/video-detail/${e._id}`}>
                    <GridItem 
                        as='button' 
                        height={['79vw','55vw', '40vw', '30vw']}
                        width={['45vw','30vw', '23vw', '15.5vw']}
                        borderRadius='10px'
                        display='flex'
                        flexDir='column'
                        justifyContent='space-between'
                        bgImage={e.thumb}>
                                <Box
                                display='flex'
                                alignSelf='end'
                                m='5px'
                                >
                                    {/* VIEW */}
                                    <Text
                                    color='white'
                                    fontSize='12px' 
                                    textAlign='center'>
                                        <ViewIcon 
                                            boxSize={3}
                                            mx='4px' />
                                        {e.view}
                                    </Text>
                                </Box>
                                <Box 
                                bgGradient='linear(360deg, #000 0%, rgba(0, 0, 0, 0.03) 100%)'
                                height={['17%','15%']}
                                width='100%'
                                padding='0% 4%'
                                borderBottomRadius='10px' >
                                    {/* TITLE */}
                                    <Text
                                    textColor='white'
                                    textAlign='start'
                                    fontSize='14px'
                                    noOfLines='2'
                                    >
                                        {e.title}
                                    </Text>
                                    {/* STORE */}
                                    <Text
                                    textColor='white'
                                    textAlign='start'
                                    fontSize='12px'
                                    fontWeight='light'
                                    >
                                        {e.store}
                                    </Text>
                                </Box>
                        </GridItem> 
                </Link>
            )
            }
        )
    }
    


    return(
        <Flex my='3vh' width='100vw' display='flex' justify='center'>
            <SimpleGrid columns={[2, 3, 4, 6]} spacing={2}>
                {isLoading? <MockVideo/> : videoList}
            </SimpleGrid>
        </Flex>
    )
}