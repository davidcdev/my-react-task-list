import {
    Text,
    Flex,
    FormControl,
    FormLabel,
    Input,
    Button
} from '@chakra-ui/react'

import { AddIcon } from '@chakra-ui/icons';


export function TaskForm({
    title,
    onTitleChange, 
    description,
    onDescriptionChange,
    formValidation,
    handleKeyDown,
    handleAddClick, }) {

    const handleSubmit = (event) => { 
        event.preventDefault();
        console.log("Send data to register");
    }

    const isFormValid = Object.keys(formValidation).every(
        (key) => formValidation[key] === ""
      );

    return (
        <Flex justifyContent='center' alignItems='center' w={{base:'375px', md:'600px'}}>
            <form onSubmit={handleSubmit}>
                <FormControl>
                    <FormLabel>Title <span style={{color:'red'}}>*</span></FormLabel>
                    <Input 
                        type="text"
                        className="new-task"
                        value={title}
                        onChange={(e) => { onTitleChange(e.target.value) }} 
                        onKeyDown={ handleKeyDown }
                        placeholder="Enter a title for your task"
                        autoFocus
                        w='300px'
                        mb='16px'/>
                        
                        {formValidation.title && (
                            <Text color='red' fontSize='sm' mt='-4' mb='8px'>{formValidation.title}</Text>
                        )}

                </FormControl>
                <FormControl>
                    <FormLabel optionalIndicator >Description</FormLabel>
                    <Input 
                        type="text"
                        className="new-task"
                        value={description}
                        onChange={(e) => { onDescriptionChange(e.target.value) }}
                        onKeyDown={ handleKeyDown }  
                        placeholder="Enter a description for your task"
                        w='300px'
                        mb='16px' />

                </FormControl>
                <Button 
                    mt='12px'
                    mb='32px'
                    type="submit"
                    bg="#f48e2e"
                    color='white'
                    leftIcon={<AddIcon />}
                    onClick={ handleAddClick }
                    isDisabled={!isFormValid}
                >
                    Add Task
                </Button>
            </form>
        </Flex>
    )
}