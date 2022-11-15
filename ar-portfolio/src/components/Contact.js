import './Contact.css';

const Contact = () => {
    return (
        <form id='contactForm'>
            <label for="name" className='formText'>Your Name:</label>
            <input type="text" id="name" name="name" className='formInput' />
            <label for="email" className='formText'>Your Email Address:</label>
            <input type="text" id="email" name="email" className='formInput' />
            <label for="comment" className='formText'>Comment:</label>
            <textarea id="comment" name="comment" className='formInput' />
        </form>
    )
}

export default Contact;