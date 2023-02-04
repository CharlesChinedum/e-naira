import logo from "../assets/logo.jpg";
import MenuIcon from "@mui/icons-material/Menu";

const Navbar = () => {
  return (
    <div className="w-full">
      <div className="w-full flex justify-between py-5 items-center">
        <div className="font-[700] text-md md:text-xl">Buy Airtime & data</div>
        <div className="flex items-center">
          <img src={logo} alt="" className="w-24" />
          <div className="md:hidden">
            <MenuIcon style={{ fontSize: "30px" }} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
