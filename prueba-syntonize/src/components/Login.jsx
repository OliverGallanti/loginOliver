import React, { useRef } from "react";
import TextfieldInput from "./uiComponents/TextfieldInput";
import ButtonAction from "./uiComponents/ButtonAction";

const Login = () => {
  const emailRef = useRef();
  const passwordRef = useRef();

  return (
    <div className="w-screen h-screen bg-white grid place-content-center">
      <div className="flex flex-col w-[20vw] h-[40vh] bg-gray-100 shadow-md shadow-black/10 p-6 min-w-[40vh]">
        <h2 className="flex justify-center w-full text-[2rem] my-6">
          Bienvenido!
        </h2>
        <div className="flex flex-col gap-4">
          <TextfieldInput placeholder={"Email"} ref={emailRef} type={"email"} />

          <TextfieldInput
            placeholder={"Contraseña"}
            ref={passwordRef}
            type={"password"}
          />
          <span className="text-center text-sm gap-1">
            ¿No tienes una cuenta?{" "}
            <span className="font-semibold">¡Regístrate!</span>
          </span>
          <ButtonAction
            title={"Registrarse"}
            action={() => console.log("signUp")}
            style={"signup"}
          />
          <ButtonAction
            title={"Iniciar sesión"}
            action={() => console.log("logIn")}
            style={"login"}
          />
        </div>
      </div>
    </div>
  );
};

export default Login;
