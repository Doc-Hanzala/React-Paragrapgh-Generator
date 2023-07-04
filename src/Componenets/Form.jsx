const Form = ({ count, onSetCount, onGeneratePara }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    onGeneratePara();
    onSetCount(1);
  };

  return (
    <form onSubmit={handleSubmit}>
      <p>paragrapghs</p>
      <input
        type="number"
        min={1}
        max={8}
        value={count}
        onChange={(e) => onSetCount(e.target.value)}
      />
      <button className="btn">generate</button>
    </form>
  );
};

export default Form;
