import { Task } from "./Task"
import { Toaster } from "react-hot-toast";
import { Box, Flex } from "@chakra-ui/react";
import { useAutoAnimate } from '@formkit/auto-animate/react'


export function TaskList ({ 
    taskList, 
    complete,
    handleCompleteClick,
    handleDeleteClick }) {

    const [parent] = useAutoAnimate();

    return (
        <Flex flexDir='column' justifyContent='center' align='center'>
            <Box as='section' mb='32px' ref={parent}>
                {taskList.filter((task) => task.isCompleted === false).map((task,id) => (
                    <Task 
                        key={id}
                        task={task}
                        isCompleted={complete}
                        onCompleteClick={handleCompleteClick} 
                        onDeleteClick={handleDeleteClick}
                    />
                ))}
            </Box>
            <Box as='section' mb='100px' ref={parent}>
                {taskList.filter((task) => task.isCompleted === true).map((task,id) => (
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