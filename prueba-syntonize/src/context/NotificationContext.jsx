import React, { createContext, useContext, useState } from "react";
import Toaster from "../components/uiComponents/Toaster";

const NotificationContext = createContext();

export const useNotification = () => useContext(NotificationContext);

export const NotificationProvider = ({ children }) => {
  const [message, setMessage] = useState("");
  const [severity, setSeverity] = useState("info");
  const [open, setOpen] = useState(false);

  const showNotification = (msg, sev, open) => {
    setMessage(msg);
    setSeverity(sev);
    setOpen(open);

    setTimeout(() => {
      setOpen(false);
    }, 5000);
  };

  return (
    <NotificationContext.Provider value={{ showNotification }}>
      {children}
      <Toaster message={message} severity={severity} open={open} />
    </NotificationContext.Provider>
  );
};
