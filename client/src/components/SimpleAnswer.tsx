import React, { useState } from 'react';
import { Box, TextField } from '@mui/material';
import { useAnswerMode } from '../context/AnswerModeContext';
import './SimpleAnswer.css';

export const SimpleAnswer = () => {
  const [answer, setAnswer] = useState('');
  const { answerMode, turnOnAnswerMode } = useAnswerMode();


  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAnswer(event.target.value);
  };

  const handleClick = () => {
    turnOnAnswerMode();
  };

  return (
    <Box>
      <TextField
        label="Your Answer"
        variant="outlined"
        value={answer}
        onChange={handleChange}
        onClick={handleClick}
        fullWidth
        className={`answer-box ${answerMode ? 'tall' : ''}`}
        multiline
        rows={answerMode ? 5 : 1} /* Adjust the number of rows as needed */
      />
    </Box>
  );
};