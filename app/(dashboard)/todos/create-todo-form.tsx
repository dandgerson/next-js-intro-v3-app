'use client'

import { createTodo } from '@/utils/actions'

const CreateTodo = () => {
  return (
    <form
      // onSubmit={(e) => {
      //   e.preventDefault()
      //   const target = e.target as HTMLFormElement
      //   const content = target[0] as HTMLInputElement
      //   const completed = target[1] as HTMLInputElement
      //   console.log({
      //     content: content.value,
      //     completed: completed.checked,
      //     createdAt: Date.now(),
      //   })
      // }}
      action={createTodo}
    >
      <div>
        <label htmlFor="content">What to do?</label>
        <input className="text-black" type="text" id="content" name="content" />
      </div>
      <div>
        <label htmlFor="completed">Is todo completed?</label>
        <input type="checkbox" id="completed" name="completed" />
      </div>
      <div>
        <button type="submit">Submit</button>
      </div>
    </form>
  )
}

export default CreateTodo
