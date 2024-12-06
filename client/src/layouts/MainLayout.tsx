import React from "react";
import { Outlet } from "react-router-dom";
import { Header } from "../components/Header";
import { Breadcrumbs } from "../components/Breadcrumbs";

export const MainLayout = () => {
  return (
    <div>
      <Header />
      <Breadcrumbs />
      <main>
        <Outlet />
      </main>
    </div>
  );
};

// export default MainLayout;
