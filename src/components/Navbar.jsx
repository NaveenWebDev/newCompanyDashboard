import React, { useEffect, useState } from "react";
import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import Dropdown from "react-bootstrap/Dropdown";

import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Fade from "@mui/material/Fade";

const Navbar = ({ setNavbarMenuValue }) => {
  const [hamberger, setHamberger] = useState(true);
  const [dropdownValue, setDropdownValue] = useState("Username");
  const [anchorEl, setAnchorEl] = useState(null);

  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  useEffect(() => {
    setNavbarMenuValue(hamberger);
  }, [hamberger]);

  const handleDropdownSelect = (eventKey) => {
    setDropdownValue(eventKey);
  };

  return (
    <>
      <nav className="border-bottom pxy h-60px d-flex justify-content-between align-items-center bg-secondary-100">
        <div className="d-flex gap-3 align-items-center ">
          <div className={`${hamberger ? null : "rotate"} transition`}>
            <i className="icon-first_page fs-4 cursor-pointer text-white" onClick={() => setHamberger((prev) => !prev)}></i>
          </div>

          <span
            style={{ border: "2px solid #ebebeb" }}
            className="p-2 rounded-3 d-flex justify-content-center align-items-center"
          >
              <SearchIcon className="text-white" />
            <InputBase sx={{ ml: 1, flex: 1 }} className="text-white" placeholder="search scheme" />
          </span>
            
        </div>

        <p className="fw-medium text-white"> SNA - Financial Management System</p>

        <div className="d-flex gap-4 align-items-center">

        <i className="icon-assignment cursor-pointer fs-5 text-white"></i>
        <i className="icon-notifications_none cursor-pointer transition fs-5 p-2 text-prime-100 rounded-8px bg-prime-20" onClick={handleClick}></i>

          <Dropdown onSelect={handleDropdownSelect}>
            <Dropdown.Toggle
              id="dropdown-basic"
              className="text-white py-1 px-2 d-flex align-items-center gap-3 bg-transparent"
              style={{ border: "1px solid #fff" }}
            >
              {/* <Avatar
                alt="Travis Howard"
                src=""
                sx={{ height: "30px", width: "30px" }}
              /> */}
              <span>{dropdownValue}</span>
            </Dropdown.Toggle>

            <Dropdown.Menu className="w-100">
              <Dropdown.Item eventKey="Option 1" className="p-1">
                Option 1
              </Dropdown.Item>
              <Dropdown.Item eventKey="Option 2" className="p-1">
                Option 2
              </Dropdown.Item>
              <Dropdown.Item eventKey="Option 3" className="p-1">
                Option 3
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>

          <Menu
            id="fade-menu"
            MenuListProps={{
              "aria-labelledby": "fade-button",
            }}
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            TransitionComponent={Fade}
            
          >
            <MenuItem onClick={handleClose} className="d-flex flex-column" style={{width:"400px", height:"auto"}}>
              <img src="https://cdn3d.iconscout.com/3d/free/thumb/free-new-notification-3d-illustration-download-in-png-blend-fbx-gltf-file-formats--bell-alarm-alert-user-interface-pack-illustrations-4715739.png?f=webp" alt="notificaton image" width={350} />
            There is no notificatoin found
            </MenuItem>
          </Menu>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
