import Slider from "react-slick";
import BannerCard from "./BannerCard";
import { useEffect, useRef, useState } from "react";

const bannerData = [
  {
    title: "TECHIT IT 직무 부트캠프 사전알림",
    desc: "알림 소식 받고, 부트캠프 소식 놓치지 않기!",
    image: "banner_1",
  },
  {
    title: "TECHIT 카카오톡 채널 추가 이벤트",
    desc: "개발자 성장에 필요한 모든 것이 담긴 시크릿 페이지 제공",
    image: "banner_2",
  },
  {
    title: "앱 스쿨 : Android 2기",
    desc: "탄탄한 기본기와 프로젝트 경험을 갖춘 온리원 앱 개발자로 가는 길",
    image: "banner_3",
  },
  {
    title: "TECHIT 온보딩 트랙",
    desc: "수강료 0원 & 취준생, 직장인 누구나 수강 가능한 기초 과정!",
    image: "banner_4",
  },
  {
    title: "DX 교육의 모든 솔루션, 기업 해커톤",
    desc: "상담 신청하고, 테킷 기업 교육을 경험해 보세요!",
    image: "banner_5",
  },
];

const Banner = () => {
  const sliderRef = useRef();
  const [page, setPage] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setPage(sliderRef.current.innerSlider.state.currentSlide);
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div>
      <ul>
        <Slider
          ref={sliderRef}
          arrows={false}
          autoplay={true}
          autoplaySpeed={5000}
          fade={true}
        >
          {bannerData.map((v, i) => {
            return (
              <BannerCard
                key={i}
                title={v.title}
                desc={v.desc}
                image={v.image}
                page={page}
                setPage={setPage}
                sliderRef={sliderRef}
                length={bannerData.length}
              />
            );
          })}
        </Slider>
      </ul>
    </div>
  );
};

export default Banner;
