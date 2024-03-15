import { ListItem, ListItemText, styled } from "@mui/material";

export const ItemContent = styled(ListItem)(({ theme, selected }) => ({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: theme.spacing(1),
  margin: theme.spacing(1),

  background: selected
    ? "linear-gradient(45deg, #666666 30%, #444444 90%)"
    : "linear-gradient(45deg, #CCCCCC 30%, #AAAAAA 90%)",
  borderRadius: theme.shape.borderRadius,
  cursor: "pointer",
  "&:hover": {
    background: selected
      ? "linear-gradient(45deg, #666666 30%, #444444 90%)"
      : "linear-gradient(45deg, #DDDDDD 30%, #BBBBBB 90%)",
  },
}));

export const ItemText = styled(ListItemText)({
  paddingTop: 5,
  paddingBottom: 5,
  fontFamily: "Arial, sans-serif",
  fontSize: "14px",
  fontWeight: 500,
  color: "#333333",
});
