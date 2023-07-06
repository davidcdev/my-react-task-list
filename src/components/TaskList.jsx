import { Task } from "./Task"
import { Toaster } from "react-hot-toast";
import { Box, Flex } from "@chakra-ui/react";


export function TaskList ({ 
    taskList, 
    complete,
    handleCompleteClick,
    handleDeleteClick }) {

    return (
        <Flex flexDir='column' justifyContent='center' align='center'>
            <Box as='section' mb='100px'>
                {taskList.map((task,id) => (
                    <Task 
                        key={id}
                        task={task}
                        isCompleted={complete}
                        onCompleteClick={handleCompleteClick} 
                        onDeleteClick={handleDeleteClick}
                    />
                ))}
            </Box>
            <Toaster />
        </Flex>
    )
}