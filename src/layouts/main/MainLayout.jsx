import React from "react";
import { Container, Stack } from "@mui/material";
import { Outlet } from "react-router-dom";

import Logo from "../../assets/Images/logo.ico";

const MainLayout = () => {
  return (
    <>
      <Container maxWidth="sm" sx={{ mt: 5 }}>
        <Stack spacing={5}>
          <Stack sx={{ width: "100%" }} direction={"column"} alignItems={"center"}>
            <img style={{ height: 120, width: 120 }} src={Logo} alt="logo" />
          </Stack>
        </Stack>
        {/* <div>Main Layout</div> */}

        <Outlet />
      </Container>
    </>
  );
};

export default MainLayout;
