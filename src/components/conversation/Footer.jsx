import React from "react";
import { Box, Stack, InputAdornment, TextField } from "@mui/material";
import { IconButton } from "@mui/material";
import { useTheme } from "@mui/material";
import { styled } from "@mui/material/styles";
import { LinkSimple, PaperPlaneTilt, Smiley } from "phosphor-react";

const StyledInput = styled(TextField)(({ theme }) => ({
  "& .MuiInputBase-input": {
    paddingTop: "12px",
    paddingBottom: "12px",
  },
}));

const Footer = () => {
  const theme = useTheme();

  return (
    <Box
      p={2}
      sx={{
        width: "100%",
        // backgroundColor: "#f8faff",
        backgroundColor:
          theme.palette.mode === "light" ? "#f8faff" : theme.palette.background.paper,
        boxShadow: "0 0 2px rgba(0, 0, 0, 0.25)",
      }}
    >
      <Stack direction="row" alignItems="center" justifyContent="space-between" spacing={3}>
        <StyledInput
          fullWidth
          placeholder="Write a message..."
          variant="filled"
          InputProps={{
            disableUnderline: true,
            startAdornment: (
              <InputAdornment position="end">
                <IconButton>
                  <LinkSimple />
                </IconButton>
              </InputAdornment>
            ),
            endAdornment: (
              <InputAdornment position="end">
                <IconButton>
                  <Smiley />
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
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
