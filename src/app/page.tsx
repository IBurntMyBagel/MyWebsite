import Image from "next/image";
import styles from "./page.module.css";
import { achievements } from "@/data/achievements";


export default function Home() {
  const latestAchievements = achievements.slice(achievements.length - 3, achievements.length).reverse();
  // 3 Latest achievements
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
            Hello! 👋 I&apos;m Ryan Tsang, a Senior at RPI studying Computer Science. 
            I enjoy coding, learning new technologies, and building
            interesting projects.
          </p>
        </div>

        <div className={styles.welcomeSubSection}>
          <h1>Current Objectives</h1>
          <ol>
            <li>Building this website with Next.js & TypeScript</li>
            <li>Learning more about React</li>
            <li>Exploring opportunities in software development</li>
          </ol>
        </div>
      </section>

      <div className={styles.sectionHeader}>
        <h1>Recent Achievements</h1>
      </div>
      

      {/* Recent Achievements testing*/}
      {latestAchievements.map((achievement) => (
        <section key ={achievement.id} className={styles.achievementSection}>
        {/* LEFT COLUMN */}
        <Image
          src={achievement.coverImage}
          alt={achievement.title}
          width={300}
          height={200}
        />
        

        {/* RIGHT COLUMN */}
        <div className={styles.achievementContent}>
          <h1>{achievement.title}</h1>
          <p>{achievement.date} • By {achievement.author}</p>
          <p>{achievement.summary}</p>
        </div>
      </section>

      ))}
    </div>
  );
}
