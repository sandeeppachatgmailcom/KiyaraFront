import { useEffect, useState } from "react"
import useDynamicIcons from "../../hooks/useDynamicIcons"
import NewClient from "../common/NewClient"
import { ToastContainer } from "react-toastify"
//import SingleUser from "../user/singleUser"
import nodeServer from "../../api/axios"
import { userApi } from "../../api/api"
import SingleUser from "../user/SingleUser"

const UserComponent = () => {
    const getMyIcon = useDynamicIcons()
    const [newClient, setNewClient] = useState(false)
    const IconComponent = getMyIcon('createNew')
    const [clients, setClients] = useState([])
    const [selectedUser, setSelectedUser] = useState({})
    const emptyuser = {
        firstname: '',
        email: '',
        password:'',
        lastName: '',
        contact: '',
        panCard:'',};
    const fetchClients = async () => {
        try {
            const result = await nodeServer.get(userApi.getActiveUsers)
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
    const updateParentList = (userId) => {
        fetchClients()
    };

    const updateParent = (tempUser) => {
        const temp = clients.map((user) => {
            if (user.userId == tempUser.userId) return tempUser
            else return user
        })
        console.log(temp)
        setClients(temp)
    }

    useEffect(() => {
        fetchClients()
    }, [])

    return (
        <div className=" w-full h-[100%] flex flex-col   ">
            <ToastContainer/>
            <div className=" w-full h-[100%] border flex flex-col relative ">
                <div onClick={() => {setNewClient(true);setSelectedUser(emptyuser) } } className="w-12 h-12 border-8  rounded-full rounded-br-none rotate-45 cursor-pointer flex justify-center items-center  bg-teal-800 text-white absolute top-5 end-5 ">
                    <IconComponent className='w-[80%] h-[80%] -rotate-45  ' />
                </div>
                <div className="h-20">

                </div>
                <div className="w-full   h-[100%]  flex  ">
                    <div className="w-full h-[100%]  border overflow-scroll  flex flex-col  " >
                         
                        <div className="w-full flex flex-col gap-1 ">
                            {clients?.map((client) => {
                                return <div key={client.userId} className="lg:h-12 bg-gradient-to-r border-gray-500 border-opacity-25   rounded-md  shadow-md    border w-full cursor-pointer hover:bg-cyan-200 hover:bg-opacity-40">
                                <SingleUser 
                                    updateParentList={() => updateParentList()}  
                                    bgcolour={"bg-cyan-800 text-white"} 
                                    selectUser={() => { setSelectedUser(client); setNewClient(true) }} 
                                    key={client.email} 
                                    user={client} 
                                /> 
                            </div>
                            })

                            }
                        </div>

                    </div>

                </div>
                {newClient &&
                    <div className="w-full absolute  h-full border rounded-md  p-1 flex  text-white  justify-center items-center">
                        <div className=" w-3/4 lg:w-[60%]   border rounded-md overflow-scroll bg-gradient-to-b from-cyan-800 to-gray-600 text-white   ">
                            <NewClient bgcolour={"bg-sky-800 text-white"}  updateParent={() => updateParentList()} inputUser={selectedUser} userType="user" closeWindow={() => setNewClient(false)} />
                        </div>
                    </div>
                }
            </div>

        </div>
    )
}

export default UserComponent