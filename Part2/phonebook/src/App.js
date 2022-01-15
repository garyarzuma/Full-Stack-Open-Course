import React, { useState, useEffect } from 'react'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'
import axios from 'axios'

const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filterText, setFilterText] = useState('')

  useEffect(() => {
    axios
      .get('http://localhost:3001/persons').then(response => {
        setPersons(response.data)
      })
  }, [])

  const addContact = (event) => {
    event.preventDefault()
    const contactObject = {name: newName, number: newNumber}
    if (persons.map((person) => JSON.stringify(person))  //use Json to compare objects
                                .includes(JSON.stringify(contactObject))) {
      //console.log("duplicate name", contactObject) 
      window.alert(`${newName} is already added to phonebook`)
      return;
    }
    axios
      .post('http://localhost:3001/persons',contactObject).then(response => {
        setPersons(persons.concat(response.data))
      })
    
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