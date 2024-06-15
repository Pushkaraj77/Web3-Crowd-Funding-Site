import React, { useState, useEffect } from "react";

import { useStateContext } from "../context";
import {
  DisplayCampaigns,
  CustomButton,
  DisplayCategories,
} from "../components";
import { banner } from "../assets";
import { useNavigate } from "react-router-dom";
import { IoArrowDownCircle } from "react-icons/io5";

const Home = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [campaigns, setCampaigns] = useState([]);
  const navigate = useNavigate();

  const { address, contract, getCampaigns, connectToWallet } =
    useStateContext();

  const fetchCampaigns = async () => {
    setIsLoading(true);
    const data = await getCampaigns();
    setCampaigns(data);
    setIsLoading(false);
  };

  useEffect(() => {
    if (contract) fetchCampaigns();

    // return () => {
    //   second
    // }
  }, [address, contract]);

  return (
    <div className="flex flex-col">
      <div className="flex justify-center lg:justify-between h-auto rounded-[10px]
       bg-light-bg-col dark:bg-dark-bg-shade1 mb-14 lg:object-right ">
        <p
          className="absolute font-epilogue p-4 text-[#9fa0a8] max-lg:text-[14px] 
        z-10 "
        >
          Secured with Web3
        </p>
        <div className="absolute lg:relative flex flex-col justify-center top-[220px] 
        lg:top-0">
          <h1
            className="max-w-fit lg:text-[4rem] text-[30px] pl-14 lg:mb-4 font-epilogue 
            font-semibold dark:text-white z-10 text-center lg:text-left 
            "
          >
            Donate. <br /> Fund. Help.
          </h1>
          <h3
            className="max-w-[250px] lg:max-w-fit font-epilogue xl:text-[18px] 
          lg:text-[14px] text-[12px] lg:px-14 dark:text-white mt-6 z-10
          text-center lg:text-left"
          >
            <span className=" font-semibold">
              Help orphans, old, poor, victims, etc to have another chance at
              life.
            </span>
            <br /> "Join us in making a difference! Your contribution can change
            lives.
            <br />
            Every donation counts! Help us create positive impact today.
            <br />
            Support our cause and be a part of something meaningful.
            <br />
            Together, we can make a real difference. Donate now!
            <br />
            Empower change with your generosity. Give hope, give today!"
          </h3>
          <div
            className="absolute top-[350px] left-[10px] lg:top-0 lg:left-0 lg:relative 
          lg:justify-evenly flex items-center lg:px-[2rem] lg:mt-10 
          z-10 "
          >
            <CustomButton
              btnType="button"
              title={"Raise Funds"}
              styles={"bg-[#8c6dfd] mx-[20px] max-lg:text-[12px] max-lg:leading-[16px]"}
              handleClick={() => {
                if (address) navigate("create-campaign");
                else connectToWallet();
              }}
            />
            <CustomButton
              btnType="button"
              title={"Donate Now"}
              styles={"bg-[#1dc071] mx-[20px] max-lg:text-[12px] max-lg:leading-[16px]"}
              handleClick={() => {
                if (address) navigate("all-campaigns");
                else connectToWallet();
              }}
            />
          </div>
        </div>
        <img
          className=" h-[60vh] w-full lg:w-auto sm:h-[85vh] 
          rounded-[10px] lg:rounded-r-[10px] lg:rounded-l-none dark:max-lg:brightness-[0.5] 
          dark:max-lg:opacity-100 max-lg:opacity-50 "
          src={banner}
          alt="banner"
        />
      </div>
      <div className="mb-14 overflow-hidden">
        <DisplayCampaigns
          title="Trending Campaigns"
          isLoading={isLoading}
          campaigns={campaigns}
        />
      </div>

      <div className="mb-14 overflow-hidden">
        <DisplayCategories />
      </div>

      <div>
        <DisplayCampaigns
          title="All Campaigns"
          isLoading={isLoading}
          campaigns={campaigns}
        />
      </div>
      <div className="fixed bottom-0 right-0 m-4 max-lg:hidden">
        <IoArrowDownCircle size={50} color="#1dc071" />
      </div>
    </div>
  );
};

export default Home;
