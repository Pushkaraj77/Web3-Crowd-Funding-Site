import React from "react";


const StatBox = ({ name, value, imgUrl }) => {
  return (
    <div
      className="flex flex-row items-center m-2 sm:w-[15em] w-[100px]
    bg-light-bg-shade1 dark:bg-[#1c1c24] rounded-[10px] "
    >
      <div className="w-[100px] sm:w-[180px] max-sm:text-center">
        <div
          className=" text-title-text dark:text-[#b2b3bd]
           sm:px-[12.52px] pt-3 pb-2  font-epilogue text-[12px] sm:text-[14px] w-full"
        >
          {name}
        </div>
        <div
          className=" sm:ml-6 sm:px-[20px] pb-2 text-center text-title-text dark:text-white
           font-semibold font-epilogue text-[12px] sm:text-[18px]  flex max-sm:justify-center
           "
        >
          {value}
        </div>
      </div>
      <div className="max-sm:hidden">
        <img src={imgUrl} alt={`${imgUrl}`} />
      </div>
    </div>
  );
};

export default StatBox;
