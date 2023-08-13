import { Box, Heading, Avatar, Text, Input, Image } from "@chakra-ui/react";

const comments = [
    {
        id : 2,
        name : 'Udinn',
        comment : 'Yoo this is GOOD!',
        avatar : 'https://picsum.photos/id/125/63'
    },
    {
        id : 3,
        name : 'Gekko',
        comment : 'They Shoot my Wingman!',
        avatar : 'https://picsum.photos/id/135/63'
    },
    {
        id : 4,
        name : 'Sage',
        comment : 'You will not kill My Ally!',
        avatar : 'https://picsum.photos/id/643/63'
    },
    {
        id : 5,
        name : 'Raze',
        comment : 'Fire in the HOLE!',
        avatar : 'https://picsum.photos/id/221/63'
    },
    
]

function CommentList(){

    const lists = comments.map(e => {
        return(
            <Box 
            key={e.id}
            display='flex'
            alignItems='center'
            gap='2vw'
            py='1vh'
            // my='1vw'
            borderBottom='solid #474646 1px'
            >
                <Avatar 
                    src={e.avatar}
                    name={e.name}
                    size={['sm', 'md', 'xs']}
                     />
                <Box
                    textColor='white'
                >
                    <Text
                        fontSize={['14px', '16px', '12px']}
                        fontWeight='bold'
                        >{e.name}</Text>
                    <Text
                        fontSize={['12px', '14px', '10px']}
                        >{e.comment}</Text>
                </Box>
            </Box>
        )
      }
    )

    return(
        <>
            {lists}
        </>
    )
}

export default function Comments() {
    return(
        <Box
            w={['90vw', '90vw', '100%']}
            h={['100%']}
            bg='#353333'
            borderRadius='5px'
            p={['2vh 5vw', '2vh 5vw', '2vh 2vw']}
            display='flex'
            flexDir='column'
            justifyContent='space-between'
            >
            <Heading
                fontSize='20px'
                textColor='white'
            >Comments</Heading>
            <Box
                my='2vw'
                h='100%'
                display='flex'
                flexDir='column'
                justifyContent='end'
                overflowY='scroll'
                sx={{
                    '&::-webkit-scrollbar' : {
                        display : 'none'
                    },
                    '&::-webkit-scrollbar-thumb' : {
                        borderRadius : '10px',
                        bg : '#636060'
                    }
                }}
            >
                <CommentList />
            </Box>
            <Box
                h='6vh'   
                bg='#636060'
                px={['2vw', '0.9vw']}
                borderRadius='5px'
                justifyContent='space-between'
                display='flex'
                flexDir='row'>
                <Input 
                    textColor='white'
                    border='none'
                    w='92%'
                    me='10px'
                    placeholder='Leave a Trace!'
                    _placeholder={{color : 'white', fontSize : '10px'}}
                    variant='unstyled' />
                <Box as='button'>
                    <Image 
                        textColor='white'
                        w={['6vw', '6vw', '3vw']}
                        src='/send.svg'
                        sx={{filter: 'invert(99%) sepia(0%) saturate(3079%) hue-rotate(295deg) brightness(127%) contrast(92%)'}} />
                </Box>
            </Box>
        </Box>
    )
}