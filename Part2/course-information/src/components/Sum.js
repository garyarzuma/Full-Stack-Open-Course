import React from 'react';

const Sum = ({course}) => {

    return (
       <p>Total of {course.parts.reduce((a,b) => a+b.exercises,0 )} exercises</p>
    )
}




export default Sum