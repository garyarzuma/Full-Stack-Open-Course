import React from 'react'

const Persons = ({persons, filterText}) => {
  return (  
    persons.filter(persons => persons.name.toLowerCase()
      .includes(filterText.toLowerCase()))
    .map((person) => 
     <div key={person.number}>{person.name} {person.number}</div>)
  ) 
}

export default Persons

