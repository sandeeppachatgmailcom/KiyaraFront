import { useEffect, useState } from "react";
import useDynamicIcons from "../../hooks/useDynamicIcons";
import validatePan from "../../utils/validatePan";
import validateEmail from "../../utils/validateEmail";
import useCheckPanValid from "../../hooks/useCheckPanValid";
import nodeServer from "../../api/axios";
import { userApi } from "../../api/api";
import { toast, ToastContainer } from "react-toastify";
 



const NewClient = ({ closeWindow, userType,inputUser }) => {
  const emptyuser = {
    userType: userType,
    firstname: '',
    email: {
      value: '',
      valid: false
    },
    password: {
      value: '',
      valid: false
    },
    lastName: '',
    contact: '',
    userType: '',
    panCard: {
      value: '',
      valid: false,
      isLegal: false,
      onlineVerified: false
    },
  
  }
  const getMyIcon = useDynamicIcons();
  const CloseIcon = getMyIcon('close');
  const [panValid, setPanValid] = useState(false)
  const checkValidPanOnline = useCheckPanValid()
  const [user, setUser] = useState(emptyuser)
  const VerfiedIcon = getMyIcon('verified');
  useEffect(()=>{
    const temp = {
      ...user,
      userType:userType
    }
    setUser(temp)
  },[userType])

  useEffect(()=>{
    const temp = {
      ...inputUser,
      email:{
        value: inputUser.email,
        valid: true
      } ,
      panCard:{
        value: inputUser.panCard,
        valid: true,
        isLegal: true,
        onlineVerified: true
      

      }
      
    }
    setUser(temp)
  },[inputUser])

  const handleChange = async (e) => {
    const temp = {
      ...user,
    }

    let { name, value } = e.target
    if (name === 'panCard') {
      value = await value.slice(0, 10);
      const valid = validatePan(value.toUpperCase());
      const onlineVerified = value?.length > 9 ? await checkValidPanOnline(value.toUpperCase()) : false;
      temp[name] = {
        value,
        valid,
        onlineVerified: onlineVerified ? onlineVerified : false,
      };
    }

    else if (name == 'email') {
      let valid = validateEmail(value)
      temp[name] = { value, valid }
    }


    else {
      temp[name] = value
    }
    setUser(temp)
  }

  const handleSave = async ()=>{
    try {
      const userData = {
        ...user,
        email:user.email.value,
        panCard:user.panCard?.value?.toUpperCase()
      }
      const result = await nodeServer.post(userApi.create,{...userData})
      console.log(result,'reult')
      if(result.data.status){
        toast.success(result.data.message)
        setUser(emptyuser)
        closeWindow()
        
      }
      else {
        toast.error(result.data.message)
      }
    } catch (error) {
      
    }
  }


  return (
    <div className="w-full justify-between flex  overflow-hidden flex-col h-[100%] border bg-opacity-10">
       
      <div className="h-10 items-center w-full bg-violet-600 flex justify-between">
        <h1 className="p-2 text-white"> {userType + ' Registration '}</h1>
        <CloseIcon onClick={closeWindow} className="me-2 cursor-pointer text-white" />
       
      </div>

      <div className="flex lg:flex-row justify-center items-center lg:flex-wrap flex-col   p-4  ">
        {/* First Name */}
        <div className="w-full lg:w-5/12 p-1 relative shadow-lg  m-1 ">
          <label className={`${!user?.firstname?.length ? 'text-red-600' : ''} absolute text-sm bg-transparent px-1 text-gray-700 -top-3 left-2`} > First Name </label>
          <input type="text" onChange={(e) => handleChange(e)} value={user?.firstname} name="firstname" placeholder="Enter your first name" className="h-10 px-4 text-sm border w-full border-gray-300 focus:outline-none focus:ring-2 focus:border-transparent shadow-md transition duration-200 ease-in-out text-gray-800 mt-4" />
        </div>

        {/* Last Name */}
        <div className="w-full lg:w-5/12 p-1 relative shadow-lg m-1 ">
          <label className={`${!user?.lastName?.length ? 'text-red-600' : ''} absolute text-sm bg-transparent px-1 text-gray-700 -top-3 left-2`} > Last Name </label>
          <input type="text" onChange={(e) => handleChange(e)} value={user?.lastName} name="lastName" placeholder="Enter your last name" className="h-10 px-4 text-sm border w-full border-gray-300 focus:outline-none focus:ring-2 focus:border-transparent shadow-md transition duration-200 ease-in-out text-gray-800 mt-4" />
        </div>
        {/* Email */}
        <div className="w-full lg:w-5/12 p-1 relative shadow-lg m-1 ">
          <label className={`${!user?.email?.valid ? 'text-red-600' : ''} absolute text-sm bg-transparent px-1 text-gray-700 -top-3 left-2`} > Email </label>
          <input type="email" onChange={(e) => handleChange(e)} value={user?.email?.value} name="email" placeholder="Enter your last name" className="h-10 px-4 text-sm border w-full border-gray-300 focus:outline-none focus:ring-2 focus:border-transparent shadow-md transition duration-200 ease-in-out text-gray-800 mt-4" />
        </div>
        {/* Password */}
        <div className="w-full lg:w-5/12 p-1 relative shadow-lg m-1 ">
          <label className={`${!user?.password?.length ? 'text-red-600' : ''} absolute text-sm bg-transparent px-1 text-gray-700 -top-3 left-2`} > Password </label>
          <input type="password" onChange={(e) => handleChange(e)} value={user?.password} name="password" placeholder="Enter your last name" className="h-10 px-4 text-sm border w-full border-gray-300 focus:outline-none focus:ring-2 focus:border-transparent shadow-md transition duration-200 ease-in-out text-gray-800 mt-4" />
        </div>
        {/* Mobile Number */}
        <div className="w-full lg:w-5/12 p-1 relative shadow-lg m-1 ">

          <label className={`${!user?.contact?.length ? 'text-red-600' : ''} absolute text-sm bg-transparent px-1 text-gray-700 -top-3 left-2`} > Mobile Number </label>
          <input type="text" onChange={(e) => handleChange(e)} value={user?.contact} name="contact" placeholder="Enter your last name" className="h-10 px-4 text-sm border w-full border-gray-300 focus:outline-none focus:ring-2 focus:border-transparent shadow-md transition duration-200 ease-in-out text-gray-800 mt-4" />
        </div>
        {/* Employee PAN Card */}
        <div className="w-full lg:w-5/12 p-1 relative shadow-lg m-1  ">
          <label className={`${!user?.panCard?.valid ? 'text-red-600' : ''} absolute text-sm bg-transparent px-1 text-gray-700 -top-3 left-2`} > Employee PAN Card </label>
          <div className="flex justify-center items-center">
            <input type="text" onChange={(e) => handleChange(e)} value={user?.panCard?.value} name="panCard" placeholder="Enter your PAN card number" className="h-10 px-4 text-sm border w-[90%] uppercase border-gray-300 focus:outline-none focus:ring-2 focus:border-transparent shadow-md transition duration-200 ease-in-out text-gray-800 mt-4" />
            <VerfiedIcon className={`${user?.panCard?.onlineVerified ? 'text-blue-400' : 'text-red-600'} h-10 w-5   mt-4`} />
          </div>
        </div>
      </div>

      <div className="h-10 items-center w-full gap-4 flex justify-end">
       {user?.panCard?.onlineVerified && user?.email?.valid ?
        <button onClick={()=>handleSave()} type="button" className="rounded-sm bg-blue-500 text-white  h-10 w-20 m-1 hover:bg-blue-700 transition duration-200">
          Save
        </button>:
        <small>some of the fields are not valid</small>  
        }
        <button onClick={()=>setUser(emptyuser)} type="button" className="rounded-sm bg-gray-500 text-white  h-10 w-20 m-1 hover:bg-gray-700 transition duration-200">
          cancel
        </button>
      </div>
    </div>
  );
};

export default NewClient;
