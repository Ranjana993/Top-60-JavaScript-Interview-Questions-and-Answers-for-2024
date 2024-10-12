import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Layout from "./Pages/Layout";
import HtmlConceptsPage from "./components/HTML/HtmlConceptsPage";
import JavaScriptConceptsPage from "./components/JavaScript/JavaScriptConceptsPage";

export default function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Layout />} />
        <Route path="/html-concepts" element={<HtmlConceptsPage />} />
        <Route path="/js-concepts" element={<JavaScriptConceptsPage />} />
        <Route path="/react.js-concepts" element={<JavaScriptConceptsPage />} />
      </Routes>
    </>
  );
}
