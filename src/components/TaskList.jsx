import { Task } from "./Task"
import { Toaster } from "react-hot-toast";


export function TaskList ({ 
    taskList, 
    complete,
    handleCompleteClick,
    handleDeleteClick }) {

    return (
        <section>
            <div className="task-list">
                {taskList.map((task,id) => (
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