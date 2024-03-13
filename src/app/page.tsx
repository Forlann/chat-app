import Image from "next/image";
import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <p className="text-lg font-large">Hello World!</p>
      <Button variant="outline">Button</Button>
    </main>
  );
}