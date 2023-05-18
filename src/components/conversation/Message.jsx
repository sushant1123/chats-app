import { Box, Stack } from "@mui/material";
import React from "react";
import { Chat_History } from "../../data/data";
import {
  DocumentMessage,
  LinkMessage,
  MediaMessage,
  ReplyMessage,
  TextMessage,
  TimeLine,
} from "./MessageTypes";

const Message = () => {
  return (
    <Box p={3}>
      <Stack spacing={3}>
        {Chat_History.map((chat, idx) => {
          switch (chat.type) {
            // Timeline
            case "divider":
              return <TimeLine chat={chat} key={idx} />;

            case "msg":
              switch (chat.subtype) {
                case "img":
                  return <MediaMessage chat={chat} key={idx} />;

                case "doc":
                  return <DocumentMessage chat={chat} key={idx} />;
                  break;

                case "link":
                  return <LinkMessage chat={chat} key={idx} />;
                  break;

                case "reply":
                  return <ReplyMessage chat={chat} key={idx} />;
                  break;

                default:
                  // Text Msg
                  return <TextMessage chat={chat} key={idx} />;
              }
              break;

            default:
              break;
          }
        })}
      </Stack>
    </Box>
  );
};

export default Message;
