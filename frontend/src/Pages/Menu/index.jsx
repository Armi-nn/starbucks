import React from "react";
import SidebarCategories from "./SidebarCategories";
import MenuItems from "./MenuItems";
import { Box } from "@mui/material";

export default function Menu() {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          px: "50px",
          gap: "20px",
        }}
      >
        <Box>
          <SidebarCategories />
        </Box>
        <Box sx={{ flexGrow: 1 }}>
          <MenuItems />
        </Box>
      </Box>
    </>
  );
}
