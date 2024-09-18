import { useState, useEffect } from "react";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";

export default function App() {
  const [todos, setTodos] = useState([]);
  const [todo, setTodo] = useState("");

  function persistData(newList) {
    localStorage.setItem("todos", JSON.stringify({ todos: newList }));
  }

  function handleAddTodo(todo) {
    const newTodos = [...todos, todo];
    persistData(newTodos);
    setTodos(newTodos);
  }

  function handleDeleteTodo(index) {
    const newTodos = todos.filter((_, todoIndex) => todoIndex != index);
    persistData(newTodos);
    setTodos(newTodos);
  }

  function handleEditTodo(index) {
    const valueToBeEdited = todos[index];
    setTodo(valueToBeEdited);
    handleDeleteTodo(index);
  }

  useEffect(() => {
    // When first time user enter website
    if (!localStorage) return;

    let localTodos = localStorage.getItem("todos");

    if (!localTodos) return;

    localTodos = JSON.parse(localTodos).todos;
    setTodos(localTodos);
  }, []);

  return (
    <>
      <main>
        <TodoInput
          todo={todo}
          setTodo={setTodo}
          handleAddTodo={handleAddTodo}
        />
        <TodoList
          todos={todos}
          handleEditTodo={handleEditTodo}
          handleDeleteTodo={handleDeleteTodo}
        />
      </main>
    </>
  );
}
