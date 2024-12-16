import React, { useEffect, useState } from "react";
import MenuOpenIcon from "@mui/icons-material/MenuOpen";
import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import AssignmentIcon from "@mui/icons-material/Assignment";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import Dropdown from "react-bootstrap/Dropdown";
import Avatar from "@mui/material/Avatar";

import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Fade from "@mui/material/Fade";

const Navbar = ({ setNavbarMenuValue }) => {
  const [hamberger, setHamberger] = useState(true);
  const [dropdownValue, setDropdownValue] = useState("Username");
  const [anchorEl, setAnchorEl] = React.useState(null);

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
      <nav className="border-bottom p-2 h-60px d-flex justify-content-between align-items-center bg-white">
        <div className="d-flex gap-3 align-items-center ">
          <div className={`${hamberger ? null : "rotate"} transition`}>
            <IconButton
              aria-label="menu"
              sx={{ width: "40px", height: "40px" }}
              onClick={() => setHamberger((prev) => !prev)}
            >
              <MenuOpenIcon
                sx={{ width: "30px", height: "30px", color: "black" }}
              />
            </IconButton>
          </div>

          <span
            style={{ border: "2px solid #ebebeb" }}
            className="p-2 rounded-3 d-flex justify-content-center align-items-center"
          >
            <IconButton type="button" sx={{ p: "15px" }} aria-label="search">
              <SearchIcon />
            </IconButton>
            <InputBase sx={{ ml: 1, flex: 1 }} placeholder="search scheme" />
          </span>
        </div>

        <p className="fw-medium"> SNA - Financial Management System</p>

        <div className="d-flex gap-4 align-items-center">

          <IconButton sx={{height:"40px", width:"40px"}}>
          <AssignmentIcon className="cursor-pointer text-black" />
          </IconButton>

          <IconButton sx={{height:"40px", width:"40px"}}>
          <NotificationsNoneOutlinedIcon
            className="cursor-pointer text-black"
            onClick={handleClick}
          />
          </IconButton>

          <Dropdown onSelect={handleDropdownSelect}>
            <Dropdown.Toggle
              id="dropdown-basic"
              className="bg-white text-black py-1 px-2 d-flex align-items-center gap-3"
              style={{ border: "3px solid #333" }}
            >
              <Avatar
                alt="Travis Howard"
                src=""
                sx={{ height: "30px", width: "30px" }}
              />
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
