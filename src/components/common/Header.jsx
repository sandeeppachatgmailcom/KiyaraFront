import { useSelector } from "react-redux";
import { useEffect, useState, useMemo } from "react";
import useDynamicIcons from "../../hooks/useDynamicIcons";
import useLogout from "../../hooks/useLogout";
import io from "socket.io-client";  
export const socket =   io('ws://localhost:5000') 

const Header = () => {
    const getMyIcon = useDynamicIcons();
    const LogoutIcon = getMyIcon('logOut');
    const handleLogout = useLogout();
    const user = useSelector((state) => state.user.user);

    const [notifications, setNotifications] = useState([]);

     
    
    useEffect(() => {
        if (user?.userId) {
            socket.emit('join', { userId: user?.userId });
            socket.emit("addUser", { userId: user.email });
        } else {
            socket.emit("logout");
            handleLogout();
        }

        socket.on('notification', (notification) => {
            console.log('Received notification:', notification);
            setNotifications((prev) => [...prev, notification]);
        });

      
        return () => {
            socket.off('notification');   
            socket.disconnect();          
        };
    }, [user, socket, handleLogout]);

    return (
        <div className="w-full h-[100%] flex gap-4 font-bold justify-end items-center p-5">
            <h1 className="text-sm uppercase">
                {user?.firstname || 'Guest'}
            </h1>
            <div onClick={handleLogout} className="w-10 h-10 cursor-pointer flex justify-center items-center text-gray-800 rounded-full">
                <LogoutIcon className='w-[80%] h-[80%]' />
            </div>

            <div className="notifications">
                {notifications.length > 0 ? (
                    <ul>
                        {notifications.map((notif, index) => (
                            <li key={index}>{notif.message}</li>
                        ))}
                    </ul>
                ) : (
                    <p>No notifications</p>
                )}
            </div>
        </div>
    );
};

export default Header;
