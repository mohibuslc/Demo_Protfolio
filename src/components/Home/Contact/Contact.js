import React from 'react';
import './Contact.css'
import qr from '../../../images/QR-PNG.png'
import emailjs from 'emailjs-com';

const Contact = () => {
    function sendEmail(e) {
        e.preventDefault();

        emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', e.target, 'YOUR_USER_ID')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    }
    return (
        <section id="contact" >
            <div className="contact mt-5 pt-5">
                <div className="container pt-5">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="info">
                                <h1 className="section-heading pb-3">Contact Me</h1>
                                <p>Siddiky is always ready to reply. I love to communicate please feel free any query about myself and web design.</p>
                                <p>
                                    <strong>City:</strong> Kushtia<br />
                                    <strong>Bangladesh</strong><br />
                                </p>
                                <p>
                                    <strong>Email:</strong>  nasiddiky@outlook.com<br />
                                    <strong>phone:</strong>  +8801712378303
                                </p>
                                <div>
                                    <img className="d-block w-50" src={qr} alt="" />
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <form className="from px-5" onSubmit={sendEmail}>
                                <h5 className="py-3 color-primary">Have a question or want to work together?</h5>
                                <label> Name*</label>
                                <input type="text" name='name' className="form-control" />
                                <label> Email address*</label>
                                <input type="email" name='email' className="form-control" />

                                <label> Message*</label>
                                <textarea name='message' rows="5" className="form-control" ></textarea>
                                <input type="submit" value="Send" className="btn btn-custom mt-3 w-50" />
                            </form>
                        </div>
                    </div>


                </div>
            </div>
        </section>
    );
};

export default Contact;