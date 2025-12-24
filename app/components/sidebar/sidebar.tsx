import * as React from "react";
import { useRouter, usePathname } from "next/navigation";
import { styled, Theme, CSSObject } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MuiDrawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import { Avatar } from "@mantine/core";
import { Stack } from "@mui/material";
import organizationLogo from "../../assets/images/organization.png";
import logoutLogo from "../../assets/images/log-out.png";
import auditLogo from "../../assets/images/audit.png";
import dashboardLogo from "../../assets/images/dashboard.png";
import settingsLogo from "../../assets/images/settings.png";
import Image from "next/image";

const drawerWidth = 260;

const openedMixin = (theme: Theme): CSSObject => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  backgroundColor: "#3A3E46",
  color: "#F8FAFC",
  overflowX: "hidden",
  borderRight: "none",
  zIndex: 1200,
});

const closedMixin = (theme: Theme): CSSObject => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  backgroundColor: "#3A3E46",
  color: "#F8FAFC",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
  borderRight: "none",
  zIndex: 1200,
});

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  padding: theme.spacing(0, 2),
  height: 64,
  ...theme.mixins.toolbar,
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  zIndex: 1200, // Base z-index
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));

interface SideBarProps {
  open: boolean;
  setOpen: (open: boolean) => void;
}

const SideBar: React.FC<SideBarProps> = ({ open, setOpen }) => {
  const router = useRouter();
  const pathname = usePathname();

  const menuItems = [
    {
      text: "Dashboard",
      icon: <Image src={dashboardLogo} alt="dashboard logo" />,
      path: "/",
    },
    {
      text: "Organization",
      icon: <Image src={organizationLogo} alt="dashboard logo" />,
      path: "/organization",
    },
    {
      text: "Audit",
      icon: <Image src={auditLogo} alt="dashboard logo" />,
      path: "/audit",
    },
    {
      text: "Settings",
      icon: <Image src={settingsLogo} alt="dashboard logo" />,
      path: "/settings",
    },
  ];

  const activeItem =
    menuItems.find((item) => item.path === pathname)?.text || "Dashboard";

  return (
    <Box sx={{ display: "flex" }}>
      <Drawer variant="permanent" open={open}>
        {/* Drawer logo section */}
        <DrawerHeader className="mt-3 mb-3">
          {open && (
            <>
              <Avatar src="/logo.png" alt="core stock logo" />
              <Stack>
                <Typography
                  fontWeight={500}
                  fontSize={"18px"}
                  sx={{ color: "#EEF2F6", ml: -3, mb: 1 }}
                >
                  CoreStock
                </Typography>
              </Stack>

              <Stack>
                <Typography
                  fontWeight={500}
                  fontSize={"10px"}
                  sx={{ color: "#EEF2F6", ml: -14, mt: 3 }}
                >
                  by Blockwork IT
                </Typography>
              </Stack>
            </>
          )}

          <IconButton onClick={() => setOpen(!open)} sx={{ color: "white" }}>
            {open ? (
              <ChevronLeftIcon
                className="bg-white text-black rounded-2xl"
                sx={{ width: "30px", height: "30px" }}
              />
            ) : (
              <MenuIcon />
            )}
          </IconButton>
        </DrawerHeader>

        <Divider sx={{ borderColor: "#697586" }} />

        {/* Main Menu Items */}
        <List sx={{ mt: 2 }}>
          {menuItems.map((item) => {
            const isActive = item.text === activeItem;
            return (
              <ListItem
                key={item.text}
                disablePadding
                sx={{ display: "block", mb: 1 }}
              >
                <ListItemButton
                  onClick={() => router.push(item.path)}
                  sx={{
                    minHeight: 48,
                    justifyContent: open ? "initial" : "center",
                    px: 2.5,
                    backgroundColor: isActive ? "#FF8A3D" : "transparent",
                    mx: 1,
                    borderRadius: "12px",
                    "&:hover": {
                      backgroundColor: isActive ? "#FF8A3D" : "#2F333A",
                    },
                  }}
                >
                  <ListItemIcon
                    sx={{
                      minWidth: 0,
                      mr: open ? 3 : "auto",
                      justifyContent: "center",
                      filter: isActive
                        ? "brightness(0)"
                        : "brightness(0) invert(1)",
                    }}
                  >
                    {item.icon}
                  </ListItemIcon>
                  <ListItemText
                    primary={item.text}
                    sx={{
                      opacity: open ? 1 : 0,
                      color: isActive ? "#000000" : "#F8FAFC",
                    }}
                  />
                </ListItemButton>
              </ListItem>
            );
          })}
        </List>

        <Box sx={{ flexGrow: 1 }} />

        {/* Logout */}
        <List sx={{ pb: 2 }}>
          <ListItem disablePadding sx={{ display: "block" }}>
            <ListItemButton
              onClick={() => {
                localStorage.clear();
                router.push("/login");
              }}
              sx={{
                minHeight: 48,
                justifyContent: open ? "initial" : "center",
                px: 2.5,
                mx: 1,
                borderRadius: "12px",
                "&:hover": {
                  backgroundColor: "#2F333A",
                },
              }}
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: open ? 3 : "auto",
                  justifyContent: "center",
                  color: "#F8FAFC",
                }}
              >
                <Image src={logoutLogo} alt="logout icon" />
              </ListItemIcon>
              <ListItemText
                primary="Log Out"
                sx={{ opacity: open ? 1 : 0, color: "#F8FAFC" }}
              />
            </ListItemButton>
          </ListItem>
        </List>
      </Drawer>
    </Box>
  );
};

export default SideBar;
