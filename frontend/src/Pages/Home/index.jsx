import { Box, Button, Stack, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import "./style.css";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

export default function Home() {
  const [data, setData] = useState();
  useEffect(() => {
    fetch(process.env.REACT_APP_BASE_API + "slides?populate=*")
      .then((res) => res.json())
      .then((data) => setData(data.data))
      .catch((err) => console.log(err));
  }, []);
  const items = data?.map((e, index) => (
    <Stack
      className="slides"
      key={index}
      direction="row"
      sx={{ display: "flex", flexDirection: { xs: "column", md: "row" } }}
    >
      <Stack sx={{ width: { xs: "100%", md: "50%" } }}>
        <img
          style={{ width: "auto" }}
          src={
            process.env.REACT_APP_BASE_URL +
            e?.attributes?.image?.data?.attributes?.url
          }
          alt={e?.attributes.title}
        />
      </Stack>
      <Stack
        spacing={13}
        sx={{ px: "45px" }}
        textAlign="center"
        justifyContent="center"
      >
        <Typography
          variant="h2"
          component="h2"
          style={{ fontFamily: "Roboto", fontWeight: "500" }}
        >
          {e?.attributes.title}
        </Typography>
        <Typography
          variant="p"
          component="p"
          style={{
            fontFamily: "Roboto",
            fontWeight: "400",
            fontSize: "20px",
            lineHeight: "3rem",
          }}
        >
          {e?.attributes.descriptions}
        </Typography>
        <Box sx={{}}>
          <Button
            sx={{ width: "25%", borderRadius: "20px" }}
            variant="outlined"
            color="inherit"
          >
            {e?.attributes.button}
          </Button>
        </Box>
      </Stack>
    </Stack>
  ));
  return (
    <>
      <Stack spacing={4}>
        {data ? (
          items
        ) : (
          <Box
            style={{
              height: "80vh",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <img src="./Starbucks-Logo.png" className="loader" />
          </Box>
        )}
        <Box sx={{textAlign:'center', padding:'40px 0'}}>
          <Typography component="p">
            *At participating stores. Offer applies to drinks prepared by
            baristas, including coffee and tea. Limit one drink per member.
            Cannot be combined with other offers or promotions. This offer is
            exclusive to you and this Starbucks Rewards account and cannot be
            reproduced, transferred or used by anyone else.
          </Typography>
          <Typography component="p" style={{margin:'100px'}}>
            **NO PURCHASE NECESSARY. Participating stores only. Starbucks
            Partners (employees) are not eligible to win prizes. Ends 12/31/23.
            To play and for Official Rules, visit
            https://www.starbucksforlife.com/.
          </Typography>
          <Typography component="p">
            ***Valid through 12/25 at participating stores. Offer good on
            Starbucks Reserve® Christmas 2023; excludes other Starbucks Reserve®
            coffees and nonseasonal packaged coffees, purchases of Starbucks
            Cards and Starbucks Card reloads, and nonseasonal merchandise
            collections. Cannot be combined with other offers or discounts.
            Limited to stock on hand.
          </Typography>
        </Box>
      </Stack>
    </>
  );
}
