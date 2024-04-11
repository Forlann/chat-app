import {Avatar, AvatarImage,} from "@/components/ui/avatar"
import clsx from "clsx";

interface MessageProps {
    content: string,
    myMessage: boolean,
}

const Message: React.FC<MessageProps> = ({ content, myMessage }) => {
  const messageClass = myMessage ? "enviado" : "recebido";
  const bubbleClass = clsx(
    `bg-${myMessage ? "blue" : "gray"}-500 items-${myMessage ? "end" : "start"} ml-${myMessage ? "auto" : "8px" }`);

  return (
    <div className={`${messageClass} ${bubbleClass} flex mt-4 mb-4 rounded-b-xl text-white px-2 py-4 size-fit min-w-10 justify-center m-1`}>
      <span className={bubbleClass}>
        {content}
      </span>
    </div>
  );
};

export default Message
