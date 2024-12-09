import React from "react";
import { Box, Typography, List, ListItemButton, ListItemText } from "@mui/material";
import "./SimpleReviewedCitations.css";

const items = [
    { id: 11, title: "Approved Citation 1", text: "lorem ipsum" },
    { id: 12, title: "Approved Citation 2", text: "lorem ipsum" },
    { id: 21, title: "Approved Citation 3", text: "lorem ipsum" },
];

const rejectitems = [
    { id: 22, title: "Rejected Citation 1", text: "lorem ipsum" },
    { id: 21, title: "Rejected Citation 2", text: "lorem ipsum" },
]

export const SimpleReviewedCitations = () => {
    return (
        <Box mt={2}>
            <Typography variant="h5" className="typography">
                Approved Citations
            </Typography>

            <List>
                {items.map((item) => (
                    <ListItemButton key={item.id}>
                        <ListItemText primary={item.title} secondary={item.text} />
                    </ListItemButton>
                ))}
            </List>

            <Typography variant="h5" className="typography">
                Rejected Citations
            </Typography>

            <List>
                {rejectitems.map((item) => (
                    <ListItemButton key={item.id}>
                        <ListItemText primary={item.title} secondary={item.text} />
                    </ListItemButton>
                ))}
            </List>
        </Box>
    );
};
