import React,{useState} from 'react'

const Country = ({country}) => {
   const [show,setShow] = useState(false)

    const listLanguages = (list) => {
        let temp=[]; 
        for (const lang in (list)) {
            temp.push(list[lang])
            console.log(list[lang])
        }
        return temp;
    }

    const changeShow = () =>
    {
        setShow(!show)
    }

    const buttonText =  show?"hide":"show"

    const showInfo = () => {
        if (show) {
            return (
                <div>
            <h1>{country.name.common}</h1>
                <div>Capital: {country.capital[0]}</div>
                <div>Population: {country.population}</div>
                
                <h2>Languages Spoken:</h2>
                {listLanguages(country.languages).map(x => <div key={x}>{x}</div>)}
                <br/>
                <img 
                src={country.flags.png}
                alt="flag"
                />
            </div>
            )
        }
    }

    return (
        <div key={country.ccn3}>
            {country.name.common}  
            <button onClick={changeShow}>
                {buttonText}
            </button>   
            {showInfo()}
        </div>
    )
}
export default Country