import { Link } from 'react-router-dom'
const About = () => {
    return(
        <div className='text-center mt-5'>
            <h4>About</h4>
            <p>Version 1.0</p>
            <Link to="/">Go back</Link>
        </div>
    )
}

export default About