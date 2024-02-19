import { Grid, Typography } from "@mui/material";
import { PanelWrapper } from "../common/panel-wrapper";
import { SearchField } from "../search-field";
import MainImage from "../../assets/mainImage.png";
import { CategoriesList } from "../categories-list";
import { GameCardWrapper } from "../common/game-card-wrapper";

const dummyData = [
  {
    heading: "Main heading 1",
    title: "Test Game 1",
    year: "1999",
    description:
      "New Releases and Pre-ordersShiny, new and hot in the shop. New releases, re-prints and pre-orders.",
  },
  {
    heading: "Main heading 2",
    title: "Test Game 2",
    year: "1999",
    description:
      "New Releases and Pre-ordersShiny, new and hot in the shop. New releases, re-prints and pre-orders.",
  },
  {
    heading: "Main heading 3",
    title: "Test Game 3",
    year: "1979",
    description:
      "New Releases and Pre-ordersShiny, new and hot in the shop. New releases, re-prints and pre-orders.",
  },
  {
    heading: "Main heading 4",
    title: "Test Game 4",
    year: "1989",
    description:
      "New Releases and Pre-ordersShiny, new and hot in the shop. New releases, re-prints and pre-orders.",
  },
  {
    heading: "Main heading 5",
    title: "Test Game 5",
    year: "1969",
    description:
      "New Releases and Pre-ordersShiny, new and hot in the shop. New releases, re-prints and pre-orders.",
  },
  {
    heading: "Main heading 4",
    title: "Test Game 4",
    year: "1989",
    description:
      "New Releases and Pre-ordersShiny, new and hot in the shop. New releases, re-prints and pre-orders.",
  },
  {
    heading: "Main heading 5",
    title: "Test Game 5",
    year: "1969",
    description:
      "New Releases and Pre-ordersShiny, new and hot in the shop. New releases, re-prints and pre-orders.",
  },
  {
    heading: "Main heading 4",
    title: "Test Game 4",
    year: "1989",
    description:
      "New Releases and Pre-ordersShiny, new and hot in the shop. New releases, re-prints and pre-orders.",
  },
  {
    heading: "Main heading 5",
    title: "Test Game 5",
    year: "1969",
    description:
      "New Releases and Pre-ordersShiny, new and hot in the shop. New releases, re-prints and pre-orders.",
  },
];

export const MainBody = () => {
  return (
    <Grid item container xs={12} minHeight="600px">
      <SearchField />
      <Grid item container xs={12} m={2} sx={{ backgroundColor: "white" }}>
        <Grid item container md={3} xs={12}>
          <PanelWrapper title="Categories" sx={{ border: "3px solid black" }}>
            <CategoriesList />
          </PanelWrapper>
        </Grid>
        <Grid item container md={9} xs={12}>
          <PanelWrapper
            title="Welcome to GameRodGuru"
            sx={{ border: "0.5px solid gray" }}
          >
            <Grid item container p={2}>
              <Grid item container rowGap={2}>
                <Typography sx={{ color: "black" }}>
                  GameRodGuru - A great range of board and card games at great
                  prices, all backed up by great service.
                </Typography>
                <Typography sx={{ color: "black" }}>
                  On top of our already discounted (generally about 20% off RRP)
                  prices we offer a further checkout discount of 2.5% for
                  purchases over £50, 5% for purchases over £100 , 7.5% for
                  purchases over £150 and 10% for purchases over £250.
                </Typography>
                <Typography sx={{ color: "black" }}>
                  We accept Visa, Mastercard and debit card payments as well as
                  PayPal. UK GAMES EXPO 2019 Thank you to everyone who attended
                  UK Games Expo and visited our booth. It was great to put some
                  faces to names!
                </Typography>
                <Typography sx={{ color: "black" }} fontWeight="bold">
                  UK GAMES EXPO 2019
                </Typography>
                <Typography sx={{ color: "black" }} variant="caption">
                  Thank you to everyone who attended UK Games Expo and visited
                  our booth. It was great to put some faces to names!
                </Typography>
              </Grid>
              <Grid item container justifyContent="center" p={1}>
                <img src={MainImage} alt=" here" height={350} />
                <Typography sx={{ color: "black" }} variant="caption" mt={1}>
                  Thanks from all the GameRodGuru Team! (Emma, Mike, Zoe, Chris,
                  Dani, Angus, Lisa)
                </Typography>
              </Grid>
            </Grid>
          </PanelWrapper>
        </Grid>
        <Grid item container xs={3} sx={{ maxHeight: "180px" }}></Grid>
        <Grid item container sx={{ backgroundColor: "white" }} xs={9}>
          {dummyData.map(data => {
            return (
              <Grid
                item
                container
                md={6}
                sm={12}
                xs={12}
                key={`${data.title}-${data.year}`}
              >
                <PanelWrapper title={data.heading} sx={{ maxHeight: "200px" }}>
                  <GameCardWrapper
                    title={data.title}
                    year={data.year}
                    description={data.description}
                  />
                </PanelWrapper>
              </Grid>
            );
          })}
        </Grid>
        <Grid item container xs={3} sx={{ maxHeight: "180px" }}></Grid>
        <Grid item container sx={{ backgroundColor: "white" }} xs={9}>
          <Grid item container md={12} sm={12} xs={12}>
            <PanelWrapper
              title="Special Offers"
              sx={{
                height: "250px",
              }}
            >
              <Grid item container p={1} flexDirection="column">
                <Typography
                  sx={{ color: "black" }}
                  fontSize="10px"
                  fontWeight="bold"
                >
                  GameRodGuru Gift Card
                </Typography>
                <Typography sx={{ color: "black" }} fontSize="10px">
                  Gift Card
                </Typography>
              </Grid>
            </PanelWrapper>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};
