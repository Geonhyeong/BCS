const CalInput = ({ result, setResult, operator }) => {
  const onChangeResult = (e) => {
    setResult(e.target.value);
  };

  return (
    <div className="bg-purple-100 px-4 py-2 rounded-xl focus:outline-pink-400">
      <span className="w-1/6 inline-block text-xl text-center">{operator}</span>
      <input
        className="text-xl text-right w-5/6 bg-purple-100 focus:outline-none"
        type="text"
        value={result}
        /*onChange={onChangeResult}*/ readOnly
      />
    </div>
  );
};

export default CalInput;
