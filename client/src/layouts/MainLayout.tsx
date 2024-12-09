import React from "react";
// import { Outlet } from "react-router-dom";
import { Header } from "../components/Header";
import { Breadcrumbs } from "../components/Breadcrumbs";
import { Container, CssBaseline } from "@mui/material";

interface LayoutProps {
  children: React.ReactNode;
}

export const MainLayout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <CssBaseline />
      <Header />
      <Breadcrumbs />
      <Container className="content-container">
        {children}
      </Container>
      {/* <Footer /> */}
    </>
  );
};