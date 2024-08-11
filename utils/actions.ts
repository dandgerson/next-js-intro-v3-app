'use server'
import { revalidatePath } from 'next/cache'
import db from './db'

export const createTodo = async (formData: FormData) => {
  const content = formData.get('content') as string
  const completed = formData.get('completed') as string

  console.log({ completed })
  if (content) {
    await db.todo.create({
      data: { content, completed: completed === 'on' },
    })

    revalidatePath('/todos')
  }
}

export const updateTodo = async ({
  id,
  completed,
}: {
  id: string
  completed: boolean
}) => {
  await db.todo.update({
    where: { id },
    data: {
      completed,
    },
  })

  revalidatePath('/todos')
}
