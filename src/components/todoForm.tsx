"use client";

import React from "react";
import { useState } from "react";

function TodoForm({addTodo}:any) {
  const [val, setVal] = useState("");


  function handleSubmit(e:any) {
    e.preventDefault();
    addTodo(val);
    setVal("")
    
  }

  return (
    <form action="" onSubmit={handleSubmit} className="mb-10">
      <input
        value={val}
        type="text"
        placeholder="What is the task today?"
        onChange={(e) => setVal(e.target.value)
        
        }
        className="border bg-[#1A1A40] border-[#8758ff] px-6 py-1 rounded-sm bg-bg-[#8758ff] text-white"
      />
      
      <button
        type="submit"
        className="bg-[#8758ff] py-1 px-2 rounded-sm text-white"
      >
        Submit
      </button>
    </form>
  );
}

export default TodoForm;
