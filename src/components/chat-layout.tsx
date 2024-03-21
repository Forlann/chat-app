import { Avatar, AvatarImage } from "./ui/avatar";
import { Button } from "./ui/button";
import { Icons } from "@/components/icons"
import ChatCard from "@/components/chat-card"
import MessageList from "./message-list";
import Bottombar from "./bottombar";

interface Props {
    username: string,
    avatarImg: string,
    email: string,
}


const ChatLayout: React.FC<Props> = ({username, avatarImg, email}) => {
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
                <MessageList content=""></MessageList>
            </div>

            <div>
                <Bottombar content=""/>
            </div>
        </div>
    )
}

export default ChatLayout
