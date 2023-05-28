import React, { useRef } from 'react'
import PropTypes from 'prop-types'
import { Contact } from '../models/contact_class'

const ContactForm = ({add}) => {

	const nameRef = useRef('');
	const surnameRef = useRef('');
	const emailRef = useRef('');
	const connectedRef = useRef(false);
	

	function addContact(e) {
		e.preventDefault();
		const newContact = new Contact(
			nameRef.current.value,
			surnameRef.current.value,
			emailRef.current.value,
			connectedRef.current.checked
		)
		add(newContact);
	}

  return (
	<div>
		<form onSubmit={addContact}>
			<input placeholder='Name' ref={nameRef} />
			<input placeholder='Surname' ref={surnameRef} />
			<input placeholder='Email' ref={emailRef} />
			<label>
			Connected:
			<input type='checkbox' ref={connectedRef} />
			</label>
			<button type='submit' className='btn'>Add Contact</button>
		</form>
	</div>
  )
}

ContactForm.propTypes = {
	addContact: PropTypes.func.isRequired
}

export default ContactForm
