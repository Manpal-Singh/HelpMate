import React from "react";
import SideBar from "./SideBar";
import MainContent from "./MainContent";

const Body = () => {
  return (
    <div className="flex justify-between max-w-7xl mx-auto  ">
      <MainContent />
      <SideBar />
    </div>
  );
};

export default Body;
