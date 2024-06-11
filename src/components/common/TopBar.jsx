import { Notifications } from '@mui/icons-material'
import { AppBar, Avatar, Badge, Box, IconButton, Toolbar, Typography } from '@mui/material'
import MenuIcon from "@mui/icons-material/Menu";
import HouseIcon from "@mui/icons-material/House";
import React from 'react'

const TopBar = ({isMobile,handleDrawerToggle}) => {
  return (
    <AppBar
    position="fixed"
    sx={{
      width: { sm: `calc(100% - 300px)` },
      ml: { sm: "300px" },
      boxShadow: "unset",
      backgroundColor: "#102A43",
      color: "#fff",
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
      <HouseIcon
        fontSize="large"
        sx={{ display: { xs: "none", md: "flex" }, mr: 1 }}
      />
      <Typography variant="h6" noWrap sx={{ flexGrow: 1 }}>
        OZAI CAMP
      </Typography>
      <Box>
        <IconButton size="large">
          <Badge badgeContent={6} color="error">
            <Notifications sx={{ color: "#fff" }} />
          </Badge>
        </IconButton>
        <IconButton>
          <Avatar
            sx={{ width: 36, height: 36 }}
            src="https://i.pinimg.com/736x/72/82/a6/7282a6683554e837b876d9bbff9ffa94.jpg"
          />
        </IconButton>
      </Box>
    </Toolbar>
  </AppBar>
  )
}

export default TopBar
