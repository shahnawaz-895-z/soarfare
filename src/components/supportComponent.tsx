import React, { useState } from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

const SoarFareSupport = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-6xl font-semibold font-poppins mb-4" style={{ color: '#081C3A' }}>
            Support
          </h1>
          <p className="text-gray-600 font-barlow text-lg max-w-md mx-auto leading-relaxed">
            SoarFare is great for those that love to travel to always be building up points for the next great adventure!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Side - Contact Info */}
          <div>
            <div className="mb-8">
              <h2 className="text-orange-500 font-poppins text-sm font-semibold uppercase tracking-wide mb-2">
                GET IN TOUCH
              </h2>
              <h3 className="text-3xl font-poppins font-semibold mb-4" style={{ color: '#081C3A' }}>
                Facing issues or want to know something?
              </h3>
              <p className="text-[#555555] font-barlow text-base leading-relaxed mb-2">
                We are here to answer any question you might have or resolve any issue you are facing, just fill out the form or send us email and we will do our best to help you out there!
              </p>
              <p className="text-[#555555] font-barlow font-bold">
                Happy Travels!
              </p>
            </div>

            {/* Contact Cards */}
           <div className="space-y-4">
  {/* Email Card */}
  <div className="bg-white rounded-2xl border-2 border-orange-500 p-6 flex items-center space-x-4 transition-transform hover:scale-105 hover:shadow-lg">
    <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center">
      <Mail className="w-6 h-6 text-white" />
    </div>
    <div>
      <h4 className="font-semibold font-barlow text-gray-900 mb-1">E-Mail Address:</h4>
      <p className="text-gray-700 font-barlow">contact@soarfare.com</p>
    </div>
  </div>

  {/* Phone Card */}
  <div className="bg-white rounded-2xl border-2 border-orange-500 p-6 flex items-center space-x-4 transition-transform hover:scale-105 hover:shadow-lg">
    <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center">
      <Phone className="w-6 h-6 text-white" />
    </div>
    <div>
      <h4 className="font-semibold font-barlow text-gray-900 mb-1">Phone Number:</h4>
      <p className="text-gray-700 font-barlow">+123 456 78894 459</p>
    </div>
  </div>

  {/* Address Card */}
  <div className="bg-white rounded-2xl border-2 border-orange-500 p-6 flex items-center space-x-4 transition-transform hover:scale-105 hover:shadow-lg">
    <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center">
      <MapPin className="w-6 h-6 text-white" />
    </div>
    <div>
      <h4 className="font-semibold text-gray-900 mb-1 font-barlow">Address:</h4>
      <p className="text-gray-700 font-barlow">67B Gregorio Grove, Jaskolskiville</p>
    </div>
  </div>
</div>

          </div>

          {/* Right Side - Contact Form */}
          <div className="bg-white rounded-3xl border-2 border-orange-500 p-8">
            <div className="space-y-6">
              {/* First Name and Last Name Row */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <input
                    type="text"
                    name="firstName"
                    placeholder="First Name"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    className="w-full p-4 bg-gray-100 rounded-xl border-0 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-orange-500"
                  />
                </div>
                <div>
                  <input
                    type="text"
                    name="lastName"
                    placeholder="Last Name"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    className="w-full p-4 bg-gray-100 rounded-xl border-0 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-orange-500"
                  />
                </div>
              </div>

              {/* Email */}
              <div>
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full p-4 bg-gray-100 rounded-xl border-0 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-orange-500"
                />
              </div>

              {/* Subject */}
              <div>
                <input
                  type="text"
                  name="subject"
                  placeholder="Subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  className="w-full p-4 bg-gray-100 rounded-xl border-0 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-orange-500"
                />
              </div>

              {/* Message */}
              <div>
                <textarea
                  name="message"
                  placeholder="Message"
                  rows={6}
                  value={formData.message}
                  onChange={handleInputChange}
                  className="w-full p-4 bg-gray-100 rounded-xl border-0 placeholder-gray-500 resize-none focus:outline-none focus:ring-2 focus:ring-orange-500"
                />
              </div>

              {/* Submit Button */}
              <div className="pt-4">
                <button
                  type="button"
                  onClick={() => console.log('Form submitted:', formData)}
                  className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-8 py-3 rounded-xl transition-colors duration-200"
                >
                  Send Message
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SoarFareSupport;