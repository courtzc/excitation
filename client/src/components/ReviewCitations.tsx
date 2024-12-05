import { Sidebar } from "./Sidebar";
import { Viewer } from "./Viewer";
import { NavBar } from "./NavBar";
import { pdfjs } from "react-pdf";
import { Box, Container, Grid2, TextField, Typography } from "@mui/material";

import "react-pdf/dist/Page/TextLayer.css";

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  "pdfjs-dist/build/pdf.worker.min.js",
  import.meta.url,
).toString();

export const ReviewCitations = () => {
  return (
    <Box sx={{ flexGrow: 1, p: 2 }}>
      <Grid2 container spacing={2}>
        <Grid2 size={4} sx={{'--Grid-borderWidth': '1px', borderRight: 'var(--Grid-borderWidth) solid', borderColor: 'divider'}}>
            <Sidebar />
        </Grid2>
        <Grid2 size={8}>
            <Viewer />
        </Grid2>
      </Grid2>
    </Box>
  );
};
