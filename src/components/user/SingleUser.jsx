import { useEffect, useState } from "react"
import useDynamicIcons from "../../hooks/useDynamicIcons"
import turnUserEnabledDisabled from "../../utils/turnUserEnabledDisabled"
import { toast, ToastContainer } from "react-toastify"
import confirmAction from "../common/confirmAction"
import deleteUser from "../../utils/deleteUser"

const SingleUser = ({ bgcolour, user, selectUser,updateParentList }) => {

    const [curentUser, setCurrentUser] = useState(user)
    const getMyIcon = useDynamicIcons()
    const IconDelete = getMyIcon('delete')
    const IconStop = getMyIcon('block')
    const IconResume = getMyIcon('resume')
    const IconView = getMyIcon('view')

    useEffect(() => {
        setCurrentUser(user)
    }, [user])
    const handleuserEnableDisable = async () => {
        const confirmed = await confirmAction(`Are you sure you want to modify ${curentUser.firstname || ''}?`);
        
        if (confirmed) {
            const result = await turnUserEnabledDisabled(curentUser.userId)
            if (result.status) {
                const temp = {
                    ...curentUser,
                    isActive: !curentUser.isActive
                }
                setCurrentUser(temp)
                toast.success(result.message)
            }
        }
    }

    const handleDeleteUser =async ()=>{
        try {
             
            const confirmed = await confirmAction(`Are you sure you want to delete ${curentUser.firstname || ''}?`);
            
            if (confirmed) {
                const result = await deleteUser(curentUser.userId)
                 
                if (result.status) {
                    const temp = {
                        ...curentUser,
                        isActive: !curentUser.isActive
                    }
                    setCurrentUser(temp)
                    toast.success(result.message)
                    updateParentList()
                }
         
            }

            
        } catch (error) {
            
        }

    }


    return (
        <div className="w-full flex h-[100%]   justify-start  items-center ">
            <ToastContainer/>
            <div className={`h-[90%] flex justify-center items-center w-10   border rounded-full p-1 ms-5 ${bgcolour} bg-opacity-50`}>
                <h1 className="  ">{curentUser?.firstname?.[0].toUpperCase()||'' + curentUser?.lastName?.[0].toUpperCase() ||''}</h1>
            </div>
            <div className="h-[90%] flex justify-start items-center w-1/4  p-1 ms-5  ">
                <h1 className=" ">{curentUser?.firstname||'' + ' ' + curentUser?.lastName ||''}</h1>
            </div>
            <div className="h-[90%] flex justify-start items-center w-1/4  p-1 ms-5  ">
                <h1 className=" ">{curentUser?.email?.toLowerCase()}</h1>
            </div>
            <div className="h-[90%] flex justify-start items-center w-1/4  p-1 ms-5  ">
                <h1 className=" ">{curentUser?.contact?.toLowerCase()}</h1>
            </div>
            <div className="h-[90%] flex justify-end  gap-4 items-center w-1/4 cursor-pointer p-1 me-5  ">
                <IconView onClick={() => selectUser()} className='w-5  h-5 text-blue-500' />
                <IconDelete onClick={()=>{handleDeleteUser()}} className='w-5  h-5 text-gray-500' />
                <div onClick={() => handleuserEnableDisable()} className="w-10 h-full flex justify-center items-center" >
                    {
                        curentUser?.isActive ? <IconStop className='w-5  h-5 text-red-600' /> : <IconResume className='w-5  h-5 text-blue-500' />
                    }
                </div>



            </div>

        </div>
    )
}

export default SingleUser