import { Box, Show, Hide, Menu, MenuButton, IconButton, MenuList, MenuItem, Container, HStack, Text } from "@chakra-ui/react";
import { HamburgerIcon, StarIcon, EditIcon, InfoIcon } from "@chakra-ui/icons";
import { Link } from "react-router-dom";

export function Navbar () {
    return (
        <>
            <Show breakpoint='(max-width: 820px)'>
                <Container maxW='container.lg' mt='20px' mb='60px' display='flex' justifyContent='flex-start'>
                    <Menu>
                        <MenuButton 
                            as={IconButton}
                            aria-label='Options'
                            icon={<HamburgerIcon />}
                            variant='outline'
                            boxSize='44px'
                            fontSize='24px'
                            />
                        <MenuList>
                            <MenuItem as={Link} to="/home" icon={<StarIcon />}>
                                Home
                            </MenuItem>
                            <MenuItem as={Link} to="/tasks" icon={<EditIcon />}>
                                Tasks
                            </MenuItem>
                            <MenuItem as={Link} to="/about-us" icon={<InfoIcon />}>
                                About Us
                            </MenuItem>
                        </MenuList>
                    </Menu>
                </Container>
            </Show>

            <Hide breakpoint='(max-width: 820px)'>
                <Container maxW='container.xxl' display='flex' justifyContent='flex-end' mt='20px' mb='80px' px='100'>
                    <HStack spacing='4rem'>
                        <Box as='button' fontSize='16px' fontWeight='500' py='8px' px='12px' borderRadius='8px' _hover={{ bg: 'rgba(220, 220, 220, 0.3)' }} transition='all 0.4s cubic-bezier(.08,.52,.52,1)'>
                            <Link to="/home">Home</Link>
                        </Box>
                        <Box as='button' fontSize='16px' fontWeight='500' py='8px' px='12px' borderRadius='8px' _hover={{ bg: 'rgba(220, 220, 220, 0.3)' }} transition='all 0.4s cubic-bezier(.08,.52,.52,1)'>
                            <Link to="/tasks">Tasks</Link>
                        </Box>
                        <Box as='button' fontSize='16px' fontWeight='500' py='8px' px='12px' borderRadius='8px' _hover={{ bg: 'rgba(220, 220, 220, 0.3)' }} transition='all 0.4s cubic-bezier(.08,.52,.52,1)'>
                            <Link to="/about-us">About Us</Link>
                        </Box>
                    </HStack>
                </Container>
            </Hide >
        </>
    )
}