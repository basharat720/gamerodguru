import { Grid } from "@mui/material";
import Logo from "../../assets/gamerodguru.png";
import { Navbar } from "./navbar";
import { useNavigate } from "react-router-dom";

export const Header = () => {
  const navigate = useNavigate();
  return (
    <Grid item container xs={12} p={2}>
      <Grid
        item
        container
        xs={2}
        sx={{ height: "125px", backgroundColor: "#67a97b" }}
      >
        <img
          src={Logo}
          height="100px"
          width="100px"
          alt="logo img"
          style={{ marginLeft: "40px", cursor: "pointer" }}
          onClick={() => {
            navigate("/");
          }}
        />
      </Grid>
      <Grid item container xs={10} sx={{ backgroundColor: "#67a97b" }}>
        <Navbar />
      </Grid>
    </Grid>
  );
};
