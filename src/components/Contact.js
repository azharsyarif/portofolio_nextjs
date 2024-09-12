const Contact = () => {
  return (
    <section id="contact" className="py-16 bg-gray-900 text-white">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12">Lets Collaboration With Us</h2>

        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Contact Info Section */}
          <div className="md:w-1/2 mb-8 md:mb-0 md:pr-8 text-center md:text-left">
            <h3 className="text-2xl font-semibold mb-4">Let's Connect</h3>
            <p className="text-gray-300 mb-6">
              I’m always open to discussing your projects or opportunities for collaboration. 
              Feel free to contact me through the form or using the contact information below.
            </p>
            <p className="text-lg mb-4">
              <strong>Email:</strong> 
              <a href="mailto:azharsyarif2202@gmail.com" className="text-blue-400 hover:underline ml-2">
                azharsyarif2202@gmail.com
              </a>
            </p>
            <p className="text-lg mb-4">
              <strong>Phone:</strong> 
              <a href="tel:+6287822660501" className="text-blue-400 hover:underline ml-2">
                +62 8782 2660 501 
              </a>
            </p>
            <p className="text-lg">
              <strong>LinkedIn:</strong> 
              <a href="https://www.linkedin.com/in/azhar-syarif-463ab8292/" className="text-blue-400 hover:underline ml-2" target="_blank" rel="noreferrer">
                linkedin.com/in/azhar-syarif
              </a>
            </p>
          </div>

          {/* Contact Form */}
          <div className="md:w-1/2">
            <form className="bg-gray-800 p-8 rounded-lg shadow-lg">
              <div className="mb-6">
                <label htmlFor="name" className="block text-sm font-semibold mb-2">Your Name</label>
                <input
                  type="text"
                  id="name"
                  className="w-full p-3 bg-gray-700 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-white"
                  placeholder="John Doe"
                  required
                />
              </div>

              <div className="mb-6">
                <label htmlFor="email" className="block text-sm font-semibold mb-2">Your Email</label>
                <input
                  type="email"
                  id="email"
                  className="w-full p-3 bg-gray-700 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-white"
                  placeholder="johndoe@example.com"
                  required
                />
              </div>

              <div className="mb-6">
                <label htmlFor="message" className="block text-sm font-semibold mb-2">Message</label>
                <textarea
                  id="message"
                  className="w-full p-3 bg-gray-700 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-white"
                  rows="5"
                  placeholder="Write your message here..."
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-md font-semibold transition duration-300"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
