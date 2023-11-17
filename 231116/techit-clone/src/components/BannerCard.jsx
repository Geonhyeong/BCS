import PrevIcon from "../icons/PrevIcon";
import NextIcon from "../icons/NextIcon";

const BannerCard = ({
  title,
  desc,
  image,
  page,
  setPage,
  sliderRef,
  length,
}) => {
  const onClickPrev = () => {
    sliderRef.current.slickPrev();
    setPage(sliderRef.current.innerSlider.state.currentSlide);
  };

  const onClickNext = () => {
    sliderRef.current.slickNext();
    setPage(sliderRef.current.innerSlider.state.currentSlide);
  };

  return (
    <li className="relative h-[400px]">
      <div className="container flex flex-col h-full justify-center relative">
        <h3 className="text-[32px] font-bold">{title}</h3>
        <h5 className="text-[18px] mt-2">{desc}</h5>
        <div className="absolute px-6 left-0 bottom-6">
          <div className="text-white bg-black w-fit bg-opacity-30 flex text-xs rounded-full gap-2 px-3 py-[5px]">
            <div>
              {page + 1} / {length}
            </div>
            <button onClick={onClickPrev}>
              <PrevIcon />
            </button>
            <button onClick={onClickNext}>
              <NextIcon />
            </button>
          </div>
        </div>
      </div>
      <img
        className="absolute top-0 left-0 w-full h-full object-cover -z-10"
        src={`./images/${image}.webp`}
        alt={image}
      />
    </li>
  );
};

export default BannerCard;
