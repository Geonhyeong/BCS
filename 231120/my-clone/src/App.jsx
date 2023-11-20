const App = () => {
  return (
    <div className="bg-gray-100">
      <header className="bg-red-100 max-w-[1080px] mx-auto h-28"></header>
      <div className="bg-yellow-100 h-[350px]">Banner</div>
      <div className="bg-green-100 max-w-[1080px] mx-auto pt-10 pb-20">
        <section className="bg-white mb-10">
          <div className="bg-blue-100 h-[120px] mb-10">banner</div>
          <div className="bg-pink-100">
            <div className="mb-4">최신 루트</div>
            <ul className="grid grid-cols-2 gap-2">
              <li className="bg-yellow-100 w-[536px] h-[70px]">Route Card</li>
              <li className="bg-yellow-100 w-[536px] h-[70px]">Route Card</li>
              <li className="bg-yellow-100 w-[536px] h-[70px]">Route Card</li>
              <li className="bg-yellow-100 w-[536px] h-[70px]">Route Card</li>
              <li className="bg-yellow-100 w-[536px] h-[70px]">Route Card</li>
              <li className="bg-yellow-100 w-[536px] h-[70px]">Route Card</li>
              <li className="bg-yellow-100 w-[536px] h-[70px]">Route Card</li>
              <li className="bg-yellow-100 w-[536px] h-[70px]">Route Card</li>
              <li className="bg-yellow-100 w-[536px] h-[70px]">Route Card</li>
              <li className="bg-yellow-100 w-[536px] h-[70px]">Route Card</li>
            </ul>
          </div>
        </section>
        <table className="bg-white w-full">
          <caption className="bg-pink-100 mb-4 text-left">
            <div>Ranking</div>
          </caption>
          <thead className="bg-gray-300">
            <tr className="h-[44px]">table head</tr>
          </thead>
          <tbody className="bg-gray-200">
            <tr className="h-[66px]">table body</tr>
            <tr className="h-[66px]">table body</tr>
            <tr className="h-[66px]">table body</tr>
            <tr className="h-[66px]">table body</tr>
            <tr className="h-[66px]">table body</tr>
          </tbody>
        </table>
        <div className="bg-pink-100 h-[30px] py-2">더 보기</div>
      </div>
      <footer className="bg-blue-100 max-w-[1080px] mx-auto h-[76px]">
        Footer
      </footer>
    </div>
  );
};

export default App;
