import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { logo, sun } from "../assets";
import { navlinks } from "../constants";
import { useStateContext } from "../context";
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogTitle from '@mui/material/DialogTitle';
import Button from '@mui/material/Button';

export const Icon = ({ styles, name, imgUrl, isActive, disabled, handleClick }) => (
  <div
    className={`w-[48px] h-[48px] rounded-[10px] ${
      isActive && isActive === name && " bg-[#dfdfff] dark:bg-[#2c2f32]"
    } flex justify-center items-center ${
      !disabled && "cursor-pointer"
    } ${styles}`}
    onClick={handleClick}
  >
    {!isActive ? (
      <img src={imgUrl} alt="fund_logo" className="w-1/2 h-1/2" />
    ) : (
      <img
        src={imgUrl}
        alt="fund_logo"
        className={`w-1/2 h-1/2 ${isActive !== name && "grayscale"}`}
      />
    )}
  </div>
);

const Sidebar = () => {
  const navigate = useNavigate();
  const [isActive, setIsActive] = useState("dashboard");
  const [toggleTheme, SetTheme] = useState('');
  const { disconnect, address } = useStateContext();
  // console.log(toggleTheme);

  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleProceed = () => {
    disconnect();
    handleClose();
  };

  return (
    <div className="flex justify-between items-center flex-col sticky top-5 h-[93vh]">
      <Link to="/">
        <Icon styles="w-[52px] h-[52px] bg-light-bg-col dark:bg-[#2c2f32]" imgUrl={logo} />
      </Link>

      <div className=" flex-1 flex flex-col justify-between items-center bg-light-bg-col dark:bg-[#1c1c24]
      rounded-[20px] w-[76px] py-4 mt-12">
        <div className="flex flex-col justify-center items-center gap-3">
          {navlinks.map((link) => (
            <Icon
              key={link.name}
              {...link}
              isActive={isActive}
              handleClick={() => {
                if (link.name === 'logout' && address) {
                  handleClickOpen();
                }
                else if (!link.disabled) {
                  setIsActive(link.name);
                  navigate(link.link);
                }
              }}
            />
          ))}
        </div>
        <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        
      >
        <DialogTitle id="alert-dialog-title">
          {"Do you want to logout of your Wallet ?"}
        </DialogTitle>
        <DialogActions>
          <Button onClick={handleClose}>CANCEL</Button>
          <Button onClick={handleProceed} autoFocus>
            PROCEED
          </Button>
        </DialogActions>
      </Dialog>

        <Icon styles=" bg-[#dfdfff] dark:bg-[#1c1c24] shadow-secondary"
        imgUrl={sun}
        handleClick={() => {
          if (toggleTheme === '') {
            SetTheme('dark');
            document.documentElement.classList.add('dark')
          }
          else {
            SetTheme('');
            document.documentElement.classList.remove('dark')
          }
        }}/>
      </div>
    </div>
  );
};

export default Sidebar;
