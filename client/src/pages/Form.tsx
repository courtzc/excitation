import { useParams, Link } from "react-router";
import { useAppState, useAppStateValue, useLoadForm } from "../State";
import { FormStatus, LoadedState } from "../Types";
import { Breadcrumbs } from "../components/Breadcrumbs";
import { Header } from "../components/Header";
import './Form.css';

import { ChevronRight24Regular } from '@fluentui/react-icons';
// import { Container, Typography, CircularProgress, Alert, List, ListItem, ListItemText, Divider } from "@mui/material";
import { Container, Typography, CircularProgress, Alert, List, ListItem, ListItemText, Divider, Box, ListItemIcon } from "@mui/material";



export const Form = () => {
  const { formId } = useParams();
  useLoadForm(Number(formId));
  const { formStatus } = useAppStateValue();

  return formStatus == FormStatus.None ? (
    <div>NO FORM</div>
  ) : formStatus == FormStatus.Error ? (
    <div>ERROR</div>
  ) : formStatus == FormStatus.Loading ? (
    <div>LOADING</div>
  ) : (
    <FormView formId={formId!} />
  );
};

interface Props {
  formId: string;
}

const FormView = ({ formId }: Props) => {
  const [state] = useAppState();

  const {
    questions,
    metadata: { templateName, formName },
  } = state as LoadedState;
      
  return (
      <div>
        <Header />
        <Breadcrumbs breadcrumbs={[["Home", "/"], ["Form"]]} />
        <Typography variant="h4" component="h3" gutterBottom align="center" className="typography-padding">
          {templateName}: {formName}
        </Typography>
        <List sx={{width: '80%', margin: '0 auto'}}>
          {questions.map(({ prefix, text, answer }, questionIndex) => (
            <Link to={`/${formId}/${questionIndex}`} key={questionIndex} style={{ textDecoration: 'none' }}>
              <ListItem button sx={{ padding: '20px 16px' }}>
                <ListItemText
                  primary={`${prefix}. ${text}`}
                  secondary={answer ? answer : null}
                  primaryTypographyProps={{ style: { fontSize: '1.3em',  color: '#63666A' } }}
                  secondaryTypographyProps={{ style: { color: 'grey' } }}
                />
              <ListItemIcon>
                <ChevronRight24Regular />
                </ListItemIcon>
              </ListItem>
              {questionIndex < questions.length - 1 && <Divider />}
            </Link>
          ))}
        </List>
        </div>

  );
};
