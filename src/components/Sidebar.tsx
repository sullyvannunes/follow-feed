import React from "react";

import { AiOutlinePlus } from "react-icons/ai";
import { BsHouseDoor, BsGear } from "react-icons/bs";
import { Link } from "react-router-dom";

import '../styles/Sidebar.css';

function Sidebar(): any  {
	return (
		<div className='Sidebar'>
      <Link to="/">
        <BsHouseDoor className="HouseIcon"></BsHouseDoor>
      </Link>

      <Link to="/feeds">
        <AiOutlinePlus className="PlusIcon"></AiOutlinePlus>
      </Link>

      <Link to="/">
        <BsGear className="GearIcon"></BsGear>
      </Link>
		</div>
	);
}

export default Sidebar;
