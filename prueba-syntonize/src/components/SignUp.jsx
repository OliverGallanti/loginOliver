import React, { useRef } from "react";
import TextfieldInput from "./uiComponents/TextfieldInput";
import ButtonAction from "./uiComponents/ButtonAction";

const SignUp = () => {
  const emailRef = useRef();
  const passwordRef = useRef();
  return (
    <div className="w-screen h-screen bg-white grid place-content-center">
      <div className="flex flex-col w-[20vw] h-[40vh] bg-gray-100 shadow-md shadow-black/10 p-6 min-w-[40vh]">
        <h2 className="flex justify-center w-full text-[2rem] my-6">Welcome</h2>
        <div className="flex flex-col gap-4">
          <TextfieldInput placeholder={"Email"} ref={emailRef} type={"email"} />

          <TextfieldInput
            placeholder={"Password"}
            ref={passwordRef}
            type={"password"}
          />

          <TextfieldInput
            placeholder={"Confirm password"}
            ref={passwordRef}
            type={"password"}
          />
          <ButtonAction
            title={"Sign Up"}
            action={() => console.log("signUp")}
            type={"signup"}
          />
        </div>
      </div>
    </div>
  );
};

export default SignUp;
