import { List, Stack, Typography } from "@mui/material";
import { ParentGrid } from "./StockRatios.styles";
import ListItemWithSpan from "../../../component/listItems/ListItemWithSpan";
import { CompanyRatioItem } from "../../../utils/types/ListItems";
import { useState } from "react";
function StockRatios(props: any) {
  const currentDate: Date = new Date();

  const formattedDate: string = currentDate.toLocaleString("en-US", {
    day: "2-digit",
    month: "short",
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  });

  const [selectedItem, setSelectedItem] = useState<CompanyRatioItem>();

  const handleItemClick = (item: CompanyRatioItem) => {
    setSelectedItem(item);
  };

  const items: CompanyRatioItem[] = [
    { id: 1, name: "Market Cap", value: 2345 },
    { id: 2, name: "P/E Ratio", value: 22 },
    { id: 3, name: "EPS", value: 5 },
    // Add more items as needed
  ];
  return (
    <>
      <ParentGrid>
        <Stack direction="column" alignItems="right" spacing={2}>
          <Stack direction="row" alignItems="center" spacing={2}>
            <Typography variant="h1" className="company-name-label">
              {props.name}
            </Typography>
            <Stack
              direction="column"
              alignItems="right"
              className="company-price-detail"
            >
              <span>₹ 404</span>
              <Stack
                direction="row"
                alignItems="right"
                className="current-date-time"
              >
                <span>{formattedDate}</span>
              </Stack>
            </Stack>
          </Stack>
          <Stack>
            <List
              style={{
                display: "flex",
                flexDirection: "row",
                padding: 0,
                overflowX: "auto",
              }}
            >
              {items.map((item) => (
                <ListItemWithSpan
                  key={item.id}
                  item={item}
                  onClick={handleItemClick}
                  selected={selectedItem && item.id === selectedItem.id}
                />
              ))}
            </List>
          </Stack>
        </Stack>
      </ParentGrid>
    </>
  );
}
export default StockRatios;
