import React from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import './globals.css'

export default function Email_Senha() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100vh' }}>
      <p style={{ marginBottom: '8px', textAlign: 'center' }}>Preencha os dados abaixo:</p>
      <div style={{ marginBottom: '16px', width: '280px' }}>
        <Input type="email" placeholder="Email" style={{ width: '100%', borderRadius: '4px', border: '1px solid #ccc', padding: '8px' }} />
      </div>
      <div style={{ marginBottom: '16px', width: '280px' }}>
        <Input type="senha" placeholder="Senha" style={{ width: '100%', borderRadius: '4px', border: '1px solid #ccc', padding: '8px' }} />
      </div>
      <Log />
    </div>
  );
}

export function Log() {
  return (
    <div style={{ width: '280px' }}>
      <Button variant="secondary" style={{ width: '100%', borderRadius: '4px', border: 'none', padding: '10px' }}>Entrar</Button>
    </div>
  );
}
