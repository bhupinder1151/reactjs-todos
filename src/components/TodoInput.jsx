export default function TodoInput(props) {
  const { todo, setTodo, handleAddTodo } = props;
  return (
    <>
      <div className="todoInput">
        <input
          type="text"
          value={todo}
          onChange={(e) => {
            setTodo(e.target.value);
          }}
          placeholder="enter todo here..."
        />
        <button onClick={()=>{
            handleAddTodo(todo);
            setTodo("");
        }}>add</button>
      </div>
    </>
  );
}
