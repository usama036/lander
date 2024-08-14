'use client'
import styles from "./style.module.scss";
import Link from "next/link";
import Image from "next/image";
import {
  Container,
  Row,
  Col,
  Button, Alert,
} from 'react-bootstrap';

import { useState } from 'react';


const AboutUs = () => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [alertMessage, setAlertMessage] = useState('');
  const [alertVariant, setAlertVariant] = useState('info'); // 'info', 'success', 'danger'


  const handleSubmit = async (e) => {
    e.preventDefault();
    const newRecord={data:{
        email,
        name,
        message,
      }}

    try {
      const response = await fetch('https://coral-app-67amy.ondigitalocean.app/api/contact-uses', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newRecord),
      });
      // Reset form
      if (response.status === 200) {

        setAlertMessage('Form submitted successfully!');
        setEmail('')
        setName('')
        setMessage('')
        setAlertVariant('success');
      } else {
        setAlertMessage('Error submitting form. Please try again.');
        setAlertVariant('danger');
      }
    } catch (error) {
      setAlertMessage( 'Error submitting form. Please try again.');
      setAlertVariant('danger');
    }
  };

  return (
    <>
      <section className={styles.AboutUs}>
        <Container>
          <Row>
            <Col xs={12} s={12} md={6} className={`col-sm-12 col-md-6`}>
              <h1>CONTACT US</h1>
              <p>
                Let’s make AI the cornerstone of your sustainable <br />{" "}
                journey. Reach out for a free AIdriven consultation.
              </p>
              <div>
                <div className={styles.contactUs}>
                  <Link href="tel:+15035605598">
                    <Image
                      src="/assets/Phone.svg"
                      alt="Phone"
                      width={41}
                      height={41}
                    />
                    1+(503)560-5598
                  </Link>
                </div>
                <div className={styles.contactUs}>
                  <Link href="mailto:hello@reapplay.com">
                    <Image
                      src="/assets/Email.svg"
                      alt="Email"
                      width={41}
                      height={41}
                    />
                    hello@reapplay.com
                  </Link>
                </div>
                <div className={styles.contactUs}>
                  <Link href="3">
                    <Image
                      src="/assets/Location.svg"
                      alt="Location"
                      width={41}
                      height={41}
                    />
                    346 Hunter Place Bend, Oregon 97703
                  </Link>
                </div>
              </div>
            </Col>
            <Col xs={12} s={12} md={6} className={`col-sm-12 col-md-6 `}>
              <div className="contact-form">
                <form onSubmit={handleSubmit}>
                  {alertMessage && (
                    <Alert variant={alertVariant} onClose={() => setAlertMessage('')} dismissible>
                      {alertMessage}
                    </Alert>
                  )}
                  <div className="formWrap">
                    <div className="form-group">
                      <label form="name">Your Name*</label>
                      <input
                        type="text"
                        id="name"
                        value={name}
                        placeholder="Ex. Saul Ramirez"
                        required
                        onChange={(e) => setName(e.target.value)}
                      />
                    </div>
                    <div className="form-group">
                      <label form="email">Email Address*</label>
                      <input
                        type="email"
                        id="email"
                        value={email}
                        placeholder="example@example.com"
                        required
                        onChange={(e) => setEmail(e.target.value)}
                      />

                    </div>
                  </div>
                  <div className="form-group">
                    <label form="message">Your Message*</label>
                    <textarea
                      id="message"
                      value={message}
                      placeholder="Your Message"
                      onChange={(e) => setMessage(e.target.value)}
                    ></textarea>
                  </div>
                  <div className="btnWrap">
                    <Button variant="none" type="submit" className="submit-btn">
                      Send Message
                    </Button>
                  </div>
                </form>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default AboutUs;
