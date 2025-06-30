"use client";

export default function SkillsPage({ isActive }) {
  const technologies = [
    // Languages & Frameworks
    "HTML",
    "CSS",
    "JS",
    "React.js",
    "React Native",
    // "Vue.js",
    "Python",
    "Django",
    "JAVA",
    // "SpringBoot",
    // "Spring",
    "Node.js",
    "Express.js",
    "SQL",
    "MySQL",
    "MongoDB",
    "PostgreSQL",

    // DevOps & Cloud
    "DevOps",
    "AWS",
    "Digital Ocean",
    "CI-CD",
    "Server Management",
    "Deployment",

    // Tools
    "Git",
    "GitHub",
    "VS Code",
    "Google Workspace",
    "Third Party Integrations",
    "APIs",
    "Api Integrations",
    "Firebase",
    "Google Cloud",
    "twillio",
    "Payment Gateway",
    
    

    // Project & Process
    "Agile",
    "Roadmap Planning",
    "Project Estimation",
    "Requirement Analysis",
    "Solution Optimization",
    "Team Leadership",
    "Client Communication",

    // Web & Marketing
    "REST API",
    "Automations",
  ];

  return (
    <article
      className={`skills ${isActive ? "active" : ""}`}
      data-page="skills"
    >
      <header>
        <h2 className="h2 article-title">Skills &amp; Tech</h2>
      </header>

      {/* Technology Section */}
      <section className="technology">
        <h3 className="h3 skills-title">Technologies</h3>
        <div className="content-card">
          <div
            className="tech-badges"
            style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}
          >
            {technologies.map((tech, index) => (
              <span
                key={index}
                className="tech-pill"
                style={{
                  backgroundColor: "#fbd36d",
                  color: "#000",
                  padding: "0.4rem 0.75rem",
                  fontSize: "0.875rem",
                  borderRadius: "9999px",
                  whiteSpace: "nowrap",
                }}
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="skill">
        <h3 className="h3 skills-title">My Skills</h3>

        <ul className="skills-list content-card">
          {[
            { name: "Project Management & Leadership", value: 90 },
            { name: "React Native/Flutter", value: 90 },
            { name: "Node.js/Express.js", value: 85 },
            { name: "Python/Flask", value: 80 },
            { name: "React.js, Next.js ", value: 90 },
            { name: "Cloud Computing (AWS, DigitalOcean)", value: 85 },
            { name: "DevOps & CI/CD", value: 85 },
          ].map((skill, index) => (
            <li key={index} className="skills-item">
              <div className="title-wrapper">
                <h5 className="h5">{skill.name}</h5>
                <data value={skill.value}>{skill.value}%</data>
              </div>

              <div className="skill-progress-bg">
                <div
                  className="skill-progress-fill"
                  style={{ width: `${skill.value}%` }}
                ></div>
              </div>
            </li>
          ))}
        </ul>
      </section>
    </article>
  );
}
