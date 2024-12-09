import { Sidebar } from "../components/Sidebar";
import { Viewer } from "../components/Viewer";
// import { NavBar } from "./NavBar";
import React, { useState } from "react";

import { pdfjs } from "react-pdf";
import { Box, Button, Container, Grid2, Typography } from "@mui/material";

import "react-pdf/dist/Page/TextLayer.css";

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  "pdfjs-dist/build/pdf.worker.min.js",
  import.meta.url,
).toString();

export const FormQuestionNew = () => {
  const [reviewMode, setReviewMode] = useState(true);

  const toggleReviewMode = () => {
    setReviewMode((prevMode) => !prevMode);
  };
  return (
    <Box sx={{ flexGrow: 1, p: 2 }}>
      <Button variant="contained" onClick={toggleReviewMode}>
        Toggle Review Mode
      </Button>
      <Grid2 container spacing={2}>
        <Grid2
          item
          size={reviewMode ? 3 : 9}
          sx={{
            "--Grid-borderWidth": "1px",
            borderRight: "var(--Grid-borderWidth) solid",
            borderColor: "divider",
            transition: "width 0.5s ease",
          }}
        >
          <Sidebar />
        </Grid2>
        <Grid2
          item
          size={reviewMode ? 9 : 3}
          sx={{
            transition: "width 0.5s ease",
          }}
        >
          <Viewer />
        </Grid2>
      </Grid2>
    </Box>
  );
};
