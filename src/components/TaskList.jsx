import { Task } from "./Task"

export function TaskList (props) {

    const {list} = props;

    return (
        <div className="task-list">
            {list.map((task) => (
                <Task name={task.name} />
            ))}
        </div>
    )
}