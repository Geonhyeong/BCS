import { useEffect, useRef, useState } from "react";
import ChatCard from "./ChatCard";
import { FiArrowDownCircle } from "react-icons/fi";

const ChatView = ({ chatList }) => {
  const ulRef = useRef();
  const [isScrollBottom, setIsScrollBottom] = useState(true);

  const goDown = () => {
    ulRef.current.scrollTop = ulRef.current.scrollHeight;
    setIsScrollBottom(true);
  };

  useEffect(() => {
    goDown();
  }, [chatList]);

  const onClickDown = () => {
    goDown();
  };

  useEffect(() => {
    if (!ulRef.current) return;

    const getScrollState = () => {
      if (ulRef.current.scrollTop != ulRef.current.scrollHeight)
        setIsScrollBottom(false);
      else setIsScrollBottom(true);
    };

    ulRef.current?.addEventListener("scroll", getScrollState);
    return () => {
      ulRef.current?.removeEventListener("scroll", getScrollState);
    };
  }, [ulRef.current]);

  return (
    <div className="flex">
      <div className="h-screen w-[800px] flex flex-col justify-end">
        <ul ref={ulRef} className="mb-24 overflow-y-auto">
          {chatList.length === 0
            ? ""
            : chatList.map((v, i) => (
                <ChatCard key={i} answer={v.answer} question={v.question} />
              ))}
        </ul>
      </div>
      <button
        className="w-[0px] self-end mb-24"
        onClick={onClickDown}
        disabled={isScrollBottom}
      >
        <FiArrowDownCircle
          size={24}
          color={`${isScrollBottom ? "gray" : "black"}`}
        />
      </button>
    </div>
  );
};

export default ChatView;
