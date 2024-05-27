import { useEffect, useRef } from "react";
import Message from "./message"

interface messageListProps {
    messages: {content: string, myMessage: boolean}[];
}

const MessageList: React.FC<messageListProps> = ({messages}) => {
  const messageListRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Função para rolar para baixo automaticamente
    const scrollToBottom = () => {
      console.log('scrollando')
      if (messageListRef.current) {
        messageListRef.current.scrollTop = messageListRef.current.scrollHeight;
      }
    };

    // Rolando para baixo sempre que houver novas mensagens
    scrollToBottom();
  }, [messages]);

  
    return (
        <div className="w-full">
        {messages.map((message, index) => (
          <Message key={index} content={message.content} myMessage={message.myMessage} />
        ))}
      </div>
    )
}

export default MessageList