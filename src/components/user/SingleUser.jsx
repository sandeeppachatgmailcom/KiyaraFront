import { useEffect, useState } from "react"
import useDynamicIcons from "../../hooks/useDynamicIcons"

const SingleUser = ( {user,selectUser} )=>{

    const[curentUser,setCurrentUser] = useState(user)
    const getMyIcon = useDynamicIcons()
    const IconEdit = getMyIcon('edit')
    const IconDelete = getMyIcon('delete')
    const IconStop = getMyIcon('block')
    const IconResume = getMyIcon('resume')
    const IconView  = getMyIcon('view')

    useEffect(()=>{
        setCurrentUser(user)
        console.log(user,'--------------')
    },[user])

    return(
        <div className="w-full flex h-[100%] border justify-start  items-center ">
            <div className="h-[90%] flex justify-center items-center w-10   border rounded-full p-1 ms-5 bg-blue-500 bg-opacity-50 ">
                <h1 className=" text-2xl">{curentUser?.firstname?.[0].toUpperCase() +curentUser?.lastName?.[0].toUpperCase()  }</h1>
            </div>
            <div className="h-[90%] flex justify-start items-center w-1/4  p-1 ms-5  ">
                <h1 className=" ">{curentUser?.firstname  +' ' +curentUser?.lastName   }</h1>
            </div>
            <div className="h-[90%] flex justify-start items-center w-1/4  p-1 ms-5  ">
                <h1 className=" ">{curentUser?.email?.toLowerCase() }</h1>
            </div>
            <div className="h-[90%] flex justify-start items-center w-1/4  p-1 ms-5  ">
                <h1 className=" ">{curentUser?.contact?.toLowerCase() }</h1>
            </div>
            <div className="h-[90%] flex justify-end  gap-4 items-center w-1/4  p-1 me-5  ">
                <IconEdit className='w-5  h-5 text-orange-300'/>
                <IconDelete className='w-5  h-5 text-gray-500'/>
                <IconStop className='w-5  h-5 text-red-600'/>
                <IconResume className='w-5  h-5 text-blue-500'/>
                <IconView onClick={()=>selectUser()} className='w-5  h-5 text-blue-500'/>
                
            </div>

        </div>
    )
}

export default SingleUser