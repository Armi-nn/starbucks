import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import FmdGoodIcon from "@mui/icons-material/FmdGood";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import "./style.css";
import { Badge } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../store/Slices/AuthSlice";

const pages = ["Menu", "Rewards", "GiftCards"];

function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const cartLength = useSelector((state) => state.cart.list).length;
  const { token } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  const [logo, setLogo] = React.useState();
  React.useEffect(() => {
    fetch(process.env.REACT_APP_BASE_API + "logos?populate=*")
      .then((res) => res.json())
      .then((logo) => setLogo(logo.data[0]));
  }, []);

  return (
    <AppBar
      position="static"
      style={{
        height: "90px",
        marginBottom: "15px",
        justifyContent: "center",
        backgroundColor: "white",
        color: "black",
      }}
    >
      <Container maxWidth="xl">
        <Toolbar>
          {/* logo */}
          <Box sx={{ width: "100px" }}>
            <Typography component="a" href="/">
              <img
                style={{ width: "100%" }}
                src={
                  process.env.REACT_APP_BASE_URL +
                  logo?.attributes?.logo?.data?.attributes?.url
                }
                alt=""
              />
            </Typography>
          </Box>

          {/* main navbar */}
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{
                  my: 2,
                  color: "black",
                  display: "block",
                  "&:hover": { color: "green" },
                  fontWeight: "bold",
                  fontSize: "16px",
                }}
                href={
                  page === "Menu"
                    ? "/menu"
                    : page === "Rewards"
                    ? "/rewards"
                    : page === "GiftCards"
                    ? "/gift"
                    : page.toLowerCase()
                }
              >
                {page}
              </Button>
            ))}
          </Box>

          {/* Login - register */}
          <Box sx={{ display: { xs: "none", md: "flex" } }}>
            <Button href="/find-store" style={{ color: "black" }}>
              <FmdGoodIcon />
              Find a Store
            </Button>
            {token ? (
              <Button
                onClick={() => dispatch(logout())}
                variant="outlined"
                sx={{ borderRadius: "20px", color: "black", mx: "20px" }}
                color="inherit"
              >
                Log out
              </Button>
            ) : (
              <Button
                href="/login"
                variant="outlined"
                sx={{ borderRadius: "20px", color: "black", mx: "20px" }}
                color="inherit"
              >
                sign in
              </Button>
            )}

            <Button
              href="/join"
              variant="contained"
              sx={{
                borderRadius: "20px",
                color: "white",
                bgcolor: "black",
                "&:hover": { backgroundColor: "gray" },
              }}
            >
              Join now
            </Button>
            <Box>
              <Badge color="error" badgeContent={cartLength}>
                <Button href="/cart" style={{ color: "black" }}>
                  <ShoppingCartIcon />
                </Button>
              </Badge>
            </Box>
          </Box>

          {/* responsive navbar */}
          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
              className="menu-icon"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography
                    textAlign="center"
                    style={{ textDecoration: "none", color: "black" }}
                    component="a"
                    href={
                      page === "Menu"
                        ? "/menu"
                        : page === "Rewards"
                        ? "/rewards"
                        : page === "GiftCards"
                        ? "/gift"
                        : page.toLowerCase()
                    }
                  >
                    {page}
                  </Typography>
                </MenuItem>
              ))}
              <Box
                sx={{
                  height: "1px",
                  borderTop: 1,
                  mb: 2,
                  borderColor: "grey.500",
                  width: "90%",
                  mx: "auto",
                }}
              ></Box>
              <Box sx={{ display: { xs: "flex", md: "none" } }}>
                <Button href="/find-store" style={{ color: "black" }}>
                  <FmdGoodIcon />
                  Find a Store
                </Button>
                <Button
                  href="/login"
                  variant="outlined"
                  sx={{ borderRadius: "20px", color: "black", mx: "15px" }}
                  color="inherit"
                >
                  sign in
                </Button>
                <Button
                  href="/join"
                  variant="contained"
                  sx={{
                    borderRadius: "20px",
                    color: "white",
                    bgcolor: "black",
                    mr: "10px",
                  }}
                >
                  Join now
                </Button>
                <Box>
                  <Badge color="error" badgeContent={cartLength}>
                    <Button href="/cart" style={{ color: "black" }}>
                      <ShoppingCartIcon />
                    </Button>
                  </Badge>
                </Box>
              </Box>
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;
