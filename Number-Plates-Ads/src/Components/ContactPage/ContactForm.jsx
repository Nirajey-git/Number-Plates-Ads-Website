import React from 'react'

export const ContactForm = () => {
  return (
    <div className="mt-6 px-4 lg:px-12">
      <div className="flex flex-col lg:flex-row lg:items-stretch lg:gap-8">
        
        {/* Contact Form */}
        <div className="flex-1 flex items-center justify-center bg-gradient-to-br p-6 rounded-2xl">
          <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-6 bo">
            <h1 className="text-3xl font-semibold text-center text-black mb-6">
              Contact Us
            </h1>

            <form className="space-y-4">
              <div>
                <label className="block text-gray-700 mb-1 text-sm font-medium">
                  Your Name
                </label>
                <input
                  type="text"
                  required
                  className="w-full border border-gray-300 rounded-lg p-2 text-sm focus:outline-none focus:ring-2"
                  placeholder="Enter your name"
                />
              </div>

              <div>
                <label className="block text-gray-700 mb-1 text-sm font-medium">
                  Your Email
                </label>
                <input
                  type="email"
                  required
                  className="w-full border border-gray-300 rounded-lg p-2 text-sm focus:outline-none focus:ring-2"
                  placeholder="Enter your email"
                />
              </div>

              <div>
                <label className="block text-gray-700 mb-1 text-sm font-medium">
                  Message
                </label>
                <textarea
                  required
                  className="w-full border border-gray-300 rounded-lg p-2 text-sm h-28 resize-none focus:outline-none focus:ring-2"
                  placeholder="Type your message..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-blue-500 text-white text-sm font-semibold py-2.5 rounded-lg hover:bg-blue-600 active:scale-95 transition-all"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>

        {/* Map Section */}
        <div className="flex-1 flex items-center justify-center mt-6 lg:mt-0">
          <div className="w-full h-[450px] rounded-2xl overflow-hidden shadow-lg bo">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d829.8818634139186!2d151.11300272849488!3d-33.69529809832389!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b0d58739b425db7%3A0xbd5a0f68b2125186!2sUnit%2025%2F29%20Leighton%20Pl%2C%20Hornsby%20NSW%202077!5e0!3m2!1sen!2sau!4v1758785070835!5m2!1sen!2sau"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>

      </div>
    </div>
  )
}
