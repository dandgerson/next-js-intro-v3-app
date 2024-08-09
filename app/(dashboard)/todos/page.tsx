import db from '@/utils/db'
import CreateTodo from './create-todo-form'

const getTodos = async () => {
  return await db.todo.findMany()
}

const TodosPage = async () => {
  const todos = await getTodos()
  console.log({ todos })
  return (
    <div>
      <h1>Todos Page !!</h1>

      <div>
        {todos.map((todo) => (
          <div key={todo.id}>
            <div>{new Date(todo.craetedAt).toLocaleDateString()}</div>
            <div>{todo.content}</div>
            <div>
              Completed: <input type="checkbox" checked={todo.completed} />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default TodosPage
