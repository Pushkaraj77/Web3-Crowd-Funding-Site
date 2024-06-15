import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import CustomButton from "./CustomButton";
import { Icon } from "./Sidebar";
import { logo, menu, search, thirdweb, sun } from "../assets";
import { navlinks } from "../constants";
import { useStateContext } from "../context";

const Navbar = () => {
  const navigate = useNavigate();
  const [isActive, setIsActive] = useState("dashboard");
  const [toggleDrawer, setToggleDrawer] = useState(false);
  const { address, connectToWallet, setSearchState, toggleTheme, SetTheme } = useStateContext();
  // const [query, setQuery] = useState("")
  const [isFocused, setIsFocused] = useState(false);
  const handleOnFocus = () => {
    setIsFocused(true);
    if(isFocused)
      {
        navigate('all-campaigns');
      }
  };


  return (
    <div
      className="flex md:flex-row flex-col-reverse 
     justify-between mb-[35px] gap-6"
    >
      <div
        className="lg:flex-1 flex flex-row max-w-[458px]
      py-2 pl-4 pr-2 h-[52px] bg-light-bg-col dark:bg-[#1c1c24] rounded-[100px]"
      >
        <input
          id="searchinput"
          type="text"
          placeholder="Search for Campaigns"
          className="flex w-full font-epilogue font-normal
        text-[14px] placeholder:text-[#4b5264] text-title-text dark:text-white
        bg-transparent outline-none"
          onFocus={handleOnFocus}
          onChange={(event) => setSearchState(event.target.value)}
        />

        <div
          className="w-[72px] h-full rounded-[20px]
         bg-[#4acd8d] flex justify-center
         items-center cursor-pointer"
        >
          <img
            src={search}
            alt="search"
            className="w-[15px] h-[15px] object-contain"
          />
        </div>
      </div>

      <div
        className="sm:flex hidden flex-row justify-end
      gap-4"
      >
        <CustomButton
          btnType="button"
          title={address ? "Create a Campaign" : "Connect"}
          styles={address ? "bg-[#1dc071]" : "bg-[#8c6dfd]"}
          handleClick={() => {
            if (address) navigate("create-campaign");
            else connectToWallet();
          }}
        />

        <Link to="/profile">
          <div
            className="w-[52px] h-[52px] rounded-full
          flex justify-center items-center
          cursor-pointer bg-light-bg-col dark:bg-[#2c2f32]"
          >
            <img
              src={thirdweb}
              alt="user"
              className="w-[60%] h-[60%] object-contain"
            />
          </div>
        </Link>
      </div>

      {/* Small Screen Navigation */}
      <div
        className=" sm:hidden flex justify-between
      items-center relative "
      >
        <div
          className="w-[40px] h-[40px] rounded-[10px]
          flex justify-center items-center
          cursor-pointer bg-light-bg-col dark:bg-[#2c2f32]"
        >
          <img
            src={logo}
            alt="user"
            className="w-[60%] h-[60%] object-contain"
          />
        </div>

        <div className="flex flex-row justify-between items-center">
          <img
            src={menu}
            alt="menu"
            className="w-[34px] h-[34px] object-contain cursor-pointer"
            onClick={() => setToggleDrawer((prev) => !prev)}
          />

          <Icon
            styles=" ml-4 bg-[#dfdfff] dark:bg-[#1c1c24] shadow-secondary"
            imgUrl={sun}
            handleClick={() => {
              if (toggleTheme === "") {
                SetTheme("dark");
                document.documentElement.classList.add("dark");
              } else {
                SetTheme("");
                document.documentElement.classList.remove("dark");
              }
            }}
          />
        </div>

        <div
          className={` absolute top-[60px] right-0 rounded-lg 
          left-0 bg-light-bg-col dark:bg-[#1c1c24] z-20 shadow-secondary py-4
          ${
            !toggleDrawer ? "-translate-y-[100vh]" : "translate-y-0"
          } transition-all duration-700`}
        >
          <ul className="mb-4">
            {navlinks.map((link) => (
              <li
                key={link.name}
                className={`flex p-4 rounded-[10px] ${
                  isActive === link.name && "bg-[#dfdfff] dark:bg-[#2c2f32]"
                }`}
                onClick={() => {
                  setIsActive(link.name);
                  setToggleDrawer(false);
                  navigate(link.link);
                }}
              >
                <img
                  src={link.imgUrl}
                  alt={link.name}
                  className={`w-[24px] h-[24px] object-contain
                ${isActive === link.name ? "grayscale-0" : "grayscale"}`}
                />

                <p
                  className={`ml-[20px] font-epilogue
                font-semibold text-[14px] ${
                  isActive === link.name ? "text-[#1dc071]" : "text-[#808191]"
                }`}
                >
                  {link.name}
                </p>
              </li>
            ))}
          </ul>

          <div className="flex mx-4">
            <CustomButton
              btnType="button"
              title={address ? "Create a Campaign" : "Connect"}
              styles={address ? "bg-[#1dc071]" : "bg-[#8c6dfd]"}
              handleClick={() => {
                if (address) navigate("create-campaign");
                else connectToWallet();
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
