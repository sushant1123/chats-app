import { Button, Slide, Stack } from "@mui/material";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import { forwardRef } from "react";
import Search from "../../components/Search/Search";
import { MembersList } from "../../data/data";
import { CallElement } from "../../components/CallLogElement";

const Transition = forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const StartCall = ({ open, handleClose }) => {
  return (
    <>
      <Dialog
        fullWidth
        maxWidth="xs"
        open={true}
        onClose={handleClose}
        TransitionComponent={Transition}
        keepMounted
        sx={{ p: 4 }}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title" sx={{ mb: 3 }}>
          Start a Call
        </DialogTitle>

        <DialogContent>
          <Stack spacing={1.5}>
            <Stack sx={{ width: "100%" }}>
              <Search />
            </Stack>

            {/* Call List */}
            {MembersList.map((member) => (
              <CallElement member={member} key={member.id} />
            ))}
          </Stack>
        </DialogContent>

        <DialogActions>
          <Button onClick={handleClose}>Close</Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default StartCall;
