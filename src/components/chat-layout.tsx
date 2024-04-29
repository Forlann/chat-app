"use client"

import { Avatar, AvatarImage } from "./ui/avatar";
import MessageList from "./message-list";
import Bottombar from "./bottombar";
import { useEffect, useState } from "react";
import socket from "@/server/socketConfig";

interface Props {
    username: string,
    avatarImg: string,
    email: string,
}

const ChatLayout: React.FC<Props> = ({username, avatarImg, email}) => {

    const [messages, setMessages] = useState<{ content: string; myMessage: boolean }[]>([]);

    const sendMessage = (message: string, myMessage?: boolean) => {
        const messageType = myMessage ? myMessage : true; // Se não for enviado nenhum parametro myMassege é true por padrão
        setMessages([...messages, { content: message,  myMessage: messageType }]);
    };

    useEffect(() => {
        socket.on('chat message', (messageObject) => {
            console.log('Mensagem recebida do servidor:', messageObject);

            setMessages([...messages, { content: messageObject.content, myMessage: false}]) // Adiciona a mensagem ao estado de mensagens
        });
    })
        

    return (    
        <div className="relative w-full">
            <div className="static bg-current" id="header">
                <div className=" border-b-2 p-2 flex gap-3 items-center">
                    <Avatar  className="ml-3">
                        <AvatarImage src={avatarImg} />
                    </Avatar>
                    <div className="flex flex-col">
                        <span className="text-white text-lg font-large">{username}</span>
                        <span className="text-sm text-muted-foreground">{email}</span>
                    </div>
                </div>
            </div>
            <div className="absolute flex box-border h-5/6 w-full z-0 border-1 overflow-y-scroll" id="box">
                <MessageList messages={messages}></MessageList>
            </div>
            <div className=" flex z-30">
                <Bottombar onSendMessage={sendMessage}/>
            </div>

        </div>
    )
}

export default ChatLayout
