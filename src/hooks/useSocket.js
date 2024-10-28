// useSocket.js
import { useEffect, useRef } from 'react';
import { io } from 'socket.io-client';
import { toast } from 'react-toastify';
import { useDispatch, useSelector } from 'react-redux';
import useSendNotification from './useSendNotification';
import useLogout from './useLogout';
import useReceiveNotification from './useReceiveNotofication';
import { popNotification } from '../store/notificationSlice';

const useSocket = () => {
  const notification = useSelector((state) => state?.notification?.messages?.sent);
  const sendMessage = useSendNotification();
  const receiveMessage = useReceiveNotification();
  const handleLogout = useLogout();
  const user = useSelector((state) => state.user.user);
  const socketRef = useRef(null);
  const dispatch = useDispatch();

  useEffect(() => {
     
    if (!socketRef.current) {
       socketRef.current = io('ws://localhost:5000');
      //socketRef.current = io('ws:://kiarabackend.onrender.com')
    }

    const socket = socketRef.current;
  if (user?.userId) {
      socket.emit('join', { userId: user.userId });
      socket.emit('addUser', { userId: user.userId });
    } else {
      socket.emit('logout');
      handleLogout();
    }

     
    if (notification.length) {
      const currentNotification = JSON.parse(JSON.stringify(notification[0]));
      let x = socket.emit("sentNotification", currentNotification);
      console.log('object',x,currentNotification)
      const c = setTimeout(()=>{
        dispatch(popNotification());
          clearTimeout(c)
      },1000)
    }

     
    socket.on('receiveNotification', (message) => {
      console.log('Received notification:', message);
      toast.info(message?.message);
      receiveMessage(message);
    });

     
    return () => {
      socket.off('receiveNotification');
      socket.disconnect();
      socketRef.current = null;
    };
  }, [user, handleLogout, receiveMessage, notification, dispatch]);

  return socketRef.current;
};

export default useSocket;
