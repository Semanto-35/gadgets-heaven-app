
import React, { useState } from 'react';
import { toast } from 'react-toastify';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    toast.success('Message submitted successfully!');
    setFormData({
      name: '',
      email: '',
      message: ''
    });
  };

  return (
    <div className="max-w-4xl mx-auto p-8">
      <header className="text-center mb-12">
        <h1 className="text-3xl font-semibold text-gray-800">Contact Us</h1>
        <p className="text-lg text-gray-500">We're here to help! Reach out to us with any questions or inquiries.</p>
      </header>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Our Contact Information</h2>
        <p className="text-lg text-gray-600 mb-4">
          If you need any assistance, feel free to get in touch through the following channels:
        </p>
        <ul className="list-none space-y-2 text-gray-700">
          <li>
            <strong>Email:</strong> support@gadgethaven.com
          </li>
          <li>
            <strong>Phone:</strong> +1 234 567 890
          </li>
          <li>
            <strong>Address:</strong> 123 Tech Lane, Silicon Valley, CA, USA
          </li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Send Us a Message</h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="flex flex-col">
            <label className="text-lg text-gray-700 mb-2">Full Name</label>
            <input
              type="text"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your full name"
              className="px-4 py-2 border border-gray-300 rounded-md text-lg"
              required
            />
          </div>

          <div className="flex flex-col">
            <label className="text-lg text-gray-700 mb-2">Email Address</label>
            <input
              type="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email address"
              className="px-4 py-2 border border-gray-300 rounded-md text-lg"
              required
            />
          </div>

          <div className="flex flex-col">
            <label className="text-lg text-gray-700 mb-2">Message</label>
            <textarea
              value={formData.message}
              onChange={handleChange}
              placeholder="Write your message here"
              className="px-4 py-2 border border-gray-300 rounded-md text-lg h-40 resize-none"
              required
            />
          </div>
          <button
            type="submit"
            className="btn text-lg bg-purple-600 text-white font-semibold rounded-3xl"
          >
            Send Message
          </button>
        </form>
      </section>
    </div>
  );
};

export default ContactUs;
