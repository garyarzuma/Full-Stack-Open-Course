import React, { useState, useEffect } from 'react'
import axios from 'axios'

const App = () => {
  const [countries, setCountries] = useState([])
  const [filterWord, setFilterWord] =useState('')

  useEffect(() => {
    axios
      .get('https://restcountries.com/v3.1/all')
      .then(response => {
        setCountries(response.data)
      })
  }, [])

  const onSubmit = (event) => {
    event.preventDefault()
  }
  
  const onChangeFilter = (event)=>{
    setFilterWord(event.target.value)
  }

  const countryListDisplay = () => {
    let filterCountryList = countries.filter(country => country.name.common.toLowerCase().includes(filterWord.toLowerCase()))
   
    if( filterCountryList.length < 10 ){
      return( filterCountryList.map(country => <div>{country.name.common}</div>))
    }
    else
      return <div>List of countries too long...</div>
  }

  return (
    <form onSubmit={onSubmit}>
    <div>
      Countries: <input value={filterWord} onChange={onChangeFilter}/>
    </div>
    <div>
      {countryListDisplay()}
    </div>
  </form>
  )
}
export default App