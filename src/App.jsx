import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Layout from "./Pages/Layout";
import HtmlConceptsPage from "./components/HTML/HtmlConceptsPage";

export default function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Layout />} />
        <Route path="/html-concepts" element={<HtmlConceptsPage />} />
      </Routes>
    </>
  );
}
