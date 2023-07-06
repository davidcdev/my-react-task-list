import { Flex, Heading, Stack } from '@chakra-ui/react'

export default function Home () {
    return (
        <Flex flexDirection='column' justifyContent='center' alignItems='center'>
        <Stack spacing={4} mt='120px' >
            <Heading as='h2'size='xl' textAlign='center' fontSize={{ base: '24px', md: '40px', lg: '56px' }}>
                Hi! Welcome to
            </Heading>
            <Heading as='h1' size='3xl' bgGradient='linear(to-l, #f8db1d, #f48e2e)' bgClip='text' fontSize={{ base: '24px', md: '40px', lg: '56px' }}>
                Productive Day
            </Heading>
        </Stack>
        </Flex>
    )
}