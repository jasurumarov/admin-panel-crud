import React from 'react'
import {useNavigate} from 'react-router-dom'

const NotFound = () => {
  let navigate = useNavigate()
  return (
    <div className='notFound'>
        <div className="container">
            <div className="notFound__content">
                <h1>404</h1>
                <img src="https://asaxiy.uz/custom-assets/images/murad-animate-gif.gif" alt="NOTHING THERE" />
                <h5>Page not found!</h5>
                <p>Don't worry and continue shopping</p>
                <button onClick={() => navigate(-1)}>Go Back</button>
            </div>
        </div>
    </div>
  )
}

export default NotFound