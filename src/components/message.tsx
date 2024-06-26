import {Avatar, AvatarImage,} from "@/components/ui/avatar"
import clsx from "clsx";
import { wrap } from "module";

interface MessageProps {
    content: string,
    myMessage: boolean,
}

const Message: React.FC<MessageProps> = ({ content, myMessage }) => {
  const messageClass = myMessage ? "sended" : "received";

  return (
    <div style={{ overflowWrap: 'anywhere', maxWidth: '50%' }} className={`${messageClass} flex mt-4 mb-4 rounded-b-xl text-white px-2 py-4 size-fit min-w-10 justify-center m-1`} >
      <span>
        {content}
      </span>
    </div>
  );
};

export default Message
