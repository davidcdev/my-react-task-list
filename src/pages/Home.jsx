import { Flex } from "@chakra-ui/react";
import { Header } from "../components/Header";
import { TaskCounter } from "../components/TaskCounter";
import { useUpdateTasks } from "../hooks/useUpdateTasks";

export default function Home () {
    const {taskList, complete} = useUpdateTasks();

    return (
        <Flex flexDir='column' justify='center' align='center' minW='80%'>
            <Header/>
            <TaskCounter 
                taskList={taskList}
                complete={complete}
            />
        </Flex>
    )
}