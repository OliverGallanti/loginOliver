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
import Layout from "./uiComponents/Layout";
import { useNotification } from "../context/NotificationContext";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [passwordConfirmError, setPasswordConfirmError] = useState("");
  const [loading, setLoading] = useState(false);

  let navigate = useNavigate();

  const { showNotification } = useNotification();

  return (
    <Layout title={"Registro"}>
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
                setLoading,
                navigate,
                showNotification
              )
            }
            style={"signup"}
            disabled={loading}
          />
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
    </Layout>
  );
};

export default SignUp;
