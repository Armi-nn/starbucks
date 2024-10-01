import React, { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { Box, Button, Typography } from "@mui/material";
import { addItems } from "../../store/Slices/CartSlice";

export default function ProductDetails() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const [product, setProduct] = useState();
  useEffect(() => {
    fetch(process.env.REACT_APP_BASE_API + `products/${id}?populate=*`)
      .then((res) => res.json())
      .then((data) => setProduct(data.data));
  }, []);
  const productArray = [];
  productArray.push(product);
  const productItems = productArray?.map((e, index) => (
    <>
      <Box
        sx={{
          backgroundColor: "#273833",
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          padding: "50px",
          justifyContent: "center",
          alignItems: "center",
          gap: "50px",
        }}
        key={index}
      >
        <Box sx={{ width: "300px" }}>
          <img
            src={
              process.env.REACT_APP_BASE_URL +
              e?.attributes?.productImage?.data?.attributes?.url
            }
            style={{ width: "100%", borderRadius: "50%" }}
          />
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: { xs: "center", md: "start" },
            justifyContent: "center"
          }}
        >
          <Typography
            component="h2"
            color={"white"}
            fontSize="40px"
            fontWeight="bold"
          >
            {e?.attributes?.title}
          </Typography>
          <Typography component="p" color={"white"} fontSize="25px">
            {e?.attributes?.calories}
          </Typography>
        </Box>
      </Box>
      <Box sx={{margin:'50px', textAlign:'center'}}>
        <Button
          variant="contained"
          color="success"
          size="large"
          sx={{ borderRadius: "20px" }}
          onClick={() => dispatch(addItems(product))}
        >
          Add to Order
        </Button>
      </Box>
    </>
  ));
  return (
    <>
      <Box>
        {product ? (
          productItems
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
