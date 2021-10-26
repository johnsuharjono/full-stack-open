const PersonForm = (props) => {
  const addContact = props.addContact;
  const newName = props.newName;
  const handleNameChange = props.handleNameChange;
  const newNumber = props.newNumber;
  const handleNumberChange = props.handleNumberChange;
  return (
    <form onSubmit={addContact}>
      <div>
        name: <input value={newName} onChange={handleNameChange} />
      </div>
      <div>
        number: <input value={newNumber} onChange={handleNumberChange} />
      </div>
      <div>
        <button type="submit">add</button>
      </div>
    </form>
  );
};

export default PersonForm;
