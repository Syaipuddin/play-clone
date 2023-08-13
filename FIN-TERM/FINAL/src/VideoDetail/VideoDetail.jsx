import { Flex, Hide, Show, Grid, GridItem} from '@chakra-ui/react'
import Header from '../Header/Header'
import Video from './Video'
import Products from './Products'
import Description from './Description'
import Comments from './Comment'

export default function VideoDetail() {

    return(
        <Flex align='center' direction='column'>
            <Header />
            <Hide above='md'>
                <Video />
                <Products />
                <Description />
                <Comments />
            </Hide>
            <Show above='md'>
                <Hide above='lg'>
                    <Hide below='md'>
                        <Grid
                            w='90vw'
                            h='60vw'
                            mt='10vh'
                            mb='1vw'
                            gap='1vw'
                            templateRows='repeat(2, 1fr)'
                            templateColumns='repeat(7, 1fr)'
                            >
                            <GridItem
                                colSpan={5}
                                rowSpan={2}
                                >
                                    <Video />
                                    <Products />
                            </GridItem>
                            <GridItem
                                colSpan={2}
                                rowSpan={2}
                                >
                                <Comments />
                            </GridItem>
                        </Grid>
                        <Description />
                    </Hide>
                </Hide>
            </Show>
            <Show above='lg'>
                <Grid
                    w='90vw'
                    h='88vh'
                    mt='10vh'
                    templateRows='repeat(4, 1fr)'
                    templateColumns='repeat(10, 1fr)'
                    gap='0.5vw'
                    >
                        <GridItem
                            colSpan={2}
                            rowSpan={3}
                            >
                           <Products/>
                        </GridItem>
                        <GridItem
                            colSpan={6}
                            rowSpan={3}
                            >
                           <Video />
                        </GridItem>
                        <GridItem
                            colSpan={2}
                            rowSpan={4}
                            >
                            <Comments />    
                        </GridItem>
                        <GridItem
                            colSpan={8}
                            rowSpan={1}
                            >
                                <Description />
                        </GridItem>
                </Grid>
            </Show>
        </Flex>
    )
}