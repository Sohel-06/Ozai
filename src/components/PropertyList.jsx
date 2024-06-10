import * as React from "react";
import {
  List,
  ListItem,
  ListItemText,
  ListItemAvatar,
  Avatar,
  Typography,
  Divider,
  Collapse,
  IconButton,
  Grid,
  Box,
  Button,
  Paper,
  Dialog,
  DialogTitle,
  DialogContent,
  Stepper,
  StepLabel,
  Step,
  TextField,
  DialogActions,
  StepContent,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import PersonPinCircleIcon from "@mui/icons-material/PersonPinCircle";

const AddPropertyPopup = ({ open, onClose }) => {
  const [activeStep, setActiveStep] = React.useState(0);
  const [formData, setFormData] = React.useState({
    name: "",
    description: "",
    gender: "",
    numberOfRooms: "",
    location: "",
    city: "",
    state: "",
    country: "",
    file: null,
  });

  const handleNext = () => {
    if (activeStep !== 1) {
      setActiveStep((prevStep) => prevStep + 1);
    }
  };

  const handleBack = () => {
    setActiveStep((prevStep) => prevStep - 1);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setFormData((prevData) => ({
      ...prevData,
      file,
    }));
  };

  const handleSubmit = () => {
    // Handle form submission, e.g., send data to backend
    onClose();
  };

  const steps = [
    {
      label: "Personal Info",
      fields: ["name", "description", "gender", "numberOfRooms", "file"],
    },
    {
      label: "Geographical Info",
      fields: ["location", "city", "state", "country"],
    },
  ];

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle sx={{ textAlign: "center", fontWeight: "bold" }}>
        Add Property
      </DialogTitle>
      <Divider variant="middle" />
      <DialogContent>
        <Box>
          <Stepper activeStep={activeStep} orientation="vertical">
            {steps.map((step, index) => (
              <Step
                key={step.label}
                sx={{
                  "& .MuiStepLabel-root .Mui-completed": {
                    color: "green", // circle color (COMPLETED)
                  },
                  "& .MuiStepLabel-label.Mui-completed.MuiStepLabel-alternativeLabel":
                    {
                      color: "#c1bab6", // Just text label (COMPLETED)
                    },
                  "& .MuiStepLabel-root .Mui-active": {
                    color: "#009688", // circle color (ACTIVE)
                  },
                  "& .MuiStepLabel-root .Mui-active .MuiStepIcon-text": {
                    fill: "#fff", // circle's number (ACTIVE)
                  },
                }}
              >
                <StepLabel>
                  <Typography sx={{ color: "#000" }}>{step.label}</Typography>
                </StepLabel>
                <StepContent>
                  <Grid container spacing={2}>
                    {steps[activeStep].fields.map((field) => (
                      <Grid item xs={12} key={field}>
                        {field === "file" ? (
                          <TextField
                            fullWidth
                            type="file"
                            onChange={handleFileChange}
                          />
                        ) : (
                          <TextField
                            name={field}
                            label={
                              field.charAt(0).toUpperCase() + field.slice(1)
                            }
                            value={formData[field]}
                            onChange={handleChange}
                            fullWidth
                          />
                        )}
                      </Grid>
                    ))}
                  </Grid>
                  <Box
                    sx={{
                      mt: 2,
                      display: "flex",
                      justifyContent: "space-between",
                    }}
                  >
                    <Button
                      variant="contained"
                      disabled={index === 0}
                      onClick={handleBack}
                      sx={{ mt: 1, mr: 1 }}
                    >
                      Back
                    </Button>
                    <Button
                      variant="contained"
                      onClick={handleNext}
                      sx={{
                        mt: 1,
                        mr: 1,
                        backgroundColor: "#009688",
                        "&:hover": {
                          backgroundColor: "#009688",
                        },
                        "&:active": {
                          backgroundColor: "#009688",
                        },
                      }}
                    >
                      {index === steps.length - 1 ? "Finish" : "Continue"}
                    </Button>
                  </Box>
                </StepContent>
              </Step>
            ))}
          </Stepper>
        </Box>
      </DialogContent>
    </Dialog>
  );
};
const PropertyList = () => {
  const [expanded, setExpanded] = React.useState({});
  const handleExpand = (propertyId) => {
    setExpanded((prevExpanded) => ({
      ...prevExpanded,
      [propertyId]: !prevExpanded[propertyId],
    }));
  };

  const properties = [
    {
      id: 1,
      image: "https://cdn.britannica.com/08/187508-050-D6FB5173/Shanghai-Tower-Gensler-San-Francisco-world-Oriental-2015.jpg?w=400&h=250&c=crop",

      title: "Ratan",
      description:
        "Brunch this weekend? — I'll be in your neighborhood doing errands this…",
      author: "Ali Connors",
      location: "Hyderabad",
    },
    {
      id: 2,
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/Dubai_Marina_Skyline.jpg/1200px-Dubai_Marina_Skyline.jpg",
      title: "Marval",
      description: "Summer BBQ — Wish I could come, but I'm out of town this…",
      author: "Travis Howard",
      location: "Gachibowli",
    },
    {
      id: 3,
      image: "https://www.colliers.com/-/media/images/colliers/asia/regional-image-library/1536x1040-hero-researchnews/generic1536x1040pxkl.ashx?bid=0a1129f133ff4180be8f1e1ccb78c8f5",
      title: "GT1",
      description:
        "Oui Oui — Do you have Paris recommendations? Have you ever…",
      author: "Cindy Baker",
      location: "Secundrabad",
    },
    {
      id: 4,
      image: "https://t4.ftcdn.net/jpg/02/81/89/73/360_F_281897358_3rj9ZBSZHo5s0L1ug7uuIHadSxh9Cc75.jpg",
      title: "GT2",
      description:
        "Oui Oui — Do you have Paris recommendations? Have you ever…",
      author: "Cindy Baker",
      location: "Secundrabad",
    },
    {
      id: 5,
      image: "https://cdn.britannica.com/08/187508-050-D6FB5173/Shanghai-Tower-Gensler-San-Francisco-world-Oriental-2015.jpg?w=400&h=264&c=crop",
      title: "Ratan",
      description:
        "Brunch this weekend? — I'll be in your neighborhood doing errands this…",
      author: "Ali Connors",
      location: "Hyderabad",
    },
    {
      id: 6,
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/Dubai_Marina_Skyline.jpg/1200px-Dubai_Marina_Skyline.jpg",
      title: "Marval",
      description: "Summer BBQ — Wish I could come, but I'm out of town this…",
      author: "Travis Howard",
      location: "Gachibowli", 
    },
    {
      id: 7,
      image: "https://www.colliers.com/-/media/images/colliers/asia/regional-image-library/1536x1040-hero-researchnews/generic1536x1040pxkl.ashx?bid=0a1129f133ff4180be8f1e1ccb78c8f5",
      title: "GT1",
      description:
        "Oui Oui — Do you have Paris recommendations? Have you ever…",
      author: "Cindy Baker",
      location: "Secundrabad",
    },
    {
      id: 8,
      image: "https://t4.ftcdn.net/jpg/02/81/89/73/360_F_281897358_3rj9ZBSZHo5s0L1ug7uuIHadSxh9Cc75.jpg",
      title: "GT2",
      description:
        "Oui Oui — Do you have Paris recommendations? Have you ever…",
      author: "Cindy Baker",
      location: "Secundrabad",
    },
  ];

  const [popupOpen, setPopupOpen] = React.useState(false);

  const handleAddProperty = () => {
    setPopupOpen(true);
  };

  const handleClosePopup = () => {
    setPopupOpen(false);
  };
  return (
    <Box sx={{ margin: "8px 16px" }}>
      <Paper
        sx={{
          padding: 2,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Typography variant="h6">
          <b>Properties</b>
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
          onClick={handleAddProperty}
        >
          Add Property
        </Button>
        <AddPropertyPopup open={popupOpen} onClose={handleClosePopup} />
      </Paper>
      <Grid container spacing={2} sx={{ marginTop: "16px" }}>
        {properties.map((property) => (
          <Grid item xs={12} sm={6} key={property.id}>
            <List
              sx={{
                width: "100%",
                bgcolor: "background.paper",
                borderRadius: "12px",
                boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
              }}
            >
              <ListItem
                alignItems="center"
                sx={{ paddingTop: "4px", paddingBottom: "4px" }}
                onClick={() => handleExpand(property.id)}
              >
                {/* {property.id > 4 ? (
                    <div style={{ flex: 1, marginRight: '16px' }}>
                  <img
                    src={property.image}
                    alt={property.title}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      borderRadius:"8px"
                    }}
                  />
                  </div>
                ) : ( */}
                  <ListItemAvatar>
                    <Avatar alt={property.title} src={property.image} />
                  </ListItemAvatar>
                {/* )} */}

                <ListItemText
                  primary={
                    <Typography sx={{ fontWeight: "bold", color: "#000" }}>
                      {property.title}
                    </Typography>
                  }
                  secondary={
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "end",
                        color: "#4CAF50",
                        mt: 0.3,
                      }}
                    >
                      <PersonPinCircleIcon sx={{ color: "#009688" }} />
                      <Typography
                        sx={{ display: "inline" }}
                        component="span"
                        variant="body2"
                      >
                        {property.location}
                      </Typography>
                    </Box>
                  }
                />
                <IconButton>
                  <ExpandMoreIcon sx={{ color: "#000" }} />
                </IconButton>
              </ListItem>
              <Collapse in={expanded[property.id]} timeout="auto" unmountOnExit>
                <Divider variant="middle" />
                <Grid container spacing={2} pl={5} pt={2}>
                  <Grid item xs={6}>
                    <Typography sx={{ color: "#c1bab6" }}>
                      {" "}
                      Location{" "}
                    </Typography>
                    <Typography sx={{ color: "#000" }}> Uppal </Typography>
                  </Grid>
                  <Grid item xs={6} sx={{ textAlign: "center" }}>
                    <Typography sx={{ color: "#c1bab6" }}> City </Typography>
                    <Typography sx={{ color: "#000" }}> Hyderabad </Typography>
                  </Grid>
                  <Grid item xs={6}>
                    <Typography sx={{ color: "#c1bab6" }}> State </Typography>
                    <Typography sx={{ color: "#000" }}> Telangana </Typography>
                  </Grid>
                  <Grid item xs={6} sx={{ textAlign: "center" }}>
                    <Typography sx={{ color: "#c1bab6" }}> rooms </Typography>
                    <Typography sx={{ color: "#000" }}> 20 </Typography>
                  </Grid>
                  <Grid item xs={6}>
                    <Typography sx={{ color: "#c1bab6" }}>Occupancy</Typography>
                    <Typography sx={{ color: "#000" }}> 24 </Typography>
                  </Grid>
                  <Grid item xs={6} sx={{ textAlign: "center" }}>
                    <Typography sx={{ color: "#c1bab6" }}>Tickets</Typography>
                    <Typography sx={{ color: "#000" }}>7</Typography>
                  </Grid>
                </Grid>
                <Grid
                  container
                  spacing={2}
                  mt={0.5}
                  pl={3}
                  pr={3}
                  pb={1}
                  alignItems="center"
                >
                  <Grid item xs={6}>
                    <Button
                      variant="contained"
                      fullWidth
                      sx={{
                        borderRadius: "8px",
                        backgroundColor: "rgb(0, 172, 105)",
                      }}
                    >
                      Inventory
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
              </Collapse>
            </List>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default PropertyList;
