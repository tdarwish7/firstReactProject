import React from 'react'

function CourseCard({aCourse}) {
    return(
    <div className="course">
        <h2>{aCourse.title}</h2>
        <p>{aCourse.description}</p>
    </div>
    )

}

export default CourseCard