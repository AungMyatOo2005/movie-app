import React, { useContext } from "react";
import Head from "../components/Head";
import SideBar from "../components/SideBar";
import MovieList from "../components/MovieList";
import ResponsiveSidebar from "../components/ResponsiveSidebar";
import { MyContext } from "../context/ContextProvider";
const Home = () => {
  const { setSidebar } = useContext(MyContext);
  return (
    <div>
      <Head />
      <div className="flex items-start pt-36 ss:pt-24">
        <div className="w-[240px] relative hidden md:block">
          <SideBar />
        </div>
        <div className="w-[200px] fixed block md:hidden z-10 left-0 top-0">
          <ResponsiveSidebar />
        </div>
        <MovieList />
      </div>
    </div>
  );
};

export default Home;
