import React, { useState } from "react";
import {
  TextField,
  Button,
  Stepper,
  Step,
  StepLabel,
  Paper,
  Box,
  Typography,
  Grid,
  MenuItem,
  FormControl,
  InputLabel,
  Select,
} from "@mui/material";

const AddResidents = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [formValues, setFormValues] = useState({
    name: "",
    mobile: "",
    email: "",
    homeTown: "",
    language: "",
    dob: "",
    employeeId: "",
    contract: "",
    dateOfJoining: "",
    worksite: "",
    room: "",
    bed: "",
    foodPreferences: "",
    sharing: ""
  });

  const steps = ["Personal Information", "Employment Details", "Accommodation Preferences"];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formValues);
  };

  return (
    <>
      <Paper  sx={{ padding: 2, margin: { xs: "8px 16px", sm: "8px 16px" } }}>
        <Typography variant="h6"><b>Residents</b></Typography>
      </Paper>
      <Paper  sx={{ padding: "24px 32px", margin: { xs: "16px 16px", sm: "16px" } }}>
        <Typography variant="h4" align="center" gutterBottom>
          Add Resident
        </Typography>
        <Stepper activeStep={activeStep} alternativeLabel>
          {steps.map((label) => (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>
        <Box component="form" onSubmit={handleSubmit}>
          {activeStep === 0 && (
            <Box sx={{ mt: 2 }}>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    label="Name"
                    name="name"
                    value={formValues.name}
                    onChange={handleChange}
                    margin="normal"
                    variant="outlined"
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    label="Mobile"
                    name="mobile"
                    value={formValues.mobile}
                    onChange={handleChange}
                    margin="normal"
                    variant="outlined"
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    label="Email"
                    name="email"
                    value={formValues.email}
                    onChange={handleChange}
                    margin="normal"
                    variant="outlined"
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    label="Home Town"
                    name="homeTown"
                    value={formValues.homeTown}
                    onChange={handleChange}
                    margin="normal"
                    variant="outlined"
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    label="Date of Birth"
                    name="dob"
                    type="date"
                    InputLabelProps={{ shrink: true }}
                    value={formValues.dob}
                    onChange={handleChange}
                    margin="normal"
                    variant="outlined"
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    label="Language"
                    name="language"
                    value={formValues.language}
                    onChange={handleChange}
                    margin="normal"
                    variant="outlined"
                  />
                </Grid>
              </Grid>
            </Box>
          )}
          {activeStep === 1 && (
            <Box sx={{ mt: 2 }}>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    label="Employee ID"
                    name="employeeId"
                    value={formValues.employeeId}
                    onChange={handleChange}
                    margin="normal"
                    variant="outlined"
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    label="Contract"
                    name="contract"
                    value={formValues.contract}
                    onChange={handleChange}
                    margin="normal"
                    variant="outlined"
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    label="Date of Joining"
                    name="dateOfJoining"
                    type="date"
                    InputLabelProps={{ shrink: true }}
                    value={formValues.dateOfJoining}
                    onChange={handleChange}
                    margin="normal"
                    variant="outlined"
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    label="Work Site"
                    name="worksite"
                    value={formValues.worksite}
                    onChange={handleChange}
                    margin="normal"
                    variant="outlined"
                  />
                </Grid>
              </Grid>
            </Box>
          )}
          {activeStep === 2 && (
            <Box sx={{ mt: 2 }}>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    label="Room"
                    name="room"
                    value={formValues.room}
                    onChange={handleChange}
                    margin="normal"
                    variant="outlined"
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    label="Bed"
                    name="bed"
                    value={formValues.bed}
                    onChange={handleChange}
                    margin="normal"
                    variant="outlined"
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <FormControl fullWidth margin="normal" variant="outlined">
                    <InputLabel>Property</InputLabel>
                    <Select
                      name="property"
                      value={formValues.sharing}
                      onChange={handleChange}
                      label="Property"
                    >
                      <MenuItem value="ratan">Ratan | Uppal | Hyderabad</MenuItem>
                      <MenuItem value="oscar">Oscar | GachiBowli | Hyderabad</MenuItem>
                      <MenuItem value="gt1">GT1 | Gagilapur | Hyderabad</MenuItem>
                      <MenuItem value="gt2">GT2 | Gagilapur | Hyderabad</MenuItem>
                      <MenuItem value="gt3">GT3 | Gagilapur | Hyderabad</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <FormControl fullWidth margin="normal" variant="outlined">
                    <InputLabel>Sharing</InputLabel>
                    <Select
                      name="sharing"
                      value={formValues.sharing}
                      onChange={handleChange}
                      label="Sharing"
                    >
                      <MenuItem value="single">Single</MenuItem>
                      <MenuItem value="double">Double</MenuItem>
                      <MenuItem value="three">Three</MenuItem>
                      <MenuItem value="four">Four</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    label="Food Preferences"
                    name="foodPreferences"
                    value={formValues.foodPreferences}
                    onChange={handleChange}
                    margin="normal"
                    variant="outlined"
                  />
                </Grid>
              </Grid>
            </Box>
          )}
          <Box sx={{ display: "flex", justifyContent: "space-between", mt: 2 }}>
            <Button
              disabled={activeStep === 0}
              onClick={handleBack}
              variant="contained"
              color="secondary"
            >
              Back
            </Button>
            {activeStep === steps.length - 1 ? (
              <Button type="submit" variant="contained" color="primary" onClick={()=>{window.location.reload()}}>
                Submit
              </Button>
            ) : (
              <Button onClick={handleNext} variant="contained" color="primary">
                Next
              </Button>
            )}
          </Box>
        </Box>
      </Paper>
    </>
  );
};

export default AddResidents;
