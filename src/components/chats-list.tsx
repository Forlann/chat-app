import ChatCard from "./chat-card";
// import Message from "./message";

interface Card {
    username: string,
    email: string,
    avatarImg: string
}

interface Props {
    cardList: Card[]
}

const ChatList: React.FC<Props> = ({ cardList }) => {
    return (
        <div className="z-20 box-border text-white w-1/5 border-r-2 border-cyan-50">
            {cardList.map((card, index) => (
                <ChatCard 
                    key={index} 
                    username={card.username}
                    email={card.email}
                    avatarImg={card.avatarImg}                    
                />
            ))}
        </div>
    )
}

export default ChatList