import { Outlet } from "react-router-dom";

interface RootLayoutProps {
  children: JSX.Element;
}

function RootLayout({ children }: RootLayoutProps) {
  return (
    <>
      <h1>Main Navigation</h1>
      <Outlet />
    </>
  );
}
export default RootLayout;
