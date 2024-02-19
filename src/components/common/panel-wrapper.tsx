import { Grid, SxProps, Typography } from "@mui/material";
import React, { FC } from "react";

interface IPanelWrapper {
  title: string;
  children: any;
  sx?: SxProps;
}

export const PanelWrapper: FC<IPanelWrapper> = ({ title, children, sx }) => {
  const styles = {
    border: "2px solid black",
    margin: "10px",
    backgroundColor: "#eeeeee",
    borderBottomRightRadius: "10px",
    borderBottomLeftRadius: "10px",
  };
  return (
    <Grid item container sx={{ ...styles, ...sx, flexDirection: "column" }}>
      <Grid
        item
        container
        sx={{
          backgroundColor: "black",
          height: "33px",
        }}
      >
        <Typography color="white" p={1} fontWeight="bold">
          {title}
        </Typography>
      </Grid>
      <Grid item container>
        {children}
      </Grid>
    </Grid>
  );
};
