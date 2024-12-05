import { Link as RouterLink } from "react-router";
import { Breadcrumbs as MUIBreadcrumbs, Link, Typography, Box } from "@mui/material";

interface Props {
  breadcrumbs: [title: string, href?: string][];
}

export const Breadcrumbs = ({ breadcrumbs }: Props) => {
  return (
    <Box width="100%" p={2} bgcolor="background.paper">

    <MUIBreadcrumbs aria-label="breadcrumb" sx={{width: '85%', margin: '0 auto'}}>
      {breadcrumbs.map(([title, href], i) => (
        href ? (
          <Link
            key={title}
            component={RouterLink}
            to={href}
            color="inherit"
            underline="hover"
          >
            {title}
          </Link>
        ) : (
          <Typography key={title} color="textPrimary">
            {title}
          </Typography>
        )
      ))}
    </MUIBreadcrumbs>
    </Box>
  );
}