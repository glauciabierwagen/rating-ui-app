import { createContext, useState, useEffect } from "react";

const FeedbackContext = createContext();

export const FeedbackProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [feedback, setFeedback] = useState([]);
  // that is now the source of truth

  useEffect(() => {
    fetchFeedback();
  }, []);
  // dont pass anything to the array cause loading feedbacks should only be donce once

  const fetchFeedback = async () => {
    const response = await fetch(`/feedback`);
    const data = await response.json();

    setFeedback(data);
    setIsLoading(false);
  };

  return (
    <FeedbackContext.Provider
      value={{
        feedback,
        isLoading,
      }}
    >
      {children}
    </FeedbackContext.Provider>
  );
};

export default FeedbackContext;
