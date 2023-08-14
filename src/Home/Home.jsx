import { Box } from '@chakra-ui/react'
import Filters from "./Filters"
import Videos from "./Videos"
import Header from "../Header/Header"

export default function Home() {

    return(
        <Box
            overflowX='hidden'
            overflowY='scroll'
            >
            <Header />
            <Filters />
            <Videos />
        </Box>
    )
}