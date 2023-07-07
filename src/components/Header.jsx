import { Flex, Heading, Stack } from '@chakra-ui/react'

export function Header () {
    return (
        <Flex flexDirection='column' justifyContent='center' alignItems='center'>
        <Stack spacing={4} mt={{ base:'200px', md:'120px'}} >
            <Heading as='h2'size='xl' textAlign='center' fontSize={{ base: '32px', md: '40px' }}>
                Hi! Welcome to
            </Heading>
            <Heading as='h1' size='3xl' bgGradient='linear(to-l, #f8db1d, #f48e2e)' bgClip='text' fontSize={{ base: '40px', md: '56px' }}>
                Productive Day
            </Heading>
        </Stack>
        </Flex>
    )
}