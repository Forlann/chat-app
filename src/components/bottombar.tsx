"use client"

import { useState } from "react"
import { Icons } from "./icons"
import { Button } from "./ui/button"
import { Input } from "./ui/input"

interface bottombarPros {
    onSendMessage: (message: string) => void;
}

const Bottombar: React.FC<bottombarPros> = ({onSendMessage}) => {

    const [barValue, setBarValue] = useState<string>("")

    const handleSubmit = () => {
        if (barValue.trim() !== "") {
            onSendMessage(barValue)
            setBarValue("")
        }
    }

    return (
        <div className="border-t-2 px-1 py-2 flex items-center space-x-2 absolute bottom-0 w-full">
            <Input  
                className="" 
                type="text" 
                placeholder="Type Message..." 
                value={barValue}
                onChange= {(e) => {
                    setBarValue(e.target.value)
                }}
                onKeyDown={(e) => {
                    if (e.key === "Enter") {
                        handleSubmit();
                }}}
            />
            <Button variant="outline" size="icon" onClick={handleSubmit}><Icons.arrow_rigt/></Button>
        </div>
    )
}

export default Bottombar