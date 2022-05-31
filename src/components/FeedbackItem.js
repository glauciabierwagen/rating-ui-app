import { useState } from "react";
import {FaTimes} from "react-icons/fa"
import Card from "./Card";

const FeedbackItem = ({ item, handleDelete }) => {
  //const [rating, setRating] = useState(8);
  //const [text, setText] = useState("This is an example of a feedback item");
  return (
    <Card>
      <div className="num-display">{item.rating}</div>
      <button onClick={() => handleDelete(item.id)} className="close"> <FaTimes color="#000089"/></button>
      <div className="text-display">{item.text}</div>
    </Card>
   
  );
};

export default FeedbackItem;
