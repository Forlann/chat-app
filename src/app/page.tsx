'use client'

import { Button } from "@/components/ui/button"
import { useRouter } from 'next/navigation'

export default function Home() {

  const router = useRouter();

  return (
    <main className="bg-current flex min-h-screen flex-col items-center justify-between p-24 color:">
      <h1 className="text-3xl font-bold leading-tight md:text-6xl text-white">Main Page</h1>
      <div className="flex gap-5">
        <Button variant="outline" onClick={() => router.push('./login')}>Página de Login</Button>
        <Button variant="outline" onClick={() => router.push('./chat')}>Página de Chat</Button>
      </div>
    </main>
  );
}