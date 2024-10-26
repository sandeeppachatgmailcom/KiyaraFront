import { useSelector } from "react-redux";
import useDynamicIcons from "../../hooks/useDynamicIcons";
import useLogout from "../../hooks/useLogout"; 
import { ToastContainer } from "react-toastify";
import useSocket from "../../hooks/useSocket";


const Header = () => {
    const getMyIcon = useDynamicIcons();
    const LogoutIcon = getMyIcon('logOut');
    const handleLogout = useLogout();
    const user = useSelector((state) => state.user.user);
    useSocket();
 
     
    return (
        <div className="w-full h-[100%] flex gap-4 font-bold justify-end items-center p-5">
            <ToastContainer/>
            <h1 className="text-sm uppercase">
                {user?.firstname || 'Guest'}
            </h1>
            <div onClick={handleLogout} className="w-10 h-10 cursor-pointer flex justify-center items-center text-gray-800 rounded-full">
                <LogoutIcon className='w-[80%] h-[80%]' />
            </div>

            {/* <div className="notifications">
                {notifications?.length > 0 ? (
                    <ul>
                        {notifications?.map((notif, index) => (
                            <li key={index}>{notif.message}</li>
                        ))}
                    </ul>
                ) : (
                    <p>No notifications</p>
                )}
            </div> */}
        </div>
    );
};

export default Header;
