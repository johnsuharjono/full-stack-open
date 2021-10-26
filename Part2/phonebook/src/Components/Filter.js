const Filter = (props) => {
  const filter = props.filter;
  const handleFilterChange = props.handleFilterChange;
  return (
    <form>
      <div>
        filter shown with{" "}
        <input value={filter} onChange={handleFilterChange}></input>
      </div>
    </form>
  );
};

export default Filter;
