import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import FeedbackData from "./data/FeedbackData";
import Header from "./components/Header";
import FeedbackList from "./components/FeedbackList";
import FeedbackStats from "./components/FeedbackStats";

function App() {
  const [feedback, setFeedback] = useState(FeedbackData);
  console.log(feedback);

  const deleteFeedback = (id) =>{
    if(window.confirm("Are you sure you want to delete?")) {
      setFeedback(feedback.filter((item) => item.id !== id))
      //we will return an array  minus the one we are deleting
    }
  }

  return (
    <BrowserRouter>
      <Header />
      <div className="container">
        <Routes>
          <Route 
          exact 
          path="/" 
          element=
          { 
            <> 
            <FeedbackStats/>
            <FeedbackList 
              feedback={feedback}
              handleDelete={deleteFeedback}
            />          
          </>
          }
        />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
