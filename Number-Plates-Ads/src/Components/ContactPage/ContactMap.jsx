import React from 'react'

export const ContactMap = () => {
return (
    <div className='mt-3 '>
        <div>

 <div className="flex items-center justify-center bg-gray-100  p-4 shadow-md">
      <div className="rounded-xl p-6 w-full max-w-sm shadow-md bg-white">
        <h1 className="text-2xl font-semibold text-center text-orange-600 mb-5">
          Contact Us
        </h1>

        <form className="space-y-3">
          <div>
            <label className="block text-gray-700 mb-1 text-sm" >
              Your Name
            </label>
            <input
              type="text"
              required
              className="w-full border border-gray-300 rounded-lg p-2 text-sm focus:outline-none focus:ring-2 focus:ring-orange-400"
              placeholder="Enter your name"
            />
          </div>

          <div>
            <label className="block text-gray-700 mb-1 text-sm">
              Your Email
            </label>
            <input
              type="email"
              required
              className="w-full border border-gray-300 rounded-lg p-2 text-sm focus:outline-none focus:ring-2 focus:ring-orange-400"
              placeholder="Enter your email"
            />
          </div>

          <div>
            <label className="block text-gray-700 mb-1 text-sm">
              Message
            </label>
            <textarea
              required
              className="w-full border border-gray-300 rounded-lg p-2 text-sm h-24 resize-none focus:outline-none focus:ring-2 focus:ring-orange-400"
              placeholder="Type your message..."
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-orange-500 text-white text-sm font-medium py-2 rounded-lg hover:bg-orange-600 transition-all"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>            
        </div>
        <div className=" flex justify-center w-[90%] items-center rounded-xl md:w-3/4 lg:w-2/3 h-[400px] shadow-lg mx-auto  ">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d829.8818634139186!2d151.11300272849488!3d-33.69529809832389!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b0d58739b425db7%3A0xbd5a0f68b2125186!2sUnit%2025%2F29%20Leighton%20Pl%2C%20Hornsby%20NSW%202077!5e0!3m2!1sen!2sau!4v1758785070835!5m2!1sen!2sau" 
        width="100%" 
        height="100%" 
        style={{border:0}}
        allowfullscreen="" 
        loading="lazy" 
        referrerpolicy="no-referrer-when-downgrade">
        </iframe>
        </div>
    </div>
)
}
