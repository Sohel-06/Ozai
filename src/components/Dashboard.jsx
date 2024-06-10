import React from "react";
import PeopleIcon from "@mui/icons-material/People";
import ApartmentIcon from "@mui/icons-material/Apartment";
import TrendingDownIcon from "@mui/icons-material/TrendingDown";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import ConfirmationNumberIcon from "@mui/icons-material/ConfirmationNumber";
import MedicalInformationIcon from "@mui/icons-material/MedicalInformation";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import CampaignIcon from "@mui/icons-material/Campaign";

import DeliveryImage from "../delivery.svg";

import {
  Grid,
  Typography,
  Box,
  Paper,
  Avatar,
  Button,
  Divider,
  IconButton,
} from "@mui/material";
import CustomPieChart from "./CustomPieChart";
import CustomBarChart from "./CustomBarChart";
import ChartSelector from "./ChartSelector";

const Card = ({ label, amount, description, icon: Icon, className }) => {
  return (
    <Paper sx={{borderRadius:"12px",overflow: "hidden"}}>
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          sx={{ padding: "24px",flexWrap: "nowrap" }}
        >
          <Box >
            <Typography sx={className}>{amount}</Typography>
            <Typography
              variant="h6"
              color="textSecondary"
              sx={{
                fontSize: "0.875rem",
                fontWeight: 500,
                color: "#000",
                marginTop:"8px"
              }}
            >
              {label}
            </Typography>
          </Box>

          <Icon style={{ fontSize: "32px", color: `${className.color}` }} />
        </Box>
      <Box
          sx={{
            backgroundColor: `${className.color}`,
            padding: "12px 20px",
            textAlign: "center",
            display: "flex", 
            justifyContent: "space-between",
            
          }}
        > 
          <Typography
            sx={{
              
              fontSize: "14px",
              color: "#fff",
            }}
          >
            {description}
          </Typography>
          <TrendingUpIcon sx={{ color: "#fff" }} />
        </Box>
    </Paper>
  );
};

