'use client'
import React, { useState } from 'react';
import styles from '../Contact.module.css';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [desc, setDesc] = useState('');
  const[isSubmitted , setIsSubmitted] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(name, email, phone, desc);

    const data = { name, email, phone, desc };

    try {
      const response = await fetch('http://localhost:8000/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        console.log('Success');
        // alert('Thanks for contacting us');
        setPhone('');
        setName('');
        setEmail('');
        setDesc('');
        setIsSubmitted(true)
      } else {
        console.log('Error:', response.statusText);
      }
    } catch (error) {
      console.log('Error:', error);
    }
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Get in Touch</h1>
      {isSubmitted ? (<p className={styles.successMessage}>Thank you for contacting us!</p>):(
      <form onSubmit={handleSubmit} className={styles.form}>
        <div className={styles.formGroup}>
          <label htmlFor="name" className={styles.label}>
            Your Name
          </label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className={styles.input}
            id="name"
            name="name"
            required
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="email" className={styles.label}>
            Email Address
          </label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={styles.input}
            id="email"
            name="email"
            required
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="phone" className={styles.label}>
            Mobile Number
          </label>
          <input
            type="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className={styles.input}
            id="phone"
            name="phone"
            required
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="desc" className={styles.label}>
            Elaborate your concern
          </label>
          <textarea
            className={styles.textarea}
            onChange={(e) => setDesc(e.target.value)}
            value={desc}
            placeholder="Write your concern here"
            id="desc"
            required
          ></textarea>
        </div>
        <button type="submit" className={styles.button}>
          Submit
        </button>
      </form>
      )}
    </div>
  );
};

export default Contact;
