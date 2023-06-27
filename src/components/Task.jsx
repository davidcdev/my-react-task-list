import { Delete } from "@mui/icons-material"

export function Task ({task, onCompleteClick, onDeleteClick }) {
    const handleCompleteClick = () => {
        onCompleteClick(task, task.id)
    }

    const handleDeleteClick = () => {
        onDeleteClick(task.id)
    }

    return (
        <article 
            className={
                task.isCompleted === true
                ? 'task-list-item is-completed'
                : 'task-list-item' }>
            <aside>
                <input 
                    type="checkbox" 
                    className="complete" 
                    onClick={ handleCompleteClick }
                    checked={task.isCompleted}
                    onChange={e => handleCompleteClick(e.target.checked)}
                />
            </aside>

            <div className="task-list-item-text">
                {task.title}<br />
                <span className="description">{task.description}</span>
            </div>

            <button
                className="delete-button"
                onClick={ handleDeleteClick }
            >
                <span>
                    <Delete fontSize="small"/>
                </span>
            </button>
        </article>
    )
}