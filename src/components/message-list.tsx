import Message from "./message"

interface messageListProps {
    messages: {content: string, myMessage: boolean}[];
}

const MessageList: React.FC<messageListProps> = ({messages}) => {
    return (
        <div>
        {messages.map((message, index) => (
          <Message key={index} content={message.content} myMessage={message.myMessage} />
        ))}
      </div>
    )
}

export default MessageList