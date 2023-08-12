import { Box, Stack, Badge, Avatar, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { faker } from "@faker-js/faker";
import StyledBadge from "./StyledBadge";
import PropTypes from "prop-types";

const ChatElement = ({ chat }) => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        width: "100%",
        borderRadius: 1,
        backgroundColor: theme.palette.mode === "light" ? "#fff" : theme.palette.background.default,
        cursor: "pointer",
      }}
      p={2}
    >
      <Stack direction={"row"} spacing={2} alignItems={"center"} justifyContent={"space-between"}>
        <Stack direction={"row"} spacing={2}>
          {chat.online ? (
            <StyledBadge
              overlap="circular"
              anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
              variant="dot"
            >
              <Avatar src={faker.image.avatar()} />
            </StyledBadge>
          ) : (
            <Avatar src={faker.image.avatar()} />
          )}
          <Stack spacing={0.3}>
            <Typography variant="subtitle2">{chat.name}</Typography>
            <Typography variant="caption">{chat.msg}</Typography>
          </Stack>
        </Stack>

        <Stack spacing={2} alignItems={"center"}>
          <Typography variant="caption" sx={{ fontWeight: 600 }}>
            {chat.time}
          </Typography>
          <Badge color="primary" badgeContent={chat.unread} />
        </Stack>
      </Stack>
    </Box>
  );
};

ChatElement.propTypes = {
  chat: PropTypes.object,
};

export default ChatElement;
