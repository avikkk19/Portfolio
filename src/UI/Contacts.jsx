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

function Contacts() {
  return (
    <>
      <SectionIntro
        title="Get in Touch"
        tagline="Let's connect and create something amazing together"
        options={{ textColor: "text-amber-50" }}
      />

      <div className="flex flex-col gap-8 mt-5 p-2 md:p-5">
        <div className="group relative flex flex-col md:flex-row gap-8 rounded-2xl p-8 transition-all duration-300">
          {/* Contact Form Section maybe supabase? - nah bro whose goona maintain that */}
          <div className="flex-1 space-y-4 p-8 bg-gradient-to-br from-gray-900/40 to-gray-800/40 rounded-xl border border-white/10 shadow-lg">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-amber-400 via-purple-400 to-pink-400 bg-clip-text text-transparent group-hover:from-amber-300 group-hover:via-purple-300 group-hover:to-pink-300 transition-colors duration-300">
              Send me a Message
            </h3>

            <form className="space-y-4">
              <div>
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full px-4 py-2 bg-gray-800/50 border border-gray-700 rounded-lg focus:outline-none focus:border-purple-500 text-gray-200"
                />
              </div>
              <div>
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full px-4 py-2 bg-gray-800/50 border border-gray-700 rounded-lg focus:outline-none focus:border-purple-500 text-gray-200"
                />
              </div>
              <div>
                <textarea
                  placeholder="Your Message"
                  rows="4"
                  className="w-full px-4 py-2 bg-gray-800/50 border border-gray-700 rounded-lg focus:outline-none focus:border-purple-500 text-gray-200"
                ></textarea>
              </div>
              <ButtonWhite label="Send Message" />
            </form>
          </div>

          {/* Contact Info Sectionnn */}
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

            {/* Social links , more cannbe added - What more you need ? 😉 (cornHub or something) */}
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
