import React from "react";
import Chats from "./Chats";
import { Box, Stack } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import Conversation from "../../components/conversation/Conversation";
import Contact from "../../components/Contact";
import { useSelector } from "react-redux";
import SharedMessages from "../../components/SharedMessages";
import StarredMessages from "../../components/StarredMessages";

const GeneralApp = () => {
  const theme = useTheme();

  const { sidebar } = useSelector((store) => store.app);

  const getComponent = () => {
    switch (sidebar.type) {
      case "CONTACT":
        return <Contact />;

      case "STARRED":
        return <StarredMessages />;

      case "SHARED":
        return <SharedMessages />;

      default:
        return <Contact />;
    }
  };

  return (
    <Stack direction="row" sx={{ width: "100%" }}>
      <Chats />
      <Box
        sx={{
          height: "100%",
          width: sidebar.open ? "calc(100vw - 740px)" : "calc(100vw - 420px)",
          backgroundColor:
            theme.palette.mode === "light" ? "#f0f4fa" : theme.palette.background.default,
        }}
      >
        <Conversation />
      </Box>

      {/* Contact  */}
      {sidebar.open && getComponent()}
    </Stack>
  );
};

export default GeneralApp;
