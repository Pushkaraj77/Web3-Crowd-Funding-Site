import React, { useState, useEffect } from "react";

import { useStateContext } from "../context";
import { DisplayCampaigns, CustomButton } from "../components";
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
      <div className="flex justify-between w-full h-[85vh] rounded-[10px] bg-light-bg-col dark:bg-dark-bg-shade1 mb-14 object-right">
        <p className="absolute font-epilogue p-4 text-[#9fa0a8]">
          Secured with Web3
        </p>
        <div className="flex flex-col justify-center">
          <h1
            className="text-[70px] pl-14 mb-10 font-epilogue font-semibold dark:text-white
           "
          >
            Donate. <br /> Fund. Help.
          </h1>
          <h3 className="font-epilogue text-[18px] px-14 dark:text-white">
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
          <div className="flex justify-between items-center px-[200px] mt-10 w-full ">
            <CustomButton
              btnType="button"
              title={"Raise Funds"}
              styles={"bg-[#8c6dfd]"}
              handleClick={() => {
                if (address) navigate("create-campaign");
                else connectToWallet();
              }}
            />
            <CustomButton
              btnType="button"
              title={"Donate Now"}
              styles={"bg-[#1dc071]"}
              handleClick={() => {
                if (address) navigate("create-campaign");
                else connectToWallet();
              }}
            />
          </div>
        </div>
        <img className="h-[85vh] rounded-r-[10px]" src={banner} alt="banner" />
      </div>
      <div className="mb-14 ">
        <DisplayCampaigns
          title="Trending Campaigns"
          isLoading={isLoading}
          campaigns={campaigns}
        />
      </div>
      <div className="flex justify-around items-center mb-14 w-full h-[35vh] rounded-[10px] bg-light-bg-col dark:bg-dark-bg-shade1">
        <div className="w-[20%] h-[90%] bg-white"></div>
        <div className="w-[20%] h-[90%] bg-white"></div>
        <div className="w-[20%] h-[90%] bg-white"></div>
        <div className="w-[20%] h-[90%] bg-white"></div>
      </div>
      <div>
        <DisplayCampaigns
          title="All Campaigns"
          isLoading={isLoading}
          campaigns={campaigns}
        />
      </div>
      <div className="absolute translate-x-[75vw] translate-y-[80vh]">
        <IoArrowDownCircle size={50} color="#1dc071" />
      </div>
    </div>
  );
};

export default Home;
