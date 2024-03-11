import React, { useEffect, useState } from "react";
import { ColorRing } from "react-loader-spinner";
import { setDetails } from "./setDetails";

const LoaderComponent = () => {
  const [loading, setLoading] = useState(sessionStorage.getItem("render"));

  useEffect(() => {
    if (!loading) {
      console.log("setDetails");
      setDetails(setLoading).then(() => {
        if (sessionStorage.getItem("render")) {
          window.location.href = "/home";
        }
      });
    }
  }, [loading]);

  if (!loading) {
    return (
      <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh" }}>
        <ColorRing
          visible={true}
          height="80"
          width="80"
          ariaLabel="color-ring-loading"
          wrapperStyle={{}}
          wrapperClass="color-ring-wrapper"
          colors={["#e15b64", "#f47e60", "#f8b26a", "#abbd81", "#849b87"]}
        />
      </div>
    );
  }

  return null; // or any other component if needed
};

export default LoaderComponent;
