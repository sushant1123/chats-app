import React, { useState } from "react";
import { Box, Divider, IconButton, Link, Menu, MenuItem, Stack, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { DotsThreeVertical, DownloadSimple, Image } from "phosphor-react";
import { Message_options } from "../../data/data";

export const TimeLine = ({ chat }) => {
  const theme = useTheme();
  return (
    <Stack direction="row" alignItems="center" justifyContent="space-between">
      <Divider width="46%" />
      <Typography variant="caption" color={theme.palette.text}>
        {chat.text}
      </Typography>
      <Divider width="46%" />
    </Stack>
  );
};

export const TextMessage = ({ chat, menu }) => {
  const theme = useTheme();

  return (
    <Stack direction="row" justifyContent={chat.incoming ? "start" : "end"}>
      <Box
        p={1.5}
        sx={{
          backgroundColor: chat.incoming
            ? theme.palette.background.paper
            : theme.palette.primary.main,
          borderRadius: 1.5,
          width: "max-content",
        }}
      >
        <Typography variant="body2" color={chat.incoming ? theme.palette.text : "#fff"}>
          {chat.message}
        </Typography>
      </Box>

      {menu && <MessageOptions />}
    </Stack>
  );
};

export const MediaMessage = ({ chat, menu }) => {
  const theme = useTheme();

  return (
    <Stack direction="row" justifyContent={chat.incoming ? "start" : "end"}>
      <Box
        p={1.5}
        sx={{
          backgroundColor: chat.incoming
            ? theme.palette.background.paper
            : theme.palette.primary.main,
          borderRadius: 1.5,
          width: "max-content",
        }}
      >
        <Stack spacing={1}>
          <img
            src={chat.img}
            alt={chat.message}
            style={{
              maxHeight: 210,
              borderRadius: "10px",
            }}
          />
          <Typography variant="body2" color={chat.incoming ? theme.palette.text : "#fff"}>
            {chat.message}
          </Typography>
        </Stack>
      </Box>

      {menu && <MessageOptions />}
    </Stack>
  );
};

export const ReplyMessage = ({ chat, menu }) => {
  const theme = useTheme();

  return (
    <Stack direction="row" justifyContent={chat.incoming ? "start" : "end"}>
      <Box
        p={1.5}
        sx={{
          backgroundColor: chat.incoming
            ? theme.palette.background.paper
            : theme.palette.primary.main,
          borderRadius: 1.5,
          width: "max-content",
        }}
      >
        <Stack spacing={2}>
          <Stack
            p={2}
            spacing={3}
            direction={"column"}
            alignItems={"center"}
            sx={{ backgroundColor: theme.palette.background.paper, borderRadius: 1 }}
          >
            <Typography variant="body2" color={theme.palette.text}>
              {chat.message}
            </Typography>
          </Stack>
          <Typography variant="body2" color={chat.incoming ? theme.palette.text : "#fff"}>
            {chat.reply}
          </Typography>
        </Stack>
      </Box>

      {menu && <MessageOptions />}
    </Stack>
  );
};

export const LinkMessage = ({ chat, menu }) => {
  const theme = useTheme();

  return (
    <Stack direction="row" justifyContent={chat.incoming ? "start" : "end"}>
      <Box
        p={1.5}
        sx={{
          backgroundColor: chat.incoming
            ? theme.palette.background.paper
            : theme.palette.primary.main,
          borderRadius: 1.5,
          width: "max-content",
        }}
      >
        <Stack spacing={2}>
          <Stack
            p={2}
            spacing={3}
            alignItems={"start"}
            sx={{
              backgroundColor: chat.incoming
                ? theme.palette.background.paper
                : theme.palette.primary.main,
              borderRadius: 1,
            }}
          >
            <img
              src={chat.preview}
              alt={chat.message}
              style={{
                maxHeight: 210,
                borderRadius: "10px",
              }}
            />
            <Stack spacing={2}>
              <Typography variant={"subtitle2"}>Creating a chat App</Typography>
              <Typography
                variant={"subtitle2"}
                component={Link}
                sx={{ color: theme.palette.primary.main, cursor: "pointer" }}
                to={"//https://www.youtube.com"}
              >
                www.youtube.com
              </Typography>
            </Stack>

            <Typography variant="body2" color={chat.incoming ? theme.palette.text : "#fff"}>
              {chat.message}
            </Typography>
          </Stack>
        </Stack>
      </Box>

      {menu && <MessageOptions />}
    </Stack>
  );
};

export const DocumentMessage = ({ chat, menu }) => {
  const theme = useTheme();

  return (
    <Stack direction="row" justifyContent={chat.incoming ? "start" : "end"}>
      <Box
        p={1.5}
        sx={{
          backgroundColor: chat.incoming
            ? theme.palette.background.paper
            : theme.palette.primary.main,
          borderRadius: 1.5,
          width: "max-content",
        }}
      >
        <Stack spacing={2}>
          <Stack
            p={2}
            direction="row"
            spacing={3}
            alignItems={"center"}
            sx={{
              backgroundColor: theme.palette.background.default,
              borderRadius: 1,
            }}
          >
            <Image size={48} />
            <Typography variant="caption" color={chat.incoming ? theme.palette.text : "#fff"}>
              Abstract.png
            </Typography>

            <IconButton>
              <DownloadSimple />
            </IconButton>
          </Stack>
          <Typography variant="body" sx={{ color: chat.incoming ? theme.palette.text : "#fff" }}>
            {chat.message}
          </Typography>
        </Stack>
      </Box>

      {menu && <MessageOptions />}
    </Stack>
  );
};

const MessageOptions = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <DotsThreeVertical
        size={20}
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
        cursor={"pointer"}
      />

      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <Stack spacing={1} px={1}>
          {Message_options.map((option, idx) => (
            <MenuItem onClick={handleClick} key={idx}>
              {option.title}
            </MenuItem>
          ))}
        </Stack>
      </Menu>
    </>
  );
};
