import React from "react";
import * as Yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import FormProvider, { RHFTextField } from "../../components/hook-form";
import { LoadingButton } from "@mui/lab";

const ResetPasswordForm = () => {
  // const { isLoading } = useSelector((state) => state.auth);
  // const dispatch = useDispatch();

  const ResetPasswordSchema = Yup.object().shape({
    email: Yup.string().required("Email is required").email("Email must be a valid email address"),
  });

  const methods = useForm({
    resolver: yupResolver(ResetPasswordSchema),
    defaultValues: { email: "demo@chatsapp.com" },
  });

  const { handleSubmit } = methods;

  const onSubmit = async (data) => {
    try {
      //   Send API Request
      console.log(data);
      // dispatch(ForgotPassword(data));
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
      <RHFTextField name="email" label="Email address" />

      <LoadingButton
        // loading={isLoading}
        fullWidth
        size="large"
        type="submit"
        variant="contained"
        sx={{
          mt: 3,
          bgcolor: "text.primary",
          color: (theme) => (theme.palette.mode === "light" ? "common.white" : "grey.800"),
          "&:hover": {
            bgcolor: "text.primary",
            color: (theme) => (theme.palette.mode === "light" ? "common.white" : "grey.800"),
          },
        }}
      >
        Send Request
      </LoadingButton>
    </FormProvider>
  );
};

export default ResetPasswordForm;
