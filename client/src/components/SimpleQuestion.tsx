import { Box, Typography } from "@mui/material";

export const SimpleQuestion = () => {
    const prefix = 1;
    const text = "What is the capital of France?";
    return (
        <Box sx={{ display: "flex", alignItems: "center", width: "100%" }}>
            <Typography
                variant="h6"
                component="div"
                sx={{ flexGrow: 1, fontSize: "1.3em", color: "#63666A" }}
            >
                <span className="question-prefix">
                    {prefix ? <>{prefix}.</> : null}
                </span>
                <span className="question-text">{text}</span>
            </Typography>
        </Box>
    );
};
