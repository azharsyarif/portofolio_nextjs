import Image from 'next/image';

const educationData = [
    {
      institution: "SMK Bina Informatika",
      degree: "RPL (Rekayasa Perangkat Lunak)",
      duration: "2021 - 2024",
      description: "Learn programming, from websites, android, and database",
      logo: "/images/binaInformtika_logo.jpg", // Path to logo image
    },
    {
      institution: "Binus University",
      degree: "System Information",
      duration: "2024 - now",
      description: "-",
      logo: "/images/binus_logo.jpg", // Path to logo image
    },
  ];
  
  const StudyJourney = () => {
    return (
      <section id="study-journey" className="py-12 bg-white">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Study Journey</h2>
          <ul className="text-left">
            {educationData.map((education, index) => (
              <li key={index} className="flex items-start mb-8">
                <Image
                  src={education.logo}
                  alt={`${education.institution} Logo`}
                  className="w-16 h-16 mr-6" // Adjust size as needed
                />
                <div>
                  <h3 className="text-xl font-bold">{education.institution}</h3>
                  <p className="text-gray-600">{education.degree}</p>
                  <p className="text-gray-600">{education.duration}</p>
                  <p>{education.description}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>
    );
  };
  
  export default StudyJourney;
  