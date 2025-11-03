import React from "react";
import { Mail, Phone, MapPin, Github, Linkedin } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="min-h-screen bg-black text-white py-16 px-8">
      <div className="container mx-auto grid md:grid-cols-2 gap-10">
        {/* Left Info Box */}
        <div className="bg-white p-6 rounded-lg shadow-md flex flex-col gap-6">
          <h2 className="text-2xl font-bold text-black">Contact Info</h2>

          <div className="flex items-center gap-3">
            <Mail className="text-black" />
            <p className="text-white">siddardhagaming@gmail.com</p>
          </div>
          <div className="flex items-center gap-3">
            <Phone className="text-black" />
            <p className="text-white">9490566729</p>
          </div>
          <div className="flex items-center gap-3">
            <MapPin className="text-black" />
            <p className="text-white">Akividu, Andhra Pradesh, India</p>
          </div>
        </div>

        {/* Right Contact Form */}
        <div className="bg-gray-900 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold mb-6">Send a Message</h2>
          <form className="flex flex-col gap-4">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full p-3 rounded bg-gray-800 text-white border border-gray-700 focus:outline-none"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full p-3 rounded bg-gray-800 text-white border border-gray-700 focus:outline-none"
            />
            <textarea
              placeholder="Your Message"
              className="w-full p-3 rounded bg-gray-800 text-white border border-gray-700 h-32 focus:outline-none"
            ></textarea>
            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold transition-all"
            >
              Send Message
            </button>
          </form>

          {/* Social Icons Below Button */}
          <div className="flex justify-center gap-6 mt-6">
            <a
              href="https://github.com/siddardha146"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github className="w-8 h-8 hover:opacity-80 cursor-pointer" />
            </a>
            <a
              href="https://www.linkedin.com/in/sajjala-siddardha-84685928b/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin className="w-8 h-8 hover:opacity-80 cursor-pointer" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
