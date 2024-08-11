'use server'
import { revalidatePath } from 'next/cache'
import db from './db'

export const createTodo = async (formData: FormData) => {
  const content = formData.get('content') as string

  if (content) {
    await db.todo.create({
      data: { content },
    })

    revalidatePath('/todos')
  }
}
