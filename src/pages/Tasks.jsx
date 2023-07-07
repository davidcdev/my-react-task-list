import { TaskForm } from "../components/TaskForm"
import { TaskList } from "../components/TaskList"
import { useUpdateTasks } from "../hooks/useUpdateTasks"
import { Flex, Heading } from "@chakra-ui/react";

export default function Tasks () {
    const {
        taskList,
        title,
        setTitle,
        description,
        setDescription,
        formValidation,
        setFormValidation,
        complete,
        handleAddClick, 
        handleKeyDown, 
        handleCompleteClick, 
        handleDeleteClick} = useUpdateTasks();
    
        function handleAddTask(e) {
          handleAddClick(e);
        }
    
        function handleAddEnter(e) {
          handleKeyDown(e);
        }
    
        function handleTitleChange(e) {
          const title = e
    
          setFormValidation({
            ...formValidation,
            title: title.length < 3 ? "Title must be at least 3 characters" : "",
          });
    
          setTitle(e);
        }
    
        function handleDescriptionChange(e) {
          setDescription(e);
        }

    return (
        <Flex flexDirection='column' justifyContent='center' alignItems='center' mt='80px' mx='0'>
            <Heading as='h1' size='xl' mb='60px'>
              Today's Tasks
            </Heading>
            <TaskForm 
                title={title}
                onTitleChange={handleTitleChange}
                description={description}
                onDescriptionChange={handleDescriptionChange}
                formValidation={formValidation}
                handleKeyDown={handleAddEnter}
                handleAddClick={handleAddTask}
            />
            <TaskList 
                taskList={taskList}
                complete={complete}
                handleCompleteClick={handleCompleteClick}
                handleDeleteClick={handleDeleteClick}
            />
        </Flex>
    )
}