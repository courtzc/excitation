import React from 'react';
import { Review } from "../Types";
import {
  CircleRegular,
  CheckmarkCircleFilled,
  DismissCircleFilled,
} from "@fluentui/react-icons";
// import { Box } from "@mui/material";
import './SimpleCitationIcon.css';

// const review = Review.Unreviewed;

export const SimpleCitationIcon = () => {
    const review = Review.Unreviewed;
  return (
    <>
      {review === Review.Unreviewed ? (
        // <Box className="icon-container" sx={{ fontSize: "2rem" }}>
          <CircleRegular />
        // </Box>
      ) : review === Review.Approved ? (
        // <Box className="icon-container" sx={{ fontSize: "2rem" }}>
          <CheckmarkCircleFilled  />
        // </Box>
      ) : (
        // <Box className="icon-container" sx={{ fontSize: "2rem" }}>
          <DismissCircleFilled />
        // </Box>
      )}
    </>
  );
};