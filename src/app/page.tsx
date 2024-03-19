'use client'

import Image from "next/image";
import { Button } from "@/components/ui/button"
import Link from "next/link";
import { useRouter } from 'next/navigation'

export default function Home() {

  const router = useRouter();

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <p className="text-lg font-large">Main Page</p>
      <Button variant="outline" onClick={() => router.push('./login')}>Button</Button>
    </main>
  );
}