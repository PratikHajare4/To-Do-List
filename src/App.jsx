import { useState } from 'react'
import './App.css'

import Todos from './components/Todos'
import AddTodo from './components/AddTodo'


function App() {


  return (
    <>
     <h1 className='text-2xl font-bold '>To-DO list using Redux Toolkit</h1>
    <AddTodo />
     <Todos />
    </>
  )
}

export default App
