import { useState } from "react";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";

export default function App() {
  const [todos, setTodos] = useState([]);
  const [todo, setTodo] = useState("");

  function handleAddTodo(todo) {
    const newTodos = [...todos, todo];
    setTodos(newTodos);
  }

  function handleDeleteTodo(index){
    const newTodos = todos.filter((_,todoIndex)=> todoIndex!=index);
    setTodos(newTodos);
  }

  function handleEditTodo(index){
    setTodo(todos[index]);
    handleDeleteTodo(index);
  }

  return (
    <>
      <main>
        <TodoInput
          todo={todo}
          setTodo={setTodo}
          handleAddTodo={handleAddTodo}
        />
        <TodoList todos={todos} handleEditTodo={handleEditTodo} handleDeleteTodo={handleDeleteTodo} />
      </main>
    </>
  );
}
