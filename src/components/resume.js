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
  href="/assets/pdf/SonuCv.pdf"
  download
  target="_blank"
  rel="noopener noreferrer"
  title="Resume Sonu Jaiswal"
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
              <li>As a full-stack Web and App Developer, I build scalable, high-performance applications using <strong>React Native</strong>, <strong>React.js</strong>, <strong>Next.js</strong>, <strong>Vue.js</strong>, and <strong>Node.js</strong>. I focus on crafting responsive, user-friendly interfaces with seamless cross-platform experiences.</li>

<li>I develop robust backend systems using <strong>Node.js</strong> and <strong>Express.js</strong>, delivering real-time features and RESTful APIs with optimized performance and reliability.</li>

<li>My DevOps expertise includes <strong>CI/CD pipeline implementation</strong>, <strong>Docker containerization</strong>, and managing cloud infrastructure on <strong>AWS</strong>, <strong>DigitalOcean</strong>, and <strong>Hostinger</strong>, ensuring 99.9% uptime and smooth deployments.</li>

<li>I design secure, high-performance database schemas with <strong>MongoDB</strong>, <strong>MySQL</strong>, and <strong>PostgreSQL</strong>, handling large-scale data efficiently and reliably.</li>

<li>With full-stack ownership—from frontend development to server management—I continuously improve the <strong>performance</strong>, <strong>security</strong>, and <strong>scalability</strong> of live production systems.</li>




      </ul>
            </li>
          ))}
        </ol>


{/*  */}

<div className="title-wrapper m-4 p-4">
  {/* your content here */}
</div>


  <ol className="timeline-list ">
          {[
  {
    title: "MIS Executive | Prozo",
    year: "(Jun,2024 - Aug,2024)",
    text: "Leading 18+ developers across 25+ projects. Managing client requirements, estimations, Agile delivery, and ensuring high-quality outputs."
  }
].map((exp, index) => (
            <li key={index} className="timeline-item">
              <h4 className="h4 timeline-item-title">{exp.title}</h4>
              <span>{exp.year}</span>
              <ul className="timeline-text list-disc ml-5">
          <li>Data Management: Efficiently handled and managed large datasets to ensure accuracy and integrity.</li>
    <li>Reporting: Generated comprehensive reports to assist in strategic decision-making processes.Analytical Skills:
Utilized advanced Excel functions and Python scripts to analyze data trends and insights.
</li>
    <li>Process Improvement: Implemented solutions to streamline data processing and reporting mechanisms.</li>
 

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
            { title: "Bachelor of Computer Application – Panjab University, Chandigarh", year: "2021 — 2024", cgpa: "CGPA: 7.8" },
            { title: "10+2 (Non-Medical) – Kendriya Vidalaya, Sector 29, Chandigarh", year: "2020 — 2021", cgpa: "Marks: 78%" },

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
