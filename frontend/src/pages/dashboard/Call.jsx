import { useState } from "react";
import { Box, Divider, IconButton, Stack, Typography, Link } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import Search from "../../components/Search/Search";
import { Plus } from "phosphor-react";
import { SimpleBarStyle } from "../../components/Scrollbar";
import { CallLogElement } from "../../components/CallLogElement";
import { CallList } from "../../data/data";
import StartCall from "../../sections/main/StartCall";

const Call = () => {
  const theme = useTheme();
  const [openDialog, setOpenDialog] = useState(false);

  const handleCloseDialog = () => {
    setOpenDialog(false);
  };

  const handleOpenDialog = () => {
    setOpenDialog(true);
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
              <Typography variant="h3">Call Logs</Typography>
            </Stack>

            <Stack sx={{ width: "100%" }}>
              <Search />
            </Stack>

            <Stack direction="row" alignItems="center" justifyContent="space-between">
              <Typography variant="subtitle2" component={Link} sx={{ cursor: "pointer" }}>
                Start a new conversation
              </Typography>
              <IconButton onClick={handleOpenDialog}>
                <Plus style={{ color: theme.palette.primary.main }} />
              </IconButton>
            </Stack>

            <Divider />

            <Stack spacing={3} sx={{ flexGrow: 1, overflowY: "auto", height: "100%" }}>
              <SimpleBarStyle timeout={500} clickOnTrack={false}>
                <Stack spacing={2.4}>
                  {/* Call Logs */}
                  {CallList.map((call) => (
                    <CallLogElement call={call} key={call.id} />
                  ))}
                </Stack>
              </SimpleBarStyle>
            </Stack>
          </Stack>
        </Box>

        {/* Right */}
        {/* TODO */}

        {/* Call Dialog */}
        {openDialog && <StartCall open={openDialog} handleClose={handleCloseDialog} />}
      </Stack>
    </>
  );
};

export default Call;
