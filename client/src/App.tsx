import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { MainLayout } from "./layouts/MainLayout";
import { Form } from "./pages/Form";
import { FormQuestion } from "./pages/FormQuestion";
import { Home } from "./pages/Home";

export const App = () => {
  return (

      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path=":formId" element={<Form />} />
          <Route path=":formId/:questionId" element={<FormQuestion />} />
        </Route>
      </Routes>
  );
};
