import React from 'react'
import personService from '../services/Backend'
import App from '../App'

const Persons = ({persons, filterText,onDeletion}) => {

  return (  
    persons.filter(persons => persons.name.toLowerCase()
      .includes(filterText.toLowerCase()))
    .map((person) => 
     <div key={person.number}>
       {person.name} {person.number} 
       <button onClick={()=> onDeletion(person.id)}>Delete</button>
     </div>)
  ) 
}

export default Persons

