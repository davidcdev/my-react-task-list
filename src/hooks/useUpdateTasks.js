import { useState, useEffect } from 'react'
import { notifyCompleted, notifyDeleted, notifySaved } from "../logic/notifications";

export function useUpdateTasks() {

    const [inputValue, setInputValue] = useState('');
    const [ task, setTask ] = useState([]);
    const [complete, setComplete] = useState(false);

    const saveTask = (inputValue) => {
        
        inputValue = {
            id: crypto.randomUUID(),
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
        console.log(storedTask);
        if (storedTask) {
            setTask(storedTask);
        }
    }, []);

    const handleKeyDown = (e) => {
        if (e.key === 'Enter' && inputValue !== '') {
            saveTask(inputValue);
            setInputValue('');
        }
    }

    const handleAddClick = (e) => {
        if (inputValue !== '') {
            saveTask(inputValue);
            setInputValue('')
        }
    }

    const handleCompleteClick = (newCompleted, id) => {
        if (newCompleted.isCompleted === false) {
            setComplete(newCompleted.isCompleted = true);
            let newTask = [...task];
            newTask = [...newTask.filter(e => e.id != id), newCompleted];
            setTask(newTask);
            localStorage.setItem("task", JSON.stringify(newTask));   
            notifyCompleted();
        }
    }

    const handleDeleteClick = (id) => {
        let newTask = [...task];
        const list = newTask.filter(e => e.id != id);
        setTask(list);
        localStorage.setItem("task", JSON.stringify(list));
        notifyDeleted();
    }

    return {
        task,
        inputValue,
        setInputValue,
        complete, 
        handleAddClick, 
        handleKeyDown, 
        handleCompleteClick, 
        handleDeleteClick
    };
}