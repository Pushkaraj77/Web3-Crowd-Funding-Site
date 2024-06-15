import React, { useState, useEffect } from "react";
import { useStateContext } from "../context";
import { DisplayCampaigns } from "../components";
import { RxCross2 } from "react-icons/rx";
import { useLocation } from "react-router-dom";

const AllCampaigns = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [campaigns, setCampaigns] = useState([]);

  const state = useLocation();

  const handleRedirectCategory = () => {
    const checkedFilter = state.state.name.toLowerCase();
    console.log(checkedFilter);
    const element = document.getElementById(`${checkedFilter}`);
    if (element) {
      element.checked = true;
      console.log(element.checked);
      handleFilter(element);
    }
  };

  const { address, contract, getCampaigns, filterState, setFilterState } =
    useStateContext();

  const fetchCampaigns = async () => {
    setIsLoading(true);
    const data = await getCampaigns();
    setCampaigns(data);
    if (state.state) {
      handleRedirectCategory();
    }
    setIsLoading(false);
  };

  const handleFilter = (e) => {
    if (e.checked && !filterState.includes(e.id)) {
      setFilterState((prevState) => [...prevState, e.id.toLowerCase()]);
    } else {
      setFilterState((prevState) =>
        prevState.filter((item) => item !== e.id.toLowerCase())
      );
      // check();
    }
  };

  // const check = () => {
  //   const med = 'medical';
  //   if (filterState.includes(campaigns[0].category.toLowerCase())) console.log('works');
  //   campaigns
  //       .filter(campaign => {
  //           if (filterState == []) {
  //               return campaign;
  //             }
  //             else if (
  //           filterState.includes(campaign.category.toLowerCase())) {
  //               console.log("Executed Dis");
  //               return campaign;
  //             }
  //       })
  // }

  const hideFilters = () => {
    const filterBox = document.getElementById("filterbox");

    if (filterBox.style.visibility == "visible") {
      filterBox.style.visibility = "hidden";
    } else {
      filterBox.style.visibility = "visible";
    }
  };

  useEffect(() => {
    if (contract) fetchCampaigns();

    // return () => {
    //   second
    // }
  }, [address, contract]);

  useEffect(() => {
    return () => {
      setFilterState([]);
    };
  }, [setFilterState]);

  return (
    <div className="flex justify-center sm:justify-between">
      {/* Campaign Section  */}
      <div className="sm:max-w-[1100px]">
        <DisplayCampaigns
          title="All Campaigns"
          isLoading={isLoading}
          campaigns={campaigns}
        />
      </div>

      {/* Filter button Section  */}
      <div className="flex flex-col items-center max-md:absolute max-md:left-[270px]
       max-md:top-[120px]">
        <button id="filterbutton" onClick={(e) => hideFilters()}>
          <div
            className="flex items-center justify-center rounded-[10px]
       bg-light-bg-col dark:bg-dark-bg-shade1 w-[70px] h-[40px] 
        dark:text-white font-epilogue font-semibold
        mt-12"
          >
            Filters
          </div>
        </button>

        {/* Filter Box Section  */}
        <div
          id="filterbox"
          style={{ visibility: "hidden" }}
          className=" rounded-[10px] bg-light-bg-col
      dark:bg-dark-bg-shade1 w-[200px] h-auto right-[200px] mt-[2rem]
       max-md:absolute max-md:right-[0px] max-md:top-[70px]"
        >
          <div className="p-3 float-right text-[20px] ">
            <button onClick={(e) => hideFilters()}>
              <RxCross2 color="#808191" />
            </button>
          </div>
          <div className="flex flex-col items-center py-8">
            <label
              className="font-epilogue font-semibold text-[20px]
          dark:text-white"
            >
              Categories
            </label>

            <div
              className="flex flex-col mt-2 font-epilogue text-[16px]
           text-[#808191]"
            >
              <div>
                <input
                  type="checkbox"
                  name="medical"
                  id="medical"
                  onChange={(e) => {
                    handleFilter(e.target);
                  }}
                />
                <label className="ml-1"> Medical </label>
              </div>
              <div>
                <input
                  type="checkbox"
                  name="orphanage"
                  id="orphanage"
                  onChange={(e) => {
                    handleFilter(e.target);
                  }}
                />
                <label className="ml-1"> Orphanage </label>
              </div>
              <div>
                <input
                  type="checkbox"
                  name="oldage"
                  id="oldage"
                  onChange={(e) => {
                    handleFilter(e.target);
                  }}
                />
                <label className="ml-1"> Oldage </label>
              </div>
              <div>
                <input
                  type="checkbox"
                  name="financial"
                  id="financial"
                  onChange={(e) => {
                    handleFilter(e.target);
                  }}
                />
                <label className="ml-1"> Financial </label>
              </div>
              <div>
                <input
                  type="checkbox"
                  name="refugee"
                  id="refugee"
                  onChange={(e) => {
                    handleFilter(e.target);
                  }}
                />
                <label className="ml-1"> Refugee </label>
              </div>
              <div>
                <input
                  type="checkbox"
                  name="calamity"
                  id="calamity"
                  onChange={(e) => {
                    handleFilter(e.target);
                  }}
                />
                <label className="ml-1"> Calamity </label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllCampaigns;
