import React, { useState } from "react";
import TextfieldInput from "./uiComponents/TextfieldInput";
import ButtonAction from "./uiComponents/ButtonAction";
import Toaster from "./uiComponents/Toaster";
import {
  handleSubmit,
  validateFields,
  clearErrors,
} from "../components/controllers/SignUp.controller";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [notificationMessage, setNotificationMessage] = useState(null);
  const [severity, setSeverity] = useState(null);
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [passwordConfirmError, setPasswordConfirmError] = useState("");
  const [loading, setLoading] = useState(false);

  return (
    <div className="w-screen h-screen bg-white grid place-content-center">
      <div className="flex flex-col w-fit h-fit bg-gray-100 shadow-md shadow-black/10 p-6 gap-4">
        <h2 className="flex justify-center w-full text-[2rem] my-6">
          Registro
        </h2>
        <div className="flex flex-col gap-4 border border-black/10 rounded-xl p-6">
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
                  setLoading
                )
              }
              style={"signup"}
              disabled={loading}
            />
          </div>
        </div>
      </div>
      {notificationMessage ? (
        <Toaster message={notificationMessage} severity={severity} />
      ) : null}
    </div>
  );
};

export default SignUp;
