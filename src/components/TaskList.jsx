import { Task } from "./Task"
import { Toaster } from "react-hot-toast";


export function TaskList ({
    inputValue,
    onInputValueChange, 
    handleKeyDown,
    handleAddClick, 
    task, 
    complete,
    handleCompleteClick,
    handleDeleteClick }) {

    return (
        <section>
            <div className="add-new-task">
                <input 
                    type="text" 
                    placeholder="Add A New Task" 
                    className="new-task" 
                    value={inputValue}
                    onChange={(e) => { onInputValueChange(e.target.value) }}
                    onKeyDown={ handleKeyDown }
                    autoFocus
                />
                <button 
                    type="submit" 
                    className="add-button" 
                    onChange={(e) => { onInputValueChange(e.target.value) }}
                    onClick={ handleAddClick }
                >
                    +
                </button>
            </div>
            <div className="task-list">
                {task.map((task,id) => (
                    <Task 
                        key={id}
                        task={task}
                        isCompleted={complete}
                        onCompleteClick={handleCompleteClick} 
                        onDeleteClick={handleDeleteClick}
                    />
                ))}
            </div>
            <Toaster />
        </section>
    )
}