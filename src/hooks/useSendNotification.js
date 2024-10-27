// useSendNotification.js
import { useDispatch } from "react-redux";
import { popNotification } from "../store/notificationSlice";

const useSendNotification = () => {
  const dispatch = useDispatch();

  return async function sendNotification(socket, message) {
    try {
      console.log('Sending notification:', message);
      await socket.emit("sentNotification", message);
      dispatch(popNotification());
    } catch (error) {
      console.error("Error sending notification:", error);
    }
  };
}

export default useSendNotification;
