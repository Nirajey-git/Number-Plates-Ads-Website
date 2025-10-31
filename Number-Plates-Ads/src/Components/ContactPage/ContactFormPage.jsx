import React from "react";

export const ContactFormPage = () => {
  return (
    <div className="flex items-center justify-center bg-gray-100 p-4 shadow-md">
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
  );
};
