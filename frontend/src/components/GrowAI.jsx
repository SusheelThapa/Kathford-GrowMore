import { useState } from "react";
import Chat from "./Chat";
import { askGrowAI } from "../api/growAI";
import SendMessage from "./SendMessage";

const GrowAI = () => {
  const [messages, setMessages] = useState([]);
  const [message, setMessage] = useState("");
  let allMessages = [];

  const handleSendMessage = async () => {
    allMessages.push({ username: "Susheel Thapa", message: message });
    setMessages(allMessages);

    const response = await askGrowAI(message);
    console.log(message);

    allMessages.push({ username: "growAI", message: response });

    console.log(allMessages);
    setMessages(allMessages);

    setMessage("");
  };
  return (
    <div className="flex flex-col justify-end w-full bg-gray-100  pb-10">
      <Chat messages={messages} />
      <SendMessage
        handleSendMessage={handleSendMessage}
        message={message}
        setMessage={setMessage}
      />
    </div>
  );
};

export default GrowAI;
