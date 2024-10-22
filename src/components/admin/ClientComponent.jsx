import { useState } from "react"
import useDynamicIcons from "../../hooks/useDynamicIcons"
import NewClient from "../common/NewClient"

const ClientComponent = () => {
    const getMyIcon = useDynamicIcons()
    const [newClient, setNewClient] = useState(false)
    const IconComponent = getMyIcon('createNew')
    return (
        <div className=" w-full h-[100%]  ">
            <div className=" w-full h-[100%] ">
                <div onClick={() => setNewClient(true)} className="w-10 h-10 rounded-full rounded-br-none rotate-45 cursor-pointer flex justify-center items-center  bg-yellow-400 absolute top-5 end-5 ">


                    <IconComponent className='w-[50%] h-[50%] ' />

                </div>
                {newClient &&
                    <div className="w-full h-[100%] flex justify-center items-center">
                        <div className="w-[50%] h-[50%] rounded-md overflow-hidden">
                            <NewClient closeWindow={()=>setNewClient(false)} />
                        </div>
                    </div>
                }
            </div>

        </div>
    )
}

export default ClientComponent