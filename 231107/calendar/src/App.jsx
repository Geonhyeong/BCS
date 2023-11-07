import DataCard from "./component/DataCard";
import DateData from "./date.json";

const App = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center">
      <h1 className="mb-12 text-5xl font-bold text-start">2023년 11월</h1>
      <ul className="grid grid-cols-7 gap-4">
        <li className="w-48 h-48"></li>
        <li className="w-48 h-48"></li>
        <li className="w-48 h-48"></li>
        {DateData.map((v, i) => {
          return <DataCard key={i} date={v.date} todos={v.todos} />;
        })}
      </ul>
    </div>
  );
};

export default App;
