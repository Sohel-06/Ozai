import React from "react";
import {
  Grid,
  Card,
  CardContent,
  Typography,
  Button,
  Box,
  Paper,
  Select,
  InputLabel,
  FormControl,
  MenuItem,
} from "@mui/material";
import WifiIcon from "@mui/icons-material/WifiOff";
import ElectricIcon from "@mui/icons-material/Bolt";
import WaterIcon from "@mui/icons-material/WaterDamageOutlined";
import ParkingIcon from "@mui/icons-material/LocalParking";
import CleaningIcon from "@mui/icons-material/CleaningServicesOutlined";


const Ticket = ({
  username,
  ticketname,
  category,
  description,
  property,
  createAt,
  status,
}) => {
  // Map category to appropriate icon
  const categoryIcon = () => {
    switch (category) {
      case "Wifi":
        return <WifiIcon sx={{ fontSize: "54px", color: "#f44336" }} />;
      case "Electricity":
        return <ElectricIcon sx={{ fontSize: "54px", color: "orange" }} />;
      case "Water":
        return <WaterIcon sx={{ fontSize: "54px", color: "#1976D2" }} />;
      case "Parking":
        return <ParkingIcon sx={{ fontSize: "54px", color: "#023047" }} />;
      case "Cleaning":
        return <CleaningIcon sx={{ fontSize: "54px", color: "brown" }} />;
      default:
        return null;
    }
  };

  return (
    <Card
      style={{
        height: "100%",
        borderRadius: "8px",
      }}
    >
      <CardContent
        sx={{
          "&:last-child": {
            paddingBottom: 1.5,
          },
        }}
      >
        <Grid container spacing={0.5} alignItems="center">
          <Grid item xs={3}>
            <div style={{ textAlign: "center" }}>{categoryIcon()}</div>
          </Grid>
          <Grid item xs={9}>
            <Typography variant="h6" sx={{ color: "#000" }}>
              {ticketname}
            </Typography>
            <Typography sx={{ color: "#c1bab6", fontSize: "14px" }}>
              {username} | Bed : 1 | {property} | {createAt}
            </Typography>
            <Typography
              variant="body1"
              style={{
                color: "#555",
                marginTop: "6px",
                overflow: "hidden",
                textOverflow: "ellipsis",
                display: "-webkit-box",
                WebkitLineClamp: 2,
                WebkitBoxOrient: "vertical",
              }}
            >
              {description}
            </Typography>
            <Grid container spacing={2} mt={0.5} alignItems="center">
              <Grid item xs={6}>
                <Button
                  variant="contained"
                  fullWidth
                  sx={{
                    borderRadius: "8px",
                    backgroundColor:
                      status === "Opened"
                        ? "#4caf50"
                        : status === "Raised"
                        ? "#f44336"
                        : "#616161",
                    "&:hover": {
                      backgroundColor:
                        status === "Opened"
                          ? "#4caf50"
                          : status === "Raised"
                          ? "#f44336"
                          : "#616161",
                    },
                    "&:active": {
                      backgroundColor:
                        status === "Opened"
                          ? "#4caf50"
                          : status === "Raised"
                          ? "#f44336"
                          : "#616161",
                    },
                  }}
                >
                  {status}
                </Button>
              </Grid>
              <Grid item xs={6}>
                <Button
                  variant="contained"
                  fullWidth
                  sx={{ borderRadius: "8px", backgroundColor: "#3F51B5" }}
                >
                  Details
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

const TicketsList = () => {
  // Mock data for demonstration
  const mockTickets = [
    {
      username: "John",
      ticketname: "Wifi Not Working",
      category: "Wifi",
      property: "Marvel",
      createAt: "07-04-2024",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      status: "Opened",
    },
    {
      username: "Jane",
      ticketname: "Electricity Failure",
      category: "Electricity",
      property: "Ratan",
      createAt: "07-06-2024",
      description:
        "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      status: "Closed",
    },
    {
      username: "Alice",
      ticketname: "Water problem",
      category: "Water",
      property: "Marvel",
      createAt: "07-05-2024",
      description:
        "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      status: "Opened",
    },
    {
      username: "John",
      ticketname: "Parking lot",
      category: "Parking",
      property: "Marvel",
      createAt: "07-04-2024",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      status: "Raised",
    },
    {
      username: "Jane",
      ticketname: "Floor Cleaning",
      category: "Cleaning",
      property: "Ratan",
      createAt: "07-06-2024",
      description:
        "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      status: "Closed",
    },
    {
      username: "Alice",
      ticketname: "Ticket 3",
      category: "Electricity",
      property: "Marvel",
      createAt: "07-05-2024",
      description:
        "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      status: "Closed",
    },
    {
      username: "John",
      ticketname: "Wifi Not Working",
      category: "Wifi",
      property: "Marvel",
      createAt: "07-04-2024",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      status: "Opened",
    },
    {
      username: "Jane",
      ticketname: "Electricity Failure",
      category: "Electricity",
      property: "Ratan",
      createAt: "07-06-2024",
      description:
        "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      status: "Closed",
    },
    {
      username: "Alice",
      ticketname: "Water problem",
      category: "Water",
      property: "Marvel",
      createAt: "07-05-2024",
      description:
        "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      status: "Opened",
    },
    {
      username: "John",
      ticketname: "Parking lot",
      category: "Parking",
      property: "Marvel",
      createAt: "07-04-2024",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      status: "Raised",
    },
    {
      username: "Jane",
      ticketname: "Floor Cleaning not proper",
      category: "Cleaning",
      property: "Ratan",
      createAt: "07-06-2024",
      description:
        "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      status: "Closed",
    },
    {
      username: "Alice",
      ticketname: "Ticket 3",
      category: "Electricity",
      property: "Marvel",
      createAt: "07-05-2024",
      description:
        "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      status: "Closed",
    },
  ];

  return (
    <Box sx={{ margin: { xs: "8px", sm: "8px 16px" }}}>
      <Paper sx={{ padding: 2 }}>
        <Typography variant="h6"><b>Tickets</b></Typography>
      </Paper>
      <Grid container spacing={2} sx={{ marginTop: "16px" }}>
        <Grid item xs={12}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>

              <FormControl
                fullWidth
                sx={{ backgroundColor: "#fff", borderRadius: "8px" }}
              >
                <InputLabel  sx={{color:"#000"}}>Select Month</InputLabel>

                 <Select
                  name="Select Month"
                  label="Select Month"
                >
                  <MenuItem value={1}>Jan</MenuItem>
                  <MenuItem value={2}>Feb</MenuItem>
                  <MenuItem value={3}>Mar</MenuItem>
                  <MenuItem value={4}>Apr</MenuItem>
                  <MenuItem value={5}>May</MenuItem>
                  <MenuItem value={6}>Jun</MenuItem>
                  <MenuItem value={7}>Jul</MenuItem>
                  <MenuItem value={8}>Aug</MenuItem>
                  <MenuItem value={9}>Sep</MenuItem>
                  <MenuItem value={10}>Oct</MenuItem>
                  <MenuItem value={11}>Nov</MenuItem>
                  <MenuItem value={12}>Dev</MenuItem>
                </Select> 
              </FormControl> 
            </Grid>
            {/* Property filter */}
            <Grid item xs={12} sm={6}>
              <FormControl
                fullWidth
                variant="outlined"
                sx={{ backgroundColor: "#fff", borderRadius: "8px" }}
              >
                <InputLabel sx={{color:"#000"}}>Select Property</InputLabel>
                <Select
                  name="Select Property"
                  label="Select Property"
                >
                  <MenuItem value={"Marvel"}>Marvel</MenuItem>
                  <MenuItem value={"Marvel"}>Ratan</MenuItem>
                  <MenuItem value={"Marvel"}>Oscar</MenuItem>
                  <MenuItem value="gt1">GT1 | Gagilapur | Hyderabad</MenuItem>
                  <MenuItem value="gt2">GT2 | Gagilapur | Hyderabad</MenuItem>
                  <MenuItem value="gt3">GT3 | Gagilapur | Hyderabad</MenuItem>
                </Select>
              </FormControl>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <Button
            variant="contained"
            fullWidth
            sx={{ backgroundColor: "#009688","&:hover": {
                backgroundColor: "#009688",
              },
              "&:active": {
                backgroundColor: "#009688",
              }, }}
          >
            Apply Filter
          </Button>
        </Grid>
        {mockTickets.map((ticket, index) => (
          <Grid item key={index} xs={12} sm={4}>
            <Ticket {...ticket} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default TicketsList;
