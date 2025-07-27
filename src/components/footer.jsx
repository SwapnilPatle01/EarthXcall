import { useState } from "react";
import { AgriBookData, FinancialData, QuickLinks } from "../data/FooterData";
import { FaFacebook, FaInstagram, FaLinkedin, FaPinterest, FaTiktok, FaTwitter, FaYoutube } from "react-icons/fa";
import axios from "axios"; 

export default function Footer() {
  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState(null); 

  const handleSubscribe = async () => {
    if (!email || !email.includes("@")) {
      setStatus("error");
      return;
    }

    try {
      await axios.post(`https://earthxway-backend.vercel.app/newsletter`, { email, firstName }); 
      setStatus("success");
      setFirstName("");
      setEmail("");
    } catch (err) {
      console.error("Subscription error:", err);
      setStatus("error");
    }
  };

  return (
    <footer className="bg-black opacity-90 py-12">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-12">
        <div>
          <img src="/MainLogo.png" className="h-[20%]" />
          <p className="mt-2 text-gray-400 text-sm">
            Earthxway Foundation is a registered NGO under the Indian Trust Act, 1982, with 12A & 80G certifications, and holds FCRA and CSR-1 approvals.
          </p>
        </div>

        <div>
          <h3 className="font-semibold text-lg text-green-400 mb-3">Quick Links</h3>
          <ul className="text-gray-400 space-y-2">
            {QuickLinks.map((item) => (
              <li key={item.id}>
                <a href={item.link} className="hover:text-green-400 transition">{item.title}</a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-semibold text-lg text-green-400 mb-3">Financials</h3>
          <ul className="text-gray-400 space-y-2">
            {FinancialData.map((item) => (
              <li key={item.id}>
                <a href={item.link} className="hover:text-green-400 transition">{item.title}</a>
              </li>
            ))}
          </ul>
          <h3 className="font-semibold text-lg text-green-400 my-3">Agri Books</h3>
          <ul className="text-gray-400 space-y-2">
            {AgriBookData.map((item) => (
              <li key={item.id}>
                <a href={item.link} className="hover:text-green-400 transition">{item.title}</a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-semibold text-lg text-green-400 mb-3">Connect</h3>
          <p className="text-gray-400">
            Call: <a href="tel:919552738757" className="hover:text-green-400 transition">+91 9552738757</a>
          </p>
          <p className="text-gray-400">
            Pune Office: Sliver Spring Apartment, Baif Road Wagholi, Pune 412207
            <br /><br />
            Nagpur Office: Appa Swami Apartment, Chinchbhuan, Nagpur 440005
          </p>

          <div className="flex space-x-4 mt-3">
            {[
              { icon: FaFacebook, name: 'Facebook', link: 'https://www.youtube.com/@earthxway' },
              { icon: FaInstagram, name: 'Instagram', link: 'https://www.instagram.com/earthxway' },
              { icon: FaLinkedin, name: 'LinkedIn', link: 'https://www.linkedin.com/company/earthxway/about/' },
              { icon: FaYoutube, name: 'YouTube', link: 'https://www.youtube.com/@earthxwayfoundation' },
              { icon: FaTwitter, name: 'Twitter', link: 'https://x.com/@earthxway' },
            ].map(({ icon: Icon, name, link }) => (
              <a key={name} href={link} className="text-green-600 hover:text-green-400 transition" target="_blank" rel="noopener noreferrer">
                <Icon className="text-xl" />
                <span className="sr-only">{name}</span>
              </a>
            ))}
          </div>

          <h3 className="font-semibold text-lg text-green-400 mt-5">Newsletter Signup</h3>
          <input
            type="text"
            placeholder="Enter your first name..."
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            className="w-full p-2 mt-2 bg-gray-300 rounded focus:ring-2 focus:ring-green-400"
          />
          <input
            type="email"
            placeholder="Enter your email..."
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-2 mt-2 bg-gray-300 rounded focus:ring-2 focus:ring-green-400"
          />
          <button
            onClick={handleSubscribe}
            className="w-full text-white mt-2 p-2 bg-green-600 rounded hover:bg-green-700 transition"
          >
            Sign Up
          </button>
                
          {status === "success" && (
            <p className="text-green-400 text-sm mt-2">Thanks for subscribing!</p>
          )}
          {status === "error" && (
            <p className="text-red-400 text-sm mt-2">Please enter a valid email.</p>
          )}
        </div>
      </div>

      <div className="text-center text-gray-500 text-sm mt-8">
        © 2025 Earthxway Foundation. All rights reserved.
      </div>
    </footer>
  );
}
