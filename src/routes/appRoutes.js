// import DashboardPageLayout from "../pages/dashboard/DashboardPageLayout";
// import HomePage from "../pages/home/HomePage";

import Dashboard from "../pages/dashboard/Dashboard";
import PropertyList from "../pages/property/PropertyList";
import Roles from "../pages/roles&privilages/Roles";
import TicketsList from "../pages/tickets/TicketsList";
import WorkSites from "../pages/property/WorkSites";
import PropertyPageLayout from "../pages/property/PropertyPageLayout";
import ResidentPageLayout from "../pages/residents/ResidentPageLayout";
import AddResidents from "../pages/residents/AddResidents";
import ResidentTable from "../pages/residents/ResidentTable";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PeopleIcon from "@mui/icons-material/People";
import ConfirmationNumberIcon from "@mui/icons-material/ConfirmationNumber";
import AddBoxIcon from "@mui/icons-material/AddBox";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";
import AddLocationAltIcon from "@mui/icons-material/AddLocationAlt";
import {
    ExpandLess,
    ExpandMore,
    BusinessCenter,
    Apartment,
  } from "@mui/icons-material";
// import DefaultPage from "../pages/dashboard/DefaultPage";
// import DashboardIndex from "../pages/dashboard/DashboardIndex";
// import ChangelogPage from "../pages/changelog/ChangelogPage";
// import AnalyticsPage from "../pages/dashboard/AnalyticsPage";
// import SaasPage from "../pages/dashboard/SaasPage";
// import ComponentPageLayout from "../pages/component/ComponentPageLayout";
// import DashboardOutlinedIcon from '@mui/icons-material/DashboardOutlined';
// import AppsOutlinedIcon from '@mui/icons-material/AppsOutlined';
// import ArticleOutlinedIcon from '@mui/icons-material/ArticleOutlined';
// import FormatListBulletedOutlinedIcon from '@mui/icons-material/FormatListBulletedOutlined';
// import FileDownloadOutlinedIcon from '@mui/icons-material/FileDownloadOutlined';
// import AlertPage from "../pages/component/AlertPage";
// import ButtonPage from "../pages/component/ButtonPage";
// import InstallationPage from "../pages/installation/InstallationPage";
// import DocumentationPage from "../pages/documentation/DocumentationPage";

const appRoutes = [
  {
    index: true,
    element: <Dashboard />,
    state: "home"
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
    state: "dashboard",
    sidebarProps: {
        displayText: "Dashboard",
        icon: <DashboardIcon />
      }
  },
  {
    path: "/residents",
    element: <ResidentPageLayout />,
    state: "residents",
    sidebarProps: {
        displayText: "residents",
        icon: <PeopleIcon />
      },
      child: [
        {
          index: true,
        //   element: <DashboardIndex />,
          state: "residents.index"
        },
        {
          path: "/residents/add",
          element: <AddResidents />,
          state: "residents.add",
          sidebarProps: {
            displayText: "Add"
          },
        },
        {
          path: "/residents/list",
          element: <ResidentTable />,
          state: "residents.list",
          sidebarProps: {
            displayText: "List"
          }
        },
      ]

  },
  {
    path: "/tickets",
    element: <TicketsList />,
    state: "tickets",
    sidebarProps: {
        displayText: "Tickets",
        icon: <ConfirmationNumberIcon />
      }
  },
  {
    path: "/roles",
    element: <Roles />,
    state: "roles",
    sidebarProps: {
        displayText: "Roles & Privilages",
        icon: <BusinessCenter />
      }
  },
    {
    path: "/property",
    element: <PropertyPageLayout />,
    state: "property",
    sidebarProps: {
        displayText: "Property",
        icon: <Apartment />
      },
    child: [
        {
            index: true,
          //   element: <DashboardIndex />,
            state: "property.index"
          },
      {
        path: "/property/list",
        element: <PropertyList />,
        state: "property.list",
        sidebarProps: {
            displayText: "List"
          },
      },
      {
        path: "/property/worksite",
        element: <WorkSites />,
        state: "property.worksite",
        sidebarProps: {
            displayText: "WorkSite"
          },
      }
    ]
  },
];

export default appRoutes;