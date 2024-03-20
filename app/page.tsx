import { auth } from '@clerk/nextjs'
import Link from 'next/link'

export default async function Home() {
  return (
    <div className="w-screen h-screen bg-black flex justify-center items-center text-white">
      <div className="w-full max-w-[600px] mx-auto">
        <h1 className="text-6xl mb-4">The best todo app</h1>
        <p className="text-2xl text-white/60">
          Some description of the best todo app
        </p>
        <div>
          <Link href={'/dashboard'}>
            <button className="bg-blue-600 p-4 rounded-lg text-xl">
              Get started
            </button>
          </Link>
        </div>
      </div>
    </div>
  )
}
