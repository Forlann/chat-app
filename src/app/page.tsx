import Image from "next/image"
import './globals.css'
import { Button } from "@/components/ui/button"
import { Icons } from "@/components/icons"
// import { ChevronRightIcon } from "@radix-ui/react-icons"
import { Input } from "@/components/ui/input"
import {Avatar,AvatarFallback,AvatarImage,} from "@/components/ui/avatar"

export default function Home() {
  return (
    
    <main className="bg-current text-foreground min-h-screen w-full">
      <div>
        {/*Topo Mensagem*/}
        <div>
          {/*Perfil*/}
          <div className="border-b-2 px-1 py-1 pb-2 flex w-full items-start space-x-2 space-y-3">
            <Avatar  className="ml-2 mt-2">
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <p className="text-white text-lg font-large">Igor Limaverde</p>
          </div>
          {/**/}
        </div>

        {/*Corpo Mensagem*/}
        <div className="flex flex-col w-full">
          {/*Texto Recebido*/}
          <div className="flex flex-col items-start">
            <span className="bg-gray-500 text-white px-2 py-4 ml-2 mt-2 mb-2 rounded-b-xl rounded-tl-xl"> 
              How Can I Help?
            </span>
          </div>

          {/*Texto Enviado*/}
          <div className="flex flex-col items-end">
            <span className="bg-blue-500 px-2 py-4 mr-2 mt-2 mb-2 rounded-b-xl rounded-tr-xl">
              Good Place for Coffee.
            </span>
          </div>
          {/*Input Mensagem*/}
          <div className="border-t-2 px-1 py-2 flex items-center space-x-2 absolute bottom-0 w-full">
            <Input  className="text-white" type="" placeholder="Type Message..." />
            <Button variant="outline" size="icon"><Icons.arrow_rigt/></Button>
          </div>
        </div>

      </div>
    </main>
  );
}