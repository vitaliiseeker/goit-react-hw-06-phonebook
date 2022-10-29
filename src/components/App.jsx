import { Routes, Route, Navigate } from "react-router-dom";
import { Layout } from './Layout/Layout';
import { PhonebookPage } from "../pages/PhonebookPage/PhonebookPage";
import { AboutPage } from "../pages/AboutPage/AboutPage";

export const App = () => {

  return (
    <>
      <Routes >
        <Route path="/" element={<Layout />}>
          <Route index element={<PhonebookPage />} />
          <Route path="about" element={<AboutPage />} />
        </Route>
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </>
  );
}
