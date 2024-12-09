import { Review } from "../Types";
import {
  CircleRegular,
  CheckmarkCircleFilled,
  DismissCircleFilled,
} from "@fluentui/react-icons";
import { Box } from "@mui/material";

interface Props {
  citationIndex: number; // the citation to render
  review: Review;
  excerpt: string;
  selected: boolean; // is this citation currently selected?
}

export const CitationUX = ({ citationIndex, review, excerpt, selected }: Props) => {
  const Unreviewed = () => (
    <Box className="icon-container unreviewed" sx={{ fontSize: "2rem" }}>
      <CircleRegular className="icon" />
    </Box>
  );

  const Approved = () => (
    <Box className="icon-container approved on" sx={{ fontSize: "2rem" }}>
      <CheckmarkCircleFilled className="icon" />
    </Box>
  );

  const Rejected = () => (
    <Box className="icon-container rejected on" sx={{ fontSize: "2rem" }}>
      <DismissCircleFilled className="icon" />
    </Box>
  );

  return (
    <div
      className={`citation ${selected ? "selected" : "unselected"}`}
      key={citationIndex}
    >
      {review === Review.Unreviewed ? (
        <Unreviewed />
      ) : review === Review.Approved ? (
        <Approved />
      ) : (
        <Rejected />
      )}
      <div className="citation-excerpt">{excerpt}</div>
    </div>
  );
};
