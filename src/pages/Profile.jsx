import React, { useState, useEffect } from "react";

import { useStateContext } from "../context";
import { DisplayCampaigns, StatBox } from "../components";
import { eth_logo, moneyraised, totalcampaigns, moneydonated } from "../assets";
import { RadialBar, LineChart } from "../apexcharts";
import { calculateBarPercentage } from "../utils";

const Profile = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [campaigns, setCampaigns] = useState([]);
  const [amountRaised, setRaisedAmount] = useState(0);
  const [totalMoney, setTotalMoney] = useState(0);
  const [radialPercent, setRadialPercent] = useState(0);
  const [radialCampaign, setRaidalCampaign] = useState({});
  // const test = {test:[12,12], cd: "yooo", gg: 12};

  const { address, contract, getUserCampaigns, getMoneyDonated } =
    useStateContext();

  const MoneyDonated = async () => {
    const moneyDonated = await getMoneyDonated();
    // console.log(moneyDonated);
    setTotalMoney(moneyDonated);
  };

  const fetchCampaigns = async () => {
    setIsLoading(true);
    const data = await getUserCampaigns();
    setCampaigns(data);
    setIsLoading(false);
  };

  const getRaisedAmount = async () => {
    let amountTotal = 0;
    campaigns.map((campaign) => {
      amountTotal += Number(campaign.amountCollected);
    });
    // console.log(amountTotal);
    setRaisedAmount(amountTotal);
  };

  const selectGraphCampaign = async () => {
    if (campaigns[0]) {
      let max = Number(campaigns[0].amountCollected);
      let target = Number(campaigns[0].target);
      let campaign = campaigns[0];

      // Traverse array elements
      // from second and compare
      // every element with current max
      for (let i = 1; i < campaigns.length; i++) {
        if (campaigns[i].amountCollected > max) {
          max = Number(campaigns[i].amountCollected);
          target = Number(campaigns[i].target);
          campaign = campaigns[i];
        }
      }
      max = calculateBarPercentage(target, max);

      setRadialPercent(max);
      setRaidalCampaign(campaign);
      // console.log(radialPercent);
    }
  };

  useEffect(() => {
    if (contract) fetchCampaigns();

    // return () => {
    //   second
    // }
  }, [address, contract]);

  useEffect(() => {
    getRaisedAmount(); // Call getRaisedAmount whenever campaigns changes
    MoneyDonated();
    selectGraphCampaign();
  }, [campaigns, totalMoney]);

  return (
    <div className="flex flex-col">
      <div className="flex flex-row mb-[50px] mt-8 items-center">
        <div className="w-[6rem] h-auto flex justify-center items-center ">
          <img src={eth_logo} alt="logo_prof" />
        </div>
        <div className="flex flex-col ml-[50px]">
          <StatBox
            name={"Total Campaigns"}
            value={address ? campaigns.length : "Sign In"}
            imgUrl={totalcampaigns}
          />
          <StatBox
            name={"Money Raised"}
            value={address ? `${amountRaised} ETH` : "Sign In"}
            imgUrl={moneyraised}
          />
          <StatBox
            name={"Money Donated"}
            value={address ? `${totalMoney} ETH` : "Sign In"}
            imgUrl={moneydonated}
          />
        </div>
        <div className="flex flex-col items-center ml-8 px-6 bg-light-bg-col dark:bg-[#1c1c24] rounded-[10px]">
          <div className="mt-4 text-title-text dark:text-[#b2b3bd] font-epilogue font-semibold ">
            {`${radialCampaign.title}`}
          </div>
          <RadialBar ser={[radialPercent]} />
        </div>
        <div className="ml-8 w-[500px] bg-light-bg-col dark:bg-[#1c1c24] rounded-[10px]">
          <LineChart />
        </div>
      </div>
      <DisplayCampaigns
        title="All Campaigns"
        isLoading={isLoading}
        campaigns={campaigns}
      />
    </div>
  );
};

export default Profile;
