import React from "react";
import PacmanLoader from "react-spinners/PacmanLoader";

export default function Loader() {

  return (
    <>
      <div className="flex items-center justify-center h-screen">
        <PacmanLoader color="#fdff00" size={25} speedMultiplier={4} />
        
      </div>
    </>
  );
}
