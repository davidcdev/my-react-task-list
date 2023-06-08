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

            <div className="task-list-item-description">
                {task.description}
            </div>

            <button
                className="delete-button"
                onClick={ handleDeleteClick }
            >
                <span>
                    x
                </span>
            </button>
        </article>
    )
}