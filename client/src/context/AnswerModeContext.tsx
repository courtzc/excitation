import React, { createContext, useState, useContext, useEffect } from 'react';

const AnswerModeContext = createContext();

export const AnswerModeProvider = ({ children }) => {
  const [answerMode, setAnswerMode] = useState(false);

  const turnOnAnswerMode = () => {
    setAnswerMode(true);
  };

  const turnOffAnswerMode = () => {
    setAnswerMode(false);
  };

  useEffect(() => {
    console.log('Answer mode is: ', answerMode);
  }, [answerMode]);

  return (
    <AnswerModeContext.Provider value={{ answerMode, turnOnAnswerMode, turnOffAnswerMode }}>
      {children}
    </AnswerModeContext.Provider>
  );
};

export const useAnswerMode = () => useContext(AnswerModeContext);