import React from "react";
import { Grid, PaletteMode } from "@mui/material";
import NavigationBar from "../../component/navBar/NavigationBar";

function StockSearchPage() {
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
            menuList={["Home", "About"]}
          ></NavigationBar>
        </Grid>
        <Grid item>
          <h1>Stock Search Page</h1>

          <h1>Stock Search Page</h1>
        </Grid>
      </Grid>
    </>
  );
}

export default StockSearchPage;
