import {
    Box,
    List,
    ListItemButton,
    ListItemText,
    Typography,
} from "@mui/material";
import { acceptitems, rejectitems } from "../items";

export const SimpleReviewedCitations = () => {
    return (
        <Box mt={2}>
            <Typography variant="h5" className="typography">
                Approved Citations
            </Typography>

            <List>
                {acceptitems.map((item) => (
                    <ListItemButton key={item.id}>
                        <ListItemText
                            primary={item.title}
                            secondary={item.text}
                        />
                    </ListItemButton>
                ))}
            </List>

            <Typography variant="h5" className="typography">
                Rejected Citations
            </Typography>

            <List>
                {rejectitems.map((item) => (
                    <ListItemButton key={item.id}>
                        <ListItemText
                            primary={item.title}
                            secondary={item.text}
                        />
                    </ListItemButton>
                ))}
            </List>
        </Box>
    );
};
