import { Outlet } from "react-router-dom";
import Header from "./Header";
import HeroSection from "./HeroSection";

const HomeLayout = () => {
  return (
    <>
      <Header />
      <HeroSection />
      <Outlet />
    </>
  );
};

export default HomeLayout;
