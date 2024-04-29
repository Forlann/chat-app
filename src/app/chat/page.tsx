import ChatLayout from "@/components/chat-layout"
import ChatList from "@/components/chats-list";
import { ChatRoomProvider } from "@/context/ChatRoomContext";

export default function Home() {

  const chatList = [
    {
      username: "Kauê Forlan",
      email: "jkaueforlan@gmail.com",
      avatarImg: "https://github.com/Forlann.png"
    },
    {
      username: "Igor Limaverde",
      email: "i@exemplo.com",
      avatarImg: "https://github.com/igorin23.png"
    },    
    {
      username: "Henrique Sabara",
      email: "h@exemplo.com",
      avatarImg: "https://github.com/HenriqueSabara.png"
    }
  ]

  return (
    <ChatRoomProvider>
      <main className="flex bg-current text-foreground min-h-screen">
        <ChatList cardList={chatList}/>
        <ChatLayout username="Kauê Forlan" email="jkaueforlan@gmail.com" avatarImg="https://github.com/Forlann.png"/>
      </main>
    </ChatRoomProvider>
  );
}