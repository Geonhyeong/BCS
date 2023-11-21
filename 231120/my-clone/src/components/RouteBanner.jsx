const RouteBanner = () => {
  return (
    <div className="bg-blue-100 h-[120px] mb-10 rounded relative">
      <img
        className="absolute left-0 top-0 w-full h-full object-fit z-0"
        src="https://cdn.dak.gg/er/images/bg/bg-banner-route.jpg"
        alt="banner-route"
      />
      <div className="w-full absolute z-10 flex justify-center items-center">
        <img
          className="mr-[50px]"
          src="https://cdn.dak.gg/er/images/common/img-banner-route.png"
        />
        <div className="text-white text-2xl mr-4">
          <p>
            내 최애의 <strong className="text-[#e09500]">최신 루트</strong>를
            확인하세요!
          </p>
        </div>
        <button className="flex bg-[#e09500] text-white px-4 h-10 items-center justify-center rounded gap-[6px]">
          <div className="text-base">루트 바로가기</div>
          <svg
            width="12"
            height="12"
            viewBox="0 0 13 13"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <path
              d="M5.69531 1.58203C5.42188 1.85547 5.44922 2.26562 5.69531 2.53906L9.00391 5.65625H1.15625C0.773438 5.65625 0.5 5.95703 0.5 6.3125V7.1875C0.5 7.57031 0.773438 7.84375 1.15625 7.84375H9.00391L5.69531 10.9883C5.44922 11.2617 5.44922 11.6719 5.69531 11.9453L6.29688 12.5469C6.57031 12.793 6.98047 12.793 7.22656 12.5469L12.5586 7.21484C12.8047 6.96875 12.8047 6.55859 12.5586 6.28516L7.22656 0.980469C6.98047 0.734375 6.57031 0.734375 6.29688 0.980469L5.69531 1.58203Z"
              fill="#fff"
            ></path>
          </svg>
        </button>
      </div>
    </div>
  );
};

export default RouteBanner;
