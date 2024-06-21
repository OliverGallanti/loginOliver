import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  const handleLogout = () => {
    console.log("heh");
  };
  return (
    <div>
      Home inaccesible
      <span className="text-sm flex justify-center gap-1 m-1">
        <span>¿No tienes una cuenta?</span>
        <Link
          to="/signup"
          className="italic font-semibold hover:text-teal-600 transition-colors"
        >
          ¡Regístrate!
        </Link>
      </span>
    </div>
  );
};

export default Home;
