import React, { useState } from 'react'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'

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
      <h1>Phonebook</h1>
       <Filter value={filterText} onChange ={handleFilterChange}/>
      <h2>Add New Contact</h2>
        <PersonForm onSubmit={addContact} valueName={newName} 
                    valueNumber={newNumber} onChangeName ={handleNameChange} 
                    onChangeNumber={handleNumberChange}/>
      <h2>Numbers</h2>
        <Persons persons={persons} filterText={filterText}/>    
   </div>
  )
}

export default App