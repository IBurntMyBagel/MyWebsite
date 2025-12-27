import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <div className={styles.page}>
    
      {/* Headshot */}
      <section className={styles.headshotSection}>
        <Image
          src="/headshotProfile.jpg"
          alt="Professional headshot of Ryan Tsang"
          width={600}
          height={480}
          className={styles.headshot}
          priority
        />
      </section>

      {/* Welcome */}
      <section className={styles.welcomeSection}>
        <div className={styles.welcomeSubSection}>
          <h1>Welcome to My Website!</h1>
          <p>
            Hello! 👋 I&apos;m Ryan Tsang, a Junior studying Computer Science at
            RPI. I enjoy coding, learning new technologies, and building
            interesting projects.
          </p>
        </div>

        <div className={styles.welcomeSubSection}>
          <h1>Current Projects</h1>
          <ol>
            <li>Studying for the CompTIA Security+ exam</li>
            <li>Building this website with Next.js & TypeScript</li>
            <li>Preparing for HackerRank SQL exams</li>
          </ol>
        </div>
      </section>

      {/* Achievement */}
      <section className={styles.achievementSection}>
        <Image
          src="/comptiaNetworkPlusLogo.png"
          alt="CompTIA Network+ logo"
          width={384}
          height={351}
        />

        <div>
          <h1>Passed CompTIA Network+ (N10-009)</h1>
          <p>
            On 4/2/2025 I passed my Network+ certification 🎉
            <br />
            Verify{" "}
            <a
              href="https://www.certmetrics.com/comptia/public/verification.aspx"
              target="_blank"
              rel="noopener noreferrer"
            >
              here
            </a>{" "}
            with code: <strong>RLXTC0Z56MB11T5D</strong>
          </p>
        </div>
      </section>
    </div>
  );
}
