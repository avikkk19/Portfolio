import SectionIntro from "../components/SectionIntro";
import { ButtonWhite } from "../components/Buttons";
import data from "../../data.js";
import {
  Mail,
  Phone,
  MapPin,
  Github,
  Twitter,
  Linkedin,
} from "lucide-react";
import { useState } from "react";

function Contacts() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, message } = formData;
    const subject = "New Contact Form Submission";
    const body = `Name: ${name}%0D%0AEmail: ${email}%0D%0A%0D%0AMessage:%0D%0A${message}`;
    const mailtoLink = `mailto:${data.general.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoLink;
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <>
      <SectionIntro
        title="Get in Touch"
        tagline="Let's connect and create something amazing together"
        options={{ textColor: "text-amber-50" }}
      />

      <div className="flex flex-col gap-8 mt-5 p-2 md:p-5">
        <div className="group relative flex flex-col md:flex-row gap-8 rounded-2xl p-8 transition-all duration-300">
          {/* Contact Form Section */}
          <div className="flex-1 space-y-4 p-8 bg-gradient-to-br from-gray-900/40 to-gray-800/40 rounded-xl border border-white/10 shadow-lg">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-amber-400 via-purple-400 to-pink-400 bg-clip-text text-transparent group-hover:from-amber-300 group-hover:via-purple-300 group-hover:to-pink-300 transition-colors duration-300">
              Send me a Message
            </h3>

            <form className="space-y-4" onSubmit={handleSubmit}>
              <div>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Your Name"
                  required
                  className="w-full px-4 py-2 bg-gray-800/50 border border-gray-700 rounded-lg focus:outline-none focus:border-purple-500 text-gray-200"
                />
              </div>
              <div>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="Your Email"
                  required
                  className="w-full px-4 py-2 bg-gray-800/50 border border-gray-700 rounded-lg focus:outline-none focus:border-purple-500 text-gray-200"
                />
              </div>
              <div>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Your Message"
                  required
                  rows="4"
                  className="w-full px-4 py-2 bg-gray-800/50 border border-gray-700 rounded-lg focus:outline-none focus:border-purple-500 text-gray-200"
                ></textarea>
              </div>
              <ButtonWhite label="Send Message" type="submit" />
            </form>
          </div>

          {/* Contact Info Section */}
          <div className="md:w-1/2 space-y-6 p-8 bg-gradient-to-br from-gray-900/40 to-gray-800/40 rounded-xl border border-white/10 shadow-lg">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-amber-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Contact Information
            </h3>

            <div className="space-y-4">
              <div className="flex items-center gap-3 text-gray-200">
                <Mail className="h-6 w-6 text-purple-400" />
                <span>{data.general.email}</span>
              </div>

              <div className="flex items-center gap-3 text-gray-200">
                <Phone className="h-6 w-6 text-purple-400" />
                <span>{data.general.Phone}</span>
              </div>

              <div className="flex items-center gap-3 text-gray-200">
                <MapPin className="h-6 w-6 text-purple-400" />
                <span>{data.general.location}</span>
              </div>
            </div>

            {/* Social links */}
            <div className="pt-4">
              <h4 className="text-lg font-semibold text-gray-200 mb-3">
                Connect with me
              </h4>
              <div className="flex gap-4">
                <a
                  href="#"
                  className="text-gray-400 hover:text-purple-400 transition-colors"
                  aria-label="GitHub"
                >
                  <Github className="h-6 w-6" />
                </a>
                <a
                  href="#"
                  className="text-gray-400 hover:text-purple-400 transition-colors"
                  aria-label="Twitter"
                >
                  <Twitter className="h-6 w-6" />
                </a>
                <a
                  href="#"
                  className="text-gray-400 hover:text-purple-400 transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="h-6 w-6" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
// TODO: bob or bhAAi = bhaai for sure !
export default Contacts;
