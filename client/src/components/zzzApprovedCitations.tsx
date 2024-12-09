import { useDocFromId, useAppStateValue } from "../State.ts";
import { useDispatchHandler } from "../Hooks.ts";
import { HoverableIcon } from "../Hooks.tsx";
import { LoadedState, Review } from "../Types.ts";
import { Box, Typography, Button } from "@mui/material";
import {
  // DismissCircleFilled,
  // DismissCircleRegular,
  AddCircleRegular,
  AddCircleFilled,
  ChevronRight24Regular
} from "@fluentui/react-icons";
import { useCallback } from "react";
import { Link } from "react-router";

interface Props {
  answer: string | undefined;
  addExcerptToAnswer: (excerpt: string) => void;
}

export const ApprovedCitations = ({ answer, addExcerptToAnswer }: Props) => {
  const { dispatchHandler } = useDispatchHandler();
  const {
    ux: { questionIndex },
    questions,
    metadata: { formId },
  } = useAppStateValue() as LoadedState;
  const { citations } = questions[questionIndex];
  const docFromId = useDocFromId();

  const maxPageNumber = 1000;
  const unlocatedPage = maxPageNumber;

  const _addExcerptToAnswer = useCallback(
    (parent: string, excerpt: string) => () => {
      const selection = document.getSelection();
      if (selection?.rangeCount) {
        const selectionRange = selection.getRangeAt(0);
        const parentElement = document.getElementById(parent);
        console.log("parent", parent, parentElement);
        console.assert(parentElement != null);
        if (
          !selectionRange.collapsed &&
          parentElement != null &&
          parentElement.contains(selectionRange.commonAncestorContainer)
        ) {
          const selectedText = selection.toString();
          selection.empty();
          return addExcerptToAnswer(selectedText);
        }
      }

      return addExcerptToAnswer(excerpt);
    },
    [addExcerptToAnswer]
  );

  const AddExcerptToAnswer = ({
    parent,
    excerpt,
  }: {
    parent: string;
    excerpt: string;
  }) => (
    <HoverableIcon
      DefaultIcon={AddCircleRegular}
      HoverIcon={AddCircleFilled}
      classes="large-icon add-excerpt-to-answer"
      onClick={_addExcerptToAnswer(parent, excerpt)}
      floating={true}
    />
  );

  const nextUnansweredQuestion = questions.findIndex(
    ({ answer }) => answer === undefined
  );

  // const Reject = ({ citationIndex }: { citationIndex: number }) => (
  //   <HoverableIcon
  //     DefaultIcon={DismissCircleRegular}
  //     HoverIcon={DismissCircleFilled}
  //     key="reject"
  //     classes="rejected on large-icon"
  //     onClick={dispatchHandler({
  //       type: "reviewCitation",
  //       citationIndex,
  //       review: Review.Rejected,
  //     })}
  //     floating={true}
  //   />
  // );

  return (
    <div id="approved-citations">

          <Box sx={{ display: "flex", alignItems: "center", width: "100%" }}>
            <Typography
              variant="h6"
              component="div"
              sx={{ flexGrow: 1, fontSize: "1.3em", color: "#63666A", textAlign: "center" }}
            >
              Approved Citations
            </Typography>
          </Box>
      {citations.map(
        ({ excerpt, documentId, bounds, review }, citationIndex) => {
          if (review !== Review.Approved) return <div key={citationIndex} />;

          const pageNumbers = (bounds ?? [{ pageNumber: unlocatedPage }])
            .map(({ pageNumber }) => pageNumber)
            .sort();

          const firstPage = pageNumbers[0];
          const lastPage = pageNumbers[pageNumbers.length - 1];

          const range =
            firstPage == lastPage
              ? firstPage == unlocatedPage
                ? "Unable to locate citation"
                : `Page ${firstPage}`
              : `Pages ${firstPage}-${lastPage}`;

          return (
            <div
              id={`citation-${citationIndex}`}
              key={citationIndex}
              className="approved-citation-container"
            >
              <AddExcerptToAnswer
                parent={`citation-${citationIndex}`}
                excerpt={excerpt}
              />
              <div className="approved-citation selectable">
                {excerpt}
                <div>
                  (
                  <span
                    className="action"
                    onClick={dispatchHandler({
                      type: "selectCitation",
                      citationIndex,
                      reviewCitation: true,
                    })}
                  >
                    {docFromId[documentId].name}, {range}
                  </span>
                  )
                </div>
              </div>
            </div>
          );
        }
      )}
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          width: '100%',
          mt: 2,
        }}
      >
        <Button
          variant="contained"
          color="paper"
          onClick={dispatchHandler({ type: "contractAnswerPanel" })}
        >
          Review citations
        </Button>
        {answer == undefined ? (
        <div />
      ) : nextUnansweredQuestion == -1 ? (
        <Box sx={{ display: 'flex', justifyContent: 'flex-end', mt: 2 }}>
          <Typography>
           All questions have been answered.
          </Typography>
        </Box>
        
      ) : (
        <Button
            variant="contained"
            color="paper"
            component={Link}
            to={`/${formId}/${nextUnansweredQuestion}`}
            endIcon={<ChevronRight24Regular />}
            // sx={{ fontFamily: 'Roboto, sans-serif', fontWeight: 'bold' }}
          >
            Next unanswered question
          </Button>
      )}
      </Box>

    </div>
  );
};
