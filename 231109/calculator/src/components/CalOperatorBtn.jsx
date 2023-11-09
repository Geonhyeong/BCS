const CalOperatorBtn = ({ result, setResult, setTemp, setOperator, op }) => {
  const onClickOperator = () => {
    if (isNaN(result) || result === "0") {
      alert("숫자를 입력하세요.");
      setResult("0");
    } else {
      setTemp(result);
      setResult("0");
      setOperator(op);
    }
  };

  return (
    <button
      className="btn-style bg-purple-500 active:bg-purple-700"
      onClick={onClickOperator}
    >
      {op}
    </button>
  );
};

export default CalOperatorBtn;
