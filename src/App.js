import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import FeedbackData from "./data/FeedbackData";
import Header from "./components/Header";
import FeedbackItem from "./components/FeedbackItem";

function App() {
  const [feedback, setFeedback] = useState(FeedbackData);
  console.log(feedback);

  return (
    <BrowserRouter>
      <Header />
      <div className="container">
        <Routes>
          <Route exact path="/" element={<FeedbackItem />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
