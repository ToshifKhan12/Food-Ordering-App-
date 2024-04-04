import React, { useEffect, useState } from "react";
import { PropagateLoader } from "react-spinners";
import tick from "../assets/tick.png"

const Success = () => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      {loading ? (
        <PropagateLoader color="#36d7b7" />
      ) : (
        <div>
          <img src={tick} height="100px" width="100px" alt="" className="ml-24 mb-4"/>
          <h2 className="text-3xl font-semibold mb-4 text-center text-white">
            Order Successful!
          </h2>
          <p className="text-white">Your order has been sucessfully placed</p>
        </div>
      )}
    </div>
  );
};

export default Success;