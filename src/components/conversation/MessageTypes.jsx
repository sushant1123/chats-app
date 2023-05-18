import React from "react";
import { Box, Divider, IconButton, Link, Stack, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { DownloadSimple, Image } from "phosphor-react";

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

export const TextMessage = ({ chat }) => {
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
    </Stack>
  );
};

export const MediaMessage = ({ chat }) => {
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
    </Stack>
  );
};

export const ReplyMessage = ({ chat }) => {
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
    </Stack>
  );
};

export const LinkMessage = ({ chat }) => {
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
    </Stack>
  );
};

export const DocumentMessage = ({ chat }) => {
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
    </Stack>
  );
};
