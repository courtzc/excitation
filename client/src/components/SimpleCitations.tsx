import {
    Box,
    List,
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    Typography,
} from "@mui/material";

import {
    DocumentRegular,
} from "@fluentui/react-icons";
import React from "react";
import { SimpleCitationIcon } from "./SimpleCitationIcon";

const items = [
    {
        id: 1,
        text: "Source PDF 1",
        nestedItems: [
            { id: 11, title: "Nested Item 1.1", text: "lorem ipsum" },
            { id: 12, title: "Nested Item 1.2", text: "lorem ipsum" },
        ],
    },
    {
        id: 2,
        text: "Source PDF 2",
        nestedItems: [
            { id: 21, title: "Nested Item 2.1", text: "lorem ipsum" },
            { id: 22, title: "Nested Item 2.2", text: "lorem ipsum" },
        ],
    },
    {
        id: 3,
        text: "Source PDF 3",
        nestedItems: [
            { id: 31, title: "Nested Item 3.1", text: "lorem ipsum" },
            { id: 32, title: "Nested Item 3.2", text: "lorem ipsum" },
        ],
    },
    {
        id: 4,
        text: "Source PDF 4",
        nestedItems: [
            { id: 41, title: "Nested Item 4.1", text: "lorem ipsum" },
            { id: 42, title: "Nested Item 4.2", text: "lorem ipsum" },
        ],
    },
    {
        id: 5,
        text: "Source PDF 5",
        nestedItems: [
            { id: 51, title: "Nested Item 5.1", text: "lorem ipsum" },
            { id: 52, title: "Nested Item 5.2", text: "lorem ipsum" },
        ],
    },
    {
        id: 6,
        text: "Source PDF 6",
        nestedItems: [
            { id: 61, title: "Nested Item 6.1", text: "lorem ipsum" },
            { id: 62, title: "Nested Item 6.2", text: "lorem ipsum" },
        ],
    },
    {
        id: 7,
        text: "Source PDF 7",
        nestedItems: [
            { id: 71, title: "Nested Item 7.1", text: "lorem ipsum" },
            { id: 72, title: "Nested Item 7.2", text: "lorem ipsum" },
        ],
    },
    {
        id: 8,
        text: "Source PDF 8",
        nestedItems: [
            { id: 81, title: "Nested Item 8.1", text: "lorem ipsum" },
            { id: 82, title: "Nested Item 8.2", text: "lorem ipsum" },
        ],
    },
    {
        id: 9,
        text: "Source PDF 9",
        nestedItems: [
            { id: 91, title: "Nested Item 9.1", text: "lorem ipsum" },
            { id: 92, title: "Nested Item 9.2", text: "lorem ipsum" },
        ],
    },
    {
        id: 10,
        text: "Source PDF 10",
        nestedItems: [
            { id: 101, title: "Nested Item 10.1", text: "lorem ipsum" },
            { id: 102, title: "Nested Item 10.2", text: "lorem ipsum" },
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
            <Typography variant="h5" className="typography">
                Review Citations
            </Typography>

            <List>
                {items.map((item) => (
                    <React.Fragment key={item.id}>
                        <ListItem>
                            <ListItemIcon sx={{ minWidth: 32 }}>
                                <DocumentRegular />
                            </ListItemIcon>
                            <ListItemText primary={item.text} />
                        </ListItem>
                        <List component="div" sx={{ pl: 4 }}>
                            {item.nestedItems.map((nestedItem) => (
                                <ListItemButton
                                    key={nestedItem.id}
                                    selected={selectedIndex === nestedItem.id}
                                    onClick={(event) =>
                                        handleListItemClick(
                                            event,
                                            nestedItem.id,
                                        )}
                                >
                                    <ListItemIcon sx={{ minWidth: 32 }}>
                                        <SimpleCitationIcon />
                                    </ListItemIcon>
                                    <ListItemText
                                        primary={nestedItem.title}
                                        secondary={nestedItem.text}
                                    />
                                </ListItemButton>
                            ))}
                        </List>
                    </React.Fragment>
                ))}
            </List>
        </Box>
    );
};
