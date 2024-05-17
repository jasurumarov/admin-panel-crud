import React, { useState } from 'react'

const BOT_TOKEN = "7167621990:AAFEFIaAPwbfqpugbkwxmUFp0CyADqu1J8Y"
const CHAT_ID = "-1002035440165"

let initialState = {
  fname:"",
  lname:"",
  email:"",
  message:"",
}

const ContactForm = () => {
  let [data, setData] = useState(initialState)
  const handleSubmit = e => {
    e.preventDefault()
    let text = `Ism: <b>${data.fname}</b>`
    text += "%0A"
    text += `Familya: <b>${data.lname}</b>`
    text += "%0A"
    text += `Email: <b>${data.email}</b>`
    text += "%0A"
    text += "%0A"

    text += `Message: <i>${data.message}</i>`

    let url = `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage?chat_id=${CHAT_ID}&text=${text}&parse_mode=html`
    let api = new XMLHttpRequest()
    api.open("GET", url, true)
    api.send()
    setData(initialState)
  }
  return (
    <div className='contact-section'>
        <div className="container">
            <div className="contact-section__content">
                <h2>Contact Us</h2>
                <form onSubmit={handleSubmit}>
                    <input required value={data.fname} onChange={e => setData(p => ({...p, fname: e.target.value}))} type="text" placeholder='Enter your firstname'/>
                    <input required value={data.lname} onChange={e => setData(p => ({...p, lname: e.target.value}))} type="text" placeholder='Enter your lastname'/>
                    <input required value={data.email} onChange={e => setData(p => ({...p, email: e.target.value}))} type="email" placeholder='Enter your email'/>
                    <textarea required value={data.message} onChange={e => setData(p => ({...p, message: e.target.value}))} rows={10} name="" id="" placeholder='Your messages here...'></textarea>
                    <button>Submit</button>
                </form>
            </div>
        </div>
    </div>
  )
}

export default ContactForm