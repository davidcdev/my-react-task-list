export default function AboutUs () {
    return (
        <>
            <header className="title">
                <h1>About Us</h1>
            </header>

            <article className="about">
                <p className="about-intro">
                    <strong>Productive Day</strong> is a ToDo List App created to provide an easy way to organize your tasks and be more productive through the day 🤩.
                </p>

                <ul>
                    <li>
                        <p>
                            You can add tasks with a title and a description<span>(optional)</span> by clicking the Add button that has a ➕ sign or by pressing the "Intro" key in your keyboard.
                        </p>
                    </li>
                    <li>
                        <p>
                            You can mark them as completed by clicking on the checkbox ✅, you will notice how it changes its appearance!
                        </p>
                    </li>
                    <li>
                        <p>
                            To delete them you click on the "trash" 🗑️ icon at the right side of the card
                        </p>
                    </li>
                    <li>
                        <p>
                            Did you noticed about the notifications? Yes, a notification will be displayed confirming the action you just did 😁. 
                        </p>
                    </li>
                    <li>
                        <p>
                            Don't worry if you close the tab or the browser! The tasks you didn't delete will remain in your list when you open the tab again 😌.
                        </p>
                    </li>
                </ul>

                <p className="about-tech">This app was built with ReactJS.</p>
            </article>
        </>        
    )
}