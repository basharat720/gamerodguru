import { Grid, Typography } from "@mui/material";
import React from "react";

export const Footer = () => {
  return (
    <Grid
      item
      container
      justifyContent="center"
      alignItems="center"
      flexDirection="column"
      p={1}
    >
      <Typography>Site Map | Terms & Conditions</Typography>
      <Typography>Board Game Guru</Typography>
      <Typography>07834281383</Typography>
    </Grid>
  );
};
