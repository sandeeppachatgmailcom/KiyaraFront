import { useEffect, useState } from "react"
import useDynamicIcons from "../../hooks/useDynamicIcons"
import NewClient from "../common/NewClient"
import { ToastContainer } from "react-toastify"
import SingleUser from "../user/singleUser"
import nodeServer from "../../api/axios"
import { userApi } from "../../api/api"

const ClientComponent = () => {
    const getMyIcon = useDynamicIcons()
    const [newClient, setNewClient] = useState(false)
    const IconComponent = getMyIcon('createNew')
    const [clients, setClients] = useState([])
    const [selectedUser,setSelectedUser] = useState({})

    const fetchClients = async () => {
        try {
            const result = await nodeServer.get(userApi.getActiveClients)
            console.log(result.data.data)
            if (result.data) {
                setClients(result.data.data)
            }
            else {
                setClients([])
            }
        } catch (error) {

        }
    }

    useEffect(() => {
        fetchClients()
    }, [])

    return (
        <div className=" w-full h-[100%] flex flex-col bg-teal-200 bg-opacity-10 ">
           
            <div className=" w-full h-[100%] border flex flex-col relative ">
                <div onClick={() => setNewClient(true)} className="w-12 h-12 border-8  rounded-full rounded-br-none rotate-45 cursor-pointer flex justify-center items-center  bg-teal-800 text-white absolute top-5 end-5 ">
                    <IconComponent className='w-[80%] h-[80%] -rotate-45  ' />
                </div>
               
               <div className="h-20">

               </div>
                <div className="w-full   h-[100%]  flex  ">
                    <div className="w-full h-[100%]  border overflow-scroll  flex flex-col  " >
                        <div className="w-full flex h-10 border justify-start border-teal-600 bg-teal-600 bg-opacity-15 items-center ">
                            <div className="h-[90%] flex justify-center items-center w-10     rounded-full p-1 ms-5  bg-opacity-50 ">

                            </div>
                            <div className="h-[90%] flex justify-start items-start w-1/4  p-1 ms-5  ">
                                <h1 className="font-semibold ">Name</h1>
                            </div>
                            <div className="h-[90%] flex justify-start items-start  w-1/4  p-1 ms-5  ">
                                <h1 className=" ">Email</h1>
                            </div>
                            <div className="h-[90%] flex justify-start items-center w-1/4  p-1 ms-5  ">
                                <h1 className=" ">contact </h1>
                            </div>

                        </div>
                        {clients?.map((client) => {
                             console.log(client,client.userId,'22222222222')
                            return <div  key={client.userId}  className="h-10 border-gray-400 border-t-0 border w-full cursor-pointer hover:bg-teal-200 hover:bg-opacity-30 ">
                                <SingleUser bgcolour={"bg-teal-800 text-white"} selectUser={()=>{setSelectedUser(client);setNewClient(true)}} key={client.email} user={client} />
                            </div>
                        })

                        }
                    </div>
                    
                </div>
                {newClient &&
                    <div className="w-full absolute  h-full flex bg-gray-400 bg-opacity-55 justify-center items-center">
                        <div className="w-[30%] h-[50%] rounded-md overflow-hidden   ">
                            <NewClient inputUser={selectedUser} userType="Client" closeWindow={() => setNewClient(false)} />
                        </div>
                    </div>
                }
            </div>

        </div>
    )
}

export default ClientComponent