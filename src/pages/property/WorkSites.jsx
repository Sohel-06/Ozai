import * as React from "react";
import {
  List,
  ListItem,
  ListItemText,
  Typography,
  Divider,
  IconButton,
  Grid,
  Box,
  Button,
  Paper,
  Dialog,
  DialogTitle,
  DialogContent,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material";
import EditNoteIcon from "@mui/icons-material/EditNote";
import PinDropIcon from "@mui/icons-material/PinDrop";

const AddWorksitePopup = ({ open, onClose }) => {
  const [formData, setFormData] = React.useState({
    name: "",
    map: "",
    city: "",
    longitude: "",
    latitude: "",
    state: "",
    country: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = () => {
    // Handle form submission, e.g., send data to backend
    onClose();
  };

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle sx={{ textAlign: "center", fontWeight: "bold" }}>
        Add WorkSite
      </DialogTitle>
      <Divider variant="middle" />
      <DialogContent>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <TextField
              name="name"
              label="Name"
              value={formData.name}
              onChange={handleChange}
              fullWidth
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              name="city"
              label="City"
              value={formData.city}
              onChange={handleChange}
              fullWidth
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              name="longitude"
              label="Longitude"
              value={formData.longitude}
              onChange={handleChange}
              fullWidth
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              name="latitude"
              label="Latitude"
              value={formData.latitude}
              onChange={handleChange}
              fullWidth
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <FormControl fullWidth>
              <InputLabel>State</InputLabel>
              <Select
                name="state"
                label="State"
                value={formData.state}
                onChange={handleChange}
              >
                <MenuItem value="state1">Telangana</MenuItem>
                <MenuItem value="state2">AP</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={6}>
            <FormControl fullWidth>
              <InputLabel>Country</InputLabel>
              <Select
                name="country"
                label="Country"
                value={formData.country}
                onChange={handleChange}
              >
                <MenuItem value="country1">India</MenuItem>
                <MenuItem value="country2">Ireland</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12}>
            <TextField
              name="map"
              label="Map"
              value={formData.map}
              onChange={handleChange}
              fullWidth
            />
          </Grid>
          <Grid item xs={12}>
            <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
              <Button onClick={onClose} sx={{ mr: 1 }}>
                Cancel
              </Button>
              <Button
                onClick={handleSubmit}
                variant="contained"
                sx={{
                  bgcolor: "#009688",
                  color: "#fff",
                  "&:hover": {
                    backgroundColor: "#009688",
                  },
                  "&:active": {
                    backgroundColor: "#009688",
                  },
                }}
              >
                Submit
              </Button>
            </Box>
          </Grid>
        </Grid>
      </DialogContent>
    </Dialog>
  );
};

const WorkSites = () => {
  const [hoveredCard, setHoveredCard] = React.useState(null);

  const properties = [
    {
      id: 1,
      image:
        "https://cdn.britannica.com/08/187508-050-D6FB5173/Shanghai-Tower-Gensler-San-Francisco-world-Oriental-2015.jpg?w=400&h=264&c=crop",

      title: "Ratan",
      description:
        "Brunch this weekend? — I'll be in your neighborhood doing errands this…",
      author: "Ali Connors",
      location: "Hyderabad",
    },
    {
      id: 2,
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/Dubai_Marina_Skyline.jpg/1200px-Dubai_Marina_Skyline.jpg",
      title: "Marval",
      description: "Summer BBQ — Wish I could come, but I'm out of town this…",
      author: "Travis Howard",
      location: "Gachibowli",
    },
    {
      id: 3,
      image:
        "https://www.colliers.com/-/media/images/colliers/asia/regional-image-library/1536x1040-hero-researchnews/generic1536x1040pxkl.ashx?bid=0a1129f133ff4180be8f1e1ccb78c8f5",
      title: "GT1",
      description:
        "Oui Oui — Do you have Paris recommendations? Have you ever…",
      author: "Cindy Baker",
      location: "Secundrabad",
    },
    {
      id: 4,
      image:
        "https://t4.ftcdn.net/jpg/02/81/89/73/360_F_281897358_3rj9ZBSZHo5s0L1ug7uuIHadSxh9Cc75.jpg",
      title: "GT2",
      description:
        "Oui Oui — Do you have Paris recommendations? Have you ever…",
      author: "Cindy Baker",
      location: "Secundrabad",
    },
    // {
    //   id: 5,
    //   image:
    //     "https://cdn.britannica.com/08/187508-050-D6FB5173/Shanghai-Tower-Gensler-San-Francisco-world-Oriental-2015.jpg?w=400&h=264&c=crop",
    //   title: "Ratan",
    //   description:
    //     "Brunch this weekend? — I'll be in your neighborhood doing errands this…",
    //   author: "Ali Connors",
    //   location: "Hyderabad",
    // },
    // {
    //   id: 6,
    //   image:
    //     "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/Dubai_Marina_Skyline.jpg/1200px-Dubai_Marina_Skyline.jpg",
    //   title: "Marval",
    //   description: "Summer BBQ — Wish I could come, but I'm out of town this…",
    //   author: "Travis Howard",
    //   location: "Gachibowli",
    // },
    // {
    //   id: 7,
    //   image:
    //     "https://www.colliers.com/-/media/images/colliers/asia/regional-image-library/1536x1040-hero-researchnews/generic1536x1040pxkl.ashx?bid=0a1129f133ff4180be8f1e1ccb78c8f5",
    //   title: "GT1",
    //   description:
    //     "Oui Oui — Do you have Paris recommendations? Have you ever…",
    //   author: "Cindy Baker",
    //   location: "Secundrabad",
    // },
    // {
    //   id: 8,
    //   image:
    //     "https://t4.ftcdn.net/jpg/02/81/89/73/360_F_281897358_3rj9ZBSZHo5s0L1ug7uuIHadSxh9Cc75.jpg",
    //   title: "GT2",
    //   description:
    //     "Oui Oui — Do you have Paris recommendations? Have you ever…",
    //   author: "Cindy Baker",
    //   location: "Secundrabad",
    // },
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
          <b>WorkSites</b>
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
          Add WorkSite
        </Button>
        <AddWorksitePopup open={popupOpen} onClose={handleClosePopup} />
      </Paper>
      
      <Grid container spacing={2} sx={{ marginTop: "16px" }}>
        {properties.map((property) => (
          <Grid item xs={12} sm={6} key={property.id}>
            <Paper
              elevation={3}
              sx={{
                width: "100%",
                borderRadius: "12px",
                overflow: "hidden",
                position: "relative",
                "&:hover": {
                  boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
                },
              }}
              onMouseEnter={() => setHoveredCard(property.id)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              {hoveredCard === property.id && (
                <IconButton
                  sx={{
                    position: "absolute",
                    top: "8px",
                    right: "8px",
                    zIndex: 1,
                  }}
                  // onClick={() => handleEdit(subcard)}
                >
                  <EditNoteIcon sx={{ color: "#000" }} />
                </IconButton>
              )}
              <Grid container spacing={1} alignItems="strech">
                <Grid item xs={4}>
                 
                    <img
                      src={property.image}
                      alt={property.title}
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                        
                        
                      }}
                    />
                  
                </Grid>
                <Grid item xs={6} sx={{display:"flex",alignItems:"center"}}>
                  <Box pl={1} >
                    <Typography sx={{ fontWeight: "bold", color: "#000" }}>
                      {property.title}
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{
                        color: "#4CAF50",
                        mt: 0.3,
                      }}
                    >
                      {property.location}, Telangana
                    </Typography>
                  </Box>
                </Grid>
                <Grid item xs={2} sx={{display:"flex",alignItems:"center",justifyContent:"center"}}>
                  <IconButton>
                    <PinDropIcon sx={{ color: "#009688" }} />
                  </IconButton>
                </Grid>
              </Grid>
            </Paper>
          </Grid>
        ))}
      </Grid>
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
              onMouseEnter={() => setHoveredCard(property.id)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              {hoveredCard === property.id && (
                <IconButton
                  sx={{
                    position: "absolute",
                    top: "8px",
                    right: "8px",
                    zIndex: 1,
                  }}
                  // onClick={() => handleEdit(subcard)}
                >
                  <EditNoteIcon sx={{ color: "#000" }} />
                </IconButton>
              )}
              <ListItem
                alignItems="center"
                sx={{ paddingTop: "4px", paddingBottom: "4px" }}
              >
                <Box style={{ flex: 1, marginRight: "16px" }}>
                  <img
                    src={property.image}
                    alt={property.title}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      borderRadius: "8px",
                    }}
                  />
                </Box>

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
                      <Typography
                        sx={{ display: "inline" }}
                        component="span"
                        variant="body2"
                      >
                        {property.location}, Telangana
                      </Typography>
                    </Box>
                  }
                />
                <IconButton>
                  <PinDropIcon sx={{ color: "#009688" }} />
                </IconButton>
              </ListItem>
            </List>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default WorkSites;
