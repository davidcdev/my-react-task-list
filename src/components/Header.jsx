import React, { useState } from "react"

export function Header () {
    return (
        <header>
            <div className="title">
                <h1>My To-do App</h1>
            </div>
            <div className="add-new-task">
                <input type="text" placeholder="Add A New Task" className="type-task" />
                <button type="submit" className="add">+</button>
            </div>
        </header>
    )
}