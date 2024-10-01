import * as React from "react";
import useFormFields from "../../utils/useFormFields";
import axios from "axios";
import { Box, Button, Paper, TextField, Typography } from "@mui/material";

export default function JoinNow() {
  const [fields, handleChange] = useFormFields();
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('hi')
    axios
      .post(process.env.REACT_APP_BASE_API + "auth/local/register", fields)
      .then((res) => {
        alert("register successfully");
      })
      .catch(err=>alert('something wrong'));
  };
  return (
    <>
      <Typography
        sx={{
          textAlign: "center",
          fontSize: "35px",
          fontWeight: "bold",
          marginY: "20px",
        }}
        component="h1"
      >
        Create an account
      </Typography>
      <Paper
        elevation={2}
        sx={{
          padding: { xs: "20px 0", md: "50px 0" },
          margin: { xs: "40px 0", md: "40px auto" },
          width: { xs: "100%", md: "60%" },
        }}
      >
        <Box
          component="form"
          onSubmit={handleSubmit}
          sx={{
            margin: "auto",
            width: { xs: "90%", md: "50%" },
            display: "flex",
            flexDirection: "column",
            gap: "25px",
          }}
        >
          <Typography
            sx={{ fontWeight: "bold", fontSize: "h6.fontSize" }}
            component="p"
          >
            Personal Information
          </Typography>
          <TextField
            label="Full name"
            id="fullname"
            name="fullname"
            required
          />
          <TextField
            label="User name"
            id="username"
            name="username"
            autoComplete="email"
            required
            onChange={handleChange}
          />
          <Typography
            sx={{ fontWeight: "bold", fontSize: "h6.fontSize" }}
            component="p"
          >
            Account Security
          </Typography>
          <TextField
            label="Email address"
            id="email"
            name="email"
            autoComplete="email"
            helperText="This will be your username"
            required
            onChange={handleChange}
          />
          <TextField
            label="Password"
            type="password"
            id="password"
            name="password"
            autoComplete="password"
            helperText="Create a password 8 to 25 characters long that includes at least 1 uppercase and 1 lowercase letter, 1 number and 1 special character like an exclamation point or asterisk."
            required
            onChange={handleChange}
          />
          <Button
            sx={{ width: "200px", borderRadius: "20px" }}
            variant="contained"
            color="success"
            type="submit"
          >
            Create account
          </Button>
        </Box>
      </Paper>
      <Box sx={{ textAlign: "center" }}>
        <Button
          variant="outlined"
          sx={{ margin: "20px auto", borderRadius: "25px" }}
          color="success"
          href="/login"
        >
          Sign in
        </Button>
      </Box>
    </>
  );
}
