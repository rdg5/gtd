import { prisma } from '@/utils/db'
import { auth } from '@clerk/nextjs'

export const getUserByClerkID = async () => {
  const { userId } = auth()

  const user = await prisma.user.findUniqueOrThrow({
    where: {
      clerkId: userId,
    },
  })

  return user
}
