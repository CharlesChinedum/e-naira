import React, { useState } from "react";

import {
  Navbar,
  MultiSelect,
  Button,
  Myself,
  Others,
  PinInput,
  Success,
} from "../components";

import HttpsOutlinedIcon from "@mui/icons-material/HttpsOutlined";
import DoneOutlinedIcon from "@mui/icons-material/DoneOutlined";

const Home = () => {
  const [mySelf, setMySelf] = useState(true);
  const [others, setOthers] = useState(false);
  const [submit, setSubmit] = useState(false);
  const [done, setDone] = useState(false);

  const handleMySelf = () => {
    setMySelf(true);
    setOthers(false);
  };

  const handleOthers = () => {
    setMySelf(false);
    setOthers(true);
  };

  const handleSubmit = () => {
    setSubmit(true);
  };

  const handleClose = () => {
    setSubmit(false);
  };

  const handleClickOk = () => {
    setDone(true);
    setSubmit(false);
  };

  const handleDone = () => {
    setDone(false);
  };

  return (
    <div className="">
      <div className="px-5 md:px-40">
        <Navbar />

        <div className="w-full">
          <div className="w-full">
            <div>
              <p className="text-gray-500 poppins-title">Enter eWallet ID</p>
              <div className="w-full my-3 flex justify-between py-2 rounded-md px-3 items-center border-x-2 border-y-2 border-gray-200">
                <HttpsOutlinedIcon />
                <input
                  type="text"
                  className="border-0 w-full py-3 px-2 outline-none"
                />
                <DoneOutlinedIcon className="text-green-600" />
              </div>
            </div>

            <div>
              <p className="text-gray-500 poppins-title">Choose Network</p>
              <MultiSelect />
            </div>
          </div>
        </div>
      </div>

      <div className="w-full pt-10">
        <div className="full flex">
          <div
            className={`w-1/2 text-center border-b-2 ${
              mySelf ? "border-green-700" : "border-gray-300"
            } pb-3`}
          >
            <p
              className={`text-lg md:text-xl ${
                mySelf ? "text-green-700  font-bold" : ""
              }`}
              onClick={handleMySelf}
            >
              For Myself
            </p>
          </div>
          <div
            className={`w-1/2 text-center border-b-2 ${
              others ? "border-green-700" : "border-gray-300"
            } pb-3`}
          >
            <p
              className={`text-lg md:text-xl ${
                others ? "text-green-700  font-bold" : ""
              }`}
              onClick={handleOthers}
            >
              For Others
            </p>
          </div>
        </div>

        {mySelf && <Myself />}
        {others && <Others />}

        <div className="px-5 py-5  md:px-40">
          <Button
            text="Continue"
            className="w-full text-lg bg-green-700 rounded-md text-white p-5"
            onClick={handleSubmit}
          />
        </div>

        {submit && (
          <div className="px-5 bg-white z-10 fixed bottom-0  overflow-y-hidden w-full rounded-t-3xl">
            <PinInput onClick={handleClose} onClickOk={handleClickOk} />
          </div>
        )}

        {done && (
          <div className="bg-white z-10 fixed bottom-0  overflow-y-hidden w-full rounded-t-3xl">
            <Success onClick={handleDone} />
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;
