import { useEffect, useState } from "react"
import useDynamicIcons from "../../hooks/useDynamicIcons"
import SingleUser from "../user/SingleUser"

import nodeServer from "../../api/axios"
import { userApi } from "../../api/api"


const UserComponent = () => {
    const getMyIcon = useDynamicIcons()
    const NewIcon = getMyIcon("createNew")
    const [users,setUsers] = useState()
    const fetchClients = async () => {
        try {
            const result = await nodeServer.get(userApi.getActiveUsers)
            console.log(result.data.data)
            if (result.data) {
                setUsers(result.data.data)
            }
            else {
                setUsers([])
            }
        } catch (error) {

        }
    }

    
    useEffect(() => {
        fetchClients()
    }, [])



    return (
        <div className="w-full h-[100%] relative flex flex-col bg-sky-200 bg-opacity-10 border border-sky-700 border-opacity-10  ">
            <div className="absolute w-10 h-10 flex justify-center items-center top-5 end-5  rounded-full rounded-br-none rotate-45 border-4 bg-sky-700">
                <NewIcon className="h-[180%] w-[80%] text-white -rotate-45 " />
            </div>
            <div className="w-full h-full  ">
                <div className="w-full h-20 bg-blue border ">

                </div>
                <div className="w-full h-auto bg--300">
                {users?.map((user)=>{
                    console.log(user,user.userId,'111111111111111111111111')
                    return (
                        <div key={user.userId} className="w-full hover:bg-sky-600 hover:bg-opacity-15 cursor-pointer h-10 border-b  text-sky-800  border-blue-300 ">
                            <SingleUser bgcolour={"bg-sky-800 text-white "} user={user}  />
                        </div>
                        )
                })}
                </div>
            </div>
        
        </div>
    )
}

export default UserComponent