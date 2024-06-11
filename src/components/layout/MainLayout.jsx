import React, { useState } from "react";
import {
  AppBar,
  IconButton,
  Toolbar,
  Typography,
  useMediaQuery,
  Box,
  Avatar,
  Badge,
  createTheme,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import SideBar from "../common/SideBar";

import { Notifications } from "@mui/icons-material";
import HouseIcon from "@mui/icons-material/House";
import PropertyList from "../../pages/property/PropertyList";
import WorkSites from "../../pages/property/WorkSites";
import TicketsList from "../../pages/tickets/TicketsList";
import Dashboard from "../../pages/dashboard/Dashboard";
import AddResidents from "../../pages/residents/AddResidents";
import ResidentCard from "../../pages/residents/ResidentCard";
import ResidentTable from "../../pages/residents/ResidentTable";
import Roles from "../../pages/roles&privilages/Roles";
import { Outlet } from "react-router-dom";
import TopBar from "../common/TopBar";

const theme = createTheme({
  typography: {
    fontFamily: ["Roboto", "sans-serif"].join(","),
  },
  palette: {
    primary: {
      main: "#2196f3",
    },
    text: {
      primary: "#000000",
    },
  },
});


const MainLayout = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState("Dashboard");
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleListItemClick = (item) => {
    setSelectedItem(item);
    setMobileOpen(!mobileOpen);
  };
  return (
    <Box sx={{ display: "flex" }}>
      <TopBar isMobile={isMobile} handleDrawerToggle={handleDrawerToggle}/>
      <Box
        component="nav"
        sx={{
          width: isMobile ? "0px" : "300px",
          flexShrink: 0,
        }}
      >
        <SideBar
          isMobile={isMobile}
          mobileOpen={mobileOpen}
          handleDrawerToggle={handleDrawerToggle}
          selectedItem={selectedItem}
          handleListItemClick={handleListItemClick}
        />
      </Box>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: { xs: 0.7, sm: 3 },
          width: { sm: `calc(100% - 300px)` },
          minHeight: "100vh",
          // overflowY: "auto",
        }}
      >
        <Toolbar />
        {/* {selectedItem === "List" && <PropertyList />}
        {selectedItem === "WorkSites" && <WorkSites />}
        {selectedItem === "Roles & Privilages" && <Roles />}
        {selectedItem === "Tickets" && <TicketsList />}
        {selectedItem === "Dashboard" && <Dashboard />}
        {selectedItem === "Add Resident" && <AddResidents />}
        {selectedItem === "List Residents" && (
          <Box>
            {isMobile ? (
              <ResidentCard data={mockData} />
            ) : (
              <ResidentTable data={mockData} />
            )}
          </Box>
        )} */}
        <Outlet/>
      </Box>
    </Box>
  );
};

export default MainLayout;
