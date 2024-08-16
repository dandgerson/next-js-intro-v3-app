import db from '@/utils/db'
import CreateTodo from './create-todo-form'
import Todo from './Todo'

const getTodos = async () => {
  await new Promise((resolve: (value: unknown) => void): void => {
    setTimeout(() => resolve(undefined), 200)
  })

  // throw new TypeError('LMAO YOU TWAT!!!')
  return await db.todo.findMany()
}

const TodosPage = async () => {
  const todos = await getTodos()
  return (
    <div>
      <h1>Todos Page !!</h1>

      <div>
        {todos.map((todo) => (
          <Todo todo={todo} key={todo.id} />
        ))}
      </div>
    </div>
  )
}

export default TodosPage
