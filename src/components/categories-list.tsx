import { List, ListItem, ListItemIcon, ListItemText } from "@mui/material";
import StopIcon from "@mui/icons-material/Stop";
const items = [
  "Item 1",
  "Item 2",
  "Item 3",
  "Item 4",
  "Item 5",
  "Item 6",
  "Item 7",
  "Item 8",
  "Item 9",
  "Item 10",
  "Item 11",
  "Item 12",
];
export const CategoriesList = () => {
  return (
    <List sx={{ cursor: "pointer" }}>
      {items.map(item => (
        <ListItem key={item}>
          <ListItemIcon sx={{ mr: -3.5 }}>
            <StopIcon />
          </ListItemIcon>
          <ListItemText
            primary={item}
            sx={{ color: "black", fontWeight: "bold" }}
          />
        </ListItem>
      ))}
    </List>
  );
};
