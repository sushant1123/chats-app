import React, { useState } from "react";
import { Avatar, Box, IconButton, Stack } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { faker } from "@faker-js/faker";
import { Gear } from "phosphor-react";
import Divider from "@mui/material/Divider";

import Logo from "../../assets/Images/logo.ico";
import { Nav_Buttons } from "../../data/data";
import useSettings from "../../hooks/useSettings";
import AntSwitch from "../../components/AntSwitch";

const SideBar = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const theme = useTheme();
  const { onToggleMode } = useSettings();

  return (
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
  );
};

export default SideBar;
