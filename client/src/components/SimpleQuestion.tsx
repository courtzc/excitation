import { Box, Typography } from "@mui/material";
import "./SimpleQuestion.css";

export const SimpleQuestion = () => {
    const prefix = 1;
    const text = "What is the capital of France?";
    return (
        <Box className="box">
            <Typography
                variant="h5"
                component="div"
                className="typography"
            >
                <span className="question-prefix">
                    {prefix ? <>{prefix}. </> : null}
                </span>
                <span className="question-text">{text}</span>
            </Typography>
        </Box>
    );
};