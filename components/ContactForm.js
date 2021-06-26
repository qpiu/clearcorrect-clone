import { FORM_POST_URL } from '../lib/constants'
import { useState } from 'react';
import axios from 'axios';

export default function ContactForm () {
    const [ form, setForm ] = useState( [] )

    const handleSubmit = ( event ) => {
        event.preventDefault();
        const data = {
            yourname: form.yourname,
            youremail: form.youremail,
            subject: form.subject,
            message: form.message
        }

        let formData = new FormData();
        for ( let key in data ) {
            formData.append( key, data[ key ] );
        }

        //const formElement = event.target;
        axios.post( FORM_POST_URL, formData, { headers: { 'Content-Type': 'multipart/form-data' } } )
            .then( function ( response ) {
                //handle success
                console.log( response );
                setForm( { yourname: "", youremail: "", subject: "", message: "" } )
            } )
            .catch( function ( response ) {
                //handle error
                console.log( response );
            } );

    }

    return (
        <div style={ { width: '80%', margin: '0 auto' } }>
            <form onSubmit={ handleSubmit }>
                <p>
                    <label htmlFor="name">Name</label>
                    <input id="name" type="text" name="form[yourname]" value={ form.yourname || '' } onChange={ e => setForm( { ...form, yourname: e.target.value } ) } />
                </p>
                <p><label htmlFor="email">Email</label>
                    <input id="email" type="text" name="form[youremail]" value={ form.youremail || '' } onChange={ e => setForm( { ...form, youremail: e.target.value } ) } />
                </p>
                <p><label htmlFor="subject">Subject</label>
                    <input id="subject" type="text" name="form[subject]" value={ form.subject || '' } onChange={ e => setForm( { ...form, subject: e.target.value } ) } /></p>
                <p><label htmlFor="message">Messsage</label>
                    <textarea id="message" name="form[message]" value={ form.message || '' } onChange={ e => setForm( { ...form, message: e.target.value } ) } /></p>

                <button type="submit">Submit</button>
            </form>
        </div>
    );
}