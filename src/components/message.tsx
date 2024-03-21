import {Avatar, AvatarImage,} from "@/components/ui/avatar"

interface messageProps {
    content: string,
}


const Message: React.FC<messageProps> = ({content}) => {
    return (
        <div>
            <div className="recebido flex flex-col items-start">
                <span className="bg-gray-500 text-white px-2 py-4 ml-2 mt-2 mb-2 rounded-b-xl rounded-tl-xl"> 
                    {content}
                </span>
            </div>

            <div className="enviado flex flex-col items-end">
                <span className="bg-blue-500 px-2 py-4 mr-2 mt-2 mb-2 rounded-b-xl rounded-tr-xl">
                    Tudo bem, e você?
                </span>
            </div>
        </div>
    )
}

export default Message
