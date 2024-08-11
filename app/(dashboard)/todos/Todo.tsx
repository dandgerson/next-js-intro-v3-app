'use client'

import { updateTodo } from '@/utils/actions'
import { useTransition } from 'react'

const Todo = ({
  todo,
}: {
  todo: { createdAt: Date; content: string; completed: boolean; id: string }
}) => {
  const [isPending, startTransition] = useTransition()

  return (
    <div
      className={`border border-black/20 ${
        todo.completed ? 'line-through text-gray-100' : ''
      }`}
    >
      {/* TODO: fix bug with Date */}
      {/* <div>{new Date(todo.createdAt).toLocaleDateString()}</div> */}
      <div>{todo.content}</div>
      <div>
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={() =>
            startTransition(() =>
              updateTodo({ id: todo.id, completed: !todo.completed })
            )
          }
        />
      </div>
    </div>
  )
}

export default Todo
