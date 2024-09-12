const hardSkills = [
    { name: "JavaScript", percentage: 55 },
    { name: "Laravel", percentage: 70 },
    { name: "Node JS", percentage: 55 },
  ];
  
  const softSkills = [
    { name: "Communication", percentage: 85 },
    { name: "Problem-Solving", percentage: 80 },
    { name: "Teamwork", percentage: 80 },
    { name: "Adaptability", percentage: 90 },
  ];
  
  const toolsSkills = [
    { name: "Figma", percentage: 80 },
    { name: "Postman", percentage: 60 },
    { name: "Adobe Premiere", percentage: 70 },
    { name: "Adobe Photoshop", percentage: 75 },
  ];
  
  const SkillBar = ({ name, percentage }) => (
    <div className="mb-4">
      <div className="flex justify-between mb-1">
        <span className="font-semibold">{name}</span>
        <span>{percentage}%</span>
      </div>
      <div className="relative w-full h-2 bg-gray-200 rounded-full">
        <div
          className="absolute top-0 left-0 h-full bg-blue-500 rounded-full"
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  );
  
  const Skills = () => {
    return (
      <section id="skills" className="py-12 bg-gray-100">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">Skills</h2>
          
          {/* Hard Skills */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold mb-4">Hard Skills</h3>
            <div className="max-w-4xl mx-auto">
              {hardSkills.map((skill) => (
                <SkillBar key={skill.name} name={skill.name} percentage={skill.percentage} />
              ))}
            </div>
          </div>
          
          {/* Tools */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold mb-4">Soft Skills</h3>
            <div className="max-w-4xl mx-auto">
            {toolsSkills.map((skill) => (
                <SkillBar key={skill.name} name={skill.name} percentage={skill.percentage} />
              ))}
            </div>
          </div>
          
          {/* Soft Skill */}
          <div>
            <h3 className="text-2xl font-bold mb-4">Tools</h3>
            <div className="max-w-4xl mx-auto">
              {softSkills.map((skill) => (
                <SkillBar key={skill.name} name={skill.name} percentage={skill.percentage} />
              ))}
            </div>
          </div>
        </div>
      </section>
    );
  };
  
  export default Skills;
  