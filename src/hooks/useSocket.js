import { useEffect, useRef } from 'react';
import { io } from 'socket.io-client';
import { toast } from 'react-toastify';
import { useSelector } from 'react-redux';
import useSendNotification from './useSendNotification';
import useReceiveNotofication from './useReceiveNotofication';
import useLogout from './useLogout';

const useSocket = () => {
  
    const notification = useSelector((state)=>state?.notification?.messages?.sent)
    const sendMessage = useSendNotification()
    const receiveMessage = useReceiveNotofication();
    const handleLogout = useLogout();
    const user = useSelector((state) => state.user.user);
    const socketRef = useRef(null);

  useEffect(() => {
    if (!socketRef.current) {
      
      socketRef.current = io('ws://localhost:5000');
    }

    const socket = socketRef.current;

    if (user?.userId) {
      socket.emit('join', { userId: user.userId });
      socket.emit('addUser', { userId: user.userId });
    } else {
      socket.emit('logout');
      handleLogout();
    }

    
    socket.on('receiveNotification', (message) => {
    console.log(message)
      toast.info(message?.message);
      receiveMessage(message);
    });

     
    return () => {
      if (socketRef.current) {
        socket.off('receiveNotification');
        socketRef.current.disconnect();
        socketRef.current = null;
      }
    };
  }, [user, handleLogout, receiveMessage]);

  useEffect(() => {
     
    if (notification.length && socketRef.current) {
      sendMessage(socketRef.current, notification[0]);
    }
  }, [notification, sendMessage]);

  return socketRef.current;
};

export default useSocket;
