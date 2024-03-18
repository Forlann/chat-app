import Image from "next/image";
import { Button } from "@/components/ui/button"
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <p className="text-lg font-large">Hello World!</p>
      <Link href={'/'}>
        <Button variant="outline">Button</Button>
      </Link>
    </main>
  );
}