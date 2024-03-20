import { getUserByClerkID } from '@/utils/auth'

import { prisma } from '@/utils/db'
import { revalidatePath } from 'next/cache'
import { NextResponse } from 'next/server'
export const POST = async () => {
  const user = await getUserByClerkID()

  const entry = await prisma.todo.create({
    data: {
      userId: user.id,
      content: 'Write the next todo',
    },
  })

  revalidatePath(`/todo`)
  return NextResponse.json({ data: entry })
}
