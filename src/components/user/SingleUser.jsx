import { useEffect, useState } from "react"
import useDynamicIcons from "../../hooks/useDynamicIcons"
import turnUserEnabledDisabled from "../../utils/turnUserEnabledDisabled"
import { toast, ToastContainer } from "react-toastify"
import confirmAction from "../common/confirmAction"
import deleteUser from "../../utils/deleteUser"

const SingleUser = ({ bgcolour, user, selectUser, updateParentList }) => {

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

    const handleDeleteUser = async () => {
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
        <div className="w-full flex   lg:flex-row flex-col rounded-lg  h-[100%]   justify-start  items-center ">
            <ToastContainer />
            <div className="   justify-start items-center       flex w-full   lg:w-4/12 lg:justify-start ">
                <div className={`h-10 w-10 m-1  flex justify-center items-center            rounded-full   ${bgcolour}`}>
                    <h1 className=" ">
                        {curentUser?.firstname?.[0].toUpperCase() || ''} {curentUser?.lastName?.[0].toUpperCase() || ''}
                    </h1>
                </div>
                <div className="h-[90%] flex justify-start items-center lg:w-8/12  p-1 ">
                    <h1 className="  font-thin">
                        {curentUser?.firstname || ''} {curentUser?.lastName || ''}
                    </h1>
                </div>
            </div>

            <div className="  p-1 gap-4      flex w-full items-center lg:w-4/12 justify-start  ">
                <div className={`h-10 w-10 lg:w-0 m-1  flex justify-center items-center       rounded-full    `}>

                </div>
                <div className={`h-[90%] flex justify-start items-start  lg:w-2/4      `}>
                    <h1 className="  font-thin ">{curentUser?.email?.toLowerCase()}</h1>
                </div>
                <div className="h-[90%] flex justify-start items-start lg:w-2/4       ">
                    <h1 className="  font-thin ">{curentUser?.contact?.toLowerCase()}</h1>
                </div>

            </div>
            <div className="   flex w-full items-center lg:w-4/12 justify-end p-5 ">

                <div className="h-10 flex justify-end  gap-4 items-center w-1/4 cursor-pointer p-1 me-5  ">
                    <IconView onClick={() => selectUser()} className='w-5  h-5 text-blue-500' />
                    <IconDelete onClick={() => { handleDeleteUser() }} className='w-5  h-5 text-gray-800' />
                    <div onClick={() => handleuserEnableDisable()} className="w-5 h-5 flex justify-center items-center" >
                        {
                            curentUser?.isActive ? <IconStop className='w-full  h-full text-red-600' /> : <IconResume className='w-5  h-5 text-blue-500' />
                        }
                    </div>

                </div>

            </div>

        </div>
    )
}

export default SingleUser