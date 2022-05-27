import React from "react";
import { Box, Button, Typography } from "@mui/material";
import { Container, styled } from "@mui/system";
import HeaderBar from "../header/header";
import MyInputs from "../inputs";

function Login() {
  return (
    <div className="">
      <HeaderBar name="Login" />
      <Container
        maxWidth="xl"
        sx={{
          display: "flex",
          direction: "row",
          alignItems: "center",
          justifyContent: "center",
          mt: 20,
        }}
      >
        <Box
          sx={{
            width: 400,
            color: "#5c7216c7",
            p: 5,
            border: "5px solid yellow",
            display: "flex",
            direction: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <MyInputs holder="Name" />
          <br />
          <MyInputs holder="Password" />

          <Button>Login</Button>
        </Box>
      </Container>
    </div>
  );
}

export default Login;
