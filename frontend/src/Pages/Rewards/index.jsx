import { Box, Button, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import StarRateIcon from "@mui/icons-material/StarRate";

export default function Rewards() {
  const [data, setData] = useState();
  const [id, setId] = useState(1);
  useEffect(() => {
    fetch(process.env.REACT_APP_BASE_API + `rewards/${id}?populate=*`)
      .then((res) => res.json())
      .then((data) => setData(data.data))
      .catch((err) => console.log(err));
  }, [id]);
  const dataArray = [];
  dataArray.push(data);

  const items = dataArray?.map((e, index) => (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      backgroundColor="#d4e9e2"
      sx={{
        flexDirection: { xs: "column", md: "row" },
        height: { xs: "350px", md: "290px" },
        pb: { xs: "30px", md: "0" },
      }}
      key={index}
    >
      <Box>
        <img
          key={index}
          src={
            process.env.REACT_APP_BASE_URL +
            e?.attributes.image.data.attributes?.url
          }
          style={{ width: "400px" }}
          alt=""
        />
      </Box>
      <Box
        display="flex"
        flexDirection="column"
        sx={{ textAlign: { xs: "center", md: "left" } }}
        width="400px"
        gap={3}
      >
        <Typography variant="p" key={index} fontWeight="bold" fontSize="25px">
          {e?.attributes.title}
        </Typography>
        <Typography variant="p" key={index}>
          {e?.attributes.descriptions}
        </Typography>
      </Box>
    </Box>
  ));
  return (
    <>
      <Box sx={{ backgroundColor: "#273832", py: "15px" }} width="100%">
        <Typography
          variant="p"
          sx={{ color: "white", paddingLeft: "150px", fontWeight: "bold" }}
        >
          STARBUCKS® REWARDS
        </Typography>
      </Box>
      <Box
        display="flex"
        flexDirection="row"
        sx={{
          backgroundColor: "#d9e8e2",
          backgroundImage: "url(./assets/xl-hero-desktop_2021.webp)",
          backgroundPosition: "50% center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "150%",
        }}
      >
        <Box
          display="flex"
          flexDirection="column"
          justifyContent="center"
          px={5}
          gap={3}
          height={600}
        >
          <Typography variant="h4" fontWeight="bold">
            FREE COFFEE
            <br /> IS A TAP AWAY
          </Typography>
          <Typography variant="p">
            Join now to start earning Rewards.
          </Typography>
          <Button
            href="/join"
            variant="contained"
            sx={{
              backgroundColor: "#326240",
              borderRadius: "50px",
              width: "50%",
            }}
          >
            Join now
          </Button>
        </Box>
      </Box>
      <Box py={15}>
        <Box
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
          gap={4}
        >
          <Typography variant="p" fontWeight="bold" fontSize={25}>
            Getting started is easy
          </Typography>
          <Typography variant="p">
            Earn Stars and get rewarded in a few easy steps.
          </Typography>
        </Box>
        <Box
          display="flex"
          sx={{ flexDirection: { xs: "column", md: "row" } }}
          justifyContent="center"
          gap={8}
          m={8}
        >
          <Box
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            gap={3}
          >
            <Typography
              variant="p"
              display="flex"
              justifyContent="center"
              alignItems="center"
              color="#2f5c42"
              fontSize={35}
              border="2px solid #2f5c42"
              borderRadius="50%"
              width="48px"
              height="48px"
            >
              1
            </Typography>
            <Typography
              variant="p"
              sx={{ fontSize: "18px", fontWeight: "bold" }}
            >
              Create an account
            </Typography>
            <Typography variant="p" textAlign="center">
              To get started, join now. You can also join in the app to get
              access to the full range of Starbucks® Rewards benefits.
            </Typography>
          </Box>
          <Box
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            gap={3}
          >
            <Typography
              variant="p"
              display="flex"
              justifyContent="center"
              alignItems="center"
              color="#2f5c42"
              fontSize={35}
              border="2px solid #2f5c42"
              borderRadius="50%"
              width="48px"
              height="48px"
            >
              2
            </Typography>
            <Typography
              variant="p"
              sx={{ fontSize: "18px", fontWeight: "bold" }}
            >
              Order and pay how you’d like
            </Typography>
            <Typography variant="p" textAlign="center">
              To get started, join now. You can also join in the app to get
              access to the full range of Starbucks® Rewards benefits.
            </Typography>
          </Box>
          <Box
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            gap={3}
          >
            <Typography
              variant="p"
              display="flex"
              justifyContent="center"
              alignItems="center"
              color="#2f5c42"
              fontSize={35}
              border="2px solid #2f5c42"
              borderRadius="50%"
              width="48px"
              height="48px"
            >
              3
            </Typography>
            <Typography
              variant="p"
              sx={{ fontSize: "18px", fontWeight: "bold" }}
            >
              Earn Stars, get Rewards
            </Typography>
            <Typography variant="p" textAlign="center">
              To get started, join now. You can also join in the app to get
              access to the full range of Starbucks® Rewards benefits.
            </Typography>
          </Box>
        </Box>
      </Box>
      <Box textAlign="center" backgroundColor="#f3f7f6" pt={8}>
        <Box>
          <Typography variant="p" fontWeight="bold" fontSize="25px">
            Get your favorites for free
          </Typography>
        </Box>
        <Box display="flex" gap={5} justifyContent="center" pt={5}>
          <Button
            onClick={() => {
              setId(1);
            }}
            sx={{
              fontSize: "25px",
              fontWeight: "bold",
              color: "black",
            }}
          >
            25
            <StarRateIcon sx={{ color: "#c0a364", fontSize: "16px" }} />
          </Button>
          <Button
            onClick={() => {
              setId(2);
            }}
            sx={{
              fontSize: "25px",
              fontWeight: "bold",
              color: "black",
            }}
          >
            100
            <StarRateIcon sx={{ color: "#c0a364", fontSize: "16px" }} />
          </Button>
          <Button
            onClick={() => {
              setId(3);
            }}
            sx={{
              fontSize: "25px",
              fontWeight: "bold",
              color: "black",
            }}
          >
            200
            <StarRateIcon sx={{ color: "#c0a364", fontSize: "16px" }} />
          </Button>
          <Button
            onClick={() => {
              setId(4);
            }}
            sx={{
              fontSize: "25px",
              fontWeight: "bold",
              color: "black",
            }}
          >
            300
            <StarRateIcon sx={{ color: "#c0a364", fontSize: "16px" }} />
          </Button>
          <Button
            onClick={() => {
              setId(5);
            }}
            sx={{
              fontSize: "25px",
              fontWeight: "bold",
              color: "black",
            }}
          >
            400
            <StarRateIcon sx={{ color: "#c0a364", fontSize: "16px" }} />
          </Button>
        </Box>
      </Box>
      <Box>{data ? items : "NO DATA"}</Box>
      <Box
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        py={10}
      >
        <Box
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          gap={4}
        >
          <Typography variant="p" fontSize="25px" fontWeight="bold">
            Endless Extras
          </Typography>
          <Typography textAlign="center" variant="p" fontSize="17px">
            Joining Starbucks® Rewards means unlocking access to exclusive
            benefits. Say
            <br /> hello to easy ordering, tasty Rewards and—yes, free coffee.
          </Typography>
        </Box>
        <Box
          display="flex"
          sx={{ flexDirection: { xs: "column", md: "row" } }}
          justifyContent="center"
          gap={8}
          m={8}
        >
          <Box
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            gap={3}
          >
            <img style={{ width: "112px" }} src="./assets/1.jpg" alt="" />
            <Typography
              variant="p"
              sx={{ fontSize: "18px", fontWeight: "bold" }}
            >
              Fun freebies
            </Typography>
            <Typography variant="p" textAlign="center">
              Not only can you earn free coffee, look forward to a birthday
              treat plus coffee and tea refills.
            </Typography>
          </Box>
          <Box
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            gap={3}
          >
            <img style={{ width: "112px" }} src="./assets/2.jpg" alt="" />
            <Typography
              variant="p"
              sx={{ fontSize: "18px", fontWeight: "bold" }}
            >
              Order & pay ahead
            </Typography>
            <Typography variant="p" textAlign="center">
              Enjoy the convenience of in-store, curbside or drive-thru pickup
              at select stores.
            </Typography>
          </Box>
          <Box
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            gap={3}
          >
            <img style={{ width: "112px" }} src="./assets/3.jpg" alt="" />
            <Typography
              variant="p"
              sx={{ fontSize: "18px", fontWeight: "bold" }}
            >
              Get to free faster
            </Typography>
            <Typography variant="p" textAlign="center">
              Earn Stars even quicker with Bonus Star challenges, Double Star
              Days and exciting games.
            </Typography>
          </Box>
        </Box>
      </Box>
      <Box bgcolor="#f2f0eb" pt={10}>
        <Box
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          gap={4}
        >
          <Typography variant="p" fontSize="25px" fontWeight="bold">
            Cash or card, you earn Stars
          </Typography>
          <Typography textAlign="center" variant="p" fontSize="17px">
            No matter how you pay, you can earn Stars with your morning coffee.
            Those
            <br /> Stars add up to (really delicious) Rewards.
          </Typography>
        </Box>
        <Box display="flex" flexDirection="column" px={10} pt={10}>
          <Box
            display="flex"
            sx={{ flexDirection: { xs: "column", md: "row" } }}
            gap={5}
            borderBottom="1px solid lightgray"
          >
            <Box display="flex" flexDirection="column" flexGrow="1">
              <Typography variant="p" fontSize="20px" fontWeight="bold">
                1★Star per dollar
              </Typography>
              <Typography variant="p">Pay as you go</Typography>
            </Box>
            <Box
              display="flex"
              flexDirection="row"
              sx={{ flexDirection: { xs: "column", md: "row" } }}
              flexGrow="2"
              gap={3}
            >
              <Box display="flex" flexDirection="row" gap={3}>
                <Box>
                  <img width="112px" src="./assets/1A.png" alt="" />
                </Box>
                <Box display="flex" flexDirection="column" gap={4} width={250}>
                  <Typography variant="p" fontWeight="bold" fontSize="18px">
                    Scan and pay separately
                  </Typography>
                  <Typography variant="p">
                    Use cash or credit/debit card at the register.
                  </Typography>
                </Box>
              </Box>
              <Box display="flex" flexDirection="row" gap={3}>
                <Box>
                  <img width="112px" src="./assets/1B.png" alt="" />
                </Box>
                <Box display="flex" flexDirection="column" gap={4} width={250}>
                  <Typography variant="p" fontWeight="bold" fontSize="18px">
                    Save payment in the app
                  </Typography>
                  <Typography variant="p">
                    Check-out faster by saving a credit/debit card or PayPal to
                    your account. You’ll be able to order ahead or scan and pay
                    at the register in one step.
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Box>
          <Box
            display="flex"
            sx={{ flexDirection: { xs: "column", md: "row" } }}
            gap={5}
            flexDirection="row"
            pt={10}
            pb={5}
          >
            <Box display="flex" flexDirection="column" flexGrow="1">
              <Typography variant="p" fontSize="20px" fontWeight="bold">
                2★Star per dollar
              </Typography>
              <Typography variant="p">Add funds in the app</Typography>
            </Box>
            <Box
              display="flex"
              flexDirection="row"
              sx={{ flexDirection: { xs: "column", md: "row" } }}
              flexGrow="2"
              gap={3}
            >
              <Box display="flex" flexDirection="row" gap={3}>
                <Box>
                  <img width="112px" src="./assets/2A.png" alt="" />
                </Box>
                <Box display="flex" flexDirection="column" gap={4} width={250}>
                  <Typography variant="p" fontWeight="bold" fontSize="18px">
                    Preload
                  </Typography>
                  <Typography variant="p">
                    To save time and earn Stars twice as fast, add money to your
                    digital Starbucks Card using any payment option. Scan and
                    pay in one step or order ahead in the app.
                  </Typography>
                </Box>
              </Box>
              <Box display="flex" flexDirection="row" gap={3}>
                <Box>
                  <img width="112px" src="./assets/2B.png" alt="" />
                </Box>
                <Box display="flex" flexDirection="column" gap={4} width={250}>
                  <Typography variant="p" fontWeight="bold" fontSize="18px">
                    Register your gift card
                  </Typography>
                  <Typography variant="p">
                    Then use it to pay through the app. You can even consolidate
                    balances from multiple cards in one place.
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
      <Box
        sx={{
          backgroundImage: {
            xs: "none",
            md: "url(./assets/844262945b2a8b8cfb293156e2583872.png)",
          },
          backgroundPosition: "cover",
          backgroundRepeat: "no-repeat",
          padding: { xs: "0", md: "30px" },
        }}
      >
        <Box
          bgcolor="#d9e8e2"
          display="flex"
          flexDirection="row"
          padding={{ xs: "50px", md: "0" }}
        >
          <Box
            display={{ xs: "none", md: "flex" }}
            alignItems="center"
            justifyContent="center"
            mx={10}
          >
            <img
              width="224px"
              src="./assets/7997fb008f368630d3ca3c1194fd8404.svg"
              alt=""
            />
          </Box>
          <Box
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            gap={3}
            py={5}
          >
            <Typography
              variant="p"
              color="initial"
              fontWeight="bold"
              fontSize="25px"
            >
              Keep the Rewards Coming
            </Typography>
            <Typography variant="p" color="initial" textAlign="center">
              The Rewards don't stop at your morning coffee. Join Starbucks®
              Rewards and unlock perks from our partners, all while earning more
              Stars.
            </Typography>
            <img width="195px" src="./assets/delta-skymiles.png" alt="" />
            <Typography variant="p" color="initial" textAlign="center">
              Link your Delta SkyMiles® and Starbucks® Rewards accounts to earn
              1 mile per $1* spent at Starbucks and double Stars on Delta travel
              days.
            </Typography>
            <Button
              href="/join"
              variant="contained"
              sx={{ backgroundColor: "#00754A", borderRadius: "50px" }}
            >
              Join StarBucks Rewards
            </Button>
          </Box>
          <Box
            display={{ xs: "none", md: "flex" }}
            alignItems="center"
            justifyContent="center"
            mx={10}
          >
            <img
              width="224px"
              src="./assets/b7e1b20df72e802cb1cf0e97e8fe21d0.svg"
              alt=""
            />
          </Box>
        </Box>
      </Box>
      <Box
        display="flex"
        flexDirection="column"
        gap={4}
        padding={{ md: "100px 96px", xs: "30px" }}
      >
        <Typography variant="p" fontWeight="bold" fontSize="30px">
          Questions?
        </Typography>
        <Typography variant="p" fontSize="18px" lineHeight={2}>
          We want to help in any way we can. You can ask your barista anytime or
          we’ve
          <br /> answered the most commonly asked questions right over here.
        </Typography>
      </Box>
      <Box p={5} bgcolor="#f9f9f9">
        <Box display="flex" flexDirection="column" gap={1} fontSize="13px">
          <Typography variant="p">
            At participating stores. Restrictions apply.
          </Typography>
          <Typography variant="p" lineHeight={2}>
            <sup>1</sup>Excludes taxes and gratuities. At participating stores.
            Some restrictions apply. Flights purchased close to departure may
            not earn double Stars. Stars and miles may not be earned on
            purchases of alcohol, Starbucks Cards and Starbucks Card reloads.
            For details, visit{" "}
            <a
              target="blank"
              style={{ color: "green" }}
              href="https://www.deltastarbucks.com/content/starbucks/en/terms-and-conditions.html"
            >
              deltastarbucks.com/terms
            </a>
          </Typography>
          <Typography variant="p" lineHeight={2}>
            <sup>2</sup>At participating stores only. Some restrictions apply.
            Linked Card members will earn 2% Cash Back on the full purchase
            price of every Qualifying Purchase. Extra Star offer excludes taxes
            and tips. Stars may not be earned on purchases of alcohol or on
            reloads of Starbucks Cards that are not registered. For details,
            visit Terms and Conditions. Bank of America, N.A. Member FDIC.
          </Typography>
        </Box>
        <Box
          my={3}
          display="grid"
          gridTemplateColumns={{ xs: "repeat(1, 1fr)", md: "repeat(2, 1fr)" }}
          gap={4}
          fontSize="14px"
        >
          <Box display="flex" flexDirection="column" gap={3}>
            <Typography
              variant="h3"
              fontWeight="bold"
              fontSize="15px"
              color="#00000094"
            >
              EARNING STARS
            </Typography>
            <Typography variant="p">
              Stars cannot be earned on purchases of alcohol, Starbucks Cards or
              Starbucks Card reloads.
            </Typography>
            <Typography variant="p">
              Earn 1 Star per $1 spent when you scan your member barcode in the
              app, then pay with cash, credit/debit cards or mobile wallets at
              participating stores. You can also earn 1 Star per $1 spent when
              you link a payment method and pay directly through the app.
            </Typography>
            <Typography variant="p">
              Earn 2 Stars per $1 spent when you load funds and pay with your
              digital Starbucks Card in the app. You can also earn 2 Stars per
              $1 spent when you pay in-person at a participating store with your
              registered physical Starbucks Card or scan your member barcode in
              the app, and then use any physical Starbucks Card (regardless of
              whether it is registered) to complete the purchase.
            </Typography>
          </Box>
          <Box display="flex" flexDirection="column" gap={3}>
            <Typography
              variant="h3"
              fontWeight="bold"
              fontSize="15px"
              color="#00000094"
            >
              TERMS OF USE
            </Typography>
            <Typography variant="p">
              For full program details visit
              <a
                target="blank"
                style={{ color: "green" }}
                href="starbucks.com/rewards/terms"
              >
                starbucks.com/rewards/terms
              </a>
            </Typography>
            <Typography variant="p">
              Starbucks® Rewards benefits are available at participating
              Starbucks stores. Not all stores have the ability to honor Rewards
              at this time. Visit the{" "}
              <a
                style={{ color: "green" }}
                href="https://www.starbucks.com/store-locator"
              >
                Starbucks Store Locator
              </a>{" "}
              and search for locations honoring “Redeem Rewards”.
            </Typography>
          </Box>
          <Box display="flex" flexDirection="column" gap={3}>
            <Typography
              variant="h3"
              fontWeight="bold"
              fontSize="15px"
              color="#00000094"
            >
              BENEFITS
            </Typography>
            <Typography variant="p">
              Free refills available during same in-store visit only. To qualify
              for the Birthday Reward, you must have made at least one
              Star-earning transaction.
            </Typography>
          </Box>
          <Box display="flex" flexDirection="column" gap={3}>
            <Typography
              variant="h3"
              fontWeight="bold"
              fontSize="15px"
              color="#00000094"
            >
              REDEEMING REWARDS
            </Typography>
            <Typography variant="p">
              Rewards cannot be redeemed for alcoholic beverages or multi-serve
              items. You pay the difference for any beverage customization over
              $1 and/or merchandise item over $20. Not all stores honor tiered
              Rewards. Select stores redeem 200 Stars for free food or drink
              items only.
            </Typography>
          </Box>
        </Box>
      </Box>
    </>
  );
}
