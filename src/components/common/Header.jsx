import { useSelector } from "react-redux";
import useDynamicIcons from "../../hooks/useDynamicIcons";
import useLogout from "../../hooks/useLogout"; 
// import { ToastContainer } from "react-toastify";
import useSocket from "../../hooks/useSocket";
import { memo, useEffect } from "react";
import useNavigation from "../../hooks/useNavigation";
// const MemoizedToastContainer = memo(ToastContainer);


const Header = () => {
    const getMyIcon = useDynamicIcons();
    const LogoutIcon = getMyIcon('logOut');
    const handleLogout = useLogout();
    const user = useSelector((state) => state.user.user);
    useSocket();

    return (
        <div className="w-full h-[100%] flex gap-4 font-bold justify-end items-center p-5">
            {/* <MemoizedToastContainer/> */}
            <h1 className="text-sm uppercase">
                {user?.firstname || 'Guest'} 
                [{user?.role || ''}]
            </h1>
            <div onClick={handleLogout} className="w-10 h-10 cursor-pointer flex justify-center items-center text-gray-800 rounded-full">
                <LogoutIcon className='w-[80%] h-[80%]' />
            </div>
        </div>
    );
};

export default Header;
