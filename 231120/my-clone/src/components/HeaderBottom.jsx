const HeaderBottom = () => {
  return (
    <div className="bg-[#27282E] h-12">
      <div className="max-w-[1080px] mx-auto text-white h-full">
        <ul className="w-full h-full flex gap-5 items-center text-sm font-semibold text-[#cfd1d7]">
          <li className="cursor-pointer border-b">메인</li>
          <li className="cursor-pointer">순위표</li>
          <li className="cursor-pointer">가이드</li>
          <li className="cursor-pointer">통계</li>
          <li className="cursor-pointer">루트</li>
          <li className="cursor-pointer">즐겨찾기</li>
          <li className="cursor-pointer">멀티서치</li>
          <li className="cursor-pointer text-[#49e049]">파티 찾기</li>
          <li className="cursor-pointer text-[#f98d5f] flex items-center gap-1">
            <span>시즌 성적표</span>
            <svg
              width="12"
              height="12"
              viewBox="0 0 12 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect width="12" height="12" rx="2" fill="#f98d5f"></rect>
              <path
                d="M8.57145 3H7.30276V6.81215H7.24316L4.55252 3H3.42859V9H4.70579V5.18785H4.75688L7.46454 9H8.57145V3Z"
                fill="black"
              ></path>
            </svg>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default HeaderBottom;
