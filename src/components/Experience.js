const experienceData = [
    {
      title: "BI Channel",
      duration: "2023",
      description: "Participate in Bi channel activites the aim of developing knowledge in the field of broadcasting.",
    },
    {
      title: "HIMSISFO WORKSHOP",
      duration: "2022",
      description: "Attending the BINUS Workshop (HIMSISFO) which discusses the Java Programming Language and UI UX at SMK Bina Informatika",
    },{
      title: "BNCC Codedesign UI/UX",
      duration: "2022",
      description: "Attending the BNCC(Binusian Computer Club) which discusses UI/UX Fundamental",
    },
  ];
  
  const Experiences = () => {
    return (
      <section id="experience" className="py-12 bg-white">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Experience</h2>
          <ul className="text-left">
            {experienceData.map((experience, index) => (
              <li key={index} className="mb-4">
                <h3 className="text-xl font-bold">{experience.title}</h3>
                <p className="text-gray-600">{experience.duration}</p>
                <p>{experience.description}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>
    );
  };
  
  export default Experiences;
  