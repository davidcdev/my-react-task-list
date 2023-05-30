export function Task (props) {

    const {name} = props;

    return (
        <article className="task-list-item">
            <aside>
                <input type="checkbox" className="complete" />
            </aside>

            <p className="task-name">
                {name}
            </p>
        </article>
    )
}