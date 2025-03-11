import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import Section from '../sections/Section'; 
import Header from '../sections/Header';
import Footer from '../sections/Footer';
import {Phone,Mail,Store} from 'lucide-react';


const Contact = () => {
    const formRef = useRef();
    const [loading, setLoading] = useState(false);
    const [form, setForm] = useState({
        name: '',
        email: '',
        message: '',
    });

    const handleChange = ({ target: { name, value } }) => {
        setForm({ ...form, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);

        emailjs.send('service_f0frysg', 'template_pdrxn5s',{ 
            from_name: form.name,
            to_name: 'Chaiwaai', 
            from_email: form.email,
            to_email: 'contact@chaiwaai.com', 
            message: form.message,
        }, 'I3I805fqle7tqim9A')
            .then(() => {
                setLoading(false);
                alert('Your message has been sent!');
                setForm({
                    name: '',
                    email: '',
                    message: '',
                });
            })
            .catch((error) => {
                console.error('Error sending email:', error);
                setLoading(false);
                alert('An error occurred while sending your message. Please try again later.');
            });
    };

    return (
        <div style={{
            backgroundImage: `url('/imgres.png')`, 
            backgroundSize: 'cover', 
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center', 
            minHeight: '100vh', 
            display: 'flex',
            flexDirection: 'column', 
        }}>
            <Section id="contact" className="text-black" crosses>
                <Header />
                 <div className="container mx-auto px-4 py-12 lg:py-20">
        <h2 className="text-[1.75rem] leading-[2.5rem] md:text-[2rem] md:leading-[2.5rem] lg:text-[2.5rem] lg:leading-[3.5rem] xl:text-[3rem] xl:leading-tight font-serif text-center">Contact Us</h2>
        <p className="text-center">We would love to hear from you!</p>
      </div>
      <div className="container tracking-wider text-md mx-auto px-4 py-12 lg:py-20 bg-neutral-100">
      <h1 className="text-center text-3xl">Contact us by phone: +91-80-68649720</h1>
      <h1 className="text-center text-3xl">Contact us by mail: contact@chaiwaai.com</h1>
      <h1 className="text-center text-3xl">For franchise enquiries, fill the form below.</h1>

      {/* Cards Section */}
      <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-6">
        {/* Phone Card */}
        <div className="flex items-start p-6 bg-white shadow-lg rounded-2xl">
          <Phone className="w-10 h-10 text-primary mr-4" />
          <div>
            <h2 className="text-xl font-semibold">Call Us</h2>
            <p className="text-gray-600">Reach out to us at our contact number for any queries.</p>
          </div>
        </div>

        {/* Mail Card */}
        <div className="flex items-start p-6 bg-white shadow-lg rounded-2xl">
          <Mail className="w-10 h-10 text-primary mr-4" />
          <div>
            <h2 className="text-xl font-semibold">Email Us</h2>
            <p className="text-gray-600">Drop us an email for support or business inquiries.</p>
          </div>
        </div>

        {/* Franchise Card */}
        <div className="flex items-start p-6 bg-white shadow-lg rounded-2xl">
          <Store className="w-10 h-10 text-primary mr-4" />
          <div>
            <h2 className="text-xl font-semibold">Franchise</h2>
            <p className="text-gray-600">Interested in a franchise? Fill out the form below.</p>
          </div>
        </div>
      </div>
    </div>
                <div className="container mx-auto px-4 py-12 lg:py-20">
                    <h2 className="text-3xl font-bold text-center mb-8">Not sure who to contact?</h2>
                    <p className="text-lg text-center mb-12 px-4 sm:px-0">
                       Fill out the form below and we will get back to you!
                    </p>
                    <form ref={formRef} onSubmit={handleSubmit} className="max-w-lg mx-auto">
                        <div className="mb-6">
                            <label htmlFor="name" className="block text-sm font-medium mb-2">Full Name</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={form.name}
                                onChange={handleChange}
                                required
                                className="w-full px-4 py-3 rounded-lg bg-green-300 text-black focus:outline-none focus:ring-2 focus:ring-green-500"
                                placeholder="Your Name*"
                            />
                        </div>
                        <div className="mb-6">
                            <label htmlFor="email" className="block text-sm font-medium mb-2">Email</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={form.email}
                                onChange={handleChange}
                                required
                                className="w-full px-4 py-3 rounded-lg bg-green-300 text-black focus:outline-none focus:ring-2 focus:ring-green-500"
                                placeholder="Your-email@gmail.com*"
                            />
                        </div>
                        <div className="mb-6">
                            <label htmlFor="message" className="block text-sm font-medium mb-2">Message</label>
                            <textarea
                                id="message"
                                name="message"
                                value={form.message}
                                onChange={handleChange}
                                required
                                rows="5"
                                className="w-full px-4 py-3 rounded-lg bg-green-300 text-black focus:outline-none focus:ring-2 focus:ring-green-500"
                                placeholder="Your message*"
                            />
                        </div>
                        <div className="text-center">
                            <button
                                type="submit"
                                disabled={loading}
                                className="px-6 py-3 rounded-lg bg-green-500 hover:bg-green-900 text-black font-medium transition duration-300 disabled:bg-gray-500 disabled:cursor-not-allowed"
                            >
                                {loading ? 'Sending...' : 'Send Message'}
                            </button>
                        </div>
                    </form>
                </div>
                <Footer />
            </Section>
        </div>
    );
};

export default Contact;