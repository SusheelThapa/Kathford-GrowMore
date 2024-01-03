import Chat from "./Chat";
import SendMessage from "./SendMessage";

const Messages = () => {
  const messages = [
    {
      username: "Susheel Thapa(Investor)",
      message:
        "Hey, I came across your pitch deck and found your startup intriguing. Can we set up a meeting to discuss the details and explore potential investment opportunities?",
    },
    {
      username: "Ujjwal Jha(Startup)",
      message:
        "Hi ! Absolutely, I'd love to connect. How about a virtual meeting next Tuesday at 3 PM? I can walk you through our vision and answer any questions you might have.",
    },
    {
      username: "Susheel Thapa(Investor)",
      message:
        "Sounds good! Looking forward to it. Before our meeting, could you share some key financial metrics and market analysis? It will help me prepare better for our discussion.",
    },
    {
      username: "Ujjwal Jha(Startup)",
      message:
        "Sure thing,! I'll send over the financials and market analysis by tomorrow. If there's anything specific you'd like to focus on, let me know so I can provide more detailed insights.",
    },
    {
      username: "Susheel Thapa(Investor)",
      message:
        "Thanks! I'm particularly interested in your user acquisition strategy and the competitive landscape. Let's make our meeting productive.",
    },
    {
      username: "Ujjwal Jha(Startup)",
      message:
        "Absolutely! I'll make sure to cover those aspects in detail. Looking forward to our discussion next week!",
    },
  ];
  return (
    <div className="flex flex-col justify-end w-full bg-gray-100  pb-10">
      <Chat messages={messages} />
      <SendMessage
        handleSendMessage={() => {}}
        message={""}
        setMessage={() => {}}
      />
    </div>
  );
};

export default Messages;
