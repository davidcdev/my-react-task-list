import { useState, useEffect } from "react";
import { Task } from "./Task"
import { notifyCompleted, notifyDeleted, notifySaved } from "../logic/notifications";
import { Toaster } from "react-hot-toast";


export function TaskList () {
    const [ task, setTask ] = useState([]);
    
    const saveTask = (inputValue) => {
       
        inputValue = {
            id: Date.now(),
            description: `${inputValue}`,
            isCompleted: false 
        }
       
        let newTask = [...task];

        newTask = [...newTask, inputValue];

        setTask(newTask);

        localStorage.setItem("task", JSON.stringify(newTask));

        notifySaved();
    }

    useEffect(() => {
        const localStorageData = localStorage.getItem("task");
        const storedTask = JSON.parse(localStorageData);
        console.log(storedTask)
        if (storedTask) {
            setTask(storedTask);
        }
    }, []);

    /* console.log(task) */

    const [inputValue, setInputValue] = useState('');

    const handleKeyDown = (e) => {
        if (e.key === 'Enter' && inputValue !== '') {
            saveTask(inputValue)
            setInputValue('')
        }
    }

    const handleAddClick = (e) => {
        if (inputValue !== '') {
            saveTask(inputValue)
            setInputValue('')
        }
    }

    const [complete, setComplete] = useState(false)

    const handleCompleteClick = (newCompleted, id) => {
        if (newCompleted.isCompleted === false) {
        setComplete(newCompleted.isCompleted = true)
        let newTask = [...task];
        newTask = [...newTask.filter(e => e.id != id), newCompleted];
        setTask(newTask);
        localStorage.setItem("task", JSON.stringify(newTask));   
        notifyCompleted();
        }
    }
    /* console.log(task) */
    
    const handleDeleteClick = (id) => {
        let newTask = [...task];
        const list = newTask.filter(e => e.id != id)
        setTask(list);
        localStorage.setItem("task", JSON.stringify(list));
        notifyDeleted();
    }

    return (
        <section>
            <div className="add-new-task">
                <input 
                    type="text" 
                    placeholder="Add A New Task" 
                    className="new-task" 
                    value={inputValue}
                    onChange={(e) => { setInputValue(e.target.value) }}
                    onKeyDown={ handleKeyDown }
                    autoFocus
                />
                <button 
                    type="submit" 
                    className="add-button" 
                    onChange={(e) => { setInputValue(e.target.value) }}
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