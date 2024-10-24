import React from "react";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const confirmAction = (message) => {
  return new Promise((resolve, reject) => {
    const ConfirmToast = () => (
      <div>
        <p>{message}</p>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <button onClick={() => resolve(true)}>Yes</button>
          <button onClick={() => resolve(false)}>No</button>
        </div>
      </div>
    );

    toast.info(<ConfirmToast />, {
      autoClose: false,    
      closeOnClick: true,
      closeButton: false, 
      draggable: false,
    });
  });
};

export default confirmAction;
