import React from "react";
import { useState } from "react";
import { Box, Divider, IconButton, Stack, Typography, Link } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import Search from "../../components/Search/Search";
import { CaretLeft, Plus } from "phosphor-react";
import { SimpleBarStyle } from "../../components/Scrollbar";
import { CallLogElement } from "../../components/CallLogElement";
import { CallList } from "../../data/data";
import StartCall from "../../sections/main/StartCall";
import ProfileForm from "../../sections/settings/ProfileForm";

const Profile = () => {
  const theme = useTheme();
  const [openDialog, setOpenDialog] = useState(false);

  const handleCloseDialog = () => {
    setOpenDialog(false);
  };

  const handleOpenDialog = () => {
    setOpenDialog(true);
  };

  return (
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
        <Stack p={4} spacing={5} sx={{ maxHeight: "100vh" }}>
          <Stack direction={"row"} spacing={2} alignItems={"center"}>
            <IconButton>
              <CaretLeft size={24} color="#4b4b4b" />
            </IconButton>
            <Typography variant="h5">Profile</Typography>
          </Stack>

          <Divider />

          {/* Profile Form */}
          <ProfileForm />
        </Stack>
      </Box>

      {/* Right */}
      {/* TODO */}

      {/* Call Dialog */}
      {openDialog && <StartCall open={openDialog} handleClose={handleCloseDialog} />}
    </Stack>
  );
};

export default Profile;
