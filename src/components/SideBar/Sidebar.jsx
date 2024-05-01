import React from "react";
import { SidebarData } from "./SidebarData";
import Submenu from "./Submenu";
import "./sidebar.scss";

const Sidebar = () => {
  return (
    <>
      <nav className="navbar bg-orange-300 w-[100%] h-[3.5rem]"></nav>
      <aside
        id="sidebar"
        className=" bg-slate-400 h-[96%] w-[18%] top-[3.5rem] p-1 fixed pb-2 overflow-scroll"
        aria-label="Sidebar"
      >
        {SidebarData.map((item, index) => {
          return <Submenu item={item} key={index} />;
        })}
      </aside>
    </>
  );
};

export default Sidebar;
