import { useState } from 'react'
import './App.css'
import { Header } from "./components/Header"
import { TaskList } from './components/TaskList'

let pendingTasks = [
  { name:"Completar proyecto integrador de React" },
  { name:"Estudiar el contenido antes de la clase" },
]

let completedTasks = [
  { name:"Repasar React"},
  { name:"Aplicar estilos a la app"}
]

function App() {
  return (
    <>
      <Header />
      <TaskList list={pendingTasks} />
      <TaskList list={completedTasks} />
    </>
  )
}

export default App
