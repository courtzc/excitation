import { useAppStateValue, useDocFromId } from "../State";
import { useAsyncHelper, useDispatchHandler } from "../Hooks";
import { TriangleLeftFilled, TriangleRightFilled } from "@fluentui/react-icons";
import { Box, Typography } from "@mui/material";
import { LoadedState } from "../Types";

export const NavBar = () => {
  const { ux: { pageNumber, selectedCitation, documentId } } =
    useAppStateValue() as LoadedState;
  const docFromId = useDocFromId();

  const { isError } = useAsyncHelper();
  const { dispatchUnlessError } = useDispatchHandler();

  if (documentId === undefined) {
    return (
      <div id="navbar">
        <div className="navbar-page">
        </div>
      </div>
    );
  }

  const { pages } = docFromId[documentId];

  const pageNumbers = selectedCitation == undefined
    ? []
    : selectedCitation.citationHighlights
      .map(({ pageNumber }) => pageNumber);

  const enablePrev = !isError && pageNumber !== 1 || undefined;
  const enableNext = !isError && pageNumber !== pages || undefined;

  const citationPrev = enablePrev && pageNumbers.includes(pageNumber! - 1) ||
    undefined;
  const citationNext = enableNext && pageNumbers.includes(pageNumber! + 1) ||
    undefined;

  return (
    <div id="navbar">
      <Box
        sx={{
          margin: "0 auto",
          mt: 2,
          // padding: "20px 16px",
          // border: "1px solid #ccc",
          // borderRadius: "4px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          width: "100%",
        }}
      >
        <div className="navbar-page">
          <div className="navbar-column">
            <span
              className={citationPrev ? "visible" : "hidden"}
              onClick={citationPrev &&
                dispatchUnlessError({ type: "prevPage" })}
            >
              Citation continues from previous page
            </span>
          </div>
          <Box
            sx={{
              display: "flex",
              width: "100%",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Box sx={{ width: "40%" }}>
              <TriangleLeftFilled
                className={`navbar-icon icon ${
                  enablePrev ? "enabled" : "disabled"
                }`}
                onClick={enablePrev &&
                  dispatchUnlessError({ type: "prevPage" })}
              />
            </Box>
            <Box sx={{ width: "80%", textAlign: "center" }}>
              <Typography
                variant="h6"
                component="div"
                sx={{ flexGrow: 1, fontSize: "1.3em", color: "#63666A" }}
              >
                <div className="navbar-change-page">
                  {pageNumber}&nbsp;/&nbsp;{pages}
                </div>
              </Typography>
            </Box>
            <Box sx={{ width: "40%" }}>
              <TriangleRightFilled
                className={`navbar-icon icon ${
                  enableNext ? "enabled" : "disabled"
                }`}
                onClick={enableNext &&
                  dispatchUnlessError({ type: "nextPage" })}
              />
            </Box>
          </Box>
          <div className="navbar-column">
            <span
              className={citationNext ? "visible" : "hidden"}
              onClick={citationNext &&
                dispatchUnlessError({ type: "nextPage" })}
            >
              Citation continues on next page
            </span>
            {selectedCitation &&
              selectedCitation.citationHighlights.length == 0 && (
              <span className="selected">Unable to locate citation</span>
            )}
          </div>
        </div>
      </Box>
    </div>
  );
};
