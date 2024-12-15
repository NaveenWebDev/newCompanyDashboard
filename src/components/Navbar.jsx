import React from "react";
import MenuOpenIcon from "@mui/icons-material/MenuOpen";
import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import AssignmentIcon from "@mui/icons-material/Assignment";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import Dropdown from 'react-bootstrap/Dropdown';
import Avatar from '@mui/material/Avatar';

const Navbar = () => {
  return (
    <>
      <nav className="border-bottom p-2 h-60px d-flex justify-content-between align-items-center bg-white">
        <div className="d-flex gap-3 align-items-center">
          <IconButton aria-label="menu" sx={{ width: "40px", height: "40px",}}>
            <MenuOpenIcon sx={{ width: "30px", height: "30px", color:"black" }} />
          </IconButton>

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
          <AssignmentIcon />
          <NotificationsNoneOutlinedIcon />

          <Dropdown>
            <IconButton>
            <Dropdown.Toggle id="dropdown-basic" className="bg-white text-black py-1 px-2 d-flex align-items-center gap-3" style={{border:"3px solid #333"}}>
            <Avatar alt="Travis Howard" src="" sx={{height:"30px", width:"30px"}} />
            <span>
            Username
            </span>
            </Dropdown.Toggle>
            </IconButton>
            <Dropdown.Menu className="w-100">
              <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
              <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>

        </div>
      </nav>
    </>
  );
};

export default Navbar;
