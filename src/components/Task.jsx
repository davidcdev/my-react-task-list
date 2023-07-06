import { Card, Checkbox, CardHeader, Heading, CardBody, Text, IconButton } from "@chakra-ui/react"
import { DeleteIcon } from "@chakra-ui/icons"

export function Task ({task, onCompleteClick, onDeleteClick }) {
    const handleCompleteClick = () => {
        onCompleteClick(task, task.id)
    }

    const handleDeleteClick = () => {
        onDeleteClick(task.id)
    }

    return (
        <Card
            direction={{ sm: 'row'}}
            variant='elevated'
            boxShadow='md'
            align='center'
            w={{ base:'300px', lg:'350px'}}
            minH='50px'
            mt='20px'
            mb='20px'
            py='4px'
            px='16px'
            opacity={task.isCompleted ? '0.65' : '1'}
            >
            <Checkbox
                colorScheme="orange"
                onClick={ handleCompleteClick }
                onChange={e => handleCompleteClick(e.target.checked)}
                isChecked={task.isCompleted ? true : false}
                />
            
            <CardHeader>
                <Heading 
                    size='16px'
                    as={task.isCompleted ? 's' : 'n'}
                    >
                    {task.title}
                </Heading>
            </CardHeader>
            <CardBody>
                <Text 
                    fontSize='14px' 
                    color='gray'
                    as={task.isCompleted ? 's' : 'n'}
                    >
                    {task.description}
                </Text>
            </CardBody>
            <IconButton
                fontSize='16px'
                colorScheme="black"
                onClick={ handleDeleteClick }
                variant='link'
                aria-label="delete"
                icon={<DeleteIcon />}
                />   
        </Card>
    )
}