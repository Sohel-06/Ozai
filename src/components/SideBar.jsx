import React, { useState } from "react";
import {
  Drawer,
  List,
  ListItemIcon,
  ListItemText,
  Toolbar,
  Paper,
  ListItemButton,
  Collapse,
} from "@mui/material";
import { ExpandLess, ExpandMore, BusinessCenter, Apartment } from "@mui/icons-material";
import PeopleIcon from '@mui/icons-material/People';
import DashboardIcon from '@mui/icons-material/Dashboard';
import ConfirmationNumberIcon from '@mui/icons-material/ConfirmationNumber';
import AddBoxIcon from '@mui/icons-material/AddBox';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import AddLocationAltIcon from '@mui/icons-material/AddLocationAlt';

const drawerWidth = 300;

const NestedListItem = ({ primary, items, icon, selectedItem, handleListItemClick }) => {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <>
      <ListItemButton
        selected={selectedItem === primary}
        onClick={() => {
        //   handleListItemClick(primary);
          handleClick();
        }}
        sx={{
          "&.Mui-selected": {
           
            backgroundColor: "#151b27", 
          },
          "&:hover": {
            backgroundColor: "#1e293a", 
          },
        }}
      >
        <ListItemIcon sx={{ color: selectedItem === primary ? "#ffffff" : "inherit" }}>
          {icon}
        </ListItemIcon>
        <ListItemText primary={primary} />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          {items.map((item, index) => (
            <ListItemButton
              key={index}
              selected={selectedItem === item}
              onClick={() => handleListItemClick(item)}
              sx={{
                pl: 4,
                "&.Mui-selected": {
                 
                  backgroundColor: "#151b27", 
                },
                "&:hover": {
                  backgroundColor: "#1e293a", 
                },
              }}
            >
              <ListItemIcon sx={{ color: selectedItem === item ? "#ffffff" : "inherit" }}>
                {primary==="Residents"?(index === 0  ? <AddBoxIcon /> : <FormatListBulletedIcon />):(index === 0  ? <FormatListBulletedIcon /> : <AddLocationAltIcon />)}
              </ListItemIcon>
              <ListItemText primary={item} />
            </ListItemButton>
          ))}
        </List>
      </Collapse>
    </>
  );
};

