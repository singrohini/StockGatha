import React from "react";
import { Grid, PaletteMode } from "@mui/material";
import NavigationBar from "../../component/navBar/NavigationBar";
import Box from "@mui/material/Box";
import StockRatios from "./stockRatios.tsx/StockRatios";

function StockAnalysisPage() {
  const [mode, setMode] = React.useState<PaletteMode>("light");
  const toggleColorMode = () => {
    setMode((prev) => (prev === "dark" ? "light" : "dark"));
  };
  return (
    <>
      <Grid
        container
        direction="column"
        alignItems="center"
        justifyContent="center"
        spacing={2}
      >
        <Grid item>
          <NavigationBar
            mode={mode}
            toggleColorMode={toggleColorMode}
            menuList={["Ratios", "Chart", "Analysis"]}
          ></NavigationBar>
        </Grid>
        <Grid item alignItems="right">
          <h1>Stock Analysis Page</h1>
          <h1>Stock Analysis Page</h1>
        </Grid>
      </Grid>
      <Box>
        <StockRatios></StockRatios>
      </Box>
    </>
  );
}

export default StockAnalysisPage;
