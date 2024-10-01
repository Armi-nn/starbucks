import { Box, Button, Typography } from "@mui/material";
import React from "react";

export default function FindStore() {
  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
    >
      <Typography
        variant="p"
        sx={{
          fontSize: "400px",
          color: "#326240",
          opacity: "0.1",
          fontWeight: "bold",
        }}
        position="relative"
      >
        404
      </Typography>
      <Typography
        variant="p"
        color="initial"
        position="absolute"
        fontSize="40px"
        borderRadius="8px"
        sx={{
          color: "#326240",
          backgroundColor: "#fff",
          padding: "10px",
          boxShadow: 5,
          top:'300px'
        }}
      >
        Page not build
      </Typography>
      <Typography
        variant="h6"
        color="#326240"
        sx={{ opacity: "0.8", py: "20px" }}
      >
        Because I don't have Starbucks locations :-)
      </Typography>
      <Button href="/" variant="contained" sx={{my:"25px", backgroundColor: "#326240" }}>
        Back to Home
      </Button>
    </Box>
  );
}
