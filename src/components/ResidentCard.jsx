import React, { useState } from "react";
import {
  Card,
  CardContent,
  CardActions,
  Typography,
  IconButton,
  Grid,
  Avatar,
  Box,
  Paper,
  Collapse,
  Divider,
  Button,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import BadgeIcon from "@mui/icons-material/Badge";
import VisibilityIcon from "@mui/icons-material/Visibility";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';

const ResidentCard = ({ data }) => {
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
