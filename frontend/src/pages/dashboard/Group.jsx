import { useState } from "react";
import { Box, Divider, IconButton, Link, Stack, Typography, useTheme } from "@mui/material";
import Search from "../../components/Search/Search";
import { Plus } from "phosphor-react";
import { SimpleBarStyle } from "../../components/Scrollbar";
import { ChatList } from "../../data/data";
import ChatElement from "../../components/ChatElement";
import Conversation from "../../components/conversation/Conversation";
import CreateGroup from "../../sections/main/CreateGroup";

const Group = () => {
  const theme = useTheme();
  const [openDialog, setOpenDialog] = useState(false);

  const handleCloseDialog = () => {
    setOpenDialog(false);
  };

  return (
    <>
      <Stack direction="row" sx={{ width: "100%" }}>
        {/* Left */}
        <Box
          sx={{
            height: "100vh",
            width: 320,
            backgroundColor: (theme) =>
              theme.palette.mode === "light" ? "#f8faff" : theme.palette.background,
            boxShadow: "0 0 2px rgba(0, 0, 0, 0.25)",
          }}
        >
          <Stack p={3} spacing={2} sx={{ maxHeight: "100vh" }}>
            <Stack>
              <Typography variant="h3">Groups</Typography>
            </Stack>

            <Stack sx={{ width: "100%" }}>
              <Search />
            </Stack>

            <Stack direction="row" alignItems="center" justifyContent="space-between">
              <Typography variant="subtitle2" component={Link} sx={{ cursor: "pointer" }}>
                Create New Group
              </Typography>
              <IconButton onClick={() => setOpenDialog(true)}>
                <Plus style={{ color: theme.palette.primary.main }} />
              </IconButton>
            </Stack>

            <Divider />

            <Stack spacing={3} sx={{ flexGrow: 1, overflowY: "scroll", height: "100%" }}>
              <SimpleBarStyle timeout={500} clickOnTrack={false}>
                <Stack spacing={2.4}>
                  <Typography variant="subtitle2" sx={{ color: "#676667" }}>
                    Pinned
                  </Typography>

                  {ChatList.filter((chat) => chat.pinned).map((chat) => (
                    <ChatElement chat={chat} key={chat.id} />
                  ))}

                  <Typography variant="subtitle2" sx={{ color: "#676667" }}>
                    All Chats
                  </Typography>

                  {ChatList.filter((chat) => !chat.pinned).map((chat) => (
                    <ChatElement chat={chat} key={chat.id} />
                  ))}
                </Stack>
              </SimpleBarStyle>
            </Stack>
          </Stack>
        </Box>

        {/* Right */}
        {/* Reuse Conversation component */}
        <Box
          sx={{
            height: "100%",
            width: "calc(100vw - 420px)",
            backgroundColor:
              theme.palette.mode === "light" ? "#f0f4fa" : theme.palette.background.default,
          }}
        >
          <Conversation />
        </Box>

        {openDialog && <CreateGroup open={openDialog} handleClose={handleCloseDialog} />}
      </Stack>
    </>
  );
};

export default Group;
