import Loader from 'react-loaders'
import emailjs from '@emailjs/browser'
import{ useRef } from 'react'

import './index.scss'

const Contact = () => {
    const form = useRef()

const sendEmail = (e) => {
  e.preventDefault();
  emailjs
    .sendForm(
      "gmail",
      "template_1",
      form.current,
      "-3LXg3a6UqvysfV2P"
    )
    .then(
      () => {
        alert("Message successfully sent!");
        window.location.reload(false);
      },
      () => {
        alert("Failed to send the message, please try again");
      }
    );
};

  return (
    <>
      <div className="container contact-page">
        <div className="text-zone">
          <h1>Contact me </h1>
          <p>
            I am interested in freelance opportunities. However, if you have
            other request or question, don't hesitate to use the form.
          </p>
          <div className="contact-form">
            <form ref={form} onSubmit={sendEmail}>
              <ul>
                <li className="half">
                  <input type="text" placeholder="Name" required />
                </li>
                <li className="half">
                  <input
                    type="text"
                    name="email"
                    placeholder="Email"
                    required
                  />
                </li>
                <li>
                  <input
                    placeholder="Subject"
                    type="text"
                    name="subject"
                    required
                  />
                </li>
                <li>
                  <textarea
                    placeholder="Message"
                    name="message"
                    required
                  ></textarea>
                </li>
                <li>
                  <input type="submit" className="flat-button" value="Send" />
                </li>
              </ul>
            </form>
          </div>
        </div>
      </div>
      <Loader type="ball-rotate" />
    </>
  )
}

export default Contact;
