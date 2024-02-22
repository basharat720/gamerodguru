import { Grid } from "@mui/material";
import { useLocation } from "react-router-dom";
import { Cart } from "../../pages/cart";
import { FAQs } from "../../pages/faq";
import { Checkout } from "../../pages/checkout";
import { TermsConditionsShipping } from "../../pages/terms-conditions-shipping";
import { ContactUs } from "../../pages/contact-us";
import { MainBodyComponent } from "./main-body-component";

const PAGES: any = {
  viewcart: Cart,
  faqs: FAQs,
  checkout: Checkout,
  contactus: ContactUs,
  termsandconditionsandshipping: TermsConditionsShipping,
};

export const MainBody = () => {
  const location = useLocation();
  const currentPageIndex = location?.pathname?.split("/");
  const CurrentPage = PAGES[currentPageIndex[1]] || MainBodyComponent;
  const isMainPage = location.pathname === "/";

  return (
    <Grid item container xs={12} minHeight="600px">
      <Grid item container xs={12} m={2} sx={{ backgroundColor: "white" }}>
        {isMainPage ? <MainBodyComponent /> : <CurrentPage />}
      </Grid>
    </Grid>
  );
};
