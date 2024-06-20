import React, { useState } from "react";
import TextfieldInput from "./uiComponents/TextfieldInput";
import ButtonAction from "./uiComponents/ButtonAction";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    if (validateFields()) {
      try {
        setError("");
        setLoading(true);
        await createUserWithEmailAndPassword(auth, email, password);
        const user = auth.currentUser;
        console.log(user);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    } else {
      console.error(error);
    }
  };

  const validateFields = () => {
    if (!password) {
      setError("La contraseña no puede estar vacía");
      return false;
    }

    if (password !== passwordConfirm) {
      setError("Las contraseñas no coinciden");
      return false;
    }

    if (!email) {
      setError("el correo no puede estar vacío");
      return false;
    }

    return true;
  };

  return (
    <div className="w-screen h-screen bg-white grid place-content-center">
      <div className="flex flex-col w-[20vw] h-[40vh] bg-gray-100 shadow-md shadow-black/10 p-6 min-w-[40vh] gap-4">
        <h2 className="flex justify-center w-full text-[2rem] my-6">Welcome</h2>
        <div className="flex flex-col gap-4">
          <TextfieldInput
            placeholder={"Email"}
            onChange={(e) => setEmail(e.target.value)}
            type={"email"}
          />

          <TextfieldInput
            placeholder={"Password"}
            type={"password"}
            onChange={(e) => setPassword(e.target.value)}
          />

          <TextfieldInput
            placeholder={"Confirm password"}
            type={"password"}
            onChange={(e) => setPasswordConfirm(e.target.value)}
          />
          {error ? <span className="text-sm text-red-600">{error}</span> : null}
        </div>
        <ButtonAction
          title={"Sign Up"}
          action={handleSubmit}
          style={"signup"}
          disabled={loading}
        />
      </div>
    </div>
  );
};

export default SignUp;
