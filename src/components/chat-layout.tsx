"use client"

import { Avatar, AvatarImage } from "./ui/avatar";
import MessageList from "./message-list";
import Bottombar from "./bottombar";
import { useState } from "react";

interface Props {
    username: string,
    avatarImg: string,
    email: string,
}

const ChatLayout: React.FC<Props> = ({username, avatarImg, email}) => {

    const [messages, setMessages] = useState<{ content: string; myMessage: boolean }[]>([]);

    const sendMessage = (message: string) => {
      setMessages([...messages, { content: message, myMessage: true }]);
    };

    return (
        <div className="w-full relative">
            <div id="header">
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

            <div id="box">
                <MessageList messages={messages}></MessageList>
            </div>

            <div>
                <Bottombar onSendMessage={sendMessage}/>
            </div>
        </div>
    )
}

export default ChatLayout
