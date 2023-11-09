const CalEnterBtn = ({
  temp,
  setTemp,
  result,
  setResult,
  operator,
  setOperator,
}) => {
  const onClickEnter = () => {
    switch (operator) {
      case "+":
        setResult(String(Number(temp) + Number(result)));
        break;
      case "-":
        setResult(String(Number(temp) - Number(result)));
        break;
      case "*":
        setResult(String(Number(temp) * Number(result)));
        break;
      case "/":
        setResult(String(parseInt(Number(temp) / Number(result), 10)));
        break;
      default:
    }

    setTemp("0");
    setOperator(null);
  };

  return (
    <button
      className="btn-style bg-green-500 active:bg-green-700"
      onClick={onClickEnter}
    >
      Enter
    </button>
  );
};

export default CalEnterBtn;
