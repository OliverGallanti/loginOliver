import React, { useState } from "react";
import TextfieldInput from "./uiComponents/TextfieldInput";
import ButtonAction from "./uiComponents/ButtonAction";
import { Link, useNavigate } from "react-router-dom";
import {
  clearErrors,
  handleSubmit,
  validateFields,
} from "./controllers/Login.controller";
import Toaster from "./uiComponents/Toaster";
import Layout from "./uiComponents/Layout";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [notificationMessage, setNotificationMessage] = useState("");
  const [severity, setSeverity] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [loading, setLoading] = useState(false);

  let navigate = useNavigate();

  return (
    <Layout title={"¡Bienvenido!"}>
      <div className="flex flex-col gap-4 rounded-xl p-6">
        <TextfieldInput
          placeholder={"Email"}
          onChange={(e) => setEmail(e.target.value)}
          type={"email"}
          error={emailError}
        />

        <TextfieldInput
          placeholder={"Contraseña"}
          onChange={(e) => setPassword(e.target.value)}
          type={"password"}
          error={passwordError}
        />

        <div className="my-4 flex flex-col">
          <ButtonAction
            title={"Iniciar sesión"}
            action={() =>
              handleSubmit(
                email,
                password,
                navigate,
                validateFields,
                clearErrors,
                setEmailError,
                setPasswordError,
                setNotificationMessage,
                setLoading,
                setSeverity
              )
            }
            disabled={loading}
            style={"login"}
          />
        </div>
      </div>
      <span className="text-sm flex justify-center gap-1 m-1">
        <span>¿No tienes una cuenta?</span>
        <Link
          to="/signup"
          className="italic font-semibold hover:text-teal-600 transition-colors"
        >
          ¡Regístrate!
        </Link>
      </span>
      {notificationMessage ? (
        <Toaster message={notificationMessage} severity={severity} />
      ) : null}{" "}
    </Layout>
  );
};

export default Login;
