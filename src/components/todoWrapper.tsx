"use client";

import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import TodoForm from "./todoForm";
import Todo from "./todo";
import EditTodoForm from "./editform";
import { v4 as uuid } from "uuid";

type todoFunctionType = {
  id: string;
  value: string;
  done: boolean;
  isEditing: boolean;
};

function TodoWrapper() {
  const [todos, setTodos] = useState<todoFunctionType[]>([]);

  function todoFunction(todo: any) {
    setTodos((prevTodos) => [
      { id: uuid(), value: todo, done: false, isEditing: false },
      ...prevTodos,
    ]);
  }

  function toggleFunction(id: any) {
    setTodos((prevTodos) =>
      prevTodos.map((todo_data) =>
        todo_data.id === id ? { ...todo_data, done: true } : todo_data
      )
    );
  }

  function deleteFunction(id: any) {
    setTodos((prevTodos) => prevTodos.filter((to_data) => to_data.id !== id));
  }

  function editFunction(id: any) {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, isEditing: !todo.isEditing } : todo
      )
    );
  }

  function edittask(task: any, id: any) {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, value: task, isEditing: !todo.isEditing } : todo
      )
    );
  }
  useEffect(() => {
    console.log(todos);
  }, [todos]);

  return (
    <div>
      <h1 className="font-bold text-center text-3xl text-white mb-9">
        Get Things Done!
      </h1>
      <TodoForm addTodo={todoFunction} />
      {todos.map((data: any, index: any) =>
        data.isEditing ? (
          <EditTodoForm key={data.id} editTodo={edittask} task={data} />
        ) : (
          <Todo
            key={data.id}
            task={data}
            togglecomplete={toggleFunction}
            deletetodo={deleteFunction}
            editTodo={editFunction}
          />
        )
      )}
    </div>
  );
}

export default TodoWrapper;
