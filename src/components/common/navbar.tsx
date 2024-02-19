import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";

const pages = [
  "View Cart",
  "Checkout",
  "FAQs",
  "Contact Us",
  "Terms & Conditions & Shipping",
];

export const Navbar = () => {
  return (
    <AppBar
      position="static"
      sx={{
        backgroundColor: "#67a97b",
        border: "none",
        color: "black",
        mt: 1,
        boxShadow: "none",
      }}
      component="nav"
    >
      <Container>
        <Toolbar>
          <Box sx={{ display: { xs: "none", sm: "block" } }} mt={-2}>
            {pages.map((page, index) => (
              <>
                <Button
                  key={page}
                  // to={`/${page.toLowerCase()}`}
                  // component={RouterLink}
                  sx={{
                    color: "black",
                    textTransform: "none",
                    fontSize: "12px",
                    fontWeight: "bold",
                  }}
                >
                  {page}
                </Button>
                {index !== pages.length - 1 && "|"}
              </>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
