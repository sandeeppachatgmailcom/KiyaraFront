import React from "react";
import { toast } from "react-toastify";

const confirmAction = (message) => {
  return new Promise((resolve) => {
    const ConfirmToast = () => (
      <div>
        <p>{message}</p>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <button
            onClick={() => {
              toast.dismiss("confirm-toast");
              resolve(true);
            }}
          >
            Yes
          </button>
          <button
            onClick={() => {
              toast.dismiss("confirm-toast");
              resolve(false);
            }}
          >
            No
          </button>
        </div>
      </div>
    );

    // Ensure it doesn't duplicate or reuse stale toasts
    toast.info(<ConfirmToast />, {
      toastId: "confirm-toast", // Unique identifier
      autoClose: false,
      closeOnClick: false,
      closeButton: true,
      draggable: false,
      onClose: () => {
        // Optional callback for resetting or re-rendering logic if needed
      },
    });
  });
};

export default confirmAction;
