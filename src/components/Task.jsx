import { Checkbox, Heading, Text, IconButton, Accordion, AccordionItem, AccordionButton, AccordionIcon, AccordionPanel } from "@chakra-ui/react"
import { DeleteIcon } from "@chakra-ui/icons"

export function Task ({task, onCompleteClick, onDeleteClick }) {
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
        >
            <AccordionItem border='none'> 
                <Heading p='2'>
                    <AccordionButton 
                        display='flex' 
                        justifyContent='space-between' 
                        minH='50px' 
                        borderRadius='8px'
                    >
                        <Checkbox
                            pl='1'
                            pr='4'
                            colorScheme="orange"
                            onClick={ handleCompleteClick }
                            onChange={e => handleCompleteClick(e.target.checked)}
                            isChecked={task.isCompleted ? true : false}
                        />
                        <Heading 
                            size='16px'
                            as={task.isCompleted ? 's' : ''}
                        >
                            {task.title}
                        </Heading>
                        <AccordionIcon 
                            ml='28'
                        />
                        <IconButton
                            as='span'
                            pl='4'
                            pr='1'
                            fontSize='16px'
                            colorScheme="black"
                            onClick={ handleDeleteClick }
                            variant='link'
                            aria-label="delete"
                            icon={<DeleteIcon />}
                        />   
                    </AccordionButton>
                </Heading>
                <AccordionPanel 
                    textAlign='left'
                >
                    <Text
                        fontSize='14px' 
                        color='gray'
                        pl='3'
                        as={task.isCompleted ? 's' : ''}
                    >
                        {task.description ? task.description : 'It seems you didn\'t added a description... 👨🏻‍💻'}
                    </Text>
                </AccordionPanel>
            </AccordionItem>
        </Accordion>
    )
}