export default function TodoCard(props) {
  const { children, handleEditTodo, handleDeleteTodo,index } = props;

  return (
    <li className="todoCard">
      {children}
      <div className="action-container">
        <button onClick={()=>{
            handleEditTodo(index)
        }}>
          <i className="fa-solid fa-pen-to-square"></i>
        </button>
        <button onClick={()=>{
            handleDeleteTodo(index);
        }}>
          <i className="fa-solid fa-trash-can"></i>
        </button>
      </div>
    </li>
  );
}
