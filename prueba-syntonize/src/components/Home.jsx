import React, { useState } from "react";
import Layout from "./uiComponents/Layout";
import { useAuth } from "../context/AuthContext";
import { auth } from "../firebase";
import ButtonAction from "./uiComponents/ButtonAction";
import { useNavigate } from "react-router-dom";
import Toaster from "./uiComponents/Toaster";

const Home = () => {
  const [notificationMessage, setNotificationMessage] = useState("");
  const [severity, setSeverity] = useState("");

  let navigate = useNavigate();
  const { currentUser } = useAuth();

  const handleLogout = async () => {
    setNotificationMessage("");
    try {
      await auth.signOut();
      navigate("/login");
    } catch (error) {
      setNotificationMessage("Fallo al cerrar sesión");
      setSeverity("error");
    }
  };

  return (
    <Layout title={"Dashboard"}>
      <div className="flex gap-1">
        <strong>Email:</strong>
        {currentUser.email}
      </div>
      <ButtonAction title={"Editar perfil"} style={"action"} />
      <span className="text-sm flex justify-center gap-1 m-1">
        <button
          onClick={handleLogout}
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
