const Banner = () => {
  return (
    <div className="h-[350px] relative bg-cover bg-center bg-no-repeat">
      <div className="absolute w-full flex h-full justify-center bg-[#161618] z-0">
        <img
          className="h-full w-auto object-cover"
          src="https://cdn.dak.gg/er/images/bg/bg-landing-search-v2.jpg"
          alt="banner"
        />
      </div>
      <div className="max-w-[1080px] mx-auto h-full flex flex-col justify-center items-center absolute w-full z-10 left-1/2 -translate-x-[540px]">
        <img
          className="mb-8 w-40 h-10"
          src="https://cdn.dak.gg/er/images/logo/logo-dakgg.svg"
          alt="DAK.GG"
        />
        <form className="h-[50px] w-[527px] flex px-4 bg-white">
          <input
            className="w-full pr-4 text-sm outline-none"
            type="text"
            placeholder="플레이어 닉네임을 입력해주세요."
          ></input>
          <button onClick={(e) => e.preventDefault()}>
            <svg
              width="20"
              height="20"
              viewBox="0 0 15 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M13.8086 12.8633L11.0742 10.1289C10.9375 10.0195 10.7734 9.9375 10.6094 9.9375H10.1719C10.9102 8.98047 11.375 7.77734 11.375 6.4375C11.375 3.32031 8.80469 0.75 5.6875 0.75C2.54297 0.75 0 3.32031 0 6.4375C0 9.58203 2.54297 12.125 5.6875 12.125C7 12.125 8.20312 11.6875 9.1875 10.9219V11.3867C9.1875 11.5508 9.24219 11.7148 9.37891 11.8516L12.0859 14.5586C12.3594 14.832 12.7695 14.832 13.0156 14.5586L13.7812 13.793C14.0547 13.5469 14.0547 13.1367 13.8086 12.8633ZM5.6875 9.9375C3.74609 9.9375 2.1875 8.37891 2.1875 6.4375C2.1875 4.52344 3.74609 2.9375 5.6875 2.9375C7.60156 2.9375 9.1875 4.52344 9.1875 6.4375C9.1875 8.37891 7.60156 9.9375 5.6875 9.9375Z"
                fill="#363944"
              ></path>
            </svg>
          </button>
        </form>
        <p className="max-w-[527px] flex text-xs text-white text-center my-2 items-center">
          <svg
            className="mr-1"
            xmlns="http://www.w3.org/2000/svg"
            height="1em"
            fill="#ffffff"
            viewBox="0 0 512 512"
          >
            <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM216 336h24V272H216 192V224h24 48 24v24 88h8 24v48H296 216 192V336h24zm72-144H224V128h64v64z"></path>
          </svg>
          쉼표(,)로 구분하여 여러 플레이어 닉네임을 입력하면 멀티서치로
          이동합니다.
        </p>
      </div>
    </div>
  );
};

export default Banner;
