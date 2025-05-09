import React from "react";
import { useDispatch } from "react-redux";
import { setSearch } from "../redux/slices/SearchSlice";
import Logo from "../assets/flavoro.jpg";
import Logo1 from "../assets/1.png";

const Navbar = () => {
  const dispatch = useDispatch();
  return (
    <nav className="flex flex-col lg:flex-row justify-between py-3 mx-6 mb-10">
      <div className="flex flex-col relative ">
        <img src={Logo1} alt="logo" className="h-28 w-28 mb-2 absolute " />
        {/* <img src={Logo} alt="logo" className="h-28 w-28 mb-2 flex " /> */}
        <h3 className="text-xl font-bold text-white ml-32 justify-center pt-6">
          {new Date().toUTCString().slice(0, 16)}
        </h3>
        <h1 className="text-2xl font-bold ml-32 align-middle text-white">Flavoro Foods</h1>
        </div>
      {/* <div className="mt-8"> */}
      <div className="pt-5 mt-5 sm:p-0 sm:m-0">
        <input
          type="search"
          name="search"
          id=""
          placeholder="Search here"
          autoComplete="off"
          onChange={(e) => dispatch(setSearch(e.target.value))}
          className="p-3 border border-gray-400 text-sm rounded-lg outline-none w-full lg:w-[25vw]"
        />
      </div>
      {/* </div> */}
    </nav>
  );
};

export default Navbar;