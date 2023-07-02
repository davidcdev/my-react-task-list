import { Link } from "react-router-dom";

export function Menu () {
    return (
        <nav className="menu">
            <ul>
                <li>
                    <Link to="/home">Home</Link>
                </li>
                <li>
                    <Link to="/tasks">Tasks</Link>
                </li>
                <li>
                    <Link to="/about-us">About Us</Link>
                </li>
            </ul>
        </nav>
    )
}