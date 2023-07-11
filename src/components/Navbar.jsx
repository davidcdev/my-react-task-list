import { Box, Show, Hide, Button, IconButton, Container, HStack, Card, CardFooter, useColorMode } from "@chakra-ui/react";
import { StarIcon, EditIcon, InfoIcon, MoonIcon, SunIcon  } from "@chakra-ui/icons";
import { SiGithub } from '@icons-pack/react-simple-icons'
import { Link } from "react-router-dom";

export function Navbar () {
    const { colorMode, toggleColorMode } = useColorMode()

    return (
        <>
            <Show breakpoint='(max-width: 820px)'>
                <HStack top='0' left='0' pos='fixed' pl='2' mt='10px' spacing='1rem'>
                    <Box as={Link} to="https://github.com/davidcdev" target='_blank'>
                        <IconButton as={SiGithub} p='4px'/>
                    </Box>
                    <Box>
                        <IconButton onClick={toggleColorMode} icon={colorMode === 'light' ? <MoonIcon/> : <SunIcon />} />
                    </Box>
                </HStack>
                
                
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
                    <HStack left='0' pos='absolute' pl='100' spacing='2rem'>
                        <Box as={Link} to="https://github.com/davidcdev" target='_blank'>
                            <IconButton as={SiGithub} p='4px'/>
                        </Box>
                        <Box>
                            <IconButton onClick={toggleColorMode} icon={colorMode === 'light' ? <MoonIcon/> : <SunIcon />} />
                        </Box>
                    </HStack>
                     
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