'use client'

import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import socket from "@/server/socketConfig";

export default function Email_Senha() {

  const router = useRouter();

  const [username, setUsername] = useState<string>("")

  return (
    <div className="bg-current" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100vh' }}>
      <h1 className="text-white text-xl">Login</h1>
      <p className="text-white" style={{ marginBottom: '8px', textAlign: 'center' }}>Preencha os dados abaixo:</p>
      <div style={{ marginBottom: '16px', width: '280px' }}>
        <Input 
        type="Username" 
        onChange={(e) => {
          setUsername(e.target.value)
        }}
        placeholder="Username"
        value={username}
        style={{ width: '100%', borderRadius: '4px', border: '1px solid #ccc', padding: '8px' }} />
      </div>
      <div style={{ marginBottom: '16px', width: '280px' }}>
        <Input 
        type="password" 
        placeholder="Senha" 
        style={{ width: '100%', borderRadius: '4px', border: '1px solid #ccc', padding: '8px' }} />
      </div>
      <div style={{ width: '280px' }}>
      <Button 
      variant="secondary" 
      onClick={() => {
        socket.emit("set username", (username))
        router.push('/chat'
      )}} 
      style={{ width: '100%', borderRadius: '4px', border: 'none', padding: '10px' }}>
      Entrar</Button>
    </div>
    </div>
  );
}
