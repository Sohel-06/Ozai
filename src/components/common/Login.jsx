import React, { useState } from "react";
import {
  Container,
  Paper,
  Typography,
  TextField,
  Button,
  Grid,
  Link,
  IconButton,
  InputAdornment,
  Divider,
  Box,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";

const LoginPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showSignUp, setShowSignUp] = useState(false);

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  const handleSignUpClick = () => {
    setShowSignUp(true);
  };

  const handleLoginClick = () => {
    setShowSignUp(false);
  };

  return (
    <Container
      maxWidth="sm"
      style={{
        height: "100vh",
        display: "flex",
        alignItems: "center",
      }}
    >
      <Paper
        elevation={3}
        sx={{
          padding: 4,
        //   paddingTop:0,
          width: "100%",
          textAlign: "center",
          borderRadius: "8px",
        }}
      >
        {/* <img src="https://play-lh.googleusercontent.com/ll9GSsdfSo90lktstQ1XlAbJeenm_mw0xztZzZYxUPF51Hf4L_oUZR99WeXanG4OwGk=w240-h480-rw" width={"120px"} height={"120px"}/> */}
        <Grid container spacing={2} alignItems="center" justifyContent={"space-between"}>
   
    <Grid item>
      <Box sx={{textAlign:"start"}}>
        <Typography variant="h4" gutterBottom>
          {showSignUp ? "Register Now" : "Welcome Back!"}
        </Typography>
        <Typography variant="body1" gutterBottom>
          {showSignUp ? "Create your account" : "Log in to your account"}
        </Typography>
      </Box>
    </Grid>
    <Grid item>
      <img
        src="https://play-lh.googleusercontent.com/ll9GSsdfSo90lktstQ1XlAbJeenm_mw0xztZzZYxUPF51Hf4L_oUZR99WeXanG4OwGk=w240-h480-rw"
        width={"120px"}
        height={"120px"}
      />
    </Grid>
  </Grid>


        <Divider sx={{ mt: 1 }} />
        <form style={{ marginTop: 16 }}>
          {showSignUp ? (
            <>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    label="Full Name"
                    variant="outlined"
                    required
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    label="Mobile"
                    variant="outlined"
                    required
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    label="Email"
                    variant="outlined"
                    required
                  />
                </Grid>
              </Grid>
              <Button
                fullWidth
                variant="contained"
                color="primary"
                type="submit"
                style={{ marginTop: 16 }}
              >
                Sign Up
              </Button>
              <Typography variant="body2" style={{ marginTop: 16 }}>
                Already have an account?{" "}
                <Link href="#" onClick={handleLoginClick}>
                  Log in
                </Link>
              </Typography>
            </>
          ) : (
            <>
              <Grid container spacing={2} justifyContent="center">
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    label="Username or Email"
                    variant="outlined"
                    required
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    type={showPassword ? "text" : "password"}
                    label="Password"
                    variant="outlined"
                    required
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="end">
                          <IconButton onClick={handleTogglePassword} edge="end">
                            {showPassword ? <VisibilityOff /> : <Visibility />}
                          </IconButton>
                        </InputAdornment>
                      ),
                    }}
                  />
                </Grid>
                <Grid item xs={12} textAlign={"end"}>
                  <Link href="#" variant="body2">
                    Forgot password?
                  </Link>
                </Grid>
                <Grid item xs={12}>
                  <Button
                    fullWidth
                    variant="contained"
                    color="primary"
                    type="submit"
                  >
                    Login
                  </Button>
                </Grid>

                <Grid item xs={12}>
                  <Typography variant="body2">
                    Don't have an account?{" "}
                    <Link href="#" onClick={handleSignUpClick}>
                      Sign up now
                    </Link>
                  </Typography>
                </Grid>
              </Grid>
            </>
          )}
        </form>
      </Paper>
    </Container>
  );
};

export default LoginPage;
