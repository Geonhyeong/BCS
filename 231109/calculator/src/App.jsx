import { useState } from "react";
import CalInput from "./components/CalInput";
import CalNumberBtn from "./components/CalNumberBtn";
import CalDelBtn from "./components/CalDelBtn";
import CalOperatorBtn from "./components/CalOperatorBtn";
import CalEnterBtn from "./components/CalEnterBtn";
import CalResetBtn from "./components/CalResetBtn";

const App = () => {
  const [result, setResult] = useState("0");
  const [temp, setTemp] = useState("0");
  const [operator, setOperator] = useState();

  return (
    <main className="bg-pink-200 min-h-screen flex flex-col justify-center items-center">
      <CalResetBtn
        setResult={setResult}
        setTemp={setTemp}
        setOperator={setOperator}
      />
      <div className="bg-gray-300 px-8 pb-12 pt-2 rounded-lg shadow-md">
        <div className="text-right px-4 py-2">{temp}</div>
        <CalInput result={result} setResult={setResult} operator={operator} />
        <div className="gap-4 grid grid-cols-4 mt-8">
          <CalNumberBtn number="1" result={result} setResult={setResult} />
          <CalNumberBtn number="2" result={result} setResult={setResult} />
          <CalNumberBtn number="3" result={result} setResult={setResult} />
          <CalOperatorBtn
            result={result}
            setResult={setResult}
            setTemp={setTemp}
            setOperator={setOperator}
            op="+"
          />
          <CalNumberBtn number="4" result={result} setResult={setResult} />
          <CalNumberBtn number="5" result={result} setResult={setResult} />
          <CalNumberBtn number="6" result={result} setResult={setResult} />
          <CalOperatorBtn
            result={result}
            setResult={setResult}
            setTemp={setTemp}
            setOperator={setOperator}
            op="-"
          />
          <CalNumberBtn number="7" result={result} setResult={setResult} />
          <CalNumberBtn number="8" result={result} setResult={setResult} />
          <CalNumberBtn number="9" result={result} setResult={setResult} />
          <CalOperatorBtn
            result={result}
            setResult={setResult}
            setTemp={setTemp}
            setOperator={setOperator}
            op="*"
          />
          <CalEnterBtn
            temp={temp}
            setTemp={setTemp}
            result={result}
            setResult={setResult}
            operator={operator}
            setOperator={setOperator}
          />
          <CalNumberBtn number="0" result={result} setResult={setResult} />
          <CalDelBtn result={result} setResult={setResult} />
          <CalOperatorBtn
            result={result}
            setResult={setResult}
            setTemp={setTemp}
            setOperator={setOperator}
            op="/"
          />
        </div>
      </div>
    </main>
  );
};

export default App;
