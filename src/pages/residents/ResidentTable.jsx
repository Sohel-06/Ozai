import React, { useMemo } from "react";
import {
  Paper,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  IconButton,
  Avatar,
  Box,
  TablePagination,
  TextField,
  InputAdornment,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import {
  useTable,
  useSortBy,
  useGlobalFilter,
  usePagination,
} from "react-table";
import EditIcon from "@mui/icons-material/Edit";
import BadgeIcon from "@mui/icons-material/Badge";
import VisibilityIcon from "@mui/icons-material/Visibility";

const data = [
  {
    id: 1,
    name: "John Doe",
    profilePic:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cGVyc29ufGVufDB8fDB8fHww",
    property: "Property A",
    room: "101",
    employeeId: "E001",
    joinDate: "2021-01-01",
    worksite: "Site A",
    userStatus: "Active",
    bed: 1,
  },
  {
    id: 2,
    name: "Jane Smith",
    profilePic:
      "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXZhdGFyfGVufDB8fDB8fHww",
    property: "Property B",
    room: "202",
    employeeId: "E002",
    joinDate: "2021-02-01",
    worksite: "Site B",
    userStatus: "Inactive",
    bed: 2,
  },
  {
    id: 3,
    name: "Ervin Howell",
    profilePic:
      "https://images.unsplash.com/photo-1491349174775-aaafddd81942?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHBlcnNvbnxlbnwwfHwwfHx8MA%3D%3D",
    property: "Property C",
    room: "103",
    employeeId: "E003",
    joinDate: "2021-01-01",
    worksite: "Site A",
    userStatus: "Active",
    bed: 3,
  },
  {
    id: 4,
    name: "Clementine Bauch",
    profilePic:
      "https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHBlcnNvbnxlbnwwfHwwfHx8MA%3D%3D",
    property: "Property D",
    room: "203",
    employeeId: "E004",
    joinDate: "2021-02-01",
    worksite: "Site B",
    userStatus: "Inactive",
    bed: 4,
  },
  {
    id: 5,
    name: "Patricia Lebsack",
    profilePic:
      "https://images.unsplash.com/profile-fb-1687954839-16fde341840a.jpg?bg=fff&crop=faces&dpr=1&h=64&w=64&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    property: "Property A",
    room: "106",
    employeeId: "E005",
    joinDate: "2021-01-01",
    worksite: "Site A",
    userStatus: "Active",
    bed: 5,
  },
  {
    id: 6,
    name: "Chelsey Dietrich",
    profilePic:
      "https://images.unsplash.com/profile-1569790029351-5adb76747654image?bg=fff&crop=faces&dpr=1&h=64&w=64&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    property: "Property B",
    room: "206",
    employeeId: "E007",
    joinDate: "2021-02-01",
    worksite: "Site B",
    userStatus: "Inactive",
    bed: 6,
  },
  {
    id: 1,
    name: "John Doe",
    profilePic:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cGVyc29ufGVufDB8fDB8fHww",
    property: "Property A",
    room: "101",
    employeeId: "E001",
    joinDate: "2021-01-01",
    worksite: "Site A",
    userStatus: "Active",
    bed: 1,
  },
  {
    id: 2,
    name: "Jane Smith",
    profilePic:
      "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXZhdGFyfGVufDB8fDB8fHww",
    property: "Property B",
    room: "202",
    employeeId: "E002",
    joinDate: "2021-02-01",
    worksite: "Site B",
    userStatus: "Inactive",
    bed: 2,
  },
  {
    id: 3,
    name: "Ervin Howell",
    profilePic:
      "https://images.unsplash.com/photo-1491349174775-aaafddd81942?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHBlcnNvbnxlbnwwfHwwfHx8MA%3D%3D",
    property: "Property C",
    room: "103",
    employeeId: "E003",
    joinDate: "2021-01-01",
    worksite: "Site A",
    userStatus: "Active",
    bed: 3,
  },
  {
    id: 4,
    name: "Clementine Bauch",
    profilePic:
      "https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHBlcnNvbnxlbnwwfHwwfHx8MA%3D%3D",
    property: "Property D",
    room: "203",
    employeeId: "E004",
    joinDate: "2021-02-01",
    worksite: "Site B",
    userStatus: "Inactive",
    bed: 4,
  },
  {
    id: 5,
    name: "Patricia Lebsack",
    profilePic:
      "https://images.unsplash.com/profile-fb-1687954839-16fde341840a.jpg?bg=fff&crop=faces&dpr=1&h=64&w=64&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    property: "Property A",
    room: "106",
    employeeId: "E005",
    joinDate: "2021-01-01",
    worksite: "Site A",
    userStatus: "Active",
    bed: 5,
  },
  {
    id: 6,
    name: "Chelsey Dietrich",
    profilePic:
      "https://images.unsplash.com/profile-1569790029351-5adb76747654image?bg=fff&crop=faces&dpr=1&h=64&w=64&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    property: "Property B",
    room: "206",
    employeeId: "E007",
    joinDate: "2021-02-01",
    worksite: "Site B",
    userStatus: "Inactive",
    bed: 6,
  },
];

const ResidentTable = () => {
  const columns = useMemo(
    () => [
      {
        Header: "Name",
        accessor: "name",
        Cell: ({ row }) => (
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              ml: 4,
            }}
          >
            <Avatar src={row.original.profilePic} sx={{ marginRight: 1 }} />
            <Typography sx={{ color: "#000080" }}>
              {row.original.name}
            </Typography>
          </Box>
        ),
      },
      {
        Header: "Property",
        accessor: "property",
        Cell: ({ value }) => (
          <Typography
            sx={{
              color: "#000000",
            }}
          >
            {value}
          </Typography>
        ),
      },
      {
        Header: "Room",
        accessor: "room",
        Cell: ({ value }) => (
          <Typography
            sx={{
              color: "#000000",
            }}
          >
            {value}
          </Typography>
        ),
      },
      {
        Header: "Employee ID",
        accessor: "employeeId",
        Cell: ({ value }) => (
          <Typography
            sx={{
              color: "#000000",
            }}
          >
            {value}
          </Typography>
        ),
      },
      {
        Header: "Join Date",
        accessor: "joinDate",
        Cell: ({ value }) => (
          <Typography
            sx={{
              color: "#000000",
            }}
          >
            {value}
          </Typography>
        ),
      },
      {
        Header: "Worksite",
        accessor: "worksite",
        Cell: ({ value }) => (
          <Typography
            sx={{
              color: "#000000",
            }}
          >
            {value}
          </Typography>
        ),
      },
      {
        Header: "User Status",
        accessor: "userStatus",
        Cell: ({ value }) => (
          <Typography
            sx={{
              color: value === "Active" ? "green" : "red",
            }}
          >
            {value}
          </Typography>
        ),
      },
      {
        Header: "Actions",
        accessor: "actions",
        Cell: () => (
          <Box>
            <IconButton aria-label="review" sx={{ color: "#1976d2" }}>
              <VisibilityIcon />
            </IconButton>
            <IconButton aria-label="assign badge" sx={{ color: "#388e3c" }}>
              <BadgeIcon />
            </IconButton>
            <IconButton aria-label="edit" sx={{ color: "#fbc02d" }}>
              <EditIcon />
            </IconButton>
          </Box>
        ),
      },
    ],
    []
  );

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    prepareRow,
    page,
    gotoPage,
    setPageSize,
    state: { pageIndex, pageSize },
    setGlobalFilter,
    state: { globalFilter },
  } = useTable(
    {
      columns,
      data,
      initialState: { pageIndex: 0, pageSize: 5 },
    },
    useGlobalFilter,
    useSortBy,
    usePagination
  );

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        margin: { xs: "8px 0", sm: "8px 16px" },
      }}
    >
      <Paper sx={{ padding: { xs: 2, sm: 2 }, mb: 2 }}>
        <Typography variant="h6"><b>Residents</b></Typography>
      </Paper>
      <TextField
        variant="outlined"
        placeholder="Search by Name"
        value={globalFilter || ""}
        onChange={(e) => setGlobalFilter(e.target.value || undefined)}
        sx={{
          mb: 2,
          width: "100%",
          backgroundColor: "white",
          borderRadius: 1.5,
          "& fieldset": { border: "none" },
        }}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon />
            </InputAdornment>
          ),
        }}
      />
      <TableContainer component={Paper} elevation={0} sx={{ flexGrow: 1 }}>
        <Table {...getTableProps()} aria-label="resident table">
          <TableHead>
            {headerGroups.map((headerGroup) => (
              <TableRow
                {...headerGroup.getHeaderGroupProps()}
                sx={{ backgroundColor: "black" }}
              >
                {headerGroup.headers.map((column) => (
                  <TableCell
                    {...column.getHeaderProps(column.getSortByToggleProps())}
                    align="center"
                    sx={{ color: "white" }}
                  >
                    {column.render("Header")}
                  </TableCell>
                ))}
              </TableRow>
            ))}
          </TableHead>
          <TableBody {...getTableBodyProps()}>
            {page.map((row) => {
              prepareRow(row);
              return (
                <TableRow
                  {...row.getRowProps()}
                  sx={{
                    color: "#000",
                    backgroundColor:
                      row.index % 2 === 0 ? "#f5f5f5" : "#ffffff",
                    "&:hover": {
                      backgroundColor:
                        row.index % 2 === 0 ? "silver" : "#f5f0f0",
                    },
                  }}
                >
                  {row.cells.map((cell) => (
                    <TableCell {...cell.getCellProps()} align="center">
                      {cell.render("Cell")}
                    </TableCell>
                  ))}
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[5, 10, 25]}
        component="div"
        count={data.length}
        rowsPerPage={pageSize}
        page={pageIndex}
        onPageChange={(e, newPage) => gotoPage(newPage)}
        onRowsPerPageChange={(e) => {
          setPageSize(parseInt(e.target.value, 10));
          gotoPage(0);
        }}
      />
    </Box>
  );
};

export default ResidentTable;
