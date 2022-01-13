import React, { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filterText, setFilterText] = useState('')

  const addContact = (event) => {
    event.preventDefault()
    const contactObject = {name: newName, number: newNumber}
    if (persons.map((person) => JSON.stringify(person))  //use Json to compare objects
                                .includes(JSON.stringify(contactObject))) {
      //console.log("duplicate name", contactObject) 
      window.alert(`${newName} is already added to phonebook`)
      return;
    }
    setPersons(persons.concat(contactObject))
    setNewName("");
    setNewNumber("");
  }

  

  const handleNameChange = (event) => {
   //console.log(event.target.value)
    setNewName(event.target.value)
  }

  
  const handleFilterChange = (event) => {
    //console.log(event.target.value)
     setFilterText(event.target.value)
   }
  
  const handleNumberChange = (event) => {
    //console.log(event.target.value)
     setNewNumber(event.target.value)
   }

  return (
    <div>
      <h2>Phonebook</h2>
      <form>
        <div>
          Filter shown with <input value={filterText} onChange={handleFilterChange}/>
        </div>
      </form>
      <h3>Add New Contact</h3>
      <form onSubmit={addContact}>
        <div>
          name: <input value={newName} onChange={handleNameChange}/>
        </div>
        <div>
          Numbers: <input value={newNumber} onChange={handleNumberChange}/>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
        {persons.filter(persons => persons.name.toLowerCase().includes(filterText.toLowerCase())).map((name)=><div key={name.number}>{name.name} {name.number}</div>)}
    </div>
  )
}

export default App