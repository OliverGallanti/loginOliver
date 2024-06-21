import React, { useState } from "react";
import TextfieldInput from "./uiComponents/TextfieldInput";
import ButtonAction from "./uiComponents/ButtonAction";
import { Link, useNavigate } from "react-router-dom";
import {
  clearErrors,
  handleSubmit,
  validateFields,
} from "./controllers/Login.controller";
import Layout from "./uiComponents/Layout";
import { useNotification } from "../context/NotificationContext";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [loading, setLoading] = useState(false);

  let navigate = useNavigate();

  const { showNotification } = useNotification();

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
                setLoading,
                showNotification
              )
            }
            disabled={loading}
            style={"login"}
          />
          <Link
            to="/recoverpassword"
            className="hover:text-sky-600 transition-colors text-sm flex justify-center gap-1 m-1"
          >
            ¿Olvidaste tu contraseña?
          </Link>
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
    </Layout>
  );
};

export default Login;
