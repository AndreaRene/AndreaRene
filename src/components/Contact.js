import React, { useState } from 'react';
import './Contact.css';
import { validateEmail } from '../utils/helper';

const Contact = () => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [comment, setComment] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleChange = (e) => {
        const { target } = e;
        const inputType = target.name;
        const inputValue = target.value;
        if (inputType === 'name') {
            setName(inputValue);
        } else if (inputType === 'email') {
            setEmail(inputValue);
        } else {
            setComment(inputValue);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!validateEmail(email)) {
            setErrorMessage('The email address you entered is invalid.');
            return;
        }

        setName('');
        setEmail('');
        setComment('');
        setErrorMessage('');
    };

    return (
        <div>
            {errorMessage && (
                <div>
                    <p className="error-text">{errorMessage}</p>
                </div>
            )}
            <form id='contactForm'>
                <label htmlFor="name" className='formText'>Your Name:</label>
                <input type="text" id="name" name="name" value={name} onChange={handleChange} className='formInput'
                    onBlur={() => {
                        if (name.length === 0) {
                            setErrorMessage('You must provide a name');
                        }
                    }} />
                <label htmlFor="email" className='formText'>Your Email Address:</label>
                <input type="text" id="email" name="email" value={email} onChange={handleChange} className='formInput'
                    onBlur={() => {
                        if (email.length === 0 || !validateEmail(email)) {
                            setErrorMessage('You must provide a valid email');
                        }
                    }} />
                <label htmlFor="comment" className='formText'>Comment:</label>
                <textarea id="comment" name="comment" value={comment} onChange={handleChange} className='formInput'
                    onBlur={() => {
                        if (comment.length === 0) {
                            setErrorMessage('You must provide a comment');
                        }
                    }} />
                <button type="button" onClick={handleSubmit}>Submit</button>
            </form>

        </div>
    )
}

export default Contact;