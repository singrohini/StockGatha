import React, { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

interface RootLayoutProps {
  children: JSX.Element;
}

function RootLayout({ children }: RootLayoutProps) {
  const location = useLocation();
  console.log("location.pathname", location.pathname);

  return (
    <>
      <h1>Main Navigation</h1>
      <Link to="/stockAnalysis">Go to Analysis Page</Link> &nbsp;
      <Link to="/">Go to Search Page</Link>
      <main>{children}</main>
    </>
  );
}
export default RootLayout;
