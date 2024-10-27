import { useEffect, useState } from "react";
import useDynamicIcons from "../../hooks/useDynamicIcons";
import validatePan from "../../utils/validatePan";
import validateEmail from "../../utils/validateEmail";
import useCheckPanValid from "../../hooks/useCheckPanValid";
import nodeServer from "../../api/axios";
import { userApi } from "../../api/api";
import { toast, ToastContainer } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { sendNotification } from "../../store/notificationSlice";

const NewClient = ({ closeWindow, userType, inputUser, updateParent }) => {
  const emptyuser = {
    userType: userType,
    firstname: '',
    email: { value: '', valid: false },
    password: { value: '', valid: false },
    lastName: '',
    contact: '',
    panCard: { value: '', valid: false, isLegal: false, onlineVerified: false },
  };
  const activeUSer = useSelector((state)=>state.user.user)

  const getMyIcon = useDynamicIcons();
  const CloseIcon = getMyIcon('close');
  const VerifiedIcon = getMyIcon('verified');
  const dispatch = useDispatch()
  
  const [user, setUser] = useState(emptyuser);
  const [panValid, setPanValid] = useState(false);
  const checkValidPanOnline = useCheckPanValid();

  useEffect(() => {
    const temp = { ...user, userType: userType, designation: userType == 'Client'?'DN10000008':'DN10000009' };
    setUser(temp);
  }, [userType]);

  useEffect(() => {
    const temp = {
      ...inputUser,
      userType: userType,
      email: { value: inputUser.email, valid: true },
      panCard: { value: inputUser.panCard, valid: true, isLegal: true, onlineVerified: true }
    };
    setUser(temp);
  }, [inputUser]);

  const handleChange = async (e) => {
    const temp = { ...user };
    let { name, value } = e.target;

    if (name === 'panCard') {
      value = await value.slice(0, 10);
      const valid = validatePan(value.toUpperCase());
      const onlineVerified = value.length > 9 ? await checkValidPanOnline(value.toUpperCase()) : false;
      temp[name] = { value, valid, onlineVerified: onlineVerified || false };
    } else if (name === 'email') {
      temp[name] = { value, valid: validateEmail(value) };
    } else {
      temp[name] = value;
    }
    setUser(temp);
  };

  const handleSave = async () => {
    try {
      const userData = {
        ...user,
        email: user.email.value,
        panCard:  user.panCard?.value?.toUpperCase(), 
        userType: userType,
        designation: userType == 'Client'?'DN10000008':'DN10000009'
                 
      };
      Object.keys(userData).map((key)=>{
        if(!userData[key]) delete userData[key]
        //if(!userData.password) toast.error('password not given')

      }) 



      console.log(userData,'hello my data')
      const result = await nodeServer.post(userApi.create, { ...userData });
      console.log(result.data,'hello my result')
      if (result.data.status) {
        toast.success(result.data.message || 'Operation successful');
        dispatch( sendNotification({
          receiverId: result?.data?.userId,
          message: "my dear user your data hasbeen modified ",
          senderId: activeUSer?.userId
      })) 
        setUser(emptyuser);
        updateParent();
       // closeWindow();
      } else {
        toast.error(result.data.message);
      }
    } catch (error) {
      toast.error("Error occurred during saving");
    }
  };

  return (
    <div className="w-full flex flex-col h-full  rounded-lg shadow-md    ">
       
      
      <div className="flex items-center bg-white bg-opacity-10 justify-between mb-4 border-b p-2">
        <h1 className="text-xl font-semibold text-white-700"> {userType} Registration</h1>
        <CloseIcon onClick={closeWindow} className="cursor-pointer text-white hover:text-red-500 transition duration-200" />
      </div>

      <div className="flex flex-col lg:flex-row lg:flex-wrap justify-center gap-4 p-4">
        {/* First Name */}
        <InputField 
          label="First Name" 
          name="firstname" 
          value={user.firstname} 
          onChange={handleChange} 
          placeholder="Enter your first name" 
          required 
        />

        {/* Last Name */}
        <InputField 
          label="Last Name" 
          name="lastName" 
          value={user.lastName} 
          onChange={handleChange} 
          placeholder="Enter your last name" 
          required 
        />

        {/* Email */}
        <InputField 
          label="Email" 
          name="email" 
          value={user.email?.value} 
          onChange={handleChange} 
          placeholder="Enter your email" 
          valid={user.email?.valid} 
        />

        {/* Password */}
        <InputField 
          label="Password" 
          name="password" 
          value={user.password?.value} 
          onChange={handleChange} 
          placeholder="Enter your password" 
          type="password" 
        />

        {/* Mobile Number */}
        <InputField 
          label="Mobile Number" 
          name="contact" 
          value={user.contact} 
          onChange={handleChange} 
          placeholder="Enter your mobile number" 
        />

        {/* Employee PAN Card */}
        <div className="w-full lg:w-5/12 p-1 relative shadow-md m-1">
          <label className={`${!user.panCard?.valid ? 'text-red-600' : 'text-white-700'} text-sm   mb-1`}>
            Employee PAN Card
          </label>
          <div className="flex items-center">
            <input 
              type="text" 
              name="panCard" 
              value={user.panCard?.value} 
              onChange={handleChange} 
              placeholder="Enter your PAN card number" 
              className="h-10 w-10/12 px-4 text-sm focus:outline-none uppercase text-black focus:outline-blue-600  border border-gray-300 rounded-l-md focus:ring-2 focus:border-transparent transition duration-200"
            />
            <VerifiedIcon className={`${user.panCard?.onlineVerified ? 'text-blue-400' : 'text-red-600'} h-10 w-2/12 p-3 bg-gray-100 rounded-r-md`} />
          </div>
        </div>
      </div>

      <div className="flex justify-end gap-4 bg-white bg-opacity-10  p-2 border-t">
        {user.panCard?.onlineVerified && user.email?.valid ? (
          <button onClick={handleSave} type="button" className="px-4 py-2 rounded bg-blue-500 text-white hover:bg-blue-700 transition duration-200">
            Save
          </button>
        ) : (
          <small className="text-red-500">Some fields are not valid</small>
        )}
        <button onClick={() => setUser(emptyuser)} type="button" className="px-4 py-2 rounded bg-gray-500 text-white hover:bg-gray-700 transition duration-200">
          Cancel
        </button>
      </div>
    </div>
  );
};
 
export default NewClient;

// Helper InputField Component
const InputField = ({ label, name, value, onChange, placeholder, type = "text", valid = true, required = false }) => (
  <div className="w-full lg:w-5/12 p-1 relative shadow-md">
    <label className={`${!valid ? 'text-red-600' : 'text-white-700'} text-sm  mb-1`}>{label}</label>
    <input 
      type={type} 
      name={name} 
      value={value} 
      onChange={onChange} 
      placeholder={placeholder} 
      required={required}
      className="h-10 w-full px-4 text-sm border    text-black border-gray-300 rounded-md focus:ring-2 focus:outline-none focus:outline-sky-700 focus:border-transparent shadow-sm transition duration-200 ease-in-out" 
    />
  </div>
);
