import { SimpleSidebar } from "../components/SimpleSidebar";
import { SimpleViewer } from "../components/SimpleViewer";
import { pdfjs } from "react-pdf";
import { Box, Fab, Grid2 } from "@mui/material";
import { ChevronLeft24Regular } from "@fluentui/react-icons";
import {
  AnswerModeProvider,
  useAnswerMode,
} from "../context/AnswerModeContext";
import "react-pdf/dist/Page/TextLayer.css";
import "./SimpleFormQuestion.css";

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  "pdfjs-dist/build/pdf.worker.min.js",
  import.meta.url,
).toString();

const SimpleFormQuestionContent = () => {
  const { answerMode, turnOnAnswerMode, turnOffAnswerMode } = useAnswerMode();

  return (
    <Grid2
      container
      spacing={2}
      className="form-question-container"
      wrap="nowrap"
      sx={{
        height: "calc(100vh - 128px)", // Adjust to ensure the grid fits the viewport
        overflow: "hidden", // Prevent the grid itself from overflowing
      }}
    >
      <Grid2
        size={answerMode ? 8 : 3}
        sx={{ height: "100%", transition: "width 0.5s ease" }}
      >
        <Box className="grid-column">
          <SimpleSidebar />
        </Box>
      </Grid2>
      {answerMode && (
        <Grid2 size="auto" className="fab-container">
          <Fab
            aria-label="exit-answer-mode"
            onClick={turnOffAnswerMode}
            className="fab"
            color="paper"
          >
            <ChevronLeft24Regular />
          </Fab>
        </Grid2>
      )}
      <Grid2
        size={answerMode ? 3 : 9}
        sx={{ height: "100%", transition: "width 0.5s ease" }}
      >
        <Box className="grid-column">
          <SimpleViewer />
        </Box>
      </Grid2>
    </Grid2>
  );
};

export const SimpleFormQuestion = () => (
  <AnswerModeProvider>
    <SimpleFormQuestionContent />
  </AnswerModeProvider>
);
