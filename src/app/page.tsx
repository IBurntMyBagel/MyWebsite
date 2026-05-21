import Image from "next/image";
import styles from "./page.module.css";

import { achievements } from "@/data/achievements";
import { AchievementBlock, InlineText } from "@/types/achievement";

function renderInlineText(item: InlineText, index: number) {
  switch (item.type) {
    case "text":
      return <span key={index}>{item.content}</span>;
    case "italic":
      return <em key={index}>{item.content}</em>;
    case "bold":
      return <strong key={index}>{item.content}</strong>;
    case "link":
      return (
        <a
          key={index}
          href={item.href}
          target="_blank"
          rel="noopener noreferrer"
          className="text-link"
        >
          {item.content}
        </a>
      );
  }
}

function renderBlock(block: AchievementBlock, index: number) {
  switch (block.type) {
    case "paragraph":
      return (
        <p key={index}>
          {block.content.map(renderInlineText)}
        </p>
      );

    case "image":
      return (
        <Image
          key={index}
          src={block.src}
          alt={block.alt}
          width={400}
          height={300}
        />
      );
  }
}



export default function Home() {
  const latestAchievements = achievements.slice(0, 100);
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
