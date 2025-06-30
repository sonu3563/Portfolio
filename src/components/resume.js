"use client";

export default function ResumePage({ isActive }) {
  return (
    <article className={`resume ${isActive ? "active" : ""}`} data-page="resume">
      <header>
        <h2 className="h2 article-title">Resume</h2>
      </header>

{/* resume download button */}
<section className="resumeDownload">
<a
  href="/assets/pdf/Rahul_vij_resume.pdf"
  download
  target="_blank"
  rel="noopener noreferrer"
  title="Resume Rahul Vij"
  className="form-btn"
  style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", color: "hsl(45, 100%, 72%)", textDecoration: "none" }}
>
  <ion-icon name="download" role="img" class="md hydrated" aria-label="paper plane"></ion-icon>
  <span>Download Resume</span>
</a>
</section>
 {/* Experience Section */}
      <section className="timeline">
        <div className="title-wrapper">
          <div className="icon-box">
            <ion-icon name="briefcase-outline"></ion-icon>
          </div>
          <h3 className="h3">Experience</h3>
        </div>

        <ol className="timeline-list">
          {[
  {
    title: "Full Stack Developer | Tech Arch Softwares",
    year: "(2024 - Present)",
    text: "Leading 18+ developers across 25+ projects. Managing client requirements, estimations, Agile delivery, and ensuring high-quality outputs."
  }
].map((exp, index) => (
            <li key={index} className="timeline-item">
              <h4 className="h4 timeline-item-title">{exp.title}</h4>
              <span>{exp.year}</span>
              <ul className="timeline-text list-disc ml-5">
          <li>Built and maintained scalable backend services using Java and Spring Boot, including secure REST APIs and microservices architecture.</li>
    <li>Developed robust web applications and automation tools using Python and Django for high-speed deployment and testing pipelines.</li>
    <li>Created dynamic and performant backend systems using Node.js and Express.js for real-time applications and RESTful APIs.</li>
    <li>Designed and deployed responsive web and mobile UIs using React.js, Next.js, Vue.js, and React Native for cross-platform consistency.</li>
    <li>Implemented CI/CD pipelines, Docker containerization, and cloud infrastructure setup as part of DevOps practices ensuring 99.9% uptime.</li>
    <li>Engineered secure, optimized database schemas and queries using MongoDB, MySQL, and PostgreSQL, supporting millions of records efficiently.</li>

      </ul>
            </li>
          ))}
        </ol>
      </section>

      {/* Education Section */}
      <section className="timeline">
        <div className="title-wrapper">
          <div className="icon-box">
            <ion-icon name="book-outline"></ion-icon>
          </div>
          <h3 className="h3">Education</h3>
        </div>

        <ol className="timeline-list">
          {[
            { title: "B.E (Computer Sciemce & Engineering) – Chitkara University, Rajpura", year: "2021 — 2025", cgpa: "CGPA: 9.0" },
            { title: "10+2 (Non-Medical) – M.D.A.V Public School", year: "2020 — 2021", cgpa: "Marks: 80%" },
            { title: "10th (PCMB) – Don Bosco School", year: "2018 — 2019", cgpa: "Marks: 85%" },

          ].map((edu, index) => (
            <li key={index} className="timeline-item">
              <h4 className="h4 timeline-item-title">{edu.title}</h4>
              <span>{edu.year}</span>
              <span>{edu.cgpa}</span>
            </li>
          ))}
        </ol>
      </section>

    </article>
  );
}
