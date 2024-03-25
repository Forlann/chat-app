import {Avatar, AvatarImage,} from "@/components/ui/avatar"

interface MessageProps {
    content: string,
    myMessage: boolean,
}

const Message: React.FC<MessageProps> = ({ content, myMessage }) => {
    const messageClass = myMessage ? "enviado" : "recebido";
    return (
      <div className={`${messageClass} flex flex-col items-${myMessage ? "end" : "start"}`}>
        <span className={`bg-${myMessage ? "blue" : "gray"}-500 text-white px-2 py-4 ${myMessage ? "mr" : "ml"}-2 mt-2 mb-2 rounded-b-xl ${myMessage ? "rounded-tr-xl" : "rounded-tl-xl"}`}>
          {content}
        </span>
      </div>
    );
  };

export default Message
