import React, { useEffect } from "react";
import { categories } from "../constants";
import { useStateContext } from "../context";
import { useNavigate } from "react-router-dom";

const DisplayCategories = () => {
  const { toggleTheme } = useStateContext();
  const navigate  = useNavigate();

  const handleClick = (category) =>  {
    navigate('all-campaigns', {
      state: category,
    });
  }

  // useEffect(() => {
  //   console.log(toggleTheme);
  // }, [toggleTheme]);

  return (
    <div>
      <div>
        <h1
          className="font-epilogue font-semibold text-title-text
      dark:text-white text-[18px] text-left"
        >
          Categories
        </h1>
      </div>

      <div className="flex flex-wrap mt-[20px] gap-[26px] max-sm:hidden">
        {categories.map((category) => (
          <div className=" flex flex-col bg-light-bg-col dark:bg-dark-bg-shade1 rounded-[10px] w-[14em] h-[14em] dark:text-white
            justify-center items-center gap-5 text-subtitle-text cursor-pointer"
            onClick={()=> (handleClick(category))}
            >
            <img
              src={
                toggleTheme === "dark"
                  ? category.imgUrl.theme_light
                  : category.imgUrl.theme_dark
              }
              alt="hospitalImage"
              className="w-[4em] h-[4em]"
            />
            <h2
            className=" font-semibold font-epilogue ">
            {category.name}
            </h2>
          </div>
        ))}
      </div>

      {/* Small Screens */}
      <div className="sm:hidden flex flex-wrap justify-evenly gap-4 mt-4">
      {categories.map((category) => (
        <div className="flex flex-col items-center text-subtitle-text dark:text-white">

          <div className=" flex flex-col bg-light-bg-col dark:bg-dark-bg-shade1 rounded-full sm:rounded-[10px] w-[80px] h-[80px] 
            justify-center items-center gap-5  cursor-pointer"
            onClick={()=> (handleClick(category))}
            >
            <img
              src={
                toggleTheme === "dark"
                  ? category.imgUrl.theme_light
                  : category.imgUrl.theme_dark
              }
              alt="hospitalImage"
              className="w-[40px] h-[40px]"
            />
          </div>
            <h2
            className=" font-semibold font-epilogue  ">
            {category.name}
            </h2>
        </div>
        ))}
      </div>
    </div>
  );
};

export default DisplayCategories;
