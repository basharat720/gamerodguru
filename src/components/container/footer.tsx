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
      <Typography>GameRodGuru</Typography>
      <Typography>Phone: +447487855376</Typography>
    </Grid>
  );
};
