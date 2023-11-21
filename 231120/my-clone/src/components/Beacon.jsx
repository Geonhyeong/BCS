import { FaComment } from "react-icons/fa";

const Beacon = () => {
  return (
    <button className="fixed bottom-8 right-8 w-[60px] h-[60px] bg-[#e09500] rounded-full flex justify-center items-center shadow-md">
      <FaComment className=" flip" size="24" color="#fff" />
    </button>
  );
};

export default Beacon;
