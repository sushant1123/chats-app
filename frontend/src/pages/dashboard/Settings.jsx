import { faker } from "@faker-js/faker";
import { Avatar, Box, Divider, IconButton, Stack, Typography, useTheme } from "@mui/material";
import {
  Bell,
  CaretLeft,
  Image,
  Info,
  Key,
  Keyboard,
  Lock,
  Note,
  PencilCircle,
} from "phosphor-react";
import React, { useState } from "react";
import Shortcuts from "../../sections/settings/Shortcuts";

const Settings = () => {
  const theme = useTheme();
  const [openShortcuts, setOpenShortcuts] = useState(false);

  const handleOpenShortcuts = () => {
    setOpenShortcuts(true);
  };

  const handleCloseShortcuts = () => {
    setOpenShortcuts(false);
  };

  const list = [
    {
      key: 0,
      icon: <Bell size={20} />,
      title: "Notifications",
      onclick: () => {},
    },
    {
      key: 1,
      icon: <Lock size={20} />,
      title: "Privacy",
      onclick: () => {},
    },
    {
      key: 2,
      icon: <Key size={20} />,
      title: "Security",
      onclick: () => {},
    },
    {
      key: 3,
      icon: <PencilCircle size={20} />,
      title: "Theme",
      // onclick: handleOpenTheme,
      onclick: () => {},
    },
    {
      key: 4,
      icon: <Image size={20} />,
      title: "Chat Wallpaper",
      onclick: () => {},
    },
    {
      key: 5,
      icon: <Note size={20} />,
      title: "Request Account Info",
      onclick: () => {},
    },
    {
      key: 6,
      icon: <Keyboard size={20} />,
      title: "Keyboard Shortcuts",
      onclick: handleOpenShortcuts,
    },
    {
      key: 7,
      icon: <Info size={20} />,
      title: "Help",
      onclick: () => {},
    },
  ];

  return (
    <>
      <Stack direction="row" width="100%">
        {/* Left Panel */}
        <Box
          sx={{
            overflowY: "scroll",
            width: 320,
            height: "100vh",
            backgroundColor: theme.palette.mode === "light" ? "#f8faff" : theme.palette.background,
            boxShadow: "0 0 2px rgba(0, 0, 0, 0.25)",
          }}
        >
          <Stack p={4} spacing={5}>
            {/* Header */}
            <Stack direction="row" spacing={3} alignItems="center">
              <IconButton onClick={() => {}}>
                <CaretLeft size={24} color="#4b4b4b" />
              </IconButton>
              <Typography variant="h6">Settings</Typography>
            </Stack>

            {/* Profile */}
            <Stack direction="row" spacing={3} alignItems="center">
              <Avatar
                sx={{ height: 56, width: 56 }}
                src={faker.image.avatar()}
                alt={faker.name.firstName()}
              />
              <Stack spacing={0.5}>
                <Typography variant="article">{faker.name.fullName()}</Typography>
                <Typography variant="body2">{faker.random.word()}</Typography>
              </Stack>
            </Stack>

            {/* Settings Options */}
            <Stack spacing={4}>
              {list.map(({ key, icon, title, onclick }) => {
                return (
                  <Stack onClick={onclick} sx={{ cursor: "pointer" }} spacing={2} key={key}>
                    <Stack alignItems={"center"} direction="row" spacing={2}>
                      {icon}
                      <Typography variant="body2">{title}</Typography>
                    </Stack>
                    {key !== 7 && <Divider />}
                  </Stack>
                );
              })}
            </Stack>
          </Stack>
        </Box>

        {/* Right Panel */}
      </Stack>

      {openShortcuts && <Shortcuts open={openShortcuts} handleClose={handleCloseShortcuts} />}
    </>
  );
};

export default Settings;
