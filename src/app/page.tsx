import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <div className={styles.page}>

      {/* Header */}
      <header className = {styles.header}>
        <nav>
          <ul className = {styles.navList}>
            <li>
              <Link
                className = {styles.navItem}  
                href= "/"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                className = {styles.navItem}
                href = "/testingpage"
                >
                  Testing Page
                </Link> 
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

      <div className={styles.introSectionContainer}>
        <section className={styles.introSection}>
          <div className={styles.leftSide}>
            <Image
              src="/headshotProfile.jpg"
              alt="Professional Headshot"
              width={500}
              height={400}
              className={styles.headshot}
              priority
            />
          </div>

          <div className={styles.rightSide}>
            {/*<h2>Hi, I'm Ryan!</h2>
            <h2 className={`${styles.line1} ${styles.animTypewriter}`}>
            Hi, I&apos;m Ryan!
            </h2>
            
            
            */}
            <h2 className={`${styles.typingLine} ${styles.typingAnimation}`}>
              Hi, I&apos;m Ryan!
            </h2>
                      
            
            <p>
              Hello! 👋 I&apos;m a Junior studying Computer Science 🤖 at RPI.<br />
              I enjoy coding 💻, learning new technologies 📚, and building interesting projects 🛠️.<br />
              Feel free to explore, check out my GitHub, or connect with me on LinkedIn!
            </p>
          </div>
        </section>
        
        <img
          src="/waves-cropped.svg"
          alt="Decorative wave divider"
          className={styles.wave}
        />
    </div>

    

      {/* Welcome Section */}
      <section className={styles.welcomeSection}>
        {/*
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
        */}
        <div className = {styles.welcomeSubSection}>
          <h1>
            Current Projects I&apos;m Working On:
          </h1>
          <ol>
            <li>
              Studying for the Comptia Security+ Certification Exam.
            </li>
            <li>
              Creating this website, learning how to use Typescript, React, and APIs.
            </li>
            <li>
              Studying for the HackerRank SQL Beginner and Intermediate Exam.
            </li>
          </ol>

        </div>
      </section>

      <section className={styles.achievementSection}>
        <Image
          src="/comptiaNetworkPlusLogo.png"
          alt="Comptia Network Plus Logo"
          width={384}
          height={351}
          priority
          style={{ width: '100%', height: 'auto', borderRadius: '10px' }}
        />

        <div>
          <h1>Passed Comptia Network+ (N10-009) Certification!</h1>
          <p>
            On 4/2/2025 I passed my Network+ Certification! 🎉<br />
            This experience taught me so much about networking fundamentals, implementation, operations, security, troubleshooting, and more.<br />
            Verify <a href="https://www.certmetrics.com/comptia/public/verification.aspx" target="_blank" rel="noopener noreferrer">HERE</a> with code: RLXTC0Z56MB11T5D
          </p>
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
