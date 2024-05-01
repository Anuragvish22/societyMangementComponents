import React, { useState } from "react";
import { Link } from "react-router-dom";

const Submenu = ({ item }) => {
  const [subitem, setSubitem] = useState(false);
  const showSubitem = () => setSubitem(!subitem);
  return (
    <>
      <Link
        to={item.path}
        onClick={item.subItem && showSubitem}
        className="flex"
      >
        <div className="flex items-center p-2 text-gray-900 rounded-lg dark:text-blue-300 hover:bg-gray-100 dark:hover:bg-gray-700 group">
          {item.icon}
          <span>{item.title}</span>
        </div>
        <div className="self-center ">
          {item.subItem && subitem
            ? item.iconOpened
            : item.subItem
            ? item.iconClosed
            : null}
        </div>
      </Link>
      {subitem &&
        item.subItem.map((item, index) => {
          return (
            <Link to={item.path} key={index} className="bg-white flex flex-col">
              <span>{item.title}</span>
            </Link>
          );
        })}
    </>
  );
};

export default Submenu;
