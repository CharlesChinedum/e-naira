import DoneOutlinedIcon from "@mui/icons-material/DoneOutlined";
import HorizontalRuleOutlinedIcon from "@mui/icons-material/HorizontalRuleOutlined";

import { Button } from "../components";

const Success = ({ onClick }) => {
  return (
    <div className="h-[80%]">
      <div className="px-5 py-5">
        <div className="flex items-center flex-col border-b-2 border-gray-200 pb-7">
          <HorizontalRuleOutlinedIcon />
          <p className="font-bold text-xl">Success</p>
          <div className="flex justify-center items-center w-[8em] h-[8em] bg-green-100 rounded-full my-7">
            <DoneOutlinedIcon style={{ fontSize: "3em" }} />
          </div>
          <p className="text-xl text-green-600 font-bold  text-center">
            Your N5,000 airtime <br /> purchase was successful
          </p>
        </div>

        <div className="py-7">
          <p className="text-center text-gray-500 text-lg mb-5">
            Transaction details
          </p>
          <div className="flex justify-between border-b-2 border-gray-200 py-3">
            <p className="text-lg text-gray-500">Date</p>
            <p className="font-bold text-lg">Tue 24 Jan, 2022</p>
          </div>
          <div className="flex justify-between border-b-2 border-gray-200 py-3">
            <p className="text-lg text-gray-500">Reference</p>
            <p className="font-bold text-lg">Dyt635363533i30</p>
          </div>
          <div className="flex justify-between py-3">
            <p className="text-lg text-gray-500">Beneficiary</p>
            <p className="font-bold text-lg">+2348123456789</p>
          </div>
        </div>

        <div>
          <Button
            text="Ok"
            className="w-full text-lg bg-green-700 rounded-md text-white p-5"
            onClick={onClick}
          />
        </div>
      </div>
    </div>
  );
};

export default Success;
