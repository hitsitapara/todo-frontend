import "antd/dist/reset.css";

import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import TodoPage from "./pages/TodoPage";

function App() {
  return (
    <div className="m-10">
      <Router>
        <Routes>
          <Route path="/" element={<TodoPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
