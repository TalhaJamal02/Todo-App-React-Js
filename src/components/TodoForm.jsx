import React, { useState } from 'react'
import { useTodo } from '../contexts/TodoContext';

function TodoForm() {
  const [todo, setTodo] = useState("")
  const { addTodo } = useTodo()

  const add = (e) => {
    e.preventDefault()

    if (!todo) return

    addTodo({ todo, completed: false })
    setTodo("")
  }

  return (
    <form onSubmit={add} className="flex">
      <input
        type="text"
        placeholder="Write Todo..."
        className="w-full border border-black/10 rounded-xl px-3 outline-none duration-150 bg-white/20 py-1.5 mr-2 "
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
      />
      <button type="submit" className="rounded-xl px-6 font-semibold py-2 bg-green-600 text-white shrink-0 hover:bg-green-800 transition-all duration-500">
        Add
      </button>
    </form>
  );
}

export default TodoForm;