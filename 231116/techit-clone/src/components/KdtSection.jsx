import KdtCard from "./KdtCard";
import TitleBar from "./TitleBar";

const KdtSection = () => {
  return (
    <section className="mt-20 bg-green-100 max-w-screen-xl mx-auto px-6">
      <TitleBar title="KDT 테킷 스쿨" desc="K-Digital Training 부트캠프" />
      <div className="bg-purple-100 grid grid-cols-4 gap-6 justify-items-center">
        <KdtCard />
      </div>
    </section>
  );
};

export default KdtSection;
