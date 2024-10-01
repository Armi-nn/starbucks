import { Box, Button, ButtonGroup, Typography } from "@mui/material";
import React from "react";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import PinterestIcon from "@mui/icons-material/Pinterest";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import TwitterIcon from "@mui/icons-material/Twitter";

export default function Footer() {
  return (
    <>
      <Box sx={{ backgroundColor: "#e5e5e5", height: "2px" }}></Box>
      <Box sx={{ margin: "20px 50px" }}>
        <Box sx={{display:'flex', gap:'15px'}}>
          <FacebookRoundedIcon fontSize="large" />
          <PinterestIcon fontSize="large" />
          <InstagramIcon
            sx={{
              backgroundColor: "black",
              borderRadius: "50%",
              color: "white",
              padding: "4px",
            }}
          />
          <YouTubeIcon
            sx={{
              color: "white",
              backgroundColor: "black",
              borderRadius: "50%",
              padding: "4px",
              marginX: "5px",
            }}
          />
          <TwitterIcon
            sx={{
              color: "white",
              backgroundColor: "black",
              borderRadius: "50%",
              padding: "4px",
            }}
          />
        </Box>
        <ButtonGroup
          variant="text"
          color="inherit"
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            alignItems: "start",
            marginY:"20px",
          }}
        >
          <Button>Privacy Notice</Button>
          <Button>Term of use</Button>
          <Button>do not share my personal information</Button>
          <Button>ca supply chain act</Button>
          <Button>accessibility</Button>
          <Button>cookie preferences</Button>
        </ButtonGroup>
        <Typography component="p" color="GrayText">
          © 2023 Starbucks Coffee Company. All rights reserved.
        </Typography>
      </Box>
    </>
  );
}
