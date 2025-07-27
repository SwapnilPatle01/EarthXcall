import React from "react";
import { motion } from "framer-motion";
import axios from "axios";
import { useState } from "react";

const CSR = () => {
  const [companyName, setCompanyName] = useState("");
  const [contactPerson, setContactPerson] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [areaOfInterest, setAreaOfInterest] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState(null); 

  const handleSubmit = async (e) => {
    e.preventDefault(); 
    setStatus(null); 

    if (!companyName || !contactPerson || !email || !phone || !areaOfInterest || !message) {
       setStatus("error");
       console.error("Please fill in all fields.");
       return;
    }

    try {
      const response = await axios.post(`https://earthxway-backend.vercel.app/csr-inquiry`, { 
        companyName,
        contactPerson,
        email,
        phone,
        areaOfInterest,
        message
      });
      
      if (response.status === 201) { 
        setStatus("success");
        setCompanyName("");
        setContactPerson("");
        setEmail("");
        setPhone("");
        setAreaOfInterest("");
        setMessage("");
      } else {
        setStatus("error");
      }
    } catch (error) {
      console.error("Error submitting CSR inquiry:", error);
      setStatus("error");
    }
  };

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const csrPrograms = [
    {
      id: 1,
      title: "Reforestation Initiative",
      description: "Partner with us to plant trees and restore forest ecosystems in degraded areas. Your company's contribution will directly impact carbon sequestration and biodiversity conservation.",
      icon: "🌳",
      color: "from-green-500 to-emerald-700"
    },
    {
      id: 2,
      title: "Clean Water Projects",
      description: "Support our efforts to provide clean water solutions to communities affected by pollution and climate change. Your CSR funds will help implement sustainable water management systems.",
      icon: "💧",
      color: "from-blue-400 to-cyan-600"
    },
    {
      id: 3,
      title: "Renewable Energy Access",
      description: "Help us bring renewable energy solutions to underserved communities. Your partnership will fund solar installations and clean energy education programs.",
      icon: "☀️",
      color: "from-yellow-400 to-amber-600"
    },
    {
      id: 4,
      title: "Sustainable Agriculture",
      description: "Invest in training farmers in sustainable agricultural practices that improve food security while protecting the environment. Your support enables climate-resilient farming.",
      icon: "🌱",
      color: "from-lime-500 to-green-600"
    }
  ];

  const csrBenefits = [
    {
      title: "Enhanced Brand Reputation",
      description: "Strengthen your brand image as an environmentally and socially responsible organization."
    },
    {
      title: "Employee Engagement",
      description: "Boost employee morale and retention through meaningful volunteer opportunities with our projects."
    },
    {
      title: "Regulatory Compliance",
      description: "Meet CSR compliance requirements with our transparent reporting and impact measurement."
    },
    {
      title: "Stakeholder Relations",
      description: "Improve relationships with investors, customers, and communities through visible sustainability efforts."
    },
    {
      title: "Tax Benefits",
      description: "Receive tax deductions for your contributions to our registered non-profit organization."
    },
    {
      title: "Sustainable Development",
      description: "Contribute directly to multiple UN Sustainable Development Goals through our programs."
    }
  ];

  const testimonials = [
    {
      quote: "Partnering with EarthXcall has been transformative for our sustainability goals. Their transparent approach and measurable impact have made this our most successful CSR initiative to date.",
      author: "Sarah Johnson",
      position: "CSR Director",
      company: "GreenTech Solutions"
    },
    {
      quote: "The employee engagement opportunities provided through our partnership have significantly improved our company culture and helped us attract top talent who value environmental responsibility.",
      author: "Michael Chen",
      position: "CEO",
      company: "Innovate Sustainably"
    }
  ];

  return (
    <div className="bg-white">
      <section className="relative h-[100vh] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center z-0"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1532601224476-15c79f2f7a51?q=80&w=2070&auto=format&fit=crop')",
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-green-900/80 to-emerald-800/80 backdrop-blur-xs"></div>
        </div>
        <div className="container mx-auto px-6 relative z-10 text-center">
          <motion.h1 
            className="text-5xl md:text-6xl font-bold text-white mb-6"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Corporate Social Responsibility
          </motion.h1>
          <motion.p 
            className="text-xl md:text-2xl text-gray-100 max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Partner with us to create meaningful environmental impact while meeting your sustainability goals
          </motion.p>
          <motion.div 
            className="mt-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <a 
              href="#contact" 
              className="px-8 py-4 bg-white text-green-800 font-semibold rounded-lg hover:bg-gray-100 transition duration-300 shadow-lg"
            >
              Become a Partner
            </a>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-b from-green-50 to-white">
        <div className="container mx-auto px-6">
          <motion.div 
            className="text-center mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Why Partner With Us</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We offer comprehensive CSR solutions that align with your company's values and sustainability objectives
            </p>
          </motion.div>
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {csrBenefits.map((benefit, index) => (
              <motion.div 
                key={index}
                className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition duration-300"
                variants={fadeIn}
              >
                <h3 className="text-xl font-semibold text-gray-800 mb-3">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <motion.div 
            className="text-center mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Our CSR Programs</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose from our range of impactful environmental and social initiatives
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {csrPrograms.map((program) => (
              <motion.div 
                key={program.id}
                className="rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition duration-300"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeIn}
              >
                <div className={`bg-gradient-to-r ${program.color} p-8 text-white`}>
                  <div className="text-5xl mb-4">{program.icon}</div>
                  <h3 className="text-2xl font-bold mb-2">{program.title}</h3>
                  <p className="text-white/90">{program.description}</p>
                </div>
                <div className="bg-white p-6">
                  <a 
                    href="#contact" 
                    className="inline-block px-6 py-3 bg-gray-100 text-gray-800 font-medium rounded-lg hover:bg-gray-200 transition duration-300"
                  >
                    Learn More
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <motion.div 
            className="text-center mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Measurable Impact</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We provide transparent reporting and quantifiable results for all our CSR partnerships
            </p>
          </motion.div>
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.div 
              className="bg-white p-8 rounded-xl shadow-md text-center"
              variants={fadeIn}
            >
              <div className="text-5xl font-bold text-green-600 mb-2">500K+</div>
              <p className="text-gray-700 text-lg">Trees Planted</p>
            </motion.div>
            <motion.div 
              className="bg-white p-8 rounded-xl shadow-md text-center"
              variants={fadeIn}
            >
              <div className="text-5xl font-bold text-blue-600 mb-2">50+</div>
              <p className="text-gray-700 text-lg">Corporate Partners</p>
            </motion.div>
            <motion.div 
              className="bg-white p-8 rounded-xl shadow-md text-center"
              variants={fadeIn}
            >
              <div className="text-5xl font-bold text-amber-600 mb-2">100+</div>
              <p className="text-gray-700 text-lg">Communities Supported</p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <motion.div 
            className="text-center mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Partner Testimonials</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Hear from organizations that have partnered with us
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {testimonials.map((testimonial, index) => (
              <motion.div 
                key={index}
                className="bg-gray-50 p-8 rounded-xl shadow-md"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeIn}
              >
                <div className="text-4xl text-green-600 mb-4">"</div>
                <p className="text-gray-700 text-lg italic mb-6">{testimonial.quote}</p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gray-300 rounded-full mr-4"></div>
                  <div>
                    <p className="font-semibold text-gray-800">{testimonial.author}</p>
                    <p className="text-gray-600">{testimonial.position}, {testimonial.company}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 bg-gradient-to-b from-green-800 to-green-900 text-white">
        <div className="container mx-auto px-6">
          <motion.div 
            className="text-center mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <h2 className="text-4xl font-bold mb-4">Start Your CSR Journey</h2>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto">
              Fill out the form below and our team will get in touch to discuss partnership opportunities
            </p>
          </motion.div>
          <motion.div 
            className="max-w-3xl mx-auto bg-white/10 backdrop-blur-md p-10 rounded-xl shadow-lg"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            {status === 'success' && (
              <div className="mb-4 p-4 bg-green-100 text-green-800 rounded-lg">
                Thank you! Your inquiry has been submitted successfully. We will contact you soon.
              </div>
            )}
            {status === 'error' && (
              <div className="mb-4 p-4 bg-red-100 text-red-800 rounded-lg">
                There was an error submitting your inquiry. Please check your details and try again.
              </div>
            )}

            <form className="space-y-6" onSubmit={handleSubmit}> 
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="companyName" className="block text-gray-200 mb-2">Company Name</label> 
                  <input 
                    type="text" 
                    id="companyName" 
                    className="w-full px-4 py-3 bg-white/20 border border-gray-300/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400 text-white"
                    placeholder="Your company"
                    value={companyName} 
                    onChange={(e) => setCompanyName(e.target.value)} 
                    required
                  />
                </div>
                <div>
                  <label htmlFor="contactPerson" className="block text-gray-200 mb-2">Contact Person</label>
                  <input 
                    type="text" 
                    id="contactPerson"
                    className="w-full px-4 py-3 bg-white/20 border border-gray-300/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400 text-white"
                    placeholder="Full name"
                    value={contactPerson}
                    onChange={(e) => setContactPerson(e.target.value)}
                    required
                  />
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="email" className="block text-gray-200 mb-2">Email Address</label>
                  <input 
                    type="email" 
                    id="email"
                    className="w-full px-4 py-3 bg-white/20 border border-gray-300/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400 text-white"
                    placeholder="email@company.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-gray-200 mb-2">Phone Number</label>
                  <input 
                    type="tel" 
                    id="phone"
                    className="w-full px-4 py-3 bg-white/20 border border-gray-300/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400 text-white"
                    placeholder="Your phone"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    required
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="areaOfInterest" className="block text-gray-200 mb-2">Areas of Interest</label>
                <select 
                  id="areaOfInterest"
                  className="w-full px-4 py-3 bg-white/20 border border-gray-300/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400 text-white"
                  value={areaOfInterest}
                  onChange={(e) => setAreaOfInterest(e.target.value)}
                  required
                >
                  <option value="" className="bg-green-800">Select an option</option>
                  <option value="Reforestation Initiative" className="bg-green-800">Reforestation Initiative</option>
                  <option value="Clean Water Projects" className="bg-green-800">Clean Water Projects</option>
                  <option value="Renewable Energy Access" className="bg-green-800">Renewable Energy Access</option>
                  <option value="Sustainable Agriculture" className="bg-green-800">Sustainable Agriculture</option>
                  <option value="Multiple Areas" className="bg-green-800">Multiple Areas</option>
                </select>
              </div>
              
              <div>
                <label htmlFor="message" className="block text-gray-200 mb-2">Message</label>
                <textarea 
                  id="message"
                  className="w-full px-4 py-3 bg-white/20 border border-gray-300/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400 text-white h-32"
                  placeholder="Tell us about your CSR goals and how we can help"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                ></textarea>
              </div>
              
              <div>
                <button 
                  type="submit" 
                  className="w-full px-6 py-4 bg-white text-green-800 font-semibold rounded-lg hover:bg-gray-100 transition duration-300 shadow-lg"
                    disabled={status === 'success'} 
                >
                  Submit Inquiry
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <motion.div 
            className="text-center mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Common questions about our CSR partnerships
            </p>
          </motion.div>
          <motion.div 
            className="max-w-4xl mx-auto space-y-6"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.div variants={fadeIn} className="border-b border-gray-200 pb-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">What is the minimum contribution for CSR partnerships?</h3>
              <p className="text-gray-600">We work with organizations of all sizes and can customize partnerships based on your budget. Our starting contributions typically begin at ₹50,000, but we're flexible and can discuss options that align with your company's capacity.</p>
            </motion.div>
            <motion.div variants={fadeIn} className="border-b border-gray-200 pb-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">How do you measure and report impact?</h3>
              <p className="text-gray-600">We provide detailed quarterly reports with quantifiable metrics specific to your chosen initiative. These include environmental impact data, beneficiary statistics, and progress photos/videos. We also offer site visits for partners to witness the impact firsthand.</p>
            </motion.div>
            <motion.div variants={fadeIn} className="border-b border-gray-200 pb-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Can we customize a CSR program for our company?</h3>
              <p className="text-gray-600">Absolutely! We specialize in creating tailored CSR programs that align with your company's values, industry, and specific sustainability goals. Our team will work closely with you to develop a program that maximizes impact while meeting your objectives.</p>
            </motion.div>
            <motion.div variants={fadeIn} className="border-b border-gray-200 pb-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Do you provide tax benefits documentation?</h3>
              <p className="text-gray-600">Yes, as a registered non-profit organization, we provide all necessary documentation for tax deductions. Our finance team ensures you receive proper receipts and certificates for your contributions in compliance with tax regulations.</p>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default CSR;