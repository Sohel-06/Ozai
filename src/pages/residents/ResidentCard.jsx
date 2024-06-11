import React, { useState } from "react";
import {
  Card,
  CardContent,
  CardActions,
  Typography,
  Grid,
  Avatar,
  Box,
  Paper,
  Collapse,
  Divider,
  Button,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';


const data = [
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
    bed: 1,
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
    bed: 2,
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
    bed: 3,
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
    bed: 4,
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
    bed: 5,
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
    bed: 6,
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
    bed: 1,
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
    bed: 2,
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
    bed: 3,
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
    bed: 4,
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
    bed: 5,
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
    bed: 6,
  },
];

const ResidentCard = () => {
  const [expanded, setExpanded] = useState(null);

  const toggleAccordion = (id) => {
    if (expanded === id) {
      setExpanded(null);
    } else {
      setExpanded(id);
    }
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        margin: { xs: "8px 16px", sm: "8px 16px" },
      }}
    >
      <Paper sx={{ padding: { xs: 2, sm: 2 }, mb: 2 }}>
        <Typography variant="h6"><b>Residents</b></Typography>
      </Paper>
      <Grid container spacing={2}>
        {data.map((resident) => (
          <Grid item xs={12} sm={6} md={4} key={resident.id}>
            <Card
            >
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  padding: 2,
                  
                }}
                onClick={() => toggleAccordion(resident.id)}
              >
                <Avatar
                  src={resident.profilePic}
                  sx={{ width: 56, height: 56 }}
                />
                <Box sx={{ flexGrow: 1, textAlign: "left", paddingLeft: 2 }}>
                  <Typography variant="h6" sx={{color:"#000"}}>{resident.name}</Typography>
                  <Typography  sx={{ display: 'flex', alignItems: 'center', color: resident.userStatus === 'Active' ? 'green' : 'red' }}>
                  {resident.userStatus === 'Active' ? <FiberManualRecordIcon sx={{fontSize:"small",marginRight:"4px"}}/>:<RemoveCircleOutlineIcon sx={{fontSize:"small",marginRight:"4px"}}/>}
                  {resident.userStatus}
                </Typography>
                </Box>
                <Box sx={{ marginLeft: "auto", paddingRight: 1 }}>
                  {expanded === resident.id ? (
                    <ExpandLessIcon />
                  ) : (
                    <ExpandMoreIcon />
                  )}
                </Box>
                
              </Box>
              <Divider variant="middle" />
              <Collapse
                in={expanded === resident.id}
                sx={{
                  transition: "max-height 0.3s ease",
                  maxHeight: expanded === resident.id ? "1000px" : "0",
                  overflow: "hidden",
                }}
              >
                <CardContent>
                <Grid container spacing={2} pl={2} >
                  <Grid item xs={6} >
                    <Typography sx={{color:"gray"}}>Room</Typography> 
                    <Typography sx={{color:"#000"}}>{resident.room}</Typography>
                  </Grid>
                  <Grid item xs={6} sx={{textAlign:"center"}}>
                    <Typography sx={{color:"gray"}}>Employee ID</Typography>
                    <Typography sx={{color:"#000"}}>{resident.employeeId}</Typography>
                  </Grid>
                  <Grid item xs={6}>
                    <Typography sx={{color:"gray"}}>Join Date</Typography>
                    <Typography sx={{color:"#000"}}>{resident.joinDate}</Typography>
                  </Grid>
                  <Grid item xs={6} sx={{textAlign:"center"}}>
                    <Typography sx={{color:"gray"}}>Worksite</Typography>
                    <Typography sx={{color:"#000"}}>{resident.worksite}</Typography>
                  </Grid>
                  <Grid item xs={6}> 
                    <Typography sx={{color:"gray"}}>Bed</Typography>
                    <Typography sx={{color:"#000"}}>{resident.bed}</Typography>
                  </Grid>
                  <Grid item xs={6} sx={{textAlign:"center"}}> 
                    <Typography sx={{color:"gray"}}>Property</Typography>
                    <Typography sx={{color:"#000"}}>{resident.property}</Typography>
                  </Grid>
                </Grid>
                </CardContent>
                <CardActions sx={{display:"flex",justifyContent:"space-evenly"}}>
                 <Button variant="" sx={{color:"rgb(0, 172, 105)"}} >Monthly Review</Button>
                 <Button sx={{color:"rgb(51, 102, 255)"}} >Assign Badge</Button>
                 <Button sx={{color:"rgb(244, 161, 0)"}}>Edit</Button>
                </CardActions>
              </Collapse>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default ResidentCard;
