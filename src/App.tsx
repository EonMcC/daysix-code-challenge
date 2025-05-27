import { BrowserRouter, Route, Routes } from "react-router";
import "./styles/theme.scss";
import "./styles/button.scss";
import "./styles/form-elements.scss";
import { List } from "./screens/list/list";
import { Test } from "./screens/test/test";
import { Result } from "./screens/result/Result";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<List />} />
        <Route path="/test" element={<Test />} />
        <Route path="/result" element={<Result />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
