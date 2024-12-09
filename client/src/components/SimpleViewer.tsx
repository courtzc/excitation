import { useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import { Box, Pagination } from "@mui/material";
import "react-pdf/dist/Page/TextLayer.css";
import "./SimpleViewer.css";

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
    "pdfjs-dist/build/pdf.worker.min.js",
    import.meta.url,
).toString();

export const SimpleViewer = () => {
    const [pageNumber, setPageNumber] = useState(1);
    const [numPages, setNumPages] = useState(null);

    const onDocumentLoadSuccess = ({ numPages }) => {
        setNumPages(numPages);
    };

    const handlePageChange = (event, value) => {
        setPageNumber(value);
    };

    return (
        <Box className="viewer-container">
            {numPages && (
                <Box>
                    <Pagination
                        count={numPages}
                        page={pageNumber}
                        onChange={handlePageChange}
                    />
                </Box>
            )}
            <Document
                file="/files/Microsoft 10Q FY24Q3 1.pdf"
                onLoadSuccess={onDocumentLoadSuccess}
            >
                <Box className="box">
                    <Page
                        pageNumber={pageNumber}
                        renderAnnotationLayer={false}
                    />
                </Box>
            </Document>
        </Box>
    );
};
