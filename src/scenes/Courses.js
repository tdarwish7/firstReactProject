import React from 'react'
import CourseCard from '../components/CourseCard'



class Courses extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            courses: [],
        }
    }
    componentDidMount() {
        let API_URL = 'https://bocanode.web.app/courses.json'
        fetch(API_URL)
            .then(response => response.json())
            .then(data => this.setState({ courses:data }))
    }
    render() {
        let {courses} = this.state
        return (
            <>
            <h2>Short Courses</h2>
            {(courses.length === 0)
                ? <p>Loading...</p>
                : <div className="course-section">
                    {courses.map((aCourse, index) => {
                        return (
                            <CourseCard key={index} aCourse={aCourse}/>
                            )
                        }
                    )}
                    </div>
            }
            </>
        )
    }
}



export default Courses