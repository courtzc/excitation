import { Box } from "@mui/system";
import { SimpleQuestion } from "./SimpleQuestion";
import { SimpleAnswer } from "./SimpleAnswer";
import { SimpleCitations } from "./SimpleCitations";
import { SimpleReviewedCitations } from "./SimpleReviewedCitations";
import { useAnswerMode } from "../context/AnswerModeContext";

import "./SimpleSidebar.css";

export const SimpleSidebar = () => {
    const { answerMode } = useAnswerMode();

    return (
        <Box className="sidebar">
            <SimpleQuestion />
            <SimpleAnswer />
            {answerMode ? <SimpleReviewedCitations /> : <SimpleCitations />}
        </Box>
    );
};
