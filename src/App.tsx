import "./App.css";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import RootLayout from "./pages/layout/RootLayout";
import StockSearchPage from "./pages/stockSearch/StockSearch";
import StockAnalysisPage from "./pages/stockAnalysis/StockAnalysis";

function App() {
  return (
    <BrowserRouter>
      <RootLayout>
        <Routes>
          <Route path="/" element={<StockSearchPage />} />
          <Route path="/stockAnalysis" element={<StockAnalysisPage />} />
        </Routes>
      </RootLayout>
    </BrowserRouter>
  );
}

export default App;
