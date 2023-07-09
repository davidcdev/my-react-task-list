import { Checkbox, Heading, Box, Text, IconButton, Accordion, AccordionItem, AccordionButton, AccordionIcon, AccordionPanel, useColorMode, useColorModeValue } from "@chakra-ui/react"
import { DeleteIcon } from "@chakra-ui/icons"

export function Task ({task, onCompleteClick, onDeleteClick }) {
    const value = useColorModeValue('light', 'dark');
    const bg = useColorModeValue('#FFFFFF', '#2D3748');

    const handleCompleteClick = () => {
        onCompleteClick(task, task.id)
    }

    const handleDeleteClick = () => {
        onDeleteClick(task.id)
    }

    return (
        <Accordion 
            allowToggle 
            borderRadius='8px'
            direction={{ sm: 'row'}}
            variant='elevated'
            boxShadow='md'
            align='center'
            justifyContent='center'
            w={{ base:'300px', lg:'350px'}}
            minH='50px'
            mt='20px'
            mb='20px'
            opacity={task.isCompleted ? '0.65' : '1'}
            bg={bg}
        >
            <AccordionItem border='none' px='6'> 
                <Heading p='2' display='flex' justifyContent='center' alignItems='center'>
                    <Checkbox
                        pl='8'
                        colorScheme="orange"
                        onClick={ handleCompleteClick }
                        onChange={e => handleCompleteClick(e.target.checked)}
                        isChecked={task.isCompleted ? true : false}
                    />
                    <AccordionButton 
                        display='flex' 
                        justifyContent='space-between' 
                        minH='50px' 
                        borderRadius='8px'
                        _hover={{bg: 'transparent'}}
                    >
                        <Box
                            w='100ch'
                            textAlign='left'
                            size='16px'
                            fontWeight='bold'
                            as={task.isCompleted ? 's' : ''}
                        >
                            {task.title}
                        </Box>
                        <AccordionIcon 
                            
                        />
                    </AccordionButton>
                    <IconButton
                        as='span'
                        pr='8'
                        fontSize='16px'
                        colorScheme="black"
                        onClick={ handleDeleteClick }
                        variant='link'
                        aria-label="delete"
                        icon={<DeleteIcon />}
                        _hover={{cursor: 'pointer'}}
                    />   
                </Heading>
                <AccordionPanel 
                    textAlign='left'
                    px='0'
                    pt='0'
                >
                    <Text
                        fontSize='14px' 
                        color='gray'
                        as={task.isCompleted ? 's' : ''}
                    >
                        {task.description ? task.description : 'It seems you didn\'t added a description... 👨🏻‍💻'}
                    </Text>
                </AccordionPanel>
            </AccordionItem>
        </Accordion>
    )
}