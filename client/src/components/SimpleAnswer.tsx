import React, { useState } from 'react';
import { Box, TextField, Button } from '@mui/material';

export const SimpleAnswer = () => {
  const [answer, setAnswer] = useState('');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAnswer(event.target.value);
  };

  return (
    <Box>
      <TextField
        label="Your Answer"
        variant="outlined"
        value={answer}
        onChange={handleChange}
        fullWidth
        sx={{ mb: 2 }}
      />
    </Box>
  );
};