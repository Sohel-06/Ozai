import React, { useState } from "react";
import {
  Box,
  Button,
  Card,
  CardContent,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Grid,
  Paper,
  Typography,
  TextField,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  IconButton,
} from "@mui/material";
import EditNoteIcon from "@mui/icons-material/EditNote";
const Roles = () => {
  const subcards = [
    {
      name: "Leanne Graham",
      department: "QA",
      jobTitle: "Analyst",
      url: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cGVyc29ufGVufDB8fDB8fHww",
    },
    {
      name: "Ervin Howell",
      department: "Frontend",
      jobTitle: "SDE-I",
      url: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXZhdGFyfGVufDB8fDB8fHww",
    },
    {
      name: "Clementine Bauch",
      department: "Backend",
      jobTitle: "SDE-II",
      url: "https://images.unsplash.com/photo-1491349174775-aaafddd81942?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHBlcnNvbnxlbnwwfHwwfHx8MA%3D%3D",
    },
    {
      name: "Patricia Lebsack",
      department: "Manager",
      jobTitle: "Senior manager",
      url: "https://images.unsplash.com/profile-fb-1510470021-e5d0dd46e0d1.jpg?bg=fff&crop=faces&dpr=1&h=64&w=64&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    },
    {
      name: "Chelsey Dietrich",
      department: "HR",
      jobTitle: "HR Specialist",
      url: "https://images.unsplash.com/profile-1569790029351-5adb76747654image?bg=fff&crop=faces&dpr=1&h=64&w=64&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    },
    {
      name: "Keebler LLC",
      department: "Frontend",
      jobTitle: "SDE-III",
      url: "https://images.unsplash.com/profile-fb-1687954839-16fde341840a.jpg?bg=fff&crop=faces&dpr=1&h=64&w=64&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    },
    {
      name: "Kurtis Weissnat",
      department: "Backend",
      jobTitle: "Lead",
      url: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHBlcnNvbnxlbnwwfHwwfHx8MA%3D%3D",
    },
    {
      name: "Glenna Reichert",
      department: "QA",
      jobTitle: "Lead",
      url: "https://images.unsplash.com/profile-fb-1521847730-f320b5f13bde.jpg?bg=fff&crop=faces&dpr=1&h=64&w=64&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    },
    {
      name: "Clementina DuBuque",
      department: "HR",
      jobTitle: "Lead",
      url: "https://images.unsplash.com/profile-1680833111832-304d2a761916image?bg=fff&crop=faces&dpr=1&h=64&w=64&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    },
  ];

  const [open, setOpen] = useState(false);
  const [role, setRole] = useState("");
  const [property, setProperty] = useState("");

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const [hoveredCard, setHoveredCard] = useState(null);

  return (
    <>
      <Paper
        sx={{
          padding: 2,
          margin: "8px 16px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Typography variant="h6">
          <b>Roles & Privileges</b>
        </Typography>
        <Button
          variant="contained"
          sx={{
            backgroundColor: "#009688",
            "&:hover": {
              backgroundColor: "#009688",
            },
            "&:active": {
              backgroundColor: "#009688",
            },
          }}
          onClick={handleClickOpen}
        >
          Add Admin
        </Button>
      </Paper>
      <CardContent>
        <Grid container spacing={2}>
          {subcards.map((subcard) => (
            <Grid item key={subcard.name} xs={12} sm={6} md={4} lg={4}>
              <Card
                sx={{
                  width: "100%",
                  margin: "auto",
                  marginBottom: "16px",
                  borderRadius: "8px",
                  textAlign: "center",
                  position: "relative", 
                }}
                onMouseEnter={() => setHoveredCard(subcard.name)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                {hoveredCard === subcard.name && (
                  <IconButton
                    sx={{
                      position: "absolute",
                      top: "8px",
                      right: "8px",
                      zIndex: 1, 
                    }}
                    // onClick={() => handleEdit(subcard)}
                  >
                    <EditNoteIcon />
                  </IconButton>
                )}
                <Box sx={{ padding: "16px 16px 0px" }}>
                  <Box
                    component="div"
                    className="avatar"
                    sx={{
                      backgroundImage: `url(${subcard.url})`,
                      backgroundSize: "cover",
                      height: "76px",
                      width: "76px",
                      borderRadius: "50%",
                      margin: "auto",
                    }}
                  />
                  <Typography
                    variant="h6"
                    sx={{
                      color: "#3e007c !important",
                      marginBottom: "8px",
                    }}
                  >
                    {subcard.name}
                  </Typography>
                  <Typography
                    variant="subtitle1"
                    sx={{ color: "#000", marginBottom: "8px" }}
                  >
                    {subcard.jobTitle} (<span>{subcard.department}</span>)
                  </Typography>
                </Box>
              </Card>
            </Grid>
          ))}
        </Grid>
      </CardContent>
      <Dialog open={open} onClose={handleClose} maxWidth="sm" fullWidth>
        <DialogTitle align="center" sx={{ paddingBottom: 0 }}>
          Add Admin
        </DialogTitle>
        <Typography
          variant="subtitle1"
          gutterBottom
          align="center"
          sx={{ padding: { xs: 0, sm: "0 12px" }, color: "gray" }}
        >
          Fill out the form below to add a new admin.
        </Typography>
        <DialogContent dividers>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField fullWidth label="Name" variant="outlined" />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField fullWidth label="Email" variant="outlined" />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField fullWidth label="Mobile" variant="outlined" />
            </Grid>
            <Grid item xs={12} sm={6}>
              <FormControl fullWidth variant="outlined">
                <InputLabel id="role-label">Role</InputLabel>
                <Select
                  labelId="role-label"
                  value={role}
                  onChange={(e) => setRole(e.target.value)}
                  label="Role"
                >
                  <MenuItem value="Admin">Admin</MenuItem>
                  <MenuItem value="User">User</MenuItem>
                  <MenuItem value="Guest">Guest</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={6}>
              <FormControl fullWidth variant="outlined">
                <InputLabel id="property-label">Property</InputLabel>
                <Select
                  labelId="property-label"
                  value={property}
                  onChange={(e) => setProperty(e.target.value)}
                  label="Property"
                >
                  <MenuItem value="Property 1">Property 1</MenuItem>
                  <MenuItem value="Property 2">Property 2</MenuItem>
                  <MenuItem value="Property 3">Property 3</MenuItem>
                </Select>
              </FormControl>
            </Grid>
          </Grid>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="secondary" variant="outlined">
            Cancel
          </Button>
          <Button onClick={handleClose} color="primary" variant="contained">
            Submit
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default Roles;
