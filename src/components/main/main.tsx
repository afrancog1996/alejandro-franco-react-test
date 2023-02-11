import { Outlet } from "react-router-dom";
import FooterBarApp from "../footer/Footer";
import HeaderAppBar from "../header/Header";

const MainApp = () => {
  return (
    <div>
      <HeaderAppBar />
      <main>
        <Outlet />
      </main>
      <FooterBarApp />
    </div>
  );
};

export default MainApp;
