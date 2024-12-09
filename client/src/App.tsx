import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { MainLayout } from "./layouts/MainLayout";
import { Form } from "./pages/Form";
import { SimpleFormQuestion } from "./pages/SimpleFormQuestion";
import { Home } from "./pages/Home";
// import { MainLayout } from "./layouts/MainLayout";

export const App = () => {
  return (
    <Router>
      <MainLayout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path=":formId" element={<Form />} />
          <Route path=":formId/:questionId" element={<SimpleFormQuestion />} />
        </Routes>
      </MainLayout>
    </Router>
  );
};
