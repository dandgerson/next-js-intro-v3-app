'use server'
import { revalidatePath } from 'next/cache'
import db from './db'

export const createTodo = async (formData) => {
  console.log({ formData })
  const content = formData.get('content')

  if (content) {
    await db.todo.create({
      data: { content },
    })

    revalidatePath('/todos')
  }
}
