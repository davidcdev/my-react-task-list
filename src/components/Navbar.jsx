import { Box, Show, Hide, Button, Container, HStack, Card, CardFooter } from "@chakra-ui/react";
import { StarIcon, EditIcon, InfoIcon } from "@chakra-ui/icons";
import { Link } from "react-router-dom";

export function Navbar () {
    return (
        <>
            <Show breakpoint='(max-width: 820px)'>
                <Card w='100%' zIndex={2} mt='4px' px='4px' bottom='0' pos='fixed'>
                    <CardFooter
                        justify='space-evenly'
                        flexWrap='wrap'
                        sx={{
                        '& > button': {
                            minW: '136px',
                            },
                        }}
                    >
                        <Button as={Link} to="/home" flex='1' variant='ghost' leftIcon={<StarIcon />}>
                            Home
                        </Button>
                        <Button as={Link} to="/tasks" flex='1' variant='ghost' leftIcon={<EditIcon />}>
                            Tasks
                        </Button>
                        <Button as={Link} to="/about-us" flex='1' variant='ghost' leftIcon={<InfoIcon />}>
                            About Us
                        </Button>
                    </CardFooter>
                </Card>
            </Show>

            <Hide breakpoint='(max-width: 820px)'>
                <Container maxW='container.xxl' display='flex' justifyContent='flex-end' mt='20px' mb='80px' px='100'>
                    <HStack spacing='4rem'>
                        <Link to="/home">
                            <Box as='button' fontSize='16px' fontWeight='500' py='8px' px='12px' borderRadius='8px' _hover={{ bg: 'rgba(220, 220, 220, 0.3)' }} transition='all 0.4s cubic-bezier(.08,.52,.52,1)'>
                                Home
                            </Box>
                        </Link>
                        <Link to="/tasks">
                            <Box as='button' fontSize='16px' fontWeight='500' py='8px' px='12px' borderRadius='8px' _hover={{ bg: 'rgba(220, 220, 220, 0.3)' }} transition='all 0.4s cubic-bezier(.08,.52,.52,1)'>
                                Tasks
                            </Box>
                        </Link>
                        <Link to="/about-us">
                            <Box as='button' fontSize='16px' fontWeight='500' py='8px' px='12px' borderRadius='8px' _hover={{ bg: 'rgba(220, 220, 220, 0.3)' }} transition='all 0.4s cubic-bezier(.08,.52,.52,1)'>
                                About Us
                            </Box>
                        </Link>
                    </HStack>
                </Container>
            </Hide >
        </>
    )
}