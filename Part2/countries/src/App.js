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

  const listLanguages = (list) => {
    let temp=[]; 
    for (const lang in (list)) {
      temp.push(list[lang])
      console.log(list[lang])
    }
    return temp;
  }

  const countryListDisplay = () => {
    let filterCountryList = countries.filter(country => country.name.common.toLowerCase().includes(filterWord.toLowerCase()))
  
    if(filterCountryList.length === 1) {
      
      return ( 
        <div>
          <h1>{filterCountryList[0].name.common}</h1>
            <div>Capital: {filterCountryList[0].capital[0]}</div>
            <div>Population: {filterCountryList[0].population}</div>
            
            <h2>Languages Spoken:</h2>
            {listLanguages(filterCountryList[0].languages).map(x => <div key={x}>{x}</div>)}
            <br/>
            <img 
            src={filterCountryList[0].flags.png}
            alt="flag"
            />
        </div>
      )
    }

    else if( filterCountryList.length < 10  ){
      return( filterCountryList.map(country => <div key={country.ccn3}>{country.name.common}</div>))
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