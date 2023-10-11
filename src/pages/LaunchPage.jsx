import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
const LaunchPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      navigate("/langs");
    }, 2000);
  }, [navigate]);

  return (
    <div
      className="max-w-lg mx-auto w-screen bg-launch-page
      bg-cover bg-center bg-no-repeat min-h-screen 
      flex items-center justify-center"
    >
      <h1 className="text-center text-white font-bold tracking-wider">
        <span className="text-5xl ">Paris</span>
        <span className="block text-4xl">Multimedia Guide Tour</span>
      </h1>
    </div>
  );
};

export default LaunchPage;
