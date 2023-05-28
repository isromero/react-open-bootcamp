import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { Contact } from '../models/contact_class'
import ContactForm from './contactForm'

function ContactComponent() {
	const defaultContact = {
		name: "Juanito", 
		surname: "Pérez", 
		email : "frank@12.com", 
		connected : false
	}

	const [contacts, setContacts] = useState([defaultContact]);

	function add(newContact){
		const tempContact = [...contacts]; // Variable temporal por si acaso
		tempContact.push(newContact);
		setContacts(tempContact);
	}
	function remove(removeContact) {
		const tempContact = [...contacts]; // Variable temporal por si acaso
		tempContact.splice(removeContact, 1);
		setContacts(tempContact);
	}

	function toggleConnected(index) {
		setContacts(prevContacts => {
			return prevContacts.map((contact, i) => i === index ? { ...contact, connected: !contact.connected } : contact);
		  })};
/* 	function toggleConnected() {
		contact.connected ? "Conectado" : "Desconectado"
	} */

		return (
			<div>
				<ContactForm add={add}/>
				{contacts.map((contact, index) => (
					<div key={index}>
					<h3>Nombre: {contact.name}</h3>
					<h3>Apellido: {contact.surname}</h3>
					<h3>Email: {contact.email}</h3>
					<h3>Estado: {contact.connected ? 'Conectado' : 'Desconectado'}</h3>
					<button onClick={() => toggleConnected(index)}>{contact.connected ? 'Desconectar' : 'Conectar'}</button>
					<button onClick={() => remove(index)}>Borrar contacto</button>
					</div>
				))}
			</div>
  	)
}

ContactComponent.propTypes = {
	contactComponent: PropTypes.instanceOf(Contact).isRequired
}

export default ContactComponent
