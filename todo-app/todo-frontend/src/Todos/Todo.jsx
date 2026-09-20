const Todo = ({ todo, deleteTodo, completeTodo }) => {
  const onClickDelete = () => deleteTodo(todo)
  const onClickComplete = () => completeTodo(todo)

  return (
    <div style={{ display: 'flex', justifyContent: 'space-between', maxWidth: '70%', margin: 'auto' }}>
      <span>{todo.text}</span>
      <span>
        {todo.done ? (
          ' This todo is done '
        ) : (
          <span>
            This todo is not done
            <button onClick={onClickComplete}>Set as done</button>
          </span>
        )}
        <button onClick={onClickDelete}>Delete</button>
      </span>
    </div>
  )
}

export default Todo