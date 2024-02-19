import { Button, Grid, TextField } from "@mui/material";
import React from "react";

export const SearchField = () => {
  return (
    <Grid
      item
      container
      alignItems="end"
      justifyContent="end"
      mr={2}
      columnGap={1.5}
    >
      <TextField
        sx={{ backgroundColor: "white", height: "30px" }}
        size="small"
      />
      <Button
        sx={{
          backgroundColor: "white",
          color: "black",
          height: "30px",
          textTransform: "none",
        }}
      >
        Search
      </Button>
    </Grid>
  );
};
