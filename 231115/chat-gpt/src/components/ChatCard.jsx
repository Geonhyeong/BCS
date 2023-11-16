const ChatCard = ({ answer, question }) => {
  return (
    <li className="flex flex-col gap-4 mb-6">
      <div className="bg-yellow-200 self-end ml-64 mr-4 p-2 rounded-md shadow-lg">
        {question}
      </div>
      <div className="bg-green-100 self-start ml-4 mr-64 p-2 rounded-md shadow-lg whitespace-pre-wrap">
        {answer}
      </div>
    </li>
  );
};

export default ChatCard;