const Dashboard = () => {
  const cardData = [
    {
      label: "Residents Count",
      amount: `600`,
      icon: PeopleIcon,
      description: "Increase in 10%",
      className: {
        color: "rgb(244, 161, 0)",
        fontSize: "24px",
        fontWeight: 600,
      },
    },
    {
      label: "All Properties",
      amount: `20`,
      icon: ApartmentIcon,
      description: "Increase in 8%",
      className: {
        color: "rgb(51, 102, 255)",
        fontSize: "24px",
        fontWeight: 600,
      },
    },
    {
      label: "Tickets Raised",
      amount: `40`,
      icon: ConfirmationNumberIcon,
      description: "Increase in 16%",
      className: {
        color: "rgb(255, 65, 58)",
        fontSize: "24px",
        fontWeight: 600,
      },
    },
    {
      label: "Mental Health",
      amount: `3`,
      icon: MedicalInformationIcon,
      description: "Increase in 36%",
      className: {
        color: "rgb(0, 172, 105)",
        fontSize: "24px",
        fontWeight: 600,
      },
    },
  ];

  const events = [
    {
      name: "Grand New Event",
      date: "06",
      month: "JUNE",
      location: "Ratan | Uppal | Hyderabad",
    },
    {
      name: "Grand New Event",
      date: "16",
      month: "JULY",
      location: "Ratan | Uppal | Hyderabad",
    },
    {
      name: "Grand New Event",
      date: "31",
      month: "JULY",
      location: "Ratan | Uppal | Hyderabad",
    },
    {
      name: "Grand New Event",
      date: "03",
      month: "AUG",
      location: "Ratan | Uppal | Hyderabad",
    },

    {
      name: "Grand New Event",
      date: "03",
      month: "AUG",
      location: "Ratan | Uppal | Hyderabad",
    },
    {
      name: "Grand New Event",
      date: "31",
      month: "JULY",
      location: "Ratan | Uppal | Hyderabad",
    },
  ];
  const tickets = [
    {
      id: 1,
      profilePic:
        "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cGVyc29ufGVufDB8fDB8fHww", // Replace with your image URL
      username: "John Doe",
      ticketName: "WIFI Issue",
      createdAt: "2024-06-04", // Adjust date and time as needed
      description: "This is a sample ticket description for ticket 1.",
      status: "Resolved",
    },
    {
      id: 2,
      profilePic:
        "https://images.unsplash.com/profile-1569790029351-5adb76747654image?bg=fff&crop=faces&dpr=1&h=64&w=64&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
      username: "Jane Smith",
      ticketName: "Water Problem",
      createdAt: "2024-06-04",
      description: "This is a sample ticket description for ticket 1.",
      status: "Resolved",
    },
    {
      id: 3,
      profilePic:
        "https://images.unsplash.com/photo-1491349174775-aaafddd81942?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHBlcnNvbnxlbnwwfHwwfHx8MA%3D%3D",
      username: "John Doe",
      ticketName: "Electricity",
      createdAt: "2024-06-04", // Adjust date and time as needed
      description: "This is a sample ticket description for ticket 1.",
      status: "Raised",
    },
    {
      id: 4,
      profilePic:
        "https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHBlcnNvbnxlbnwwfHwwfHx8MA%3D%3D",
      username: "Jane Smith",
      ticketName: "Ticket 2",
      createdAt: "2024-06-04",
      description: "This is a sample ticket description for ticket 1.",
      status: "Resolved",
    },
    {
      id: 5,
      profilePic:
        "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cGVyc29ufGVufDB8fDB8fHww", // Replace with your image URL
      username: "John Doe",
      ticketName: "Ticket 1",
      createdAt: "2024-06-04", // Adjust date and time as needed
      description: "This is a sample ticket description for ticket 1.",
      status: "opened",
    },
    {
      id: 6,
      profilePic:
        "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cGVyc29ufGVufDB8fDB8fHww", // Replace with your image URL
      username: "Jane Smith",
      ticketName: "Ticket 2",
      createdAt: "2024-06-04",
      description: "This is a sample ticket description for ticket 1.",
      status: "opened",
    },
    // Add more dummy tickets as needed
  ];
  return (
    <Box sx={{padding:{xs:2}}}>
      <Grid container spacing={{ xs: 2, sm: 4 }}>
        {cardData.map((d, i) => (
          <Grid item xs={12} sm={6} xl={3} key={i}>
            <Card
              amount={d.amount}
              description={d.description}
              icon={d.icon}
              label={d.label}
              className={d.className}
            />
          </Grid>
        ))}
      </Grid>
      <Grid container spacing={4} mt={2}>
        <Grid item xs={12} sm={6}>
          <Paper
            sx={{
              padding: "24px 24px 12px 24px",

              height: "100%",
              display: "flex",
              flexDirection: "column",
              borderRadius: "8px",
              boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)", 
            }}
          >
            <Typography
              variant="h6"
              sx={{
                marginBottom: 1,
                color: "#000",
                borderBottom: "1px solid #ddd",
                paddingBottom: 1,
              }}
            >
              Upcoming Events
            </Typography>
            {events.slice(0, 4).map((event, index) => (
              <div key={index} style={{ marginBottom: 10 }}>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    // paddingBottom: 2,
                  }}
                >
                  <Paper
                    sx={{
                      width: 70,
                      height: 58,
                      borderRadius: "2px",
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                      alignItems: "center",
                      marginRight: 2,
                      backgroundColor: "#f5f5f5",
                    }}
                  >
                    <Typography variant="h6" sx={{ color: "#333" }}>
                      {event.date}
                    </Typography>
                    <Typography variant="body2" sx={{ color: "#000" }}>
                      {event.month}
                    </Typography>
                  </Paper>
                  <div>
                    <Typography
                      variant="subtitle1"
                      sx={{ fontWeight: "bold", color: "#000" }}
                    >
                      {event.name}
                    </Typography>
                    <Typography variant="body2" sx={{ color: "#777" }}>
                      {event.location}
                    </Typography>
                  </div>
                </div>
                <Divider sx={{ mt: 2 }} />
              </div>
            ))}
            {events.length > 4 && (
              <Button
                variant="text"
                color="primary"
                sx={{
                  marginTop: "auto",
                  alignSelf: "center",
                  display: "flex",
                  alignItems: "center",
                  width: "100%",
                }}
              >
                View All <ChevronRightIcon />
              </Button>
            )}
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Paper
            sx={{
              padding: "24px 24px 12px 24px",
              height: "100%",
              display: "flex",
              flexDirection: "column",
              borderRadius: "8px",
              boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)", // Subtle shadow
            }}
          >
            <Typography
              variant="h6"
              sx={{
                marginBottom: 2,
                color: "#000",
                borderBottom: "1px solid #ddd",
                paddingBottom: 1,
              }}
            >
              Latest Tickets
            </Typography>
            {tickets.slice(0, 4).map((ticket, index) => (
              <div key={index} style={{ marginBottom: 16 }}>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    paddingBottom: 2,
                  }}
                >
                  <Avatar
                    src={ticket.profilePic}
                    alt={`${ticket.username}'s profile`}
                    sx={{
                      width: 50,
                      height: 50,
                      borderRadius: "50%",
                      marginRight: 2,
                    }}
                  />
                  <div>
                    <Typography
                      variant="subtitle1"
                      sx={{ fontWeight: "bold", color: "#000" }}
                    >
                      {ticket.ticketName}
                    </Typography>
                    <Typography variant="body2" sx={{ color: "#777" }}>
                      {ticket.username} | {ticket.createdAt}
                    </Typography>
                  </div>
                  <Button
                    variant="contained"
                    sx={{
                      marginLeft: "auto",
                      flex: "none",
                      minWidth: 110,
                      backgroundColor:
                        ticket.status === "Raised"
                          ? "rgb(255, 65, 58)"
                          : "rgb(76, 175, 80)",
                    }}
                  >
                    {ticket.status}
                  </Button>
                </div>
                <Divider sx={{ mt: 2 }} />
              </div>
            ))}
            {tickets.length > 4 && (
              <Button
                variant="text"
                color="primary"
                sx={{
                  marginTop: "auto",
                  alignSelf: "center",
                  display: "flex",
                  alignItems: "center",
                  width: "100%",
                }}
              >
                View All <ChevronRightIcon />
              </Button>
            )}
          </Paper>
        </Grid>
      </Grid>
      <Grid spacing={4} container mt={2}>
        <Grid sm={8} item xs={12}>
          {/* <Paper
            sx={{
              height: "100%",
              padding: "16px 12px",
              borderRadius: "8px",
              boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
            }}
          >
            
            <CustomBarChart/>
          </Paper> */}
          <ChartSelector />
        </Grid>
        <Grid sm={4} item xs={12}>
          <Grid spacing={2} direction="column" container>
            <Grid item>
              <Paper
                sx={{
                  padding: "16px 12px",
                  borderRadius: "8px",
                  boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
                }}
              >
                <Grid container spacing={1}>
                  <Grid item sm={8}>
                    <IconButton sx={{ backgroundColor: "#F8F9FA" }}>
                      <CampaignIcon sx={{ color: "rgb(5,118,185)" }} />
                    </IconButton>
                    <Box sx={{ display: "flex", alignItems: "center" }}>
                      <Typography sx={{ color: "#000", fontSize: "16px" }}>
                        <b>Stay Connected, Stay Updated : </b> Follow
                        Deliveries, Stay Informed Daily
                        <ArrowForwardIcon
                          sx={{ verticalAlign: "middle", fontSize: "22px" }}
                        />
                      </Typography>
                    </Box>
                    <Button
                      variant="contained"
                      color="success"
                      sx={{ marginTop: "6px" }}
                    >
                      Send Updates
                    </Button>
                  </Grid>
                  <Grid
                    item
                    sm={4}
                    sx={{
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    <img
                      src="https://samply.react-v-light.pichforest.com/static/media/widget-img.cc77a9b74c24b94e1bf5.png"
                      style={{
                        // maxHeight: "100%",
                        maxWidth: "100%",
                      }}
                    />
                  </Grid>
                </Grid>
              </Paper>
            </Grid>

            <Grid
              item
              sx={{
                height: "100%",
                display: "flex",
              }}
            >
              <img
                src="https://ozailiving.com/assets/img/transport.gif"
                style={{
                  maxWidth: "100%",
                  borderRadius: "8px",
                  boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
                }}
              />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Dashboard;
