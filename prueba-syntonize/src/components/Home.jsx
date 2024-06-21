import React, { useState } from "react";
import Layout from "./uiComponents/Layout";
import { useAuth } from "../context/AuthContext";
import ButtonAction from "./uiComponents/ButtonAction";
import { useNavigate } from "react-router-dom";
import Toaster from "./uiComponents/Toaster";
import { handleLogout } from "./controllers/Home.controller";

const Home = () => {
  const [notificationMessage, setNotificationMessage] = useState("");
  const [severity, setSeverity] = useState("");

  let navigate = useNavigate();
  const { currentUser } = useAuth();

  return (
    <Layout title={"Dashboard"}>
      <div className="flex gap-1">
        <strong>Email:</strong>
        {currentUser.email}
      </div>
      <ButtonAction title={"Editar perfil"} style={"action"} />
      <span className="text-sm flex justify-center gap-1 m-1">
        <button
          onClick={() =>
            handleLogout(setNotificationMessage, navigate, setSeverity)
          }
          className="italic font-semibold hover:text-red-500 transition-colors"
        >
          Cerrar sesión
        </button>
      </span>
      {notificationMessage ? (
        <Toaster message={notificationMessage} severity={severity} />
      ) : null}{" "}
    </Layout>
  );
};

export default Home;
