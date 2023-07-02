import { useState, useEffect } from 'react'
import { notifyCompleted, notifyDeleted, notifySaved } from "../logic/notifications";

export function useUpdateTasks() {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [formValidation, setFormValidation] = useState({title: null});
    const [taskList, setTaskList] = useState([]);
    const [complete, setComplete] = useState(false);

    const saveTask = (title, description) => {
        
        const task = {
            id: crypto.randomUUID(),
            title: title,
            description: description,
            isCompleted: false 
        }
    
        let newTask = [...taskList];
        newTask = [...newTask, task];
        setTaskList(newTask);
        localStorage.setItem("task", JSON.stringify(newTask));
        notifySaved();
    }

    useEffect(() => {
        const localStorageData = localStorage.getItem("task");
        const storedTask = JSON.parse(localStorageData);
        console.log(storedTask);
        if (storedTask) {
            setTaskList(storedTask);
        }
    }, []);

    const handleKeyDown = (e) => {
        if (e.key === 'Enter' && title !== '' || (e.key === 'Enter' && title !== '' && description !== '')) {
            saveTask(title, description);
            setTitle('');
            setDescription('');
        }
    }

    const handleAddClick = (e) => {
        if (title !== '' || title !== '' && description !== '') {
            saveTask(title, description);
            setTitle('');
            setDescription('');
        }
    }

    const handleCompleteClick = (newCompleted, id) => {
        if (newCompleted.isCompleted === false) {
            setComplete(newCompleted.isCompleted = true);
            let newTask = [...taskList];
            newTask = [...newTask.filter(e => e.id != id), newCompleted];
            setTaskList(newTask);
            localStorage.setItem("task", JSON.stringify(newTask));   
            notifyCompleted();
        }
    }

    const handleDeleteClick = (id) => {
        let newTask = [...taskList];
        const list = newTask.filter(e => e.id != id);
        setTaskList(list);
        localStorage.setItem("task", JSON.stringify(list));
        notifyDeleted();
    }

    return {
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
        handleDeleteClick
    };
}