import { Avatar, Box, IconButton, Stack, Typography, useTheme } from "@mui/material";
import StyledBadge from "./StyledBadge";
import { ArrowDownLeft, ArrowUpRight, VideoCamera, Phone } from "phosphor-react";

const CallLogElement = ({ call }) => {
  const { img, name, incoming, missed, online, id } = call;

  const theme = useTheme();

  return (
    <>
      <Box
        sx={{
          width: "100%",
          borderRadius: 1,
          backgroundColor:
            theme.palette.mode === "light" ? "#fff" : theme.palette.background.default,
          cursor: "pointer",
        }}
        p={2}
      >
        <Stack direction="row" justifyContent="space-between" alignItems="center">
          <Stack direction="row" spacing={2} justifyContent="space-between" alignItems="center">
            {online ? (
              <StyledBadge
                overlap="circular"
                anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
                variant="dot"
              >
                <Avatar src={img} alt={name} />
              </StyledBadge>
            ) : (
              <Avatar src={img} alt={name} />
            )}

            <Stack spacing={0.3}>
              <Typography variant="subtitle2">{name}</Typography>
              <Stack spacing={1} alignItems="center" direction={"row"}>
                {incoming ? (
                  <ArrowDownLeft color={missed ? "red" : "green"} />
                ) : (
                  <ArrowUpRight color={missed ? "red" : "green"} />
                )}
                <Typography variant="caption">Yesterday 21:24</Typography>
              </Stack>
            </Stack>
          </Stack>

          <Stack direction={"row"} spacing={2} alignItems={"center"}>
            <IconButton>
              <Phone color="#76D45E" size="18px" />
            </IconButton>

            {/* <IconButton>
              <VideoCamera color="#76D45E" size="18px" />
            </IconButton> */}
          </Stack>
        </Stack>
      </Box>
    </>
  );
};

const CallElement = ({ member }) => {
  const { img, name, online } = member;
  const theme = useTheme();

  return (
    <>
      <Box
        sx={{
          width: "100%",
          borderRadius: 1,
          backgroundColor:
            theme.palette.mode === "light" ? "#fff" : theme.palette.background.default,
          cursor: "pointer",
        }}
        p={2}
      >
        <Stack direction="row" justifyContent="space-between" alignItems="center">
          <Stack direction="row" spacing={3} justifyContent="space-between" alignItems="center">
            {online ? (
              <StyledBadge
                overlap="circular"
                anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
                variant="dot"
              >
                <Avatar src={img} alt={name} />
              </StyledBadge>
            ) : (
              <Avatar src={img} alt={name} />
            )}

            <Stack spacing={0.3}>
              <Typography variant="subtitle2">{name}</Typography>
            </Stack>
          </Stack>

          <Stack direction={"row"} spacing={2} alignItems={"center"}>
            <IconButton>
              <Phone color="#76D45E" size="18px" />
            </IconButton>

            <IconButton>
              <VideoCamera color="#76D45E" size="18px" />
            </IconButton>
          </Stack>
        </Stack>
      </Box>
    </>
  );
};

export { CallLogElement, CallElement };
