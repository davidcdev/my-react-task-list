import { Task } from "./Task"

export function TaskList (props) {

    const {list} = props;

    return (
        <>
            <div className="add-new-task">
                    <input type="text" placeholder="Add A New Task" className="type-task" />
                    <button type="submit" className="add">+</button>
            </div>
            <div className="task-list">
                {list.map((task) => (
                    <Task name={task.name} />
                ))}
            </div>
        </>
       
    )
}