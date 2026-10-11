import { useEffect, useState } from "react";
import "./App.css";
import profileImage from "./img/main-img.jpg";

function App() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [cursor, setCursor] = useState({ x: 0, y: 0 });
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const documentHeight =
        document.documentElement.scrollHeight - window.innerHeight;

      const progress =
        documentHeight > 0 ? (scrollTop / documentHeight) * 100 : 0;

      setScrollProgress(progress);
    };

    const handleMouseMove = (e) => {
      setCursor({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <div className="app">

      {/* ================= CURSOR ================= */}

      <div
        className="custom-cursor"
        style={{
          left: `${cursor.x}px`,
          top: `${cursor.y}px`,
        }}
      />

      {/* ================= SCROLL PROGRESS ================= */}

      <div
        className="scroll-progress"
        style={{ width: `${scrollProgress}%` }}
      />

      {/* ================= NAVBAR ================= */}

      <header className="navbar">

        <a href="#home" className="logo" onClick={closeMenu}>
          GB<span>.</span>
        </a>

      

<nav className={menuOpen ? "nav-open" : ""}>

  <a href="#home" onClick={closeMenu}>
    Home
  </a>

  <a href="#about" onClick={closeMenu}>
    About
  </a>

  <a href="#skills" onClick={closeMenu}>
    Skills
  </a>
    <a href="#experience" onClick={closeMenu}>
    Experience
  </a>


  <a href="#education" onClick={closeMenu}>
    Education
  </a>

<a href="#certifications" onClick={closeMenu}>
  Certifications
</a>

  <a href="#contact" onClick={closeMenu}>
    Contact
  </a>

</nav>

        <a href="#contact" className="nav-button">
          Let's Talk
        </a>

        <button
          className="menu-button"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>

      </header>


      {/* ================= HERO ================= */}

      <main>

        <section className="hero" id="home">

          <div className="hero-grid" />

          <div className="hero-content">

            <p className="eyebrow">
              APPLICATION SUPPORT ENGINEER
            </p>

            <h1>
              Hi, I'm
              <span>GURUPRASAD BALKUNDE</span>
            </h1>

            <div className="typing-wrapper">
              <span>I'm a </span>
              <span className="typing-text">
                Application Support Engineer
              </span>
            </div>

            <p className="hero-text">
              Application Support Engineer focused on application
              troubleshooting, production support, monitoring,
              SQL, incident management, and delivering reliable
              technical solutions.
            </p>

            <div className="hero-buttons">

              <a
                href="/Resume.pdf"
                download
                className="button primary"
              >
                Download CV ↓
              </a>

              <a
                href="#experience"
                className="button secondary"
              >
                Explore My Experience →
              </a>

            </div>

            <div className="socials">

              <a
                href="https://www.linkedin.com/in/guruprasad-balkunde-92baa32ab/"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn ↗
              </a>

              <a
                href="https://www.instagram.com/guruprasad.balkunde/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Instagram ↗
              </a>

            </div>

          </div>


          {/* ================= HERO VISUAL ================= */}

          <div className="hero-visual">

            <div className="orbit orbit-one" />
            <div className="orbit orbit-two" />

            <div className="glow" />

            <div className="profile-card">

              <div className="profile-image">

                <img
                  src={profileImage}
                  alt="Guruprasad Balkunde"
                />

              </div>

              <div className="status">
                <span />
                Available for opportunities
              </div>

              <div className="profile-role">
                Application Support
              </div>

            </div>

            <div className="floating-card floating-one">
              <span>⚡</span>
              Production Support
            </div>

            <div className="floating-card floating-two">
              <span>◉</span>
              Monitoring & Troubleshooting
            </div>

          </div>

        </section>


        {/* ================= ABOUT ================= */}

        <section className="section about-section" id="about">

          <p className="section-label">
            01 — ABOUT
          </p>

          <h2>
            Keeping Applications Reliable.
            <span> Solving Problems Efficiently.</span>
          </h2>

          <p className="section-text">
            I'm an Application Support Engineer focused on keeping
            business-critical applications stable, available, and
            reliable. I enjoy troubleshooting technical issues,
            investigating application failures, working with SQL
            and Linux environments, monitoring production systems,
            and collaborating with development and infrastructure
            teams.
          </p>


          <div className="stats-grid">

            {/* <div className="stat-card">
              <strong>24/7</strong>
              <span>Production Mindset</span>
            </div> */}

            <div className="stat-card">
              <strong>Linux</strong>
              <span>Linux Troubleshooting</span>
            </div>

            <div className="stat-card">
              <strong>SQL</strong>
              <span>Database Troubleshooting</span>
            </div>

            <div className="stat-card">
              <strong>ITRS</strong>
              <span>Application Monitoring</span>
            </div>

            <div className="stat-card">
              <strong>ITIL</strong>
              <span>Incident Management</span>
            </div>

          </div>

        </section>


        {/* ================= SKILLS ================= */}

        <section
          className="section skills"
          id="skills"
        >

          <p className="section-label">
            02 — SKILLS
          </p>

          <h2>
            Technologies
            <span> I work with.</span>
          </h2>

          <div className="skill-grid">

            <div className="skill">
              <span>01</span>
              <h3>Linux</h3>
              <p>System troubleshooting & logs</p>
            </div>

            <div className="skill">
              <span>02</span>
              <h3>SQL</h3>
              <p>Queries & database troubleshooting</p>
            </div>

            <div className="skill">
              <span>03</span>
              <h3>ServiceNow</h3>
              <p>Incident & service management</p>
            </div>

            <div className="skill">
              <span>04</span>
              <h3>ITRS</h3>
              <p>Application monitoring</p>
            </div>

            <div className="skill">
              <span>05</span>
              <h3>ITIL</h3>
              <p>IT service management</p>
            </div>

            <div className="skill">
              <span>06</span>
              <h3>AppDynamics</h3>
              <p>Application performance monitoring</p>
            </div>

            <div className="skill">
              <span>07</span>
              <h3>Java</h3>
              <p>Application understanding</p>
            </div>

            <div className="skill">
              <span>08</span>
              <h3>Git & GitHub</h3>
              <p>Version control</p>
            </div>

            <div className="skill">
              <span>09</span>
              <h3>JavaScript</h3>
              <p>Web development</p>
            </div>

            <div className="skill">
              <span>10</span>
              <h3>HTML & CSS</h3>
              <p>Frontend development</p>
            </div>

            <div className="skill">
              <span>11</span>
              <h3>Gen AI</h3>
              <p>AI-assisted productivity</p>
            </div>

            <div className="skill">
              <span>12</span>
              <h3>ChatGPT</h3>
              <p>AI-powered problem solving</p>
            </div>

          </div>

        </section>


        {/* ================= EXPERIENCE ================= */}

    ```jsx
{/* ================= EXPERIENCE ================= */}

<section
  className="section experience-section"
  id="experience"
>
  {/* Experience Heading */}
  <div className="experience-heading">
    <p className="section-label">
      03 — EXPERIENCE
    </p>

    <h2>
      My
      <span> professional journey.</span>
    </h2>

    <p className="section-text">
      Experience in application support, production
      environments, troubleshooting, monitoring,
      incident management, and maintaining reliable
      business applications.
    </p>
  </div>

  {/* Experience Timeline */}
  <div className="experience-timeline">

    {/* ========== EXPERIENCE 1 ========== */}

    <article className="experience-card">
      <div className="experience-dot" />

      <div className="experience-date">
        AUG 2026 — PRESENT
      </div>

      <div className="experience-content">
        <div className="experience-top">
          <div>
            <p className="company">
              NusuMMit Technology Pvt. Ltd.
            </p>

            <h3>
              Application Support Engineer
            </h3>

            <p className="project-name">
              Project:{" "}
              <strong>NEAPS — NSE</strong>
            </p>
          </div>

          <div className="experience-badge">
            CURRENT
          </div>
        </div>

        {/* Project Description */}
        <div className="experience-description">
          <h4>Project Description</h4>

          <p>
            NEAPS is a web-based application portal
            associated with the National Stock Exchange
            of India, supporting listed companies and
            entities involved in the securities listing
            process.
          </p>
        </div>

        {/* Responsibilities */}
        <div className="experience-block">
          <h4>Key Responsibilities</h4>

          <ul>
            <li>
              Monitored application health and performance.
            </li>

            <li>
              Investigated and troubleshot application issues.
            </li>

            <li>
              Handled production incidents and service requests.
            </li>

            <li>
              Performed root cause analysis (RCA).
            </li>

            <li>
              Analyzed application logs and error messages.
            </li>

            <li>
              Collaborated with technical teams to resolve issues.
            </li>
          </ul>
        </div>

        {/* Technologies */}
        <div className="technology-section">
          <h4>Technologies &amp; Tools</h4>

          <div className="technology-list">
            <span>SQL</span>
            <span>Linux</span>
            <span>ITRS</span>
            <span>ServiceNow</span>
            <span>ITIL</span>
          </div>
        </div>
      </div>
    </article>

    {/* ========== EXPERIENCE 2 ========== */}

    <article className="experience-card">
      <div className="experience-dot" />

      <div className="experience-date">
        JUL 2024 — JUL 2026
      </div>

      <div className="experience-content">
        <div className="experience-top">
          <div>
            <p className="company">
              MyClan Services Pvt. Ltd.
            </p>

            <h3>
              Application Support Engineer
            </h3>

            <p className="project-name">
              Project:{" "}
              <strong>Oracle FLEXCUBE</strong>
            </p>
          </div>

          <div className="experience-badge">
            PREVIOUS
          </div>
        </div>

        {/* Project Description */}
        <div className="experience-description">
          <h4>Project Description</h4>

          <p>
            Oracle FLEXCUBE is a core banking software
            suite developed by Oracle Financial Services.
            It supports banking operations, including
            retail and corporate banking, through
            integrated financial applications.
          </p>
        </div>

        {/* Responsibilities */}
        <div className="experience-block">
          <h4>Key Responsibilities</h4>

          <ul>
            <li>
              Monitored application health and performance.
            </li>

            <li>
              Investigated and troubleshot application issues.
            </li>

            <li>
              Performed root cause analysis (RCA).
            </li>

            <li>
              Analyzed application logs and error messages.
            </li>

            <li>
              Coordinated with technical teams to resolve incidents.
            </li>
          </ul>
        </div>

        {/* Technologies */}
        <div className="technology-section">
          <h4>Technologies &amp; Tools</h4>

          <div className="technology-list">
            <span>SQL</span>
            <span>Linux</span>
            <span>ITIL</span>
            <span>Salesforce</span>
            <span>Log Analysis</span>
            <span>AppDynamics</span>
          </div>
        </div>
      </div>
    </article>

  </div>
</section>
```

{/* ================= EDUCATION ================= */}

<section
  className="section education-section"
  id="education"
>

  <div className="education-heading">

    <p className="section-label">
      04 — EDUCATION
    </p>

    <h2>
      My
      <span> educational journey.</span>
    </h2>

    <p className="section-text">
      My academic background has helped me build a strong
      foundation in technology, problem solving, programming,
      databases, and computer systems.
    </p>

  </div>


  <div className="education-grid">

    {/* EDUCATION 1 */}

    <article className="education-card">

      <div className="education-icon">
        🎓
      </div>

      <div className="education-content">

        <div className="education-year">
          2022 — 2025
        </div>

        <h3>
          Bachelor of Computer Applications
        </h3>

        <p className="education-institute">
          Sharnbasva University Gulbarga.
        </p>

        <p className="education-description">
          Studied computer applications with a focus on programming, database management, web technologies, operating systems, software development, and computer fundamentals.
        </p>

        <div className="education-tags">

          <span>Programming</span>
          <span>DBMS</span>
          <span>Web Development</span>
          <span>Computer Networks</span>

        </div>

      </div>

    </article>


    {/* EDUCATION 2 */}

    <article className="education-card">

      <div className="education-icon">
        📚
      </div>

      <div className="education-content">

        <div className="education-year">
          2020 — 2022
        </div>

        <h3>
          Higher Secondary Education
        </h3>

        <p className="education-institute">
          Shri Chhatrapati Shivaji College Omerga.
        </p>

        <p className="education-description">
          Completed higher secondary education with a strong
          interest in mathematics, Biology, Mathematics and Physics
        </p>

        <div className="education-tags">

          <span>Biology</span>
          <span>Physics</span>
          <span>Chemistry</span>
          <span>Mathematics</span>
          <span>Problem Solving</span>

        </div>

      </div>

    </article>


     {/* EDUCATION 3 */}

    <article className="education-card">

      <div className="education-icon">
        📚
      </div>

      <div className="education-content">

        <div className="education-year">
          2019 — 2020
        </div>

        <h3>
          Secondary School Certificate
        </h3>

        <p className="education-institute">
          Kai. Sharnappa Malang Vidhyalay Omerga.
        </p>

        <p className="education-description">
          Successfully completed the Secondary School Certificate (SSC) under the Maharashtra State Board, focusing on a foundational curriculum across mathematics, sciences, humanities, and languages. Developed strong core analytical, linguistic, and logical reasoning skills, graduating with an aggregate score of 83.60%.
        </p>

        <div className="education-tags">
  <span>General Sciences</span>
  <span>Mathematics</span>
  <span>Social Sciences</span>
  <span>Languages & Communication</span>
  <span>Foundational Analytics</span>
</div>

      </div>

    </article>

  </div>

</section>

{/* ================= CERTIFICATIONS ================= */}

<section
  className="section certifications-section"
  id="certifications"
>

  <div className="certifications-heading">

    <p className="section-label">
      05 — CERTIFICATIONS
    </p>

    <h2>
      Certifications that
      <span> strengthen my expertise.</span>
    </h2>

    <p className="section-text">
      Professional certifications and learning achievements
      that support my knowledge in application support,
      IT service management, monitoring, databases, and
      modern technologies.
    </p>

  </div>


  <div className="certifications-grid">

    {/* CERTIFICATION 1 */}

    <article className="certification-card">

      <div className="certification-top">

        <div className="certification-icon">
          🏆
        </div>

        <span className="certification-number">
          01
        </span>

      </div>

      <div className="certification-content">

        <p className="certification-type">
          PROFESSIONAL CERTIFICATION
        </p>

        <h3>
          JAVA FULL STACK
        </h3>

        <p className="certification-provider">
          Issued by: Giri's TechHub Pune
        </p>

        <p className="certification-date">
          Issued: 2026
        </p>

        <p className="certification-description">
          Short description of what this certification
          demonstrates and the skills covered.
        </p>

        <a
          href="#"
          className="certificate-link"
          target="_blank"
          rel="noopener noreferrer"
        >
          View Certificate ↗
        </a>

      </div>

    </article>


    {/* CERTIFICATION 2 */}

    <article className="certification-card">

      <div className="certification-top">

        <div className="certification-icon">
          🏆
        </div>

        <span className="certification-number">
          02
        </span>

      </div>

      <div className="certification-content">

        <p className="certification-type">
          PROFESSIONAL CERTIFICATION
        </p>

        <h3>
          Certification Name
        </h3>

        <p className="certification-provider">
          Issued by: Certification Provider
        </p>

        <p className="certification-date">
          Issued: 2026
        </p>

        <p className="certification-description">
          Short description of what this certification
          demonstrates and the skills covered.
        </p>

        <a
          href="#"
          className="certificate-link"
          target="_blank"
          rel="noopener noreferrer"
        >
          View Certificate ↗
        </a>

      </div>

    </article>

  </div>

</section>


        {/* ================= CONTACT ================= */}

        <section
          className="section contact"
          id="contact"
        >

          <p className="section-label">
            06 — CONTACT
          </p>

          <h2>
            Let's keep systems 
            <span> running.</span>
          </h2>

          <p className="contact-text">
            Have an opportunity, technical discussion, or
            collaboration in mind?
          </p>

          <a
            href="mailto:guruprasad003b@gmail.com"
            className="button primary"
          >
            Get In Touch →
          </a>

        </section>

      </main>


      {/* ================= FOOTER ================= */}

      <footer>

        <div>
          © 2026 Guruprasad Balkunde
        </div>

        <div>
          Built with React ⚡
        </div>

      </footer>

      {/* ================= BACK TO TOP ================= */}

      {scrollProgress > 15 && (
        <a href="#home" className="back-top">
          ↑
        </a>
      )}

    </div>
  );
}

export default App;