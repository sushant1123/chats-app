import React from "react";
import { Box, Grid, IconButton, Stack, Typography, useTheme } from "@mui/material";
import { Tab, Tabs } from "@mui/material";
import { ArrowLeft } from "phosphor-react";
import { useDispatch } from "react-redux";
import { UpdateSideBarType } from "../redux/slices/app";
import { faker } from "@faker-js/faker";
import { Shared_links, Shared_docs } from "../data/data";
import { DocumentMessage, LinkMessage } from "./conversation/MessageTypes";

const SharedMessages = () => {
  const theme = useTheme();
  const dispatch = useDispatch();

  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

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
            <Typography variant="subtitle2">Shared Messages</Typography>
          </Stack>
        </Box>

        <Box sx={{ width: "100%", bgcolor: "background.paper" }}>
          <Tabs sx={{ px: 1, pt: 2 }} value={value} onChange={handleChange} centered>
            <Tab label="Media" />
            <Tab label="Links" />
            <Tab label="Docs" />
          </Tabs>
        </Box>

        {/* Body */}
        <Stack
          p={value === 1 ? 1 : 3}
          spacing={value === 1 ? 1 : 3}
          sx={{ height: "100%", position: "relative", flexGrow: 1, overflowY: "scroll" }}
        >
          {(() => {
            switch (value) {
              case 0:
                // Images
                return (
                  <Grid container spacing={2}>
                    {[1, 2, 3, 4, 5, 6, 7].map((el, idx) => (
                      <Grid item xs={4} key={idx}>
                        <img src={faker.image.avatar()} alt={faker.name.firstName()} />
                      </Grid>
                    ))}
                  </Grid>
                );

              case 1:
                // Links
                return Shared_links.map((el, idx) => <LinkMessage chat={el} key={idx} />);

              case 2:
                // Docs
                return Shared_docs.map((el, idx) => <DocumentMessage chat={el} key={idx} />);

              default:
                break;
            }
          })()}
        </Stack>
      </Stack>
    </Box>
  );
};

export default SharedMessages;
