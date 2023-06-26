import './App.css'
import { Header } from "./components/Header"
import { TaskList } from './components/TaskList'
import { useUpdateTasks } from './hooks/useUpdateTasks';

function App() {
  const {
    task,
    inputValue,
    setInputValue,
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

    function handleInputValueChange(e) {
      setInputValue(e);
    }

  return (
    <>
      <Header />
      <TaskList 
        inputValue={inputValue}
        onInputValueChange={handleInputValueChange}
        handleKeyDown={handleAddEnter}
        handleAddClick={handleAddTask}
        task={task}
        complete={complete}
        handleCompleteClick={handleCompleteClick}
        handleDeleteClick={handleDeleteClick}
      />
    </>
  )
}

export default App
