import React, { useState } from "react";
import {
  AppBar,
  CssBaseline,
  IconButton,
  Toolbar,
  Typography,
  useMediaQuery,
  Box,
  Avatar,
  Badge,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import SideBar from "./components/SideBar";
import AddResidents from "./components/AddResidents";
import ResidentTable from "./components/ResidentTable";
import ResidentCard from "./components/ResidentCard";
import Roles from "./components/Roles";
import {  Notifications } from "@mui/icons-material";
import HouseIcon from '@mui/icons-material/House';
import Dashboard from "./components/Dashboard";
import TicketsList from "./components/TicketsList";
import PropertyList from "./components/PropertyList";
import WorkSites from "./components/WorkSites";
import Login from "./components/Login";
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

const mockData = [
  {
    id: 1,
    name: "John Doe",
    profilePic:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cGVyc29ufGVufDB8fDB8fHww",
    property: "Property A",
    room: "101",
    employeeId: "E001",
    joinDate: "2021-01-01",
    worksite: "Site A",
    userStatus: "Active",
    bed:1,
  },
  {
    id: 2,
    name: "Jane Smith",
    profilePic:
      "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXZhdGFyfGVufDB8fDB8fHww",
    property: "Property B",
    room: "202",
    employeeId: "E002",
    joinDate: "2021-02-01",
    worksite: "Site B",
    userStatus: "Inactive",
    bed:2,
  },
  {
    id: 3,
    name: "Ervin Howell",
    profilePic:
      "https://images.unsplash.com/photo-1491349174775-aaafddd81942?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHBlcnNvbnxlbnwwfHwwfHx8MA%3D%3D",
    property: "Property C",
    room: "103",
    employeeId: "E003",
    joinDate: "2021-01-01",
    worksite: "Site A",
    userStatus: "Active",
    bed:3,
  },
  {
    id: 4,
    name: "Clementine Bauch",
    profilePic:
      "https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHBlcnNvbnxlbnwwfHwwfHx8MA%3D%3D",
    property: "Property D",
    room: "203",
    employeeId: "E004",
    joinDate: "2021-02-01",
    worksite: "Site B",
    userStatus: "Inactive",
    bed:4,
  },
  {
    id: 5,
    name: "Patricia Lebsack",
    profilePic:
      "https://images.unsplash.com/profile-fb-1687954839-16fde341840a.jpg?bg=fff&crop=faces&dpr=1&h=64&w=64&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    property: "Property A",
    room: "106",
    employeeId: "E005",
    joinDate: "2021-01-01",
    worksite: "Site A",
    userStatus: "Active",
    bed:5,
  },
  {
    id: 6,
    name: "Chelsey Dietrich",
    profilePic:
      "https://images.unsplash.com/profile-1569790029351-5adb76747654image?bg=fff&crop=faces&dpr=1&h=64&w=64&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    property: "Property B",
    room: "206",
    employeeId: "E007",
    joinDate: "2021-02-01",
    worksite: "Site B",
    userStatus: "Inactive",
    bed:6,
  },
  {
    id: 1,
    name: "John Doe",
    profilePic:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cGVyc29ufGVufDB8fDB8fHww",
    property: "Property A",
    room: "101",
    employeeId: "E001",
    joinDate: "2021-01-01",
    worksite: "Site A",
    userStatus: "Active",
    bed:1,
  },
  {
    id: 2,
    name: "Jane Smith",
    profilePic:
      "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXZhdGFyfGVufDB8fDB8fHww",
    property: "Property B",
    room: "202",
    employeeId: "E002",
    joinDate: "2021-02-01",
    worksite: "Site B",
    userStatus: "Inactive",
    bed:2,
  },
  {
    id: 3,
    name: "Ervin Howell",
    profilePic:
      "https://images.unsplash.com/photo-1491349174775-aaafddd81942?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHBlcnNvbnxlbnwwfHwwfHx8MA%3D%3D",
    property: "Property C",
    room: "103",
    employeeId: "E003",
    joinDate: "2021-01-01",
    worksite: "Site A",
    userStatus: "Active",
    bed:3,
  },
  {
    id: 4,
    name: "Clementine Bauch",
    profilePic:
      "https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHBlcnNvbnxlbnwwfHwwfHx8MA%3D%3D",
    property: "Property D",
    room: "203",
    employeeId: "E004",
    joinDate: "2021-02-01",
    worksite: "Site B",
    userStatus: "Inactive",
    bed:4,
  },
  {
    id: 5,
    name: "Patricia Lebsack",
    profilePic:
      "https://images.unsplash.com/profile-fb-1687954839-16fde341840a.jpg?bg=fff&crop=faces&dpr=1&h=64&w=64&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    property: "Property A",
    room: "106",
    employeeId: "E005",
    joinDate: "2021-01-01",
    worksite: "Site A",
    userStatus: "Active",
    bed:5,
  },
  {
    id: 6,
    name: "Chelsey Dietrich",
    profilePic:
      "https://images.unsplash.com/profile-1569790029351-5adb76747654image?bg=fff&crop=faces&dpr=1&h=64&w=64&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    property: "Property B",
    room: "206",
    employeeId: "E007",
    joinDate: "2021-02-01",
    worksite: "Site B",
    userStatus: "Inactive",
    bed:6,
  },
];

const App = () => {
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
    <ThemeProvider theme={theme}>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <AppBar
          position="fixed"
          sx={{
            zIndex: theme.zIndex.drawer + 1,
            width: {sm:`calc(100% - 300px)`},
            ml: {sm:'300px'},
            boxShadow: "unset",
            // backgroundColor: "#fff",
            // color: "#000"
            backgroundColor:'#102A43',
            color:"#fff"
          }}
         
        >
          <Toolbar>
            {isMobile && (
              <IconButton
                color="inherit"
                aria-label="open drawer"
                edge="start"
                onClick={handleDrawerToggle}
                sx={{ mr: 2 }}
              >
                <MenuIcon />
              </IconButton>
            )}
             <HouseIcon fontSize="large" sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
            <Typography
              variant="h6"
              noWrap
              sx={{ flexGrow: 1, }}
            >
              OZAI CAMP
            </Typography>
            <Box>
              <IconButton size="large">
                <Badge badgeContent={6} color="error">
                <Notifications sx={{color:"#fff"}}/>
                </Badge>
                
              </IconButton>
              <IconButton>
                <Avatar  sx={{ width: 36, height: 36 }} src="https://i.pinimg.com/736x/72/82/a6/7282a6683554e837b876d9bbff9ffa94.jpg"/>
              </IconButton>
            </Box>
          </Toolbar>
        </AppBar>
        <SideBar
          mobileOpen={mobileOpen}
          handleDrawerToggle={handleDrawerToggle}
          selectedItem={selectedItem}
          handleListItemClick={handleListItemClick}
        />
        <Box
          component="main"
          sx={{
            flexGrow: 1,
            p: { xs: 0.7, sm: 3 },
            width: { sm: `calc(100% - 300px)` },
            ml: { sm: `300px` },
            height: "100vh",
            overflowY: 'auto' 
          }}
        >
          <Toolbar />
          {selectedItem==="List" && <PropertyList/>}
          {selectedItem==="WorkSites" && <WorkSites/>}
          {selectedItem === "Roles & Privilages" && <Roles />}
          {selectedItem === "Tickets" && <TicketsList />}
          {selectedItem === "Dashboard" && <Dashboard/>}
          {selectedItem === "Add Resident" && <AddResidents />}
          {selectedItem === "List Residents" && (
            <Box>
              {isMobile ? (
                <ResidentCard data={mockData} />
              ) : (
                <ResidentTable data={mockData} />
              )}
            </Box>
          )}
        </Box>
      </Box>
      {/* <Login/> */}
    </ThemeProvider>
  );
};

export default App;
