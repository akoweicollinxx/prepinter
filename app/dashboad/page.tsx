'use client'

import { useSession, signOut } from 'next-auth/react'
import Image from 'next/image'

export default function DashboardPage() {
  const { data: session } = useSession()

  return (
    <div className="p-6 space-y-4">
      <h1 className="text-xl font-bold">Welcome back</h1>
      <p>{session?.user?.name}</p>
      <p>{session?.user?.email}</p>
      {session?.user?.image && (
        <Image
          src={session.user.image}
          alt="User"
          width={80}
          height={80}
          className="rounded-full"
        />
      )}
      <button
        onClick={() => signOut()}
        className="bg-red-500 text-white px-4 py-2 rounded"
      >
        Sign Out
      </button>
    </div>
  )
}
