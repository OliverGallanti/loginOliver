import React, { useState } from "react";
import TextfieldInput from "./uiComponents/TextfieldInput";
import ButtonAction from "./uiComponents/ButtonAction";
import Toaster from "./uiComponents/Toaster";
import {
  handleSubmit,
  validateFields,
  clearErrors,
} from "../components/controllers/SignUp.controller";
import { Link, useNavigate } from "react-router-dom";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [notificationMessage, setNotificationMessage] = useState(null);
  const [severity, setSeverity] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [passwordConfirmError, setPasswordConfirmError] = useState("");
  const [loading, setLoading] = useState(false);

  let navigate = useNavigate();

  return (
    <div className="w-screen h-screen bg-gray-50 grid place-content-center">
      <div className="flex flex-col w-fit h-fit bg-white border-gray-400 shadow-md shadow-black/10 p-6 gap-4">
        <h2 className="flex justify-center w-full text-[2rem] py-6 border-b-2 ">
          Registro
        </h2>
        <div className="flex flex-col gap-4 rounded-xl p-6">
          <TextfieldInput
            placeholder={"Email"}
            onChange={(e) => setEmail(e.target.value)}
            type={"email"}
            error={emailError}
          />

          <TextfieldInput
            placeholder={"Contraseña"}
            type={"password"}
            onChange={(e) => setPassword(e.target.value)}
            error={passwordError}
          />

          <TextfieldInput
            placeholder={"Confirmar contraseña"}
            type={"password"}
            onChange={(e) => setPasswordConfirm(e.target.value)}
            error={passwordConfirmError}
          />
          <div className="my-4">
            <ButtonAction
              title={"Registrarse"}
              action={() =>
                handleSubmit(
                  email,
                  password,
                  passwordConfirm,
                  validateFields,
                  clearErrors,
                  setEmailError,
                  setPasswordError,
                  setPasswordConfirmError,
                  setNotificationMessage,
                  setSeverity,
                  setLoading,
                  navigate
                )
              }
              style={"signup"}
              disabled={loading}
            />
          </div>
        </div>
      </div>
      <span className="text-sm flex justify-center gap-1 m-1">
        <span>¿Ya tienes una cuenta?</span>
        <Link
          to="/login"
          className="italic font-semibold hover:text-teal-600 transition-colors"
        >
          Inicia sesión
        </Link>
      </span>
      {notificationMessage ? (
        <Toaster message={notificationMessage} severity={severity} />
      ) : null}
    </div>
  );
};

export default SignUp;
