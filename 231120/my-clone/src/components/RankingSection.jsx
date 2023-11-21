const RankingSection = () => {
  const columns = [
    "랭크",
    "플레이어",
    "티어",
    "RP",
    "평균 순위",
    "TOP 3",
    "평균 킬",
    "모스트 실험체",
  ];

  return (
    <section>
      <table className="w-full text-xs">
        <caption className="mb-4">
          <div className="flex justify-between items-center">
            <div className=" text-base">정규시즌2 랭킹</div>
            <div className="text-[#646464]">최근 업데이트: 방금</div>
          </div>
        </caption>
        <thead className="bg-[#363944] text-white">
          <tr className="h-[44px]">
            {columns.map((v, i) => (
              <th key={i}>{v}</th>
            ))}
          </tr>
        </thead>
        <tbody className="bg-gray-200">
          <tr className="h-[66px]">table body</tr>
          <tr className="h-[66px]">table body</tr>
          <tr className="h-[66px]">table body</tr>
          <tr className="h-[66px]">table body</tr>
          <tr className="h-[66px]">table body</tr>
        </tbody>
      </table>
      <button
        className="bg-[#fafafa] hover:bg-[#f0f0f0] h-[30px] w-full py-2 flex justify-center items-center gap-1 text-[#646464] text-xs"
        onClick={(e) => e.preventDefault()}
      >
        <svg
          width="11"
          height="11"
          viewBox="0 0 11 11"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M9.75 4.375H6.375V1C6.375 0.601562 6.02344 0.25 5.625 0.25H4.875C4.45312 0.25 4.125 0.601562 4.125 1V4.375H0.75C0.328125 4.375 0 4.72656 0 5.125V5.875C0 6.29688 0.328125 6.625 0.75 6.625H4.125V10C4.125 10.4219 4.45312 10.75 4.875 10.75H5.625C6.02344 10.75 6.375 10.4219 6.375 10V6.625H9.75C10.1484 6.625 10.5 6.29688 10.5 5.875V5.125C10.5 4.72656 10.1484 4.375 9.75 4.375Z"
            fill="#646464"
          ></path>
        </svg>
        더 보기
      </button>
    </section>
  );
};

export default RankingSection;
