import './App.css'
import { Header } from "./components/Header"
import { TaskForm } from './components/TaskForm';
import { TaskList } from './components/TaskList'
import { useUpdateTasks } from './hooks/useUpdateTasks';

function App() {
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
    <>
      <Header />
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
    </>
  )
}

export default App
