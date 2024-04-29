"use client"

import ChatCard from "./chat-card";
import socket from "@/server/socketConfig";
import { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useChatRoom } from "@/context/ChatRoomContext";


import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
  } from "@/components/ui/dialog"

  import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
interface Card {
    username: string,
    email: string,
    avatarImg: string
}

interface Props {
    cardList: Card[]
}

const ChatList: React.FC<Props> = ({ cardList }) => {

    const { setRoom, room } = useChatRoom();

    return (
        <div className="flex flex-col z-20 box-border items-center text-white w-1/5 border-r-2 border-cyan-50">
            {cardList.map((card, index) => (
                <ChatCard 
                    key={index} 
                    username={card.username}
                    email={card.email}
                    avatarImg={card.avatarImg}                    
                />
            ))}
            <div className="">
                <Dialog>
                    <DialogTrigger>
                        <Button variant="secondary" className="rounded-3xl">+</Button> 
                    </DialogTrigger>
                    <DialogContent>
                        <DialogHeader>
                            <DialogTitle>Nova Sala</DialogTitle>
                        <DialogDescription>
                            Crie uma nova sala para conversar com seus amigos.
                        </DialogDescription>
                        </DialogHeader>
                        <div className="grid grid-cols-4 items-center gap-4">
                            <Label htmlFor="room_name" className="text-left">
                                Nome da Sala
                            </Label>
                            <Input
                            id="room_name"
                            className="col-span-3"
                            value={room}
                            onChange={(e) => {
                                setRoom(e.target.value)
                            }}
                            />
                        </div>
                        <div className="text-current grid grid-cols-4 items-center gap-4">
                            <Label htmlFor="users" className="text-left">
                                Usuários
                            </Label>
                            <Select>
                                <SelectTrigger className="col-span-3">
                                    <SelectValue placeholder="Theme" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="light">Light</SelectItem>
                                    <SelectItem value="dark">Dark</SelectItem>
                                    <SelectItem value="system">System</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>
                        <DialogFooter>
                            <Button
                                type="submit"
                                onClick={() => {
                                    socket.emit('join-room', room)
                                }}>Criar Sala</Button>
                        </DialogFooter>
                    </DialogContent>
                </Dialog>
            </div>
        </div>
    )
}

export default ChatList