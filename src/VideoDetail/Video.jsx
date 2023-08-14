import { Box } from '@chakra-ui/react'
import PropTypes from 'prop-types'
import Youtube from 'react-youtube'

function YTVideo({data}){
    const opts ={
        width : '720',
        height : '480'
    }
    if(data !== null){
        return(
            <Box    
                w='100%'
                h='100%'
                >
                <Youtube 
                    videoId={data?.data?.ytId} 
                    iframeClassName='youtube'
                    opts={opts}
                        />
            </Box>
        )
    }
    }

export default function Video({data}){


    return(
        <Box
            w={['90vw', '90vw', '100%', '100%']}
            borderRadius='5px'
            mt={['4vh', '4vh', '0']}
            mb={['2vw', '0.7vw']}
        >
            { data? <YTVideo data={data} />: null }
        </Box>
    )
}

Video.propTypes = {
    data : PropTypes.object
}

YTVideo.propTypes = {
    data : PropTypes.object
}