const SideBar = ({ mobileOpen, handleDrawerToggle, selectedItem, handleListItemClick }) => {
  const handleDashboardClick = () => {
    handleListItemClick("Dashboard"); 
  };

  const handleTicketsClick = () => {
    handleListItemClick("Tickets");
  };
  const handleRolesClick = () => {
    handleListItemClick("Roles & Privilages");
  };

  return (
    <>
      <Drawer
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true, // Better open performance on mobile.
        }}
        sx={{
          display: { xs: "block", sm: "none" },
          "& .MuiDrawer-paper": {
            boxSizing: "border-box",
            width: drawerWidth,
            border: "none",
          },
          border: "none",
        }}
      >
        <Paper
          elevation={4}
          sx={{
            backgroundColor: "#233044",
            height: "100%",
            display: "flex",
            flexDirection: "column",
            color:"#ffffff",
            borderRadius:0,
          }}
        >
          <Toolbar />
          <List>
            <ListItemButton
              selected={selectedItem === "Dashboard"}
              onClick={handleDashboardClick}
              sx={{
                "&.Mui-selected": {
                 
                  backgroundColor: "#151b27", // Light purple background color
                },
                "&:hover": {
                  backgroundColor: "#1e293a", // Dark blue background color on hover
                },
              }}
            >
              <ListItemIcon sx={{ color: selectedItem === "Dashboard" ? "#ffffff" : "inherit" }}>
                <DashboardIcon />
              </ListItemIcon>
              <ListItemText primary="Dashboard" />
            </ListItemButton>
            <NestedListItem
              primary="Residents"
              items={["Add Resident", "List Residents"]}
              icon={<PeopleIcon />}
              selectedItem={selectedItem}
              handleListItemClick={handleListItemClick}
            />
            <ListItemButton
              selected={selectedItem === "Tickets"}
              onClick={handleTicketsClick}
              sx={{
                "&.Mui-selected": {
                 
                  backgroundColor: "#151b27", // Light purple background color
                },
                "&:hover": {
                  backgroundColor: "#1e293a", // Dark blue background color on hover
                },
              }}
            >
              <ListItemIcon sx={{ color: selectedItem === "Tickets" ? "#ffffff" : "inherit" }}>
                <ConfirmationNumberIcon />
              </ListItemIcon>
              <ListItemText primary="Tickets" />
            </ListItemButton>
            <ListItemButton
              selected={selectedItem === "Roles & Privilages"}
              onClick={handleRolesClick}
              sx={{
                "&.Mui-selected": {
                 
                  backgroundColor: "#151b27", // Light purple background color
                },
                "&:hover": {
                  backgroundColor: "#1e293a", // Dark blue background color on hover
                },
              }}
            >
              <ListItemIcon sx={{ color: selectedItem === "Roles & Privilages" ? "#ffffff" : "inherit" }}>
                <BusinessCenter />
              </ListItemIcon> 
              <ListItemText primary="Roles & Privilages" />
            </ListItemButton>
            <NestedListItem
              primary="Properties"
              items={["List", "WorkSites"]}
              icon={<Apartment />}
              selectedItem={selectedItem}
              handleListItemClick={handleListItemClick}
            />
          </List>
        </Paper>
      </Drawer>
      <Drawer
        variant="permanent"
        sx={{
          display: { xs: "none", sm: "block" },
          "& .MuiDrawer-paper": {
            boxSizing: "border-box",
            width: drawerWidth,
            border: "none",
          },
        }}
        open
      >
        <Paper
          sx={{
            backgroundColor: "#233044",
            height: "100%",
            display: "flex",
            flexDirection: "column",
            color:"#ffffff",
            borderRadius:0,
          }}
        >
          <Toolbar />
          <List>
            <ListItemButton
              selected={selectedItem === "Dashboard"}
              onClick={handleDashboardClick}
              sx={{
                "&.Mui-selected": {
                  
                  backgroundColor: "#151b27", // Light purple background color
                },
                "&:hover": {
                  backgroundColor: "#1e293a", // Dark blue background color on hover
                },
              }}
            >
              <ListItemIcon sx={{ color: selectedItem === "Dashboard" ? "#ffffff" : "inherit" }}>
                <DashboardIcon />
              </ListItemIcon>
              <ListItemText primary="Dashboard" />
            </ListItemButton>
            <NestedListItem
              primary="Residents"
              items={["Add Resident", "List Residents"]}
              icon={<PeopleIcon />}
              selectedItem={selectedItem}
              handleListItemClick={handleListItemClick}
            />
            <ListItemButton
              selected={selectedItem === "Tickets"}
              onClick={handleTicketsClick}
              sx={{
                "&.Mui-selected": {               
                  backgroundColor: "#151b27", // Light purple background color
                },
                "&:hover": {
                  backgroundColor: "#1e293a", // Dark blue background color on hover
                },
              }}
            >
              <ListItemIcon sx={{ color: selectedItem === "Tickets" ? "#ffffff" : "inherit" }}>
                <ConfirmationNumberIcon />
              </ListItemIcon>
              <ListItemText primary="Tickets" />
            </ListItemButton>
            <ListItemButton
              selected={selectedItem === "Roles & Privilages"}
              onClick={handleRolesClick}
              sx={{
                "&.Mui-selected": {
                 
                  backgroundColor: "#151b27", // Light purple background color
                },
                "&:hover": {
                  backgroundColor: "#1e293a", // Dark blue background color on hover
                },
              }}
            >
              <ListItemIcon sx={{ color: selectedItem === "Roles & Privilages" ? "#ffffff" : "inherit" }}>
                <BusinessCenter />
              </ListItemIcon> 
              <ListItemText primary="Roles & Privilages" />
            </ListItemButton>
            <NestedListItem
              primary="Properties"
              items={["List", "WorkSites"]}
              icon={<Apartment />}
              selectedItem={selectedItem}
              handleListItemClick={handleListItemClick}
            />
          </List>
        </Paper>
      </Drawer>
    </>
  );
};

export default SideBar;
