import {
    Box,
    List,
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    Typography,
} from "@mui/material";

import { DocumentRegular } from "@fluentui/react-icons";
import React from "react";
import { SimpleCitationIcon } from "./SimpleCitationIcon";
import { items } from "../items";

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
