import db from '@/utils/db'
import CreateTodo from './create-todo-form'

const getTodos = async () => {
  await new Promise((resolve) => {
    setTimeout(() => resolve(), 2000)
  })

  // throw new Error('LMAO YOU TWAT!!!')
  return await db.todo.findMany()
}

const TodosPage = async () => {
  const todos = await getTodos()
  return (
    <div>
      <h1>Todos Page !!</h1>

      <div>
        {todos.map((todo) => (
          <div key={todo.id}>
            <div>{new Date(todo.craetedAt).toLocaleDateString()}</div>
            <div>{todo.content}</div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default TodosPage
