import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>Zach Zan Portfolio</title>
        <meta name="description" content="Welcome to Zach Zan's professional portfolio" />
      </Head>
      
      <main style={{ padding: '2rem', fontFamily: 'Arial, sans-serif' }}>
        <header style={{ marginBottom: '3rem' }}>
          <h1>Hello, I&apos;m Chao Zan and I have a preferred name Zach</h1>
          <p>I&apos;m a Full-stack Developer specializing in Front-end Development with Angular and TypeScript.</p>
        </header>

        <section style={{ marginBottom: '2rem' }}>
          <h2>About Me</h2>
          <p>
            I&apos;m passionate about building scalable and user-friendly web applications.
            I specialize in front-end development using Angular and TypeScript, with strong experience across the full stack.
            I have a background in quality assurance, automation testing, and collaborative Agile development.
            I thrive in fast-paced environments where continuous improvement and user-focused design are key.
          </p>
        </section>

        <section style={{ marginBottom: '2rem' }}>
          <h2>Projects</h2>
          <ul>
            <li>🚀 Computer Select - Led a team of developers to build a full-stack application with Angular and SQLite, incorporating role-based access control and achieving a 4.8/5 UI/UX rating.</li>
            <li>📝 Todo App - Designed and deployed a modern React/FastAPI based Todo App featuring task creation, GraphQL integration, and API-driven intelligent suggestions.</li>
            <a href="https://todo.zachzan.com" target="_blank" rel="noopener noreferrer">
              <button>📝 Try My Todo App</button>
            </a>

          </ul>
        </section>

        <section style={{ marginBottom: '2rem' }}>
          <h2>Experience</h2>
          <ul>
            <li><strong>Front-end Developer</strong> @ HongMall Canada (Jan 2024 – Apr 2024) – Angular 17 development, i18n/timezone features, UI/UX feedback, scalability improvements.</li>
            <li><strong>QA/Technical Analyst</strong> @ Iotum Corporation (Jan 2023 – Apr 2023) – Selenium automation, load testing, defect reporting, feature development for debugging tools.</li>
            <li><strong>Front-end Developer</strong> @ Bank of Montreal (May 2022 – Aug 2022) – Angular + NgRx development, agile environment collaboration, unit testing with Jest.</li>
          </ul>
        </section>

        <section style={{ marginBottom: '2rem' }}>
          <h2>Skills</h2>
          <p>
            <strong>Languages:</strong> JavaScript, TypeScript, Java, Python, SQL, C, R, HTML, CSS<br />
            <strong>Frameworks/Tools:</strong> Angular, NgRx, React, Selenium, Jest, Mocha, Azure, SQLite, Git, Jira<br />
            <strong>Core Strengths:</strong> Communication, Problem-solving, Leadership
          </p>
        </section>

        <section style={{ marginBottom: '2rem' }}>
          <h2>Contact</h2>
          <p>Phone: <a href="tel:+16478396498">+1 (647) 839-6498</a></p>
          <p>Email: <a href="mailto:zachary170530@gmail.com">zachary170530@gmail.com</a></p>
          <p>GitHub: <a href="https://github.com/Simal17" target="_blank" rel="noopener noreferrer">Simal17</a></p>
          <p>LinkedIn: <a href="https://linkedin.com/in/chao-zan-b417611bb/" target="_blank" rel="noopener noreferrer">Chao Zan</a></p>
        </section>

        <footer style={{ marginTop: '3rem', fontSize: '0.9rem', color: '#666' }}>
          © {new Date().getFullYear()} Zach Zan. All rights reserved.
        </footer>
      </main>
    </>
  );
}
