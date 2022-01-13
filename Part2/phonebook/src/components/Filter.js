import React, { useState } from 'react'

const Filter = ({value, onChange}) => {
    
  return (
    <form>
        <div>
        Filter shown with <input value={value} onChange={onChange}/>
        </div>
    </form>
  )
  
}

export default Filter