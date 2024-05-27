'use client'

import React, { createContext, useContext, useState, ReactNode } from 'react';

const ChatRoomContext = createContext<{ room: string; setRoom: (room: string) => void } | undefined>(undefined);

export function useChatRoom() {
  const context = useContext(ChatRoomContext);
  if (context === undefined) {
    throw new Error('useChatRoom must be used within a ChatRoomProvider');
  }
  return context;
}

interface ChatRoomProviderProps {
  children: ReactNode;
}

export const ChatRoomProvider: React.FC<ChatRoomProviderProps> = ({ children }) => {
  const [room, setRoom] = useState<string>('');

  return (
    <ChatRoomContext.Provider value={{ room, setRoom }}>
      {children}
    </ChatRoomContext.Provider>
  );
};
