import React from "react";
import { Avatar, Box, Button, Divider, IconButton, Stack, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import {
  Bell,
  CaretRight,
  Flag,
  Phone,
  Prohibit,
  Star,
  Trash,
  VideoCamera,
  X,
} from "phosphor-react";
import { ToggleSideBar } from "../redux/slices/app";
import { useDispatch } from "react-redux";
import { faker } from "@faker-js/faker";
import AntSwitch from "./AntSwitch";

const Contact = () => {
  const theme = useTheme();
  const dispatch = useDispatch();

  return (
    <Box sx={{ width: 320, height: "100vh" }}>
      <Stack sx={{ height: "100%" }}>
        {/* Header */}
        <Box
          sx={{
            boxShadow: "0 0 2px rgba(0, 0, 0, 0.25)",
            width: "100%",
            backgroundColor: theme.palette.mode === "light" ? "#f8faff" : theme.palette.background,
          }}
        >
          <Stack
            sx={{ height: "100%", p: 2 }}
            direction="row"
            alignItems="center"
            justifyContent="space-between"
            spacing={3}
          >
            <Typography variant="subtitle2">Contact Info</Typography>
            <IconButton onClick={() => dispatch(ToggleSideBar())}>
              <X />
            </IconButton>
          </Stack>
        </Box>

        {/* Body */}
        <Stack
          p={2}
          spacing={3}
          sx={{ height: "100%", position: "relative", flexGrow: 1, overflowY: "scroll" }}
        >
          <Stack direction="row" alignItems="center" spacing={2}>
            <Avatar
              src={faker.image.avatar()}
              alt={faker.name.firstName()}
              sx={{ height: 64, width: 64 }}
            />
            <Stack spacing={0.5}>
              <Typography variant="article" fontWeight={600}>
                {faker.name.fullName()}
              </Typography>
              <Typography variant="article" fontWeight={500}>
                +91 123 4567 890
              </Typography>
            </Stack>
          </Stack>

          {/* Audio / Video call */}
          <Stack
            p={2}
            spacing={3}
            direction="row"
            justifyContent="space-evenly"
            alignItems="center"
          >
            <Stack justifyContent="center" spacing={1}>
              <IconButton>
                <VideoCamera />
              </IconButton>
              <Typography variant="overline">Video</Typography>
            </Stack>

            <Stack justifyContent="center" spacing={1}>
              <IconButton>
                <Phone />
              </IconButton>
              <Typography variant="overline">Voice</Typography>
            </Stack>
          </Stack>

          <Divider />

          {/* Status */}
          <Stack spacing={0.5}>
            <Typography variant="article">About</Typography>
            <Typography variant="body2">Hi there, I am using </Typography>
          </Stack>

          <Divider />

          {/* Media, links and docs */}
          <Stack direction="row" alignItems="center" justifyContent="space-between" spacing={2}>
            <Typography variant="subtitle2">Media, links and docs</Typography>
            <Button endIcon={<CaretRight />}>201</Button>
          </Stack>

          <Stack direction={"row"} spacing={2} alignItems="center">
            {[1, 2, 3].map((el, idx) => (
              <Box key={idx}>
                <img src={faker.image.city()} alt={faker.name.firstName()} />
              </Box>
            ))}
          </Stack>

          <Divider />

          {/* Starred Messages */}
          <Stack direction="row" justifyContent="space-between">
            <Stack direction="row" spacing={2} alignItems="center">
              <Star size={21} />
              <Typography variant="subtitle2">Starred Messages</Typography>
            </Stack>

            <IconButton>
              <CaretRight />
            </IconButton>
          </Stack>

          <Divider />

          {/* Mute Notifications */}
          <Stack direction="row" justifyContent="space-between">
            <Stack direction="row" spacing={2} alignItems="center">
              <Bell size={21} />
              <Typography variant="subtitle2">Mute Notifications</Typography>
            </Stack>

            <AntSwitch />
          </Stack>

          <Divider />

          {/* common groups */}
          <Typography variant="subtitle2">1 group in common</Typography>

          <Stack direction="row" alignItems="center" spacing={2}>
            <Avatar
              src={faker.image.avatar()}
              alt={faker.name.firstName()}
              sx={{ height: 48, width: 48 }}
            />
            <Stack spacing={0.5}>
              <Typography variant="subtitle2">{faker.name.jobArea()}</Typography>
              <Typography variant="caption">Owl, Parrot, Rabbit , You</Typography>
            </Stack>
          </Stack>

          <Stack direction="row" alignItems="center" justifyContent="center" spacing={2}>
            <Button fullWidth startIcon={<Prohibit />} variant="outlined">
              Block
            </Button>
            <Button fullWidth startIcon={<Trash />} variant="outlined">
              Delete
            </Button>
          </Stack>
        </Stack>
      </Stack>
    </Box>
  );
};

export default Contact;
