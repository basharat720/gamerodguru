import { List, ListItem, ListItemIcon, ListItemText } from "@mui/material";
import StopIcon from "@mui/icons-material/Stop";
const items = [
  "Super Mario Bros.",
  "The Legend of Zelda: A Link to the Past",
  "Final Fantasy VII",
  "Metal Gear Solid",
  "Half-Life",
  "Counter-Strike",
  "Diablo II",
  "Grand Theft Auto III",
  "Halo: Combat Evolved",
  "The Elder Scrolls III: Morrowind",
  "Star Wars: Knights of the Old Republic",
  "World of Warcraft",
  "Resident Evil 4",
  "The Legend of Zelda: Twilight Princess",
  "Bioshock",
  "Portal",
  "Fallout 3",
  "Left 4 Dead",
  "Batman: Arkham Asylum",
  "Red Dead Redemption",
  "The Witcher 3: Wild Hunt",
  "Undertale",
  "Dark Souls III",
  "Overwatch",
  "Horizon Zero Dawn",
  "PlayerUnknown's Battlegrounds (PUBG)",
  "Fortnite",
  "God of War",
  "Red Dead Redemption 2",
  "Sekiro: Shadows Die Twice",
  "Control",
  "Cyberpunk 2077",
  "Assassin's Creed Valhalla",
  "Hades",
  "Hitman 3",
  "Resident Evil Village",
  "Deathloop",
  "Elden Ring",
  "Starfield",
  "Horizon Forbidden West",
  "Mass Effect Legendary Edition",
  "Ghost of Tsushima",
  "Persona 5",
  "The Last of Us Part II",
  "Cyberpunk 2077",
  "Monster Hunter: World",
  "Stardew Valley",
  "Among Us",
  "Fall Guys: Ultimate Knockout",
  "Phasmophobia",
  "Valorant",
  "Doom Eternal",
  "The Outer Worlds",
  "Control",
  "Oxenfree",
  "Celeste",
  "Undertale",
  "Firewatch",
  "Stellaris",
  "Civilization VI",
  "Subnautica",
  "Factorio",
  "RimWorld",
  "Cities: Skylines",
  "The Sims 4",
  "Stardew Valley",
  "Terraria",
  "Minecraft",
  "Hollow Knight",
  "Dead Cells",
  "Cuphead",
  "Slay the Spire",
  "Gris",
  "Disco Elysium",
  "Hollow Knight",
  "Outer Wilds",
];

export const CategoriesList = () => {
  return (
    <List sx={{ maxHeight: "700px", overflowY: "scroll" }}>
      {items.map(item => (
        <ListItem key={item}>
          <ListItemIcon sx={{ mr: -3.5 }}>
            <StopIcon />
          </ListItemIcon>
          <ListItemText
            primary={item}
            sx={{ color: "black", fontWeight: "bold", cursor: "pointer" }}
          />
        </ListItem>
      ))}
    </List>
  );
};
