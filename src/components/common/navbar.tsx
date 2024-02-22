import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import { Link as RouterLink } from "react-router-dom";

const pages = [
  { title: "View Cart", page: "viewCart" },
  { title: "Checkout", page: "checkout" },
  { title: "FAQs", page: "faqs" },
  { title: "Contact Us", page: "contactUs" },
  {
    title: "Terms & Conditions & Shipping",
    page: "termsAndConditionsAndShipping",
  },
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
                  key={page.title}
                  to={`/${page.page.toLowerCase()}`}
                  component={RouterLink}
                  sx={{
                    color: "black",
                    textTransform: "none",
                    fontSize: "12px",
                    fontWeight: "bold",
                  }}
                >
                  {page.title}
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
