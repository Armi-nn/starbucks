import { Box, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";

export default function MenuItems() {
  const [categories, setCategories] = useState();

  useEffect(() => {
    fetch(process.env.REACT_APP_BASE_API + "categories?populate=*")
      .then((res) => res.json())
      .then((data) => setCategories(data.data));
  }, []);

  const categoriesItems = categories?.map((e, index) => (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: "15px",
        alignItems: "flex-start",
        padding: "15px",
      }}
    >
      <Typography
        key={index}
        component="p"
        variant="h4"
        sx={{ borderBottom: 1 }}
      >
        {e?.attributes.title}
      </Typography>
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: {
            md: "repeat(2, 1fr)",
            xs: "repeat(1, 1fr)",
          },
          justifyContent: "center",
          alignItems: "center",
          gridColumnGap: "100px",
          gridRowGap: "25px",
          paddingY: "20px",
        }}
      >
        {e?.attributes.subcategories.data.map((x, index) => {
          return (
            <Box
              sx={{
                display: "grid",
                gridTemplateColumns: {
                  md: "repeat(2, 1fr)",
                  xs: "repeat(1, 1fr)",
                },
                justifyContent: "center",
                alignItems: "center",
                gap: "25px",
                textDecoration: "none",
                color: "black",
              }}
              component="a"
              href={`/products/${x?.id}`}
            >
              <img
                key={index}
                src={
                  process.env.REACT_APP_BASE_URL +
                  e?.attributes.subcategoryImages.data[index].attributes.url
                }
                alt=""
                style={{ width: "100px", borderRadius: "50%" }}
              />
              <Typography key={index} component="p">
                {x?.attributes.title}
              </Typography>
            </Box>
          );
        })}
      </Box>
    </Box>
  ));
  return (
    <>
      <Box
        sx={{
          width: "750px",
          margin: "auto",
        }}
      >
        {categories ? (
          categoriesItems
        ) : (
          <Box
            style={{
              height: "80vh",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <img src="./Starbucks-Logo.png" className="loader" />
          </Box>
        )}
      </Box>
    </>
  );
}
