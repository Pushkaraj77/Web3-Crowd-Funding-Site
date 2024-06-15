import React, { useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { loader } from "../assets";
import FundCard from "./FundCard";
import { useStateContext } from "../context";

const DisplayCampaigns = ({ title, isLoading, campaigns }) => {
  const { searchState, filterState } = useStateContext();
  const navigate = useNavigate();
  const handleNavigate = (campaign) => {
    navigate(`campaign-details/${campaign.title}`, {
      state: campaign,
    });
  };

  // useEffect(() => {
  //   console.log("Filter State Updated:", filterState);
  // }, [filterState]);

  const slug = useLocation();
  // console.log(slug.pathname);

  return (
    <div>
      <h1
        className="font-epilogue font-semibold text-title-text
      dark:text-white text-[18px] text-left max-w-fit"
      >
        {title} ({campaigns.length})
      </h1>

      <div className="flex flex-wrap mt-[20px] gap-[26px] max-sm:justify-center">
        {isLoading && (
          <img
            src={loader}
            alt="loader"
            className="w-[100px] 
            h-[100px] object-contain"
          />
        )}

        {!isLoading && campaigns.length === 0 && (
          <p
            className=" font-epilogue font-semibold
            text-[14px] leading-[30px] text-[#818183]"
          >
            You have not created any campaigns yet
          </p>
        )}

        {!isLoading &&
          campaigns.length > 0 &&
          campaigns
            .filter((campaign) => {
              if(slug.pathname != '/all-campaigns') return campaign;
              if (searchState === "" && filterState.length === 0) {
                return campaign;
              }
              // else if (
              //   // campaign.title
              //   //   .toLowerCase()
              //   //   .includes(searchState.toLowerCase()) ||
              //     filterState.includes(campaign.category.toLowerCase())
              // ) {
              //   console.log("Inside Filter");
              //   return campaign;
              // }
              else {
                const matchesSearch = campaign.title
                  .toLowerCase()
                  .includes(searchState.toLowerCase());

                // Check if campaign matches any of the filter categories
                const matchesFilter =
                  filterState.length === 0 ||
                  filterState.includes(campaign.category.toLowerCase());

                // Campaign must match both search and filter criteria
                return matchesSearch && matchesFilter;
              }
            })
            .map((campaign) => (
              <FundCard
                key={campaign.id}
                {...campaign}
                handleClick={() => handleNavigate(campaign)}
              />
            ))}
      </div>
    </div>
  );
};

export default DisplayCampaigns;
