import {Avatar, AvatarImage,} from "@/components/ui/avatar"

interface chatProps {
    username: string,
    email: string,
    avatarImg: string
}

const ChatCard: React.FC<chatProps> = ({username, email, avatarImg}) => {
    return (
        <div className="flex w-full gap-3 items-center p-3 border-solid border-cyan-50 border-b-2">
          <Avatar className="">
            <AvatarImage src={avatarImg} />
          </Avatar>
        <div>
          <p className="text-sm font-medium leadin-none">{username}</p>
          <p className="text-sm text-muted-foreground">{email}</p>
        </div>
      </div>
    )
}

export default ChatCard