import { Box, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import SidebarCategories from "../SidebarCategories";

export default function ProductMenu() {
  const { id } = useParams();
  const [subcategories, setSubcategories] = useState();
  useEffect(() => {
    fetch(process.env.REACT_APP_BASE_API + `subcategories/${id}?populate=*`)
      .then((res) => res.json())
      .then((data) => setSubcategories(data.data))
      .catch((err) => console.log(err));
  }, []);
  const subcategoriesArray = []
  subcategoriesArray.push(subcategories)
  const subcategoriesItems = subcategoriesArray?.map((e, index) => (
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
        {e?.attributes.products.data?.map((x, index) => {
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
              href={`/product-details/${x?.id}`}
            >
              <img
                src={
                  process.env.REACT_APP_BASE_URL +
                  e?.attributes.productMenuImage.data[index]?.attributes.url
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
    <Box sx={{display:'flex', flexDirection:'row',}}>
      <SidebarCategories />
      <Box
        sx={{
          width: "750px",
          marginX: "auto",
        }}
      >
        {subcategories ? (
          subcategoriesItems
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
    </Box>
  );
}
