import { useEffect, useState } from "react";

const Box = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      console.log(count);
      setCount(count + 1);
    }, 1000);

    //return () => clearTimeout(timer);
  }, [count]);

  //     // 1번 => 어떤 변화가 있을 때마다 다시 렌더링되면서 실행한다.
  //     useEffect(() => {
  //       console.log(`Count : ${count}`);
  //     });

  //     // 2번 => 처음 렌더링될 때만 실행한다. 의존성 배열에 아무 변수도 없기 때문에 count값이 변해서 다시 렌더링되지만 함수가 실행하지 않는다.
  //     useEffect(() => {
  //       console.log(`Count : ${count}`);
  //     }, []);

  //     // 3번 => count값이 변화가 있을 때 렌더링되면서 실행한다.
  //     useEffect(() => {
  //       console.log(`Count : ${count}`);
  //     }, [count]);

  //   // 4번 => 다시 렌더링될 때 기존 렌더링때의 useEffect 함수가 return된다.
  //   useEffect(() => {
  //     console.log(`Count : ${count}`);

  //     return () => console.log(`Remove Count : ${count}`);
  //   }, [count]);

  return (
    <div className="bg-blue-500 w-40 h-40 text-white  flex justify-center items-center gap-8">
      <button onClick={() => setCount(count - 1)}>-</button>
      <div>{count}</div>
      <button onClick={() => setCount(count + 1)}>+</button>
    </div>
  );
};

export default Box;
