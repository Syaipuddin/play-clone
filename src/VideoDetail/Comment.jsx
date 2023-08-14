import { Box, Heading, Avatar, Text, Input, Image, Button } from "@chakra-ui/react"
import { useEffect, useState, useRef } from "react"
import PropTypes from 'prop-types'



function CommentList({data}){
    const ref = useRef(null);

    useEffect(() => {
        if(data.length){
            ref.current?.scrollIntoView({
                behavior : "smooth",
                block : "end"
            })
        }
    })

    if(data !== null){
        const lists = data?.map(e => {
            return(
                <Box 
                key={e.commentId._id}
                display='flex'
                alignItems='center'
                gap='2vw'
                py='1vh'
                // my='1vw'
                borderBottom='solid #474646 1px'
                >
                    <Avatar 
                        src={e?.avatar}
                        name={e.commentId.username}
                        size={['sm', 'md', 'xs']}
                         />
                    <Box
                        textColor='white'
                    >
                        <Text
                            fontSize={['14px', '16px', '12px']}
                            fontWeight='bold'
                            >{e.commentId.username}</Text>
                        <Text
                            fontSize={['12px', '14px', '10px']}
                            >{e.commentId.comment}</Text>
                    </Box>
                </Box>
            )
          }
        )

        return(
            <Box
            h='100%'
            my='1vw'
            display='flex'
            flexDir='column'
            overflowY='scroll'
            sx={{
                '&::-webkit-scrollbar-thumb' : {
                    borderRadius : '10px',
                    bg : '#636060'
                }
            }}
                >
                {lists}
                <div ref={ref} />
            </Box >
        )
    }

   
}

function Loading(){
    
    return(
        <Box
            w={['90vw', '90vw', '100%']}
            h={['100%']}
            bg='#353333'
            borderRadius='5px'
            p={['2vh 5vw', '2vh 5vw', '2vh 2vw']}
            display='flex'
            flexDir='column'
            justifyContent='center'
            alignItems='center'
            gap='1vw'
            >
                 <Text
                    color='white'
                    >Loading</Text>
        </Box>
    )
}

function NameForm({setName}){
    const [form, setForm] = useState('');

    const handleSubmit = (e) => {

        e.preventDefault();
        setName(form);
    }


    return(
        <Box
            w={['90vw', '90vw', '100%']}
            h={['100%']}
            bg='#353333'
            borderRadius='5px'
            p={['2vh 5vw', '2vh 5vw', '2vh 2vw']}
            display='flex'
            flexDir='column'
            justifyContent='center'
            gap='1vw'
            >
                 <Text
                    color='white'
                    >Enter Your name</Text>
                <form onSubmit={handleSubmit}>
                    <Input
                        mb='1vw'
                        name="name"
                        textColor='white'
                        onChange={(e) => setForm(e.target.value)}
                        ></Input>
                    <Button
                        w='100%'
                        type="submit"
                        > Enter </Button>
                </form>
        </Box>
    )
}

function Comments({data, setComment, handleComment, isLoading}){


    if(!isLoading){
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

                        <CommentList data={data} />

                        <form onSubmit={(e) => handleComment(e)}>
                            <Box
                                h='6vh'   
                                bg='#636060'
                                px={['2vw', '0.9vw']}
                                borderRadius='5px'
                                 justifyContent='space-between'
                                 display='flex'
                                 flexDir='row'
                                >
                                <Input 
                                    name='comment'
                                    textColor='white'
                                    border='none' 
                                    w='92%'
                                    me='10px'
                                    placeholder='Leave a Trace!'
                                    _placeholder={{color : 'white', fontSize : '10px'}}
                                    variant='unstyled'
                                    onChange={(e) => setComment(e.target.value)} />
                                <Box as='button'>
                                    <Image 
                                        type='submit'
                                        textColor='white'
                                        w={['6vw', '6vw', '3vw']}
                                        src='/send.svg'
                                        sx={{filter: 'invert(99%) sepia(0%) saturate(3079%) hue-rotate(295deg) brightness(127%) contrast(92%)'}} />
                                </Box>
                            </Box>
                        </form>
            </Box>
        )
    } else {
        return (
            <>
                <Loading />
            </>
        )
    }
}

export default function CommentsTab({id}) {
    const [data, setData] = useState(null);
    const [name, setName] = useState(null);
    const [comment, setComment] = useState(null);
    const [body, setBody] = useState({
        videoId : '',
        username : '',
        comment : ''
    });

    const [isLoading, setIsLoading] = useState(true);

    const handleComment = async(e) => {
        
        e.preventDefault();
        setBody({...body, videoId : id, username : name, comment : comment})
        setComment('');
    }
        
    const dataFetch = async() => {
        setIsLoading(true);
        const response = await fetch(`/api/video/${id}`);
        if(response.ok) {
            const json = await response.json();
            setData(json?.data?.comments)
        }
        setIsLoading(false);
    }
   
    const commentUploader = async() => {
        setIsLoading(true);
        const response = await fetch(`/api/comment/add`, {
            'method' : 'POST',
            headers: {
                "Content-Type": "application/json",
              },
            body: JSON.stringify(body),
        });

        if(response.ok){
            console.log('sent');
        }
        dataFetch();
        setIsLoading(false);
    }

    useEffect(() => {

            dataFetch();

            if(name !== null && comment !== null){
                commentUploader();

            }

            
        
    }, [body])
    
    return(
        <>
            {name !== null ? <Comments data={data} handleComment={handleComment} setComment={setComment} isLoading={isLoading} /> : <NameForm  setName={setName} /> }
        </>
    )

 
}

CommentList.propTypes = {
    data : PropTypes.array
}

NameForm.propTypes = {
    setName : PropTypes.func
}

Comments.propTypes = {
    data : PropTypes.array,
    setComment : PropTypes.func,
    handleComment : PropTypes.func,
    isLoading : PropTypes.bool
}

CommentsTab.propTypes = {
    id : PropTypes.string
}
