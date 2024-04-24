import { Outlet } from "react-router-dom";
import Header from "./Header";
import HeroSection from "./HeroSection";
import SocialLink from "./SocialLink";

const HomeLayout = () => {
  return (
    <>
      <Header />
      <HeroSection />
      <SocialLink />
      <Outlet />
    </>
  );
};

export default HomeLayout;
