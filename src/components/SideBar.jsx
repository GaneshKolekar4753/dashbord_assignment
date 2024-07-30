import React from "react";
import profileImg from "../assets/profile.png";
import SidebarList1 from "./SidebarList1";
import SidebarList2 from "./SideBarList2";
import profileImg1 from "../assets/profile1.jpg"
const SideBar = () => {
  return (
    <>
    <div className="sideBar card">
      <div className="sideHeader">
        <p>Ganesh Kolekar</p>
        <img src={profileImg} alt="profile img" />
      </div>
      <div className="sideList">
        <SidebarList1 />
        <p style={{ fontWeight: 600, opacity: 0.5, fontSize: "16px" }}>
          Support
        </p>
        <SidebarList2 />
      </div>
      <hr />
      <div className="bottomSignature">
        <img src={profileImg1} alt="profile img" />
        <h4>Ganesh Kolekar</h4>
        <p>shgjdgdsd@hsgh.com</p>
      </div>
    </div>
    <div className=" logoutBtn card">
        <button>Logout</button>
    </div>
    </>
  );
};

export default SideBar;
