import { Box } from "@mui/system";
import { SimpleQuestion } from "./SimpleQuestion";
import { SimpleAnswer } from "./SimpleAnswer";
import { SimpleCitations } from "./SimpleCitations";

export const SimpleSidebar = () => {
    return (
        <Box
            sx={{
                display: "flex",
                flexDirection: "column",
                height: "100%",
                backgroundColor: "paper"
            }}
        >
            <SimpleQuestion />
            <SimpleAnswer />
            <SimpleCitations />
        </Box>
    );
};
