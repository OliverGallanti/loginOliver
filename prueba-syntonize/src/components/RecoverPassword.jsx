import React, { useState } from "react";
import Layout from "./uiComponents/Layout";
import { Link } from "react-router-dom";
import ButtonAction from "./uiComponents/ButtonAction";
import TextfieldInput from "./uiComponents/TextfieldInput";
import { resetPassword } from "./controllers/RecoverPassword.controller";
import { useNotification } from "../context/NotificationContext";

const RecoverPassword = () => {
  const [email, setEmail] = useState("");


  const { showNotification } = useNotification();

  return (
    <Layout title={"Recuperar contraseña"}>
      <div className="flex flex-col gap-4 rounded-xl p-6">
        <TextfieldInput
          placeholder={"Email"}
          onChange={(e) => setEmail(e.target.value)}
          type={"email"}
          //   error={emailError}
        />
      </div>
      <div className="my-4 flex flex-col">
        <ButtonAction
          title={"Recuperar contraseña"}
          action={() => resetPassword(email,  showNotification)}
          disabled={false}
          style={"login"}
        />
      </div>

      <span className="text-sm flex justify-center gap-1 m-1">
        <Link
          to="/login"
          className="hover:text-sky-600 transition-colors text-sm flex justify-center gap-1 m-1"
        >
          Volver al login
        </Link>
      </span>
    </Layout>
  );
};

export default RecoverPassword;
