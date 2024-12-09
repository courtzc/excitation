import React, { useState, useRef, useEffect } from "react";
import { Document, Page, pdfjs } from "react-pdf";
// import { useCallback, useEffect, useRef } from "react";

import { Box, Pagination } from "@mui/material";
import "react-pdf/dist/Page/TextLayer.css";

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  "pdfjs-dist/build/pdf.worker.min.js",
  import.meta.url,
).toString();

export const SimpleViewer = () => {
    const [pageNumber, setPageNumber] = useState(1);
    const [numPages, setNumPages] = useState(null);
    // const containerRef = useRef<HTMLDivElement>(null);
    // const [containerWidth, setContainerWidth] = useState<number>(0);

    const onDocumentLoadSuccess = ({ numPages }) => {
        setNumPages(numPages);
    };

    const handlePageChange = (event, value) => {
        setPageNumber(value);
    };

    // useEffect(() => {
    //     if (containerRef.current) {
    //       setContainerWidth(containerRef.current.offsetWidth);
    //       console.log("changing window to: ", containerRef.current.offsetWidth)
    //     }
    //   }, [containerRef.current]);

    return (
        <Box>
            {numPages && (
                <Pagination
                    count={numPages}
                    page={pageNumber}
                    onChange={handlePageChange}
                    sx={{ mt: 2 }}
                />
            )}
            {/* <div ref={containerRef} style={{ width: '100%' }}> */}
            <Document file="/files/Microsoft 10Q FY24Q3 1.pdf"
            onLoadSuccess={onDocumentLoadSuccess}>
                <Box>
                    <Page
                        pageNumber={pageNumber}
                        renderAnnotationLayer={false}
                    />
                </Box>
            </Document>
            {/* </div> */}
        </Box>
    );
};
