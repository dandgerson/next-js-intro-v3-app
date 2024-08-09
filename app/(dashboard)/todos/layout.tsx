import { PropsWithChildren } from 'react'
import CreateTodo from './create-todo-form'

const TodosLayout = ({ children }: PropsWithChildren) => {
  return (
    <div>
      <div>
        <CreateTodo />
      </div>
      {children}
    </div>
  )
}

export default TodosLayout
