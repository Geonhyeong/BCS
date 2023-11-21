import { FaSearch, FaCaretDown } from "react-icons/fa";

const HeaderTop = () => {
  return (
    <div className="bg-[#212227] h-16">
      <div className="max-w-[1080px] h-full mx-auto flex justify-between items-center">
        <div className="flex gap-2">
          <img src="https://cdn.dak.gg/er/images/gnb/dakgg.svg" alt="dak.gg" />
          <div className="px-3 py-2 bg-[#FFFFFF1A] inline-flex gap-2 h-8 justify-center items-center cursor-pointer rounded-full">
            <img
              className="w-5 h-5"
              src="https://cdn.dak.gg/er/images/gnb/family/ico-er.svg"
            />
            <div className=" text-sm font-semibold text-white">이터널 리턴</div>
            <FaCaretDown color="#fff" size="10" />
          </div>
        </div>
        <div className="flex gap-2">
          <form className="h-8 w-[250px] flex rounded-[4px] bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
            <input
              className="m-[1px] mr-0 py-[9px] pl-[11px] w-full text-xs bg-[#2D2F37] outline-none text-white rounded-l-[4px]"
              type="text"
              placeholder="플레이어 닉네임을 입력해주세요."
            ></input>
            <button className="m-[1px] ml-0 w-[31px] py-[9px] pl-2 pr-[11px] bg-[#2D2F37] rounded-r-[4px]">
              <FaSearch color="#fff" size="12" />
            </button>
          </form>
          <button
            className="w-8 h-8 border border-white border-opacity-10 rounded-[4px]"
            onClick={(e) => e.preventDefault()}
          >
            <svg
              className="m-auto"
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8 0.5C3.85685 0.5 0.5 3.85685 0.5 8C0.5 12.1431 3.85685 15.5 8 15.5C12.1431 15.5 15.5 12.1431 15.5 8C15.5 3.85685 12.1431 0.5 8 0.5ZM13.8367 5.09677H11.3266C11.0544 3.76613 10.6008 2.61694 10.0262 1.8004C11.6895 2.375 13.0504 3.55444 13.8367 5.09677ZM10.6613 8C10.6613 8.69556 10.6008 9.36089 10.5101 9.93548H5.45968C5.36895 9.36089 5.33871 8.69556 5.33871 8C5.33871 7.33468 5.36895 6.66935 5.45968 6.06452H10.5101C10.6008 6.66935 10.6613 7.33468 10.6613 8ZM8 1.46774C8.78629 1.46774 9.84476 2.82863 10.3589 5.09677H5.61089C6.125 2.82863 7.18347 1.46774 8 1.46774ZM5.94355 1.8004C5.36895 2.61694 4.91532 3.76613 4.64315 5.09677H2.13306C2.91935 3.55444 4.28024 2.375 5.94355 1.8004ZM1.46774 8C1.46774 7.33468 1.55847 6.6996 1.73992 6.06452H4.49194C4.40121 6.6996 4.37097 7.33468 4.37097 8C4.37097 8.69556 4.40121 9.33064 4.49194 9.93548H1.73992C1.55847 9.33064 1.46774 8.69556 1.46774 8ZM2.13306 10.9032H4.64315C4.91532 12.2641 5.36895 13.4133 5.94355 14.2298C4.28024 13.6552 2.91935 12.4758 2.13306 10.9032ZM8 14.5323C7.18347 14.5323 6.125 13.2016 5.61089 10.9032H10.3589C9.84476 13.2016 8.78629 14.5323 8 14.5323ZM10.0262 14.2298C10.6008 13.4133 11.0544 12.2641 11.3266 10.9032H13.8367C13.0504 12.4758 11.6895 13.6552 10.0262 14.2298ZM11.4778 9.93548C11.5685 9.33064 11.629 8.69556 11.629 8C11.629 7.33468 11.5685 6.6996 11.4778 6.06452H14.2298C14.4113 6.6996 14.5323 7.33468 14.5323 8C14.5323 8.69556 14.4113 9.33064 14.2298 9.93548H11.4778Z"
                fill="white"
              ></path>
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeaderTop;
