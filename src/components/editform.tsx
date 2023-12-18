"use client";

import React from "react";
import { useState } from "react";

function EditTodoForm({editTodo, task}:any) {
  const [val, setVal] = useState(task.value);


  function handleSubmit(e:any) {
    e.preventDefault();
    editTodo(val, task.id);
    setVal("")
    
  }

  return (
    <form action="" onSubmit={handleSubmit} className="mb-10">
      <input
        value={val}
        type="text"
        placeholder="Update task"
        onChange={(e) => setVal(e.target.value)
        
        }
        className="border bg-[#1A1A40] border-[#8758ff] px-1 py-1 rounded-sm text-white "
      />
      
      <button
        type="submit"
        className="bg-[#8758ff] py-1 px-2 rounded-sm text-white"
      >
        Update task
      </button>
    </form>
  );
}

export default EditTodoForm;
