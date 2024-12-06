import { useCallback, useRef, useState } from "react";
import { largeSmall, useAppState } from "../State.ts";
import { HoverableIcon } from "../Hooks.tsx";
import {
  CheckmarkFilled,
  CheckmarkRegular,
  DismissFilled,
  DismissRegular,
} from "@fluentui/react-icons";
import { LoadedState, Review } from "../Types.ts";
import { Box, Divider, Typography } from "@mui/material";

import { ReviewCitations } from "./ReviewCitations.tsx";
import { ApprovedCitations } from "./ApprovedCitations.tsx";

export const AnswerPanel = () => {
  const [state, dispatch] = useAppState();
  const {
    ux: { questionIndex, largeAnswerPanel },
    questions,
    metadata: { formId },
  } = state as LoadedState;
  const question = questions[questionIndex];
  const { answer, citations, prefix, text } = question;

  const unreviewedCitations =
    citations.filter(({ review }) => review === Review.Unreviewed).length > 0;

  const answerRef = useRef<HTMLTextAreaElement>(null);
  const [editAnswer, setEditAnswer] = useState<string | undefined>(undefined);

  const cancelEditAnswer = useCallback((e: React.MouseEvent) => {
    setEditAnswer(undefined);
    e.stopPropagation();
  }, []);

  const onChangeAnswer = useCallback(
    (e: React.ChangeEvent<HTMLTextAreaElement>) => {
      const targetAnswer = e.target.value;
      setEditAnswer(answer === targetAnswer ? undefined : targetAnswer);
      e.stopPropagation();
    },
    [answer],
  );

  const updateAnswer = useCallback(
    (e: React.MouseEvent) => {
      dispatch({ type: "updateAnswer", answer: editAnswer! });
      setEditAnswer(undefined);
      e.stopPropagation();
    },
    [dispatch, editAnswer],
  );

  const onClickOnSmallAnswer = useCallback(
    (e: React.MouseEvent) => {
      if (!unreviewedCitations) {
        dispatch({ type: "expandAnswerPanel" });
        e.stopPropagation();
      }
    },
    [dispatch, unreviewedCitations],
  );

  const addExcerptToAnswer = (excerpt: string) =>
    setEditAnswer((prev) => (prev ?? answer ?? "") + excerpt);

  const Cancel = () => (
    <HoverableIcon
      DefaultIcon={DismissRegular}
      HoverIcon={DismissFilled}
      key="cancel"
      classes="edit-cancel"
      onClick={cancelEditAnswer}
    />
  );

  const Save = () => (
    <HoverableIcon
      DefaultIcon={CheckmarkRegular}
      HoverIcon={CheckmarkFilled}
      key="save"
      classes="edit-save"
      onClick={updateAnswer}
    />
  );

  return (
    <div id="answer-panel" className={largeSmall(largeAnswerPanel)}>
      <div
        onClick={largeAnswerPanel ? undefined : onClickOnSmallAnswer}
      >
        <Box
          id="answer-and-buttons"
          sx={{
            margin: "0 auto",
            mt: 2,
            padding: "20px 16px",
            border: "1px solid #ccc",
            borderRadius: "4px",
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
          }}
        >
          <Box sx={{ display: "flex", alignItems: "center", width: "100%" }}>
            <Typography
              variant="h6"
              component="div"
              sx={{ flexGrow: 1, fontSize: "1.3em", color: "#63666A" }}
            >
              <span className="question-prefix">
                {prefix ? <>{prefix}.</> : null}
              </span>
              <span className="question-text">{text}</span>
            </Typography>
          </Box>
          <textarea
            ref={answerRef}
            className={`answer-text ${largeSmall(largeAnswerPanel)}`}
            id="edit-answer"
            value={editAnswer ?? answer ?? ""}
            onChange={onChangeAnswer}
            onClick={onClickOnSmallAnswer}
            placeholder={unreviewedCitations
              ? "Before you can answer this question you must review all the suggested citations."
              : "Type your answer here..."}
            disabled={unreviewedCitations}
            style={{
              width: "100%",
              marginTop: "8px",
              padding: "10px",
              fontSize: "1em",
              border: "1px solid #ccc",
              borderRadius: "4px",
              resize: "vertical",
            }}
          />
          {(editAnswer !== undefined) && (
            <>
              <Cancel />
              <Save />
            </>
          )}
        </Box>
      </div>
      <Box
        sx={{
          margin: "0 auto",
          mt: 2,
          padding: "20px 16px",
          border: "1px solid #ccc",
          borderRadius: "4px",
          display: "flex",
          // flexDirection: "column",
          // alignItems: "flex-start",
        }}
      >
        {largeAnswerPanel
          ? (
            <ApprovedCitations
              answer={answer}
              addExcerptToAnswer={addExcerptToAnswer}
            />
          )
          : <ReviewCitations />}
      </Box>
    </div>
  );
};
