import React from "react";
import { Box, IconButton, Stack, Typography, useTheme } from "@mui/material";
import { Tab, Tabs } from "@mui/material";
import { ArrowLeft } from "phosphor-react";
import { useDispatch } from "react-redux";
import { UpdateSideBarType } from "../redux/slices/app";
import Message from "./conversation/Message";

const StarredMessages = () => {
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
          <Stack sx={{ height: "100%", p: 2 }} direction="row" alignItems="center" spacing={3}>
            <IconButton onClick={() => dispatch(UpdateSideBarType("CONTACT"))}>
              <ArrowLeft />
            </IconButton>
            <Typography variant="subtitle2">Starred Messages</Typography>
          </Stack>
        </Box>

        {/* Body  */}
        <Stack
          p={3}
          spacing={3}
          sx={{ height: "100%", position: "relative", flexGrow: 1, overflowY: "scroll" }}
        >
          <Message menu={false} />
        </Stack>
      </Stack>
    </Box>
  );
};

export default StarredMessages;
