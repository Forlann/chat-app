'use client'

import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import socket from "@/server/socketConfig";

export default function Email_Senha() {
  const [data, setData] = useState({ username: '', email: '', password: '' });
  const router = useRouter();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setData(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async () => {
    socket.emit("set username", data.username);
    try {
      const response = await fetch('http://localhost:8080/database/create-user', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        alert('Data sent successfully');
        router.push('/chat');
      } else {
        alert('Failed to send data');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Error sending data');
    }
  };

  return (
    <div className="bg-current" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100vh' }}>
      <h1 className="text-white text-xl">Login</h1>
      <p className="text-white" style={{ marginBottom: '8px', textAlign: 'center' }}>Preencha os dados abaixo:</p>
      <div style={{ marginBottom: '16px', width: '280px' }}>
        <Input 
          type="text" 
          name="username"
          onChange={handleChange}
          placeholder="Username"
          value={data.username}
          style={{ width: '100%', borderRadius: '4px', border: '1px solid #ccc', padding: '8px' }} 
        />
      </div>
      <div style={{ marginBottom: '16px', width: '280px' }}>
        <Input 
          type="email" 
          name="email"
          onChange={handleChange}
          placeholder="Email"
          value={data.email}
          style={{ width: '100%', borderRadius: '4px', border: '1px solid #ccc', padding: '8px' }} 
        />
      </div>
      <div style={{ marginBottom: '16px', width: '280px' }}>
        <Input 
          type="password" 
          name="password"
          onChange={handleChange}
          placeholder="Senha"
          value={data.password}
          style={{ width: '100%', borderRadius: '4px', border: '1px solid #ccc', padding: '8px' }} 
        />
      </div>
      <div style={{ width: '280px' }}>
        <Button 
          variant="secondary" 
          onClick={handleSubmit} 
          style={{ width: '100%', borderRadius: '4px', border: 'none', padding: '10px' }}
        >
          Entrar
        </Button>
      </div>
    </div>
  );
}
