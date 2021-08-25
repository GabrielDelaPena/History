import React, {  useState, useEffect } from 'react'

const Contacts = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    const updateName = (e) => {
        setName(e.target.value)
    }

    const updateEmail = (e) => {
        setEmail(e.target.value)
    }

    const updateMessage = (e) => {
        setMessage(e.target.value)
    }

    const onSubmit = () => {
        alert('Your question will be answered soon.')
        setEmail('')
        setName('')
        setMessage('')
    }

    return (
        <div className="contact_page">
            <h1>Contacts Us</h1>
            <p className="conatact_header">Please fill in this form for more infromations.</p>
            <form>
                <label>Full Name : </label>
                <input type="text" value={name} onChange={updateName}/>
                <label>Email : </label>
                <input type="email" value={email} onChange={updateEmail}/>
                <label>Message : </label>
                <textarea name="" id="" cols="30" rows="10" value={message} onChange={updateMessage}></textarea>
                <a className="button" type="submit" id="submit_button" onClick={onSubmit}>Submit</a>
            </form>
        </div>
    )
}

export default Contacts
