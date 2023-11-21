import Banner from "./components/Banner";
import Beacon from "./components/Beacon";
import Footer from "./components/Footer";
import Header from "./components/Header";
import RankingSection from "./components/RankingSection";
import RouteSection from "./components/RouteSection";

const App = () => {
  return (
    <div className="bg-[#f5f5f5] font-pretendard">
      <Header />
      <Banner />
      <div className="max-w-[1080px] mx-auto pt-10 pb-20">
        <RouteSection />
        <RankingSection />
      </div>
      <Footer />
      <Beacon />
    </div>
  );
};

export default App;
