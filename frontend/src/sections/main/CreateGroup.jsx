import React, { forwardRef } from "react";
import { Button, Slide, Stack } from "@mui/material";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import Search from "../../components/Search/Search";

import * as Yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import FormProvider from "../../components/hook-form/FormProvider";
import { RHFTextField } from "../../components/hook-form";
import RHFAutocomplete from "../../components/hook-form/RHFAutocomplete";

const Transition = forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const MEMBERS = [
  "Toy Story 3",
  "Logan",
  "Full Metal Jacket",
  "Dangal",
  "The Sting",
  "2001: A Space Odyssey",
  "Singin' in the Rain",
  "Toy Story",
  "Bicycle Thieves",
  "The Kid",
  "Inglourious Basterds",
  "Snatch",
  "3 Idiots",
];

const CreateGroupForm = ({ handleClose }) => {
  const newGroupSchema = Yup.object().shape({
    title: Yup.string().required("Title is required"),
    members: Yup.array().min(2, "Must have atleast 2 members"),
  });

  const defaultValues = { title: "", members: [] };

  const methods = useForm({
    resolver: yupResolver(newGroupSchema),
    defaultValues,
  });

  const {
    reset,
    watch,
    setError,
    handleSubmit,
    formState: { errors, isSubmitSuccessful, isSubmitting, isValid },
  } = methods;

  const onSubmit = async (data) => {
    try {
      console.log(data);
      // submit data to backend
    } catch (error) {
      console.log(error);
      // reset();
      // setError("afterSubmit", {
      //   ...error,
      //   message: error.message,
      // });
    }
  };

  return (
    <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
      <Stack spacing={3}>
        <RHFTextField name="title" label="Group Name" />
        <RHFAutocomplete
          name="members"
          label="Members"
          multiple
          freeSolo
          options={MEMBERS.map((option) => option)}
          ChipProps={{ size: "medium" }}
        />

        <Stack spacing={2} direction={"row"} alignItems={"center"} justifyContent={"flex-end"}>
          <Button type={"reset"} onClick={handleClose}>
            Cancel
          </Button>
          <Button type={"submit"} variant="contained">
            Create
          </Button>
        </Stack>
      </Stack>
    </FormProvider>
  );
};

const CreateGroup = ({ open, handleClose }) => {
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
          Create New Group
        </DialogTitle>

        <DialogContent>
          <CreateGroupForm handleClose={handleClose} />
        </DialogContent>
      </Dialog>
    </>
  );
};

export default CreateGroup;
