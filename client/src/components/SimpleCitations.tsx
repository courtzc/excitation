import {
    Box,
    List,
    ListItem,
    ListItemButton,
    ListItemText,
    Typography,
} from "@mui/material";
import React from "react";

const items = [
    {
        id: 1,
        text: "Parent Item 1",
        nestedItems: [
            { id: 11, text: "Nested Item 1.1" },
            { id: 12, text: "Nested Item 1.2" },
        ],
    },
    {
        id: 2,
        text: "Parent Item 2",
        nestedItems: [
            { id: 21, text: "Nested Item 2.1" },
            { id: 22, text: "Nested Item 2.2" },
        ],
    },
];

export const SimpleCitations = () => {
    const [selectedIndex, setSelectedIndex] = React.useState(1);

    const handleListItemClick = (
        event: React.MouseEvent<HTMLDivElement, MouseEvent>,
        index: number,
    ) => {
        setSelectedIndex(index);
    };

    return (
        <Box mt={2}>
            <Typography variant="h5">
                Review Citations
            </Typography>

            <List>
                {items.map((item) => (
                    <React.Fragment key={item.id}>
                        <ListItem>
                            <ListItemText primary={item.text} />
                        </ListItem>
                        <List component="div" disablePadding>
                            {item.nestedItems.map((nestedItem) => (
                                <ListItemButton
                                    key={nestedItem.id}
                                    sx={{ pl: 4 }}
                                    selected={selectedIndex === nestedItem.id}
                                    onClick={(event) =>
                                        handleListItemClick(
                                            event,
                                            nestedItem.id,
                                        )}
                                >
                                    <ListItemText primary={nestedItem.text} />
                                </ListItemButton>
                            ))}
                        </List>
                    </React.Fragment>
                ))}
            </List>
        </Box>
    );
};
