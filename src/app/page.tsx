import Image from "next/image";
import styles from "./page.module.css";

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
            Hello! 👋 I&apos;m Ryan Tsang, a Senior studying Computer Science at
            RPI. I enjoy coding, learning new technologies, and building
            interesting projects.
          </p>
        </div>

        <div className={styles.welcomeSubSection}>
          <h1>Current Objectives</h1>
          <ol>
            <li>Building this website with Next.js & TypeScript</li>
            <li>Studying Software Design and Documentation</li>
            <li>Studying Database Systems</li>
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
          <h1>CompTIA Network+ (N10-009) Certified</h1>
          <p>
            Super excited to share that during my Arch Semester Away at RPI, I spent months studying and have finally passed the CompTIA Network+ certification exam on 4/2/2025! 🎉
            <br /><br />
            This experience has been incredibly rewarding I&apos;ve learned so much about networking fundamentals, implementation, operations, security, troubleshooting, and more. A huge thank you to CompTIA for providing such a valuable certification and to Jason Dion for his excellent study resources on Udemy that helped me prepare!
            <br /><br />
            I&apos;m proud to have earned this certification and look forward to applying these skills in my future IT endeavors.
            <br /><br />
            Verify{" "}
            <a
              href="https://www.certmetrics.com/comptia/public/verification.aspx"
              target="_blank"
              rel="noopener noreferrer"
              className="text-link"
            >
              here
            </a>{" "}
            with code: <strong>RLXTC0Z56MB11T5D</strong>
          </p>
        </div>
      </section>

      {/* Internship Experience */}
      <section className={styles.achievementSection}>
        <Image
          src="/courtInternship.jpg"
          alt="Court Internship Kiosk Picture"
          width={800}
          height={1067}
        />

        <div>
          <h1>Summer internship at the U.S. District Courts</h1>
          <p>
            Just finished my Junior Summer internship at the U.S. District Courts as an IT Intern! It was lawsome 😎 🧑‍⚖️
            <br /><br />
            During this internship, I had the opportunity to work on multiple projects that benefit the Federal Court, including: vastly improving the in-house developed public information kiosk fleet to include an interactive "Court History" module, pulling and terminating network drops, performing production router upgrades after hours, working inside network closets to document, validate, and ensure that patch cables met compliance/continuity standards, and updating Cisco 9400 series switches interface descriptions.
            <br /><br />
            This internship began with me shadowing helpdesk technicians and ended with me working alongside them as I addressed helpdesk tickets for both federal judges, law clerks, and court staff. I was able to gain experience in working on desktop virtualization, wiping and re-imaging devices, and troubleshooting issues in the Windows 11 environment.
            <br /><br />
            I want to thank my mentor and the IT Director Mr. Newton for your support and always taking the time out of your schedule to teach me more about networking and allowing me to get experience working within the court's network closets, server room, and teaching us more about networking fundamentals. Thank you to the New Haven IT Team, Hartford IT team, and Bridgeport IT team for always being supportive and making each project an amazing learning opportunity!
          </p>
        </div>
      </section>

      <section className={styles.achievementSection}>
        <Image
          src="/SecurityPlusLogo.png"
          alt="CompTIA Security+ logo"
          width={601}
          height={601}
        />

        <div>
          <h1>CompTIA Security+ (SY0-701) Certified</h1>
          <p>
            Celebrating my CompTIA Security+ ce Certification! 🥳
            <br /><br />
            Over the course of 3 month I studied for this certification while on my internship and passed!
            <br /><br />
            Thanks to Jason Dion's course and exam kits on Udemy and Professor Messer's videos on YouTube I was able to learn about General Security Concepts, Threats, Vulnerabilities, Mitigation Techniques, Security Architecture, Security Operations, and Security Program Management.
            <br /><br />
            Thanks to CompTIA for providing a valuable certification to break into the IT field and further develop my cybersecurity skills! 🤖
            <br /><br />
            Verify{" "}
            <a
              href="https://www.certmetrics.com/comptia/public/verification.aspx"
              target="_blank"
              rel="noopener noreferrer"
              className="text-link"
            >
              here
            </a>{" "}
            with code: <strong>S5MWZBYQ9ERE1YV2</strong>
          </p>
        </div>
      </section>
    </div>
  );
}
