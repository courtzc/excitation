import { List, ListItem, ListItemText } from "@mui/material";
import { Link } from "react-router";

export const Home = () => {
  return (
    <div>

      <List>
        <Link to={`/0`}  style={{ textDecoration: 'none' }}>
          <ListItem button>
            <ListItemText primary="Form 0" />
          </ListItem>
        </Link>
      </List>
      <p>
        In the future this is where a user will authenticate and see a list of
        forms to review.
      </p>
    </div>
  );
};
