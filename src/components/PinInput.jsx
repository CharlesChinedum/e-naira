import React from "react";

import { Input, Key } from "../components";

import BackspaceOutlinedIcon from "@mui/icons-material/BackspaceOutlined";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import HorizontalRuleOutlinedIcon from "@mui/icons-material/HorizontalRuleOutlined";

const PinInput = ({ onClick, onClickOk }) => {
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  return (
    <div className="w-full rounded-t-lg">
      <div className="w-full">
        <div className="w-full flex justify-center">
          <HorizontalRuleOutlinedIcon
            className="text-gray-300"
            style={{ fontSize: "3em" }}
          />
        </div>

        <div className="flex w-full items-center pb-12">
          <div className="flex w-full flex-col mr-7 items-center">
            <p className="text-xl font-bold">Enter Pin</p>
          </div>

          <div className="absolute right-5 text-center w-12 h-12 rounded-full bg-green-50 flex items-center justify-center">
            <CloseOutlinedIcon onClick={onClick} />
          </div>
        </div>

        <div className="w-full">
          <div className="w-full flex justify-center gap-2 px-7">
            <Input placeholder={7} />
            <Input placeholder={9} />
            <Input placeholder={1} />
            <Input placeholder={0} />
          </div>

          <div className="w-full flex flex-wrap gap-4 justify-center py-10 sm:px-5 md:px-[12em] lg:px-[20em] xl:px-[30em]">
            {/* Numbers 1-9 */}
            {numbers.map((number, index) => (
              <Key
                text={number}
                key={index}
                bg="bg-green-50"
                divClass="rounded-2xl text-xl font-bold hover:bg-green-500 hover:cursor-pointer"
              />
            ))}

            <div className="w-5 flex justify-center py-7 px-10  rounded-2xl hover:bg-green-500 hover:cursor-pointer bg-green-50">
              <BackspaceOutlinedIcon />
            </div>

            <Key
              text="0"
              bg="bg-green-50"
              divClass="rounded-2xl hover:bg-green-500 hover:cursor-pointer"
              className="text-xl font-bold"
            />
            {/* <BackspaceOutlinedIcon /> */}
            <Key
              text="OK"
              divClass="rounded-2xl hover:bg-green-50 hover:cursor-pointer"
              className="text-white text-xl font-bold  hover:text-black"
              bg="bg-green-600"
              onClick={onClickOk}
            />
          </div>
        </div>

        <p className="text-center font-bold text-lg">Forgot pin?</p>
      </div>
    </div>
  );
};

export default PinInput;
