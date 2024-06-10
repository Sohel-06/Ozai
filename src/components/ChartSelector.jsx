import React, { useState } from "react";
import { Paper, Menu, MenuItem, IconButton } from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import CustomBarChart from "./CustomBarChart";
import CustomPieChart from "./CustomPieChart";
import CustomLineChart from "./CustomLineChart";

const ChartOptions = {
  BAR_CHART: "barChart",
//   PIE_CHART: "pieChart",
  LINE_CHART: "lineChart",
};

const ChartComponents = {
  [ChartOptions.BAR_CHART]: CustomBarChart,
  [ChartOptions.PIE_CHART]: CustomPieChart,
  [ChartOptions.LINE_CHART]: CustomLineChart,
};

const ChartSelector = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [selectedChart, setSelectedChart] = useState(ChartOptions.BAR_CHART);

  const handleOpenMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleCloseMenu = () => {
    setAnchorEl(null);
  };

  const handleChartSelect = (chartType) => {
    setSelectedChart(chartType);
    handleCloseMenu();
  };

  const ChartComponent = ChartComponents[selectedChart];

  return (
    <Paper
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        height: "100%",
        padding: "16px 12px",
        borderRadius: "8px",
        boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
        position: "relative",
      }}
    >
      <ChartComponent />
      <IconButton
        sx={{
          position: "absolute",
          top: 0,
          right: 0,
          color:"#000"
        }}
        onClick={handleOpenMenu}
      >
        <MoreVertIcon />
      </IconButton>
      <Menu
  anchorEl={anchorEl}
  open={Boolean(anchorEl)}
  onClose={handleCloseMenu}
  anchorOrigin={{
    vertical: 'top',
    horizontal: 'right',
  }}
  transformOrigin={{
    vertical: 'top',
    horizontal: 'right',
  }}
  getContentAnchorEl={null} // This prevents the menu from positioning incorrectly
>
  {Object.values(ChartOptions).map((option) => (
    <MenuItem key={option} onClick={() => handleChartSelect(option)}>
      {option}
    </MenuItem>
  ))}
</Menu>
    </Paper>
  );
};

export default ChartSelector;
