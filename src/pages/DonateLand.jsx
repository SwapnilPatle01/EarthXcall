import React, { useState } from "react";
import { motion } from "framer-motion";
import axios from "axios";

const DonateLand = () => {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6 }
    }
  };
  const slideIn = {
    hidden: { opacity: 0, x: -30 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { duration: 0.6 }
    }
  };
  
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    landLocation: "",
    landSize: "",
    landType: "",
    message: ""
  });

  const [status, setStatus] = useState(null);

  const landTypes = [
    "Agricultural Land",
    "Forest Land",
    "Urban Plot",
    "Wetland",
    "Coastal Area",
    "Other"
  ];
  
  const benefits = [
    {
      title: "Environmental Conservation",
      description: "Your donated land will be preserved and protected, contributing to biodiversity conservation and ecosystem restoration.",
      icon: "🌿"
    },
    {
      title: "Tax Benefits",
      description: "Receive significant tax deductions and benefits for your charitable contribution of land.",
      icon: "📝"
    },
    {
      title: "Legacy Creation",
      description: "Create a lasting environmental legacy that will benefit future generations and bear your name if desired.",
      icon: "🌱"
    },
    {
      title: "Maintenance Relief",
      description: "Free yourself from the ongoing costs and responsibilities of land maintenance and property taxes.",
      icon: "💰"
    }
  ];
  
  const successStories = [
    {
      title: "The Sharma Family Forest Reserve",
      description: "The Sharma family donated 50 acres of ancestral forest land that has now been transformed into a thriving wildlife sanctuary, home to over 200 bird species.",
      image: "https://images.unsplash.com/photo-1448375240586-882707db888b?q=80&w=2070&auto=format&fit=crop"
    },
    {
      title: "Coastal Conservation Area",
      description: "A 10-acre coastal plot donation led to the restoration of mangrove forests that now protect the shoreline and serve as a crucial habitat for marine life.",
      image: "https://images.unsplash.com/photo-1518495973542-4542c06a5843?q=80&w=2074&auto=format&fit=crop"
    },
    {
      title: "Urban Sanctuary",
      description: "A small urban plot donation in the heart of the city was transformed into a community garden that now serves as an educational space for local schools.",
      image: "https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?q=80&w=2070&auto=format&fit=crop"
    }
  ];
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault(); // *** PREVENT DEFAULT FORM SUBMISSION ***
    setStatus(null); // Reset status on new submit

    if (!formData.name || !formData.email || !formData.phone || !formData.landLocation || !formData.landSize || !formData.landType) {
       setStatus("error");
       // You could set a more specific error message here if desired
       console.error("Please fill in all required fields.");
       return;
    }

    try {
      const response = await axios.post(`https://earthxway-backend.vercel.app/land-donation`, formData); // Use formData directly
      
      if (response.status === 201) { 
        setStatus("success");
        setFormData({
          name: "",
          email: "",
          phone: "",
          landLocation: "",
          landSize: "",
          landType: "",
          message: ""
        });
      } else {
        setStatus("error");
      }
    } catch (error) {
      console.error("Error submitting Land Donation inquiry:", error);
      setStatus("error");
    }
  };

  return (
    <div className="bg-white">
      <section className="relative h-[100vh] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center z-0"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=2232&auto=format&fit=crop')",
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-green-900/70 to-green-800/70 backdrop-blur-sm"></div>
        </div>
        <div className="container mx-auto px-6 relative z-10 text-center">
          <motion.h1 
            className="text-5xl md:text-6xl font-bold text-white mb-6"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Donate Your Land
          </motion.h1>
          <motion.p 
            className="text-xl md:text-2xl text-gray-100 max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Transform your property into a lasting environmental legacy
          </motion.p>
          <motion.div 
            className="mt-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <a 
              href="#contact-form" 
              className="px-8 py-4 bg-white text-green-800 font-semibold rounded-lg hover:bg-gray-100 transition duration-300 shadow-lg"
            >
              Donate Now
            </a>
          </motion.div>
        </div>
      </section>  
      <section className="py-20 bg-gradient-to-b from-green-50 to-white">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <motion.div 
              className="md:w-1/2"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={slideIn}
            >
              <img 
                src="https://images.unsplash.com/photo-1511497584788-876760111969?q=80&w=2070&auto=format&fit=crop" 
                alt="Land conservation" 
                className="rounded-xl shadow-lg w-full h-auto object-cover"
              />
            </motion.div>
            <motion.div 
              className="md:w-1/2"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
            >
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Why Donate Your Land?</h2>
              <p className="text-gray-600 mb-6 text-lg">
                Land donation is a powerful way to create a lasting environmental legacy while receiving significant tax benefits. Whether you have agricultural land, forest areas, or urban plots, your donation can make a meaningful impact on conservation efforts.
              </p>
              <p className="text-gray-600 mb-6 text-lg">
                Our organization ensures that donated lands are preserved, protected, and used for environmental conservation, reforestation, or sustainable community projects.
              </p>
              <div className="flex items-center text-green-700 font-medium">
                <span className="mr-2">Learn about our land management approach</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </div>
            </motion.div>
          </div>
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
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Benefits of Land Donation</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              When you donate your land, you receive multiple benefits while contributing to environmental conservation
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div 
                key={index}
                className="bg-green-50 p-8 rounded-xl shadow-md hover:shadow-lg transition duration-300"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                variants={fadeIn}
              >
                <div className="text-4xl mb-4">{benefit.icon}</div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
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
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Success Stories</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              See how donated lands have been transformed into thriving conservation areas
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {successStories.map((story, index) => (
              <motion.div 
                key={index}
                className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition duration-300"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={fadeIn}
              >
                <div className="h-48 overflow-hidden">
                  <img 
                    src={story.image} 
                    alt={story.title} 
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">{story.title}</h3>
                  <p className="text-gray-600">{story.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      <section id="contact-form" className="py-20 bg-gradient-to-b from-green-800 to-green-900 text-white">
        <div className="container mx-auto px-6">
          <motion.div 
            className="text-center mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <h2 className="text-4xl font-bold mb-4">Donate Your Land</h2>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto">
              Fill out the form below to start the land donation process. Our team will contact you to discuss the next steps.
            </p>
          </motion.div>
          <motion.div 
            className="max-w-4xl mx-auto bg-white/10 backdrop-blur-md p-10 rounded-xl shadow-lg"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            {/* *** STATUS FEEDBACK *** */}
            {status === 'success' && (
              <div className="mb-4 p-4 bg-green-100 text-green-800 rounded-lg">
                Thank you! Your land donation inquiry has been submitted successfully. We will contact you soon.
              </div>
            )}
            {status === 'error' && (
              <div className="mb-4 p-4 bg-red-100 text-red-800 rounded-lg">
                There was an error submitting your inquiry. Please check your details and try again.
              </div>
            )}

            <form className="space-y-6" onSubmit={handleSubmit}> {/* *** ON SUBMIT HANDLER *** */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-gray-200 mb-2">Full Name*</label> {/* Added htmlFor */}
                  <input 
                    type="text" 
                    id="name" 
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white/20 border border-gray-300/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400 text-white"
                    placeholder="Your name"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-gray-200 mb-2">Email Address*</label>
                  <input 
                    type="email" 
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white/20 border border-gray-300/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400 text-white"
                    placeholder="email@example.com"
                    required
                  />
                </div>
              </div>
              <div>
                <label htmlFor="phone" className="block text-gray-200 mb-2">Phone Number*</label>
                <input 
                  type="tel" 
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-white/20 border border-gray-300/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400 text-white"
                  placeholder="Your phone number"
                  required
                />
              </div>
              <div>
                <label htmlFor="landLocation" className="block text-gray-200 mb-2">Land Location*</label>
                <input 
                  type="text" 
                  id="landLocation"
                  name="landLocation"
                  value={formData.landLocation}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-white/20 border border-gray-300/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400 text-white"
                  placeholder="City, State, Country"
                  required
                />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="landSize" className="block text-gray-200 mb-2">Land Size (acres/hectares)*</label>
                  <input 
                    type="text" 
                    id="landSize"
                    name="landSize"
                    value={formData.landSize}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white/20 border border-gray-300/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400 text-white"
                    placeholder="e.g., 5 acres"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="landType" className="block text-gray-200 mb-2">Land Type*</label>
                  <select 
                    id="landType"
                    name="landType"
                    value={formData.landType}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white/20 border border-gray-300/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400 text-white"
                    required
                  >
                    <option value="" disabled className="bg-green-800">Select land type</option>
                    {landTypes.map((type, index) => (
                      <option key={index} value={type} className="bg-green-800">{type}</option>
                    ))}
                  </select>
                </div>
              </div>
              <div>
                <label htmlFor="message" className="block text-gray-200 mb-2">Additional Information</label>
                <textarea 
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-white/20 border border-gray-300/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400 text-white h-32"
                  placeholder="Please provide any additional details about your land, its current use, and your donation intentions."
                ></textarea>
              </div>
              <div className="pt-4">
                <button 
                  type="submit" 
                  className="w-full px-6 py-4 bg-white text-green-800 font-semibold rounded-lg hover:bg-gray-100 transition duration-300 shadow-lg"
                  disabled={status === 'success'} // Optional: Disable button after success
                >
                  Submit Land Donation Inquiry
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
              Common questions about the land donation process
            </p>
          </motion.div>
          <motion.div 
            className="max-w-4xl mx-auto space-y-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <div className="border-b border-gray-200 pb-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">What types of land do you accept?</h3>
              <p className="text-gray-600">We accept various types of land including agricultural land, forest areas, wetlands, coastal properties, and urban plots. Each donation is evaluated based on its conservation potential and alignment with our mission.</p>
            </div>
            <div className="border-b border-gray-200 pb-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">What is the process for donating land?</h3>
              <p className="text-gray-600">The process begins with submitting the inquiry form. Our team will then contact you to discuss your property, arrange a site visit, and conduct necessary assessments. If both parties agree to proceed, we'll work with legal experts to complete the donation paperwork.</p>
            </div>
            <div className="border-b border-gray-200 pb-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">What tax benefits will I receive?</h3>
              <p className="text-gray-600">Land donations typically qualify for significant tax deductions based on the fair market value of the property. The exact benefits depend on your specific situation, and we recommend consulting with a tax professional for personalized advice.</p>
            </div>
            <div className="border-b border-gray-200 pb-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Can I specify how my land will be used?</h3>
              <p className="text-gray-600">Yes, we work with donors to understand their wishes for the land. While we focus on conservation and environmental projects, we can discuss specific uses that align with both your vision and our organization's mission.</p>
            </div>
          </motion.div>
        </div>
      </section>
      <section className="py-16 bg-green-100">
        <div className="container mx-auto px-6 text-center">
          <motion.h2 
            className="text-3xl font-bold text-gray-800 mb-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            Ready to Make a Difference?
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-600 max-w-3xl mx-auto mb-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            Your land donation can create a lasting environmental legacy for generations to come.
          </motion.p>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <a 
              href="#contact-form" 
              className="px-8 py-4 bg-green-700 text-white font-semibold rounded-lg hover:bg-green-800 transition duration-300 shadow-lg inline-block"
            >
              Donate Your Land Today
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default DonateLand;  