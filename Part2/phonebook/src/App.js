import React, { useState, useEffect } from 'react'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'
import personService from './services/Backend'
import Notification from './components/Notification'

const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filterText, setFilterText] = useState('')
  const [addedMessage, setAddedMessage] = useState(null)
  const [classType, setclassType] = useState('added')

  useEffect(() => {
      personService.getAll().then(data=>setPersons(data))
  }, [])

  const addContact = (event) => {
    event.preventDefault()
    const contactObject = {name: newName, number: newNumber}
    if (persons.map((person) => JSON.stringify(person.name))  //use Json to compare objects
                                .includes(JSON.stringify(contactObject.name))) {
      //console.log("duplicate name", contactObject) 
      if (window.confirm("Do you want to add this number?")) {
        const person = persons.find(n=>n.name ===newName);
        const changedPerson = {...person, number: newNumber}

        personService.update(person.id,changedPerson).then(data=> {
          setPersons(persons.map(x => x.id !== person.id ? x: changedPerson))
        })

        setAddedMessage(`Contact '${person.name}' number was updated`)
        setTimeout(() => {
          setAddedMessage(null)
        }, 5000)

        setNewName("");
        setNewNumber("");
      }
      return;
    }
    personService.create(contactObject)
      .then(data=>setPersons(persons.concat(data)))

    setAddedMessage(`Contact '${contactObject.name}' was added to server`)
    setTimeout(() => {
      setAddedMessage(null)
    }, 5000)

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

   const handleDelete = (id) => {
    //console.log(id)
    if (window.confirm("Do you really want to Delete?")) {
      personService.deletion(id).then(data=> {
        setPersons(persons.filter(person=> person.id !== id))
      }).catch(error => {
        setAddedMessage(`Contact '${persons.find(x => x.id === id).name}' was already deleted from the server`)
        setclassType('error')
        setTimeout(() => {
        setAddedMessage(null)
        setclassType('added')
      }, 5000)
      })
      
    }
    
  }

  return (
    <div>
      <h1>Phonebook</h1>
      <Notification message={addedMessage} classType={classType}/>
       <Filter value={filterText} onChange ={handleFilterChange}/>
      <h2>Add New Contact</h2>
        <PersonForm onSubmit={addContact} valueName={newName} 
                    valueNumber={newNumber} onChangeName ={handleNameChange} 
                    onChangeNumber={handleNumberChange}/>
      <h2>Numbers</h2>
        <Persons persons={persons} filterText={filterText} onDeletion={handleDelete}/>    
   </div>
  )
}

export default App