import { Icons } from "./icons"
import { Button } from "./ui/button"
import { Input } from "./ui/input"

interface bottombarPros {
    content: string
}

const Bottombar: React.FC<bottombarPros> = ({content}) => {
    return (
        <div className="border-t-2 px-1 py-2 flex items-center space-x-2 absolute bottom-0 w-full">
            <Input  className="" type="text" placeholder="Type Message..." />
            <Button variant="outline" size="icon"><Icons.arrow_rigt/></Button>
        </div>
    )
}

export default Bottombar