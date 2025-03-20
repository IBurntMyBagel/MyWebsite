import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>

      {/* Header */}
      <header className = {styles.header}>
        <nav>
          <ul className = {styles.navList}>
            <li>
              <a
                className = {styles.navItem}  
                href= "/"
              >
                Home
              </a>
            </li>
            <li>
              <a
                className = {styles.navItem}
                href = "/testingpage"
                >
                  Testing Page
                </a> 
            </li>
            <li>
              <a
                className = {styles.navItem}
                href= "https://github.com/IBurntMyBagel"
                target="_blank"
                rel="noopener noreferrer"
              >
                Github
              </a>

            </li>
            <li>
              <a
                className = {styles.navItem}
                href= "https://www.linkedin.com/in/ryan-tsang-rpi2026/" 
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </a>
            </li>
          </ul>
        </nav>
      </header>
    
      {/* Main portion of page */}
      <main className={styles.main}>
        <Image
          
          src="/headshotProfile.jpg"
          alt="Professional Headshot"
          width={450}
          height={360}
          priority
        />
        {/*

        
        <ol>
          <li>
            Get editing <code>src/app/page.tsx</code>.
          </li>
          <li>Save and see your changes instantly.</li>
        </ol>

        <div className={styles.ctas}>
          <a
            className={styles.primary}
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              className={styles.logo}
              src="/vercel.svg"
              alt="Vercel logomark"
              width={20}
              height={20}
            />
            Deploy now
          </a>
          <a
            href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.secondary}
          >
            Read our docs
          </a>
        </div>
        */}
      </main>
    
      
    

      {/* Welcome Section */}
      <section className={styles.welcomeSection}>
        <div className = {styles.welcomeSubSection}>
          <h1>
            Welcome to My Website!
          </h1>
          <p>
            Hello!👋 I&apos;m Ryan Tsang, a Junior studying Computer Science 🤖 at RPI.<br />
            I enjoy coding 💻, learning new technologies 📚, and building interesting projects 🛠️. <br />
            Feel free to explore, check out my Github, or connect with me on LinkedIn!!
          </p>
        </div>
        <div className = {styles.welcomeSubSection}>
          <h1>
            Current Projects I&apos;m Working On:
          </h1>
          <ol>
            <li>
              Studying for the Comptia Network(n10-009)+ Certification Exam.
            </li>
            <li>
              Studying for the Comptia Security+ Certification Exam.
            </li>
            <li>
              Studying for the HackerRank SQL Beginner and Intermediate Exam.
            </li>
          </ol>

        </div>
        
      </section>


      {/* Footer */}
      {/*
      <footer className={styles.footer}>
        <a
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/file.svg"
            alt="File icon"
            width={16}
            height={16}
          />
          Learn
        </a>
        <a
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/window.svg"
            alt="Window icon"
            width={16}
            height={16}
          />
          Examples
        </a>
        <a
          href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
          />
          Go to nextjs.org →
        </a>
      </footer>
      */}
    </div>
  );
}
