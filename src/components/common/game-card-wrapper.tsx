import { Grid, Typography } from "@mui/material";
interface IGameCardWrapper {
  title: string;
  year: string;
  description?: string;
}

export const GameCardWrapper = ({
  title,
  year,
  description,
}: IGameCardWrapper) => {
  return (
    <Grid item container p={2} columnGap={2}>
      <Grid item sx={{ overflow: "hidden" }}>
        <Typography
          sx={{ color: "black", cursor: "pointer", fontWeight: "600" }}
        >
          {title}
        </Typography>
        <Typography sx={{ color: "black" }}>{year}</Typography>
        <Typography sx={{ color: "black" }} variant="caption">
          {description}
        </Typography>
      </Grid>
    </Grid>
  );
};
