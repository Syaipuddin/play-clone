import { Box } from '@chakra-ui/react'
import Filters from "./Filters"
import Videos from "./Videos"


export default function Home() {

    return(
        <Box>
            <Filters />
            <Videos />
        </Box>
    )
}