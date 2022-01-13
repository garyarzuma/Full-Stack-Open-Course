import React, { useState } from 'react'

const PersonForm = ({onSubmit,valueName,valueNumber,onChangeName,onChangeNumber}) => {
 
  return (
   <form onSubmit={onSubmit}>
        <div>
          Name: <input value={valueName} onChange={onChangeName}/>
        </div>
        <div>
          Numbers: <input value={valueNumber} onChange={onChangeNumber}/>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
  )
}

export default PersonForm