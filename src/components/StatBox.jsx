import React from "react";


const StatBox = ({ name, value, imgUrl }) => {
  return (
    <div
      className="flex flex-row items-center m-2 w-[15em]
    bg-light-bg-shade1 dark:bg-[#1c1c24] rounded-[10px]"
    >
      <div className="w-[180px]">
        <div
          className=" text-title-text dark:text-[#b2b3bd]
           px-[12.52px] pt-3 pb-2  font-epilogue text-[14px] w-full"
        >
          {name}
        </div>
        <div
          className=" ml-6 px-[20px] pb-2 text-center text-title-text dark:text-white
           font-semibold font-epilogue text-[18px]  flex flex-row"
        >
          {value}
        </div>
      </div>
      <div className="">
        <img src={imgUrl} alt={`${imgUrl}`} />
      </div>
    </div>
  );
};

export default StatBox;
