import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons'
import { faTrash } from '@fortawesome/free-solid-svg-icons'

function Todo({task,togglecomplete,deletetodo,editTodo}:any) {
  return (
    <div className='flex justify-between bg-[#8758ff]  text-white py-2 rounded-sm mt-2'>
        <p onClick={() => togglecomplete(task.id)} className={`ml-2 cursor-pointer ${task.done ? "line-through": "no-underline"}`}>{task.value}</p>
        <div className='mr-2'>
            <FontAwesomeIcon icon={faPenToSquare} className='cursor-pointer' onClick={() => editTodo(task.id)} />
            <FontAwesomeIcon icon={faTrash} className='ml-2 cursor-pointer' onClick={() => deletetodo(task.id)} />
        </div>
    </div>
  )
}

export default Todo;