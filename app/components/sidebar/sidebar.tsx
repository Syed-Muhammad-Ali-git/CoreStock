import * as React from "react";
import { useRouter, usePathname } from "next/navigation";
import {
  Drawer,
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
  Divider,
  IconButton,
} from "@mui/material";
import DashboardIcon from "@mui/icons-material/Dashboard";
import ApartmentIcon from "@mui/icons-material/Apartment";
import GroupIcon from "@mui/icons-material/Group";
import SettingsIcon from "@mui/icons-material/Settings";
import LogoutIcon from "@mui/icons-material/Logout";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";

const drawerWidth = 260;

interface DrawerComponentProps {
  open: boolean;
  setOpen: (open: boolean) => void;
}

const DrawerComponent: React.FC<DrawerComponentProps> = ({ open, setOpen }) => {
  const router = useRouter();
  const pathname = usePathname();

  const menuItems = [
    { text: "Dashboard", icon: <DashboardIcon />, path: "/" },
    {
      text: "Organization",
      icon: <ApartmentIcon />,
      orange: true,
      path: "/organization",
    },
    { text: "Audi", icon: <GroupIcon />, path: "/audi" },
    { text: "Settings", icon: <SettingsIcon />, path: "/settings" },
  ];

  const activeItem =
    menuItems.find((item) => item.path === pathname)?.text || "Dashboard";

  return (
    <>
      {!open && (
        <IconButton
          onClick={() => setOpen(true)}
          sx={{
            position: "fixed",
            top: 16,
            left: 16,
            backgroundColor: "#3A3E46",
            color: "white",
            "&:hover": { backgroundColor: "#2F333A" },
            zIndex: 1300,
          }}
        >
          <ChevronLeftIcon sx={{ transform: "rotate(180deg)" }} />
        </IconButton>
      )}
      <Drawer
        variant="persistent"
        open={open}
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            backgroundColor: "#3A3E46",
            borderRight: "none",
            boxSizing: "border-box",
          },
        }}
      >
        {/* Header */}
        <Box
          sx={{
            height: 64,
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            px: 2,
          }}
        >
          <Typography fontWeight={700} color="white">
            CoreStock
          </Typography>

          <IconButton
            onClick={() => setOpen(false)}
            sx={{
              backgroundColor: "#2F333A",
              color: "white",
              "&:hover": { backgroundColor: "#2F333A" },
            }}
          >
            <ChevronLeftIcon />
          </IconButton>
        </Box>

        <Divider sx={{ borderColor: "#4A4F58" }} />

        {/* Menu */}
        <List sx={{ px: 2, mt: 2 }}>
          {menuItems.map((item) => {
            const isActive = item.text === activeItem;

            return (
              <ListItem key={item.text} disablePadding sx={{ mb: 1 }}>
                <ListItemButton
                  onClick={() => {
                    router.push(item.path);
                    setOpen(false);
                  }}
                  sx={{
                    borderRadius: "12px",
                    height: 44,
                    backgroundColor: isActive ? "#FF8A3D" : "transparent",
                    "&:hover": {
                      backgroundColor: isActive ? "#FF8A3D" : "#2F333A",
                    },
                  }}
                >
                  <ListItemIcon
                    sx={{
                      minWidth: 40,
                      color: isActive
                        ? "#000000"
                        : item.orange
                        ? "#FF8A3D"
                        : "#667085",
                    }}
                  >
                    {item.icon}
                  </ListItemIcon>

                  <ListItemText
                    primary={item.text}
                    primaryTypographyProps={{
                      fontSize: 14,
                      fontWeight: isActive ? 600 : 500,
                      color: isActive
                        ? "#000000"
                        : item.orange
                        ? "#FF8A3D"
                        : "#667085",
                    }}
                  />
                </ListItemButton>
              </ListItem>
            );
          })}
        </List>

        <Box sx={{ flexGrow: 1 }} />

        {/* Logout */}
        <Divider sx={{ borderColor: "#4A4F58", mx: 2 }} />
        <List sx={{ px: 2, py: 2 }}>
          <ListItem disablePadding>
            <ListItemButton
              onClick={() => {
                localStorage.clear();
                router.push("/login");
              }}
              sx={{
                borderRadius: "12px",
                height: 44,
                "&:hover": { backgroundColor: "#2F333A" },
              }}
            >
              <ListItemIcon sx={{ minWidth: 40, color: "#667085" }}>
                <LogoutIcon />
              </ListItemIcon>
              <ListItemText
                primary="Logout"
                primaryTypographyProps={{
                  fontSize: 14,
                  fontWeight: 500,
                  color: "#667085",
                }}
              />
            </ListItemButton>
          </ListItem>
        </List>
      </Drawer>
    </>
  );
};

export default DrawerComponent;
