import EllipsisIcon from "../icons/EllipsisIcon";

const Header = () => {
  return (
    <header className="bg-white h-16 border-b sticky top-0">
      <div className="max-w-screen-xl mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <div className="h-16 p-6">
            <img
              className="h-full"
              src="./images/techit_logo.svg"
              alt="techit_logo"
            ></img>
          </div>
          <ul className="hidden lg:flex">
            <li className="header-menu">테킷 스쿨</li>
            <li className="header-menu relative">
              <div className="absolute right-2 -top-3 w-4 h-4 flex justify-center items-center rounded-full bg-[#ef4444] text-white text-[10px]">
                N
              </div>
              온보딩 트랙
            </li>
            <li className="header-menu">스타트업 스테이션</li>
            <li className="header-menu border-r">이벤트</li>
            <li className="header-menu">기업 해커톤</li>
          </ul>
        </div>
        <div className="hidden lg:block">
          <button className="font-semibold">로그인</button>
        </div>
        <div className="flex mr-2 gap-4 lg:hidden">
          <button className="text-sm font-semibold border rounded-full px-4 py-2">
            로그인
          </button>
          <EllipsisIcon />
        </div>
      </div>
    </header>
  );
};

export default Header;
