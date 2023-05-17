import React, { useState } from "react";
import { Avatar, Box, IconButton, Stack, Switch } from "@mui/material";
import Divider from "@mui/material/Divider";
import { Outlet } from "react-router-dom";
import { styled, useTheme } from "@mui/material/styles";
import { faker } from "@faker-js/faker";

import Logo from "../../assets/Images/logo.ico";
import { Nav_Buttons } from "../../data/data";
import { Gear } from "phosphor-react";
import useSettings from "../../hooks/useSettings";

const AntSwitch = styled(Switch)(({ theme }) => ({
  width: 40,
  height: 20,
  padding: 0,
  display: "flex",
  "&:active": {
    "& .MuiSwitch-thumb": {
      width: 15,
    },
    "& .MuiSwitch-switchBase.Mui-checked": {
      transform: "translateX(9px)",
    },
  },
  "& .MuiSwitch-switchBase": {
    padding: 2,
    "&.Mui-checked": {
      transform: "translateX(20px)",
      color: "#fff",
      "& + .MuiSwitch-track": {
        opacity: 1,
        backgroundColor: theme.palette.primary.main,
      },
    },
  },
  "& .MuiSwitch-thumb": {
    boxShadow: "0 2px 4px 0 rgb(0 35 11 / 20%)",
    width: 16,
    height: 16,
    borderRadius: 8,
    transition: theme.transitions.create(["width"], {
      duration: 200,
    }),
  },
  "& .MuiSwitch-track": {
    borderRadius: 20 / 2,
    opacity: 1,
    backgroundColor: theme.palette.mode === "dark" ? "rgba(255,255,255,.35)" : "rgba(0,0,0,.25)",
    boxSizing: "border-box",
  },
}));

const DashboardLayout = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const theme = useTheme();
  const { onToggleMode } = useSettings();
  // console.log({ theme });

  return (
    <>
      <Box
        p={2}
        sx={{
          backgroundColor: theme.palette.background.paper,
          boxShadow: "0 0 2px rgba(0, 0, 0, 0.25)",
          height: "100vh",
          width: 100,
        }}
      >
        <Stack
          direction={"column"}
          alignItems={"center"}
          justifyContent={"space-between"}
          sx={{ height: "100%" }}
          spacing={3}
        >
          <Stack alignItems={"center"} spacing={4} sx={{ width: "100%" }} direction={"column"}>
            <Box
              sx={{
                backgroundColor: theme.palette.primary.main,
                height: 64,
                width: 64,
                borderRadius: 1.5,
              }}
            >
              <img src={Logo} alt="logo" />
            </Box>

            <Stack
              sx={{ width: "max-content" }}
              direction={"column"}
              alignItems={"center"}
              spacing={3}
            >
              {Nav_Buttons.map((el) =>
                el.index === selectedIndex ? (
                  <Box
                    p={1}
                    sx={{ backgroundColor: theme.palette.primary.main, borderRadius: 1.5 }}
                    key={el.index}
                  >
                    <IconButton sx={{ width: "max-content", color: "#fff" }}>{el.icon}</IconButton>
                  </Box>
                ) : (
                  <IconButton
                    sx={{
                      width: "max-content",
                      color: theme.palette.mode === "light" ? "#000" : "#fff",
                    }}
                    key={el.index}
                    onClick={() => setSelectedIndex(el.index)}
                  >
                    {el.icon}
                  </IconButton>
                )
              )}
              <Divider sx={{ width: "48px" }} />

              {selectedIndex == 3 ? (
                <Box
                  p={1}
                  sx={{ backgroundColor: theme.palette.primary.main, borderRadius: 1.5 }}
                  key={3}
                >
                  <IconButton sx={{ width: "max-content", color: "#fff" }}>
                    <Gear />
                  </IconButton>
                </Box>
              ) : (
                <IconButton
                  onClick={() => setSelectedIndex(3)}
                  sx={{
                    width: "max-content",
                    color: theme.palette.mode === "light" ? "#000" : "#fff",
                  }}
                >
                  <Gear />
                </IconButton>
              )}
            </Stack>
          </Stack>

          <Stack spacing={4}>
            <AntSwitch
              defaultChecked
              onChange={() => {
                onToggleMode();
              }}
            />
            <Avatar src={faker.image.avatar()} />
          </Stack>
        </Stack>
      </Box>
      <Outlet />
    </>
  );
};

export default DashboardLayout;
