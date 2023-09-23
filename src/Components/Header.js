import React, { useState } from "react";
import {
  Box,
  AppBar,
  Typography,
  Toolbar,
  IconButton,
  Drawer,
  Divider,
} from "@mui/material";
// import SportsSoccerOutlinedIcon from "@mui/icons-material/SportsSoccerOutlined";
import SportsSoccerOutlinedIcon from "@mui/icons-material/SportsSoccerOutlined";
import { Link } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  // handle  menu click

  const handletoggle = () => {
    setMobileOpen(!mobileOpen);
  };
  //menu drawer
  const drawer = (
    <Box onClick={handletoggle} sx={{ textAlign: "ce" }}>
      <Typography
        color={"aqua"}
        variant="h6"
        component="div"
        sx={{ flexGrow: 1, my: 2 }}
      >
        <SportsSoccerOutlinedIcon />
        MY Football Website
      </Typography>
      <Divider primary="Inbox" />
      <ul className="mobile-navigation">
        <li>
          <Link to={"/"}>Home </Link>
        </li>
        <li>
          <Link to={"/menu"}>Menu </Link>
        </li>
        <li>
          <Link to={"/about"}>About </Link>
        </li>
        <li>
          <Link to={"/contact"}>Contact </Link>
        </li>
      </ul>
    </Box>
  );
  return (
    <>
      {/* create navbar */}
      <Box>
        <AppBar components={"nav"} sx={{ bgcolor: "black" }}>
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              sx={{ mr: 2, display: { sm: "none" } }}
              onClick={handletoggle}
            >
              <MenuIcon />
            </IconButton>

            <Typography
              color={"Blue Green"}
              variant="h6"
              component="div"
              sx={{ flexGrow: 1 }}
            >
              <SportsSoccerOutlinedIcon />
              MY Football Website
            </Typography>

            <Box sx={{ display: { xs: "none", sm: "block" } }}>
              <ul className="navigation-menu">
                <li>
                  <Link to={"/"}>Home </Link>
                </li>
                <li>
                  <Link to={"/Menu"}>Menu </Link>
                </li>
                <li>
                  <Link to={"/About"}>About </Link>
                </li>
                <li>
                  <Link to={"/contact"}>Contact </Link>
                </li>
              </ul>
            </Box>
          </Toolbar>
        </AppBar>
        <Box component="nav">
          <Drawer
            variant="temporary"
            open={mobileOpen}
            onClose={handletoggle}
            sx={{
              display: { xs: "block", sm: "none" },
              "& .MuiDrawer-paper": {
                boxSizing: "border-box",
                width: "240px",
              },
            }}
          >
            {drawer}
          </Drawer>
        </Box>
        <Box>
          <Toolbar />
        </Box>
      </Box>
    </>
  );
};

export default Header;
