const About = () => {
  return (
    <section id="about" className="py-12 bg-gray-100">
      <div className="container mx-auto flex flex-col md:flex-row items-center">
        {/* Text Section */}
        <div className="md:w-1/2 md:pr-8 text-center md:text-left">
          <h2 className="text-3xl font-bold mb-4">About Me</h2>
          <p className="text-lg text-gray-700 mb-4">
            Hi! I'm Azhar Syarif, A Binus University information systems student, this passionate web developer and creative digital artist is driven to create innovative online experiences.
          </p>
        </div>
        {/* Image Section */}
        <div className="md:w-1/2 mb-6 md:mb-0 flex justify-center">
          <img
            src="/images/logo_azhar.png"
            alt="Azhar Syarif"
            className="w-3/4 h-auto object-cover rounded-lg shadow-lg max-w-xs" // Set max-width to control image size
          />
        </div>
      </div>
    </section>
  );
};

export default About;
