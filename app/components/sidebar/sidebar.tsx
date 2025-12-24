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

interface SideBarProps {
  open: boolean;
  setOpen: (open: boolean) => void;
}

const SideBar: React.FC<SideBarProps> = ({ open, setOpen }) => {
  const router = useRouter();
  const pathname = usePathname();
  const [isMobile, setIsMobile] = React.useState(false);

  React.useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const menuItems = [
    { text: "Dashboard", icon: <DashboardIcon />, orange: true, path: "/" },
    {
      text: "Organization",
      icon: <ApartmentIcon />,
      orange: true,
      path: "/organization",
    },
    { text: "Audit", icon: <GroupIcon />, path: "/audit" },
    { text: "Settings", icon: <SettingsIcon />, path: "/settings" },
  ];

  const mainMenu = menuItems.slice(0, 2);
  const others = menuItems.slice(2);

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
              backgroundColor: "white",
              color: "black",
              "&:hover": { backgroundColor: "#FF8A3D" },
            }}
          >
            <ChevronLeftIcon />
          </IconButton>
        </Box>

        <Divider sx={{ borderColor: "#697586" }} />

        {/* Main Menu */}
        <Box sx={{ px: 2, mt: 4 }}>
          <Typography
            variant="body2"
            sx={{ color: "#F8FAFC", fontWeight: 400, mb: 2 }}
          >
            Main Menu
          </Typography>
          <List sx={{ p: 0 }}>
            {mainMenu.map((item) => {
              const isActive = item.text === activeItem;

              return (
                <ListItem key={item.text} disablePadding sx={{ mb: 1 }}>
                  <ListItemButton
                    onClick={() => {
                      router.push(item.path);
                      if (isMobile) setOpen(false);
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
                        color: isActive ? "#000000" : "#F8FAFC",
                      }}
                    >
                      {item.icon}
                    </ListItemIcon>

                    <ListItemText
                      primary={item.text}
                      primaryTypographyProps={{
                        fontSize: 14,
                        fontWeight: isActive ? 500 : 400,
                        color: isActive ? "#000000" : "#F8FAFC",
                      }}
                    />
                  </ListItemButton>
                </ListItem>
              );
            })}
          </List>
        </Box>

        {/* Others */}
        <Box sx={{ px: 2, mt: 2 }}>
          <Typography
            variant="body2"
            sx={{ color: "#F8FAFC", fontWeight: 400, mb: 1 }}
          >
            Others
          </Typography>
          <List sx={{ p: 0 }}>
            {others.map((item) => {
              const isActive = item.text === activeItem;

              return (
                <ListItem key={item.text} disablePadding sx={{ mb: 1 }}>
                  <ListItemButton
                    onClick={() => {
                      router.push(item.path);
                      if (isMobile) setOpen(false);
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
                        color: isActive ? "#000000" : "#F8FAFC",
                      }}
                    >
                      {item.icon}
                    </ListItemIcon>

                    <ListItemText
                      primary={item.text}
                      primaryTypographyProps={{
                        fontSize: 14,
                        fontWeight: isActive ? 500 : 400,
                        color: isActive ? "#000000" : "#F8FAFC",
                      }}
                    />
                  </ListItemButton>
                </ListItem>
              );
            })}
          </List>
        </Box>

        <Box sx={{ flexGrow: 1 }} />

        {/* Logout */}
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
              <ListItemIcon sx={{ minWidth: 40, color: "#F8FAFC" }}>
                <LogoutIcon />
              </ListItemIcon>
              <ListItemText
                primary="Log Out"
                primaryTypographyProps={{
                  fontSize: 14,
                  fontWeight: 500,
                  color: "#F8FAFC",
                }}
              />
            </ListItemButton>
          </ListItem>
        </List>
      </Drawer>
    </>
  );
};

export default SideBar;
