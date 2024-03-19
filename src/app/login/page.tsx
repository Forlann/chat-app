'use client'

import React from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

export default function Email_Senha() {


  return (
    <div className="bg-current" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100vh' }}>
      <h1 className="text-white text-xl">Login</h1>
      <p className="text-white" style={{ marginBottom: '8px', textAlign: 'center' }}>Preencha os dados abaixo:</p>
      <div style={{ marginBottom: '16px', width: '280px' }}>
        <Input type="email" placeholder="Email" style={{ width: '100%', borderRadius: '4px', border: '1px solid #ccc', padding: '8px' }} />
      </div>
      <div style={{ marginBottom: '16px', width: '280px' }}>
        <Input type="password" placeholder="Senha" style={{ width: '100%', borderRadius: '4px', border: '1px solid #ccc', padding: '8px' }} />
      </div>
      <Log />
    </div>
  );
}

export function Log() {

  const router = useRouter();

  return (
    <div style={{ width: '280px' }}>
      <Button 
      variant="secondary" 
      onClick={() => {router.push('/chat')}} 
      style={{ width: '100%', borderRadius: '4px', border: 'none', padding: '10px' }}>
      Entrar</Button>
    </div>
  );
}
