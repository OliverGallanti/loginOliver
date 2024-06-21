import React from "react";

const Layout = ({ children, title }) => {
  return (
    <div className="w-screen h-screen bg-gray-50 grid place-content-center">
      <div className="flex flex-col w-fit h-fit bg-white border-gray-400 shadow-md shadow-black/10 p-6 gap-4">
        <h2 className="flex justify-center w-full text-[2rem] py-6 border-b-2 ">
          {title}
        </h2>{" "}
        {children}
      </div>
    </div>
  );
};

export default Layout;
