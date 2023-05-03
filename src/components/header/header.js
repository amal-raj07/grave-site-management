import "./style.css";
import Profile from "../profile/profile";
import { FaDollarSign,FaFileAlt } from "react-icons/fa";
import { CgMicrosoft } from "react-icons/cg";

const headerContainer = ({ header, gap }) => {
  return (
    <div className={`flex justify-start items-center ${gap ? gap : "gap-2"}`}>
      {header}
    </div>
  );
};
function Header() {
  return (
    <div className="Header-container">
      <headerContainer gap={"gap-2"}>
        <div className="font-medium text-white">Grave Sites Managment</div>
      </headerContainer>
      <div className="SubMenu-container">
        <div className="Maintain-Box p-2">
          <i class="bi bi-menu-button-wide Icon-color"></i>
          <CgMicrosoft color="white"/>
          <h6 className="Maintain-text px-2 ">Maintain</h6>
          <i class="bi bi-chevron-down Icon-color"></i>
        </div>
        <div className="Sub-box px-3">
        <FaDollarSign color="white"/>
          <h6 className="Maintain-text px-2 m-0">Payments</h6>
        </div>
        <div className="Sub-box px-3">
          <FaFileAlt color="white"/>
          <h6 className="Maintain-text px-2 m-0">Reports</h6>
        </div>
      </div>
      <div className="HelperMenu-container">
        <i class="bi bi-search Icon-color px-2"></i>
        <i class="bi bi-gear Icon-color px-2"></i>
        <i class="bi bi-info-circle-fill Icon-color px-2"></i>

        <Profile name={"JS"} />
        <div className="User-name-container px-3">
          <p className="User-text">John snow</p>
          <p className="User-text Grey-text pt-2">Muncipality officer</p>
        </div>
        <i class="bi bi-chevron-down Icon-color"></i>
      </div>
    </div>
  );
}

export default Header;
