import "./FormQuestion.css";
import {
    largeSmall,
    useLoadForm,
    useAppStateValue,
    useAsyncStateMachine,
  } from "../State";
  import { AnswerPanel } from "../components/AnswerPanel";
  import { useParams } from "react-router";
  import { FormStatus, LoadedState } from "../Types";
  import { Container, Box } from "@mui/material";
  
  
  export const FormQuestion = () => {
    const { formId, questionId } = useParams();
    useLoadForm(Number(formId), Number(questionId));
    const { formStatus } = useAppStateValue();
    
    return formStatus == FormStatus.None ? (
      <div>NO FORM</div>
    ) : formStatus == FormStatus.Error ? (
      <div>ERROR</div>
    ) : formStatus == FormStatus.Loading ? (
      <div>LOADING</div>
    ) : (
      <QandA/>
    );
  }
  
  const QandA = () => {
    useAsyncStateMachine();
    const { ux: {largeQuestionPanel}} = useAppStateValue() as LoadedState;
  
    return (
      <div>
        <Container>
          <Box mt={2}>
            <div
              id="app"
              className={`question-${largeSmall(largeQuestionPanel)} `}
            >
              <AnswerPanel />
            </div>
          </Box>
        </Container>
      </div>
    );
  }