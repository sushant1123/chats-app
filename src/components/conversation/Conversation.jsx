import React from "react";
import { faker } from "@faker-js/faker";
import { Box, Stack, Typography, Divider, TextField, InputAdornment } from "@mui/material";
import { Avatar, IconButton, Badge } from "@mui/material";
import { useTheme } from "@mui/material";
import { styled } from "@mui/material/styles";
import {
  CaretDown,
  LinkSimple,
  MagnifyingGlass,
  PaperPlaneTilt,
  Phone,
  Smiley,
  VideoCamera,
} from "phosphor-react";
import Header from "./Header";
import Footer from "./Footer";
import Message from "./Message";

const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    backgroundColor: "#44b700",
    color: "#44b700",
    boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
    "&::after": {
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      borderRadius: "50%",
      animation: "ripple 1.2s infinite ease-in-out",
      border: "1px solid currentColor",
      content: '""',
    },
  },
  "@keyframes ripple": {
    "0%": {
      transform: "scale(.8)",
      opacity: 1,
    },
    "100%": {
      transform: "scale(2.4)",
      opacity: 0,
    },
  },
}));

const StyledInput = styled(TextField)(({ theme }) => ({
  "& .MuiInputBase-input": {
    paddingTop: "12px",
    paddingBottom: "12px",
  },
}));

const Conversation = () => {
  const theme = useTheme();
  return (
    <Stack height="100%" maxHeight="100vh" width="auto">
      {/* Header */}
      <Header />

      {/* messages */}
      <Box width="100%" sx={{ flexGrow: 1, height: "100%", overflowY: "scroll" }}>
        <Message />
      </Box>

      {/* footer */}
      <Footer />
    </Stack>
  );
};

export default Conversation;
