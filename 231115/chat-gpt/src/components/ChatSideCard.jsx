import { useState } from "react";
import { CgCloseR } from "react-icons/cg";

const ChatSideCard = ({ question, answer }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const onClickModal = () => {
    setIsModalOpen(true);
  };

  const onClickClose = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <li
        className="mb-2 truncate cursor-pointer hover:font-bold"
        onClick={onClickModal}
      >
        {question}
      </li>
      {isModalOpen && (
        <div className=" fixed top-0 left-0 bg-black bg-opacity-20 w-full h-full z-10 flex justify-center items-center">
          <div className="bg-white rounded-lg max-w-3xl max-h-[1024px] p-4 overflow-auto flex flex-col">
            <button className="self-end mb-4" onClick={onClickClose}>
              <CgCloseR size={20} />
            </button>
            <div className="font-bold border-b-2 border-gray-400 pb-2">
              Q. {question}
            </div>
            <div className=" mt-2 whitespace-pre-wrap">A. {answer}</div>
          </div>
        </div>
      )}
    </>
  );
};

export default ChatSideCard;
