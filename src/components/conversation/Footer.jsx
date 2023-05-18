import React, { useState } from "react";
import { Box, Stack, InputAdornment, TextField, Fab, Tooltip } from "@mui/material";
import { IconButton } from "@mui/material";
import { useTheme } from "@mui/material";
import { styled } from "@mui/material/styles";
import {
  Camera,
  File,
  Image,
  LinkSimple,
  PaperPlaneTilt,
  Smiley,
  Sticker,
  User,
} from "phosphor-react";
import data from "@emoji-mart/data";
import Picker from "@emoji-mart/react";

const StyledInput = styled(TextField)(({ theme }) => ({
  "& .MuiInputBase-input": {
    paddingTop: "12px",
    paddingBottom: "12px",
  },
}));

const Actions = [
  {
    color: "#4da5fe",
    icon: <Image size={24} />,
    y: 102,
    title: "Photo/Video",
  },
  {
    color: "#1b8cfe",
    icon: <Sticker size={24} />,
    y: 172,
    title: "Stickers",
  },
  {
    color: "#0172e4",
    icon: <Camera size={24} />,
    y: 242,
    title: "Image",
  },
  {
    color: "#0159b2",
    icon: <File size={24} />,
    y: 312,
    title: "Document",
  },
  {
    color: "#013f7f",
    icon: <User size={24} />,
    y: 382,
    title: "Contact",
  },
];

const ChatInput = ({ setOpenEmojiPicker }) => {
  const [openActions, setOpenActions] = useState(false);

  return (
    <StyledInput
      fullWidth
      placeholder="Write a message..."
      variant="filled"
      InputProps={{
        disableUnderline: true,
        startAdornment: (
          <Stack sx={{ width: "max-content" }}>
            <Stack sx={{ position: "relative", display: openActions ? "inline-block" : "none" }}>
              {Actions.map((action, idx) => (
                <Tooltip title={action.title} placement="right" key={idx}>
                  <Fab sx={{ position: "absolute", top: -action.y, backgroundColor: action.color }}>
                    {action.icon}
                  </Fab>
                </Tooltip>
              ))}
            </Stack>
            <InputAdornment position="end">
              <IconButton onClick={() => setOpenActions((prev) => !prev)}>
                <LinkSimple />
              </IconButton>
            </InputAdornment>
          </Stack>
        ),
        endAdornment: (
          <InputAdornment position="end">
            <IconButton onClick={() => setOpenEmojiPicker((prev) => !prev)}>
              <Smiley />
            </IconButton>
          </InputAdornment>
        ),
      }}
    />
  );
};

const Footer = () => {
  const [openEmojiPicker, setOpenEmojiPicker] = useState(false);
  const theme = useTheme();

  return (
    <Box
      p={2}
      sx={{
        width: "100%",
        backgroundColor:
          theme.palette.mode === "light" ? "#f8faff" : theme.palette.background.paper,
        boxShadow: "0 0 2px rgba(0, 0, 0, 0.25)",
      }}
    >
      <Stack direction="row" alignItems="center" justifyContent="space-between" spacing={3}>
        <Stack sx={{ width: "100%" }}>
          <Box
            sx={{
              display: openEmojiPicker ? "inline" : "none",
              zIndex: 10,
              position: "fixed",
              bottom: 81,
              right: 100,
            }}
          >
            <Picker data={data} onEmojiSelect={console.log} theme={theme.palette.mode} />
          </Box>

          <ChatInput setOpenEmojiPicker={setOpenEmojiPicker} />
        </Stack>
        <Box
          spacing={3}
          sx={{
            height: 48,
            width: 48,
            backgroundColor: theme.palette.primary.main,
            borderRadius: 1.5,
          }}
        >
          <Stack sx={{ height: "100%", width: "100%" }} alignItems="center" justifyContent="center">
            <IconButton sx={{ color: "#fff" }}>
              <PaperPlaneTilt />
            </IconButton>
          </Stack>
        </Box>
      </Stack>
    </Box>
  );
};

export default Footer;
