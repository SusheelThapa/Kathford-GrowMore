const Chat = ({ messages }) => {
  return (
    <div className="flex flex-col items-start gap-2.5 w-full px-20 py-5">
      {messages.map((message, index) => {
        return (
          <div key={index}>
            <div className="flex flex-col  w-3/4  leading-1.5 p-4 border-gray-200 bg-gray-100 rounded-e-xl rounded-es-xl dark:bg-gray-600 hover:bg-gray-700">
              <div className="flex items-center space-x-2 rtl:space-x-reverse">
                <span className="text-sm font-semibold text-gray-900 dark:text-white">
                  {message.username}
                </span>
              </div>
              <p className="text-sm font-normal py-2.5 text-gray-900 dark:text-white">
                {message.message}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Chat;
