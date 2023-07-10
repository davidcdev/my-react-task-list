import { Flex, Heading, Spinner } from "@chakra-ui/react";

export function Loading () {
    return (
        <Flex flexDir='column' justify='center' align='center' w='100%' h={{base:'100vh', md:'50vh'}}>
            <Spinner size='xl'/>
            <Heading as='h3' size='lg' mt='50px'>
                Loading...
            </Heading>
        </Flex>
    )
}