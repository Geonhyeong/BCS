const CalResetBtn = ({ setResult, setTemp, setOperator }) => {
  const onClickReset = () => {
    setResult("0");
    setTemp("0");
    setOperator(null);
  };

  return (
    <button
      className="btn-style w-20 h-12 bg-red-500 active:bg-red-700 mb-2 shadow-md"
      onClick={onClickReset}
    >
      Reset
    </button>
  );
};

export default CalResetBtn;
