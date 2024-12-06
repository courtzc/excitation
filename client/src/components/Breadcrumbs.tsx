import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Breadcrumbs as MUIBreadcrumbs, Typography, Box } from "@mui/material";
import './Breadcrumbs.css';

export const Breadcrumbs = () => {
  const location = useLocation();
  const pathnames = location.pathname.split('/').filter((x) => x);

  return (
    <Box className="breadcrumbs-container">
      <MUIBreadcrumbs aria-label="breadcrumb" className="breadcrumbs" separator={">"}>
        <Link to="/" className="breadcrumb-link">
          Home
        </Link>
        {pathnames.map((value, index) => {
          const to = `/${pathnames.slice(0, index + 1).join('/')}`;

          return index === pathnames.length - 1 ? (
            <Typography key={to} className="breadcrumb-text">
              {value}
            </Typography>
          ) : (
            <Link key={to} to={to} className="breadcrumb-link">
              {value}
            </Link>
          );
        })}
      </MUIBreadcrumbs>
    </Box>
  );
};