import { Achievement } from "@/types/achievement";

export const achievements: Achievement[] = [
  {
    id: "first-5k",
    title: "This is my first 5km race!",
    date: "01-06-2024",
    coverImage: "/running1.png",
    summary: "Summary I finally finished my first 5km race!",
    author: "Ryan Tsang",
    blocks: [
      {
        type: "image",
        src: "/running1.png",
        alt: "Running race start"
      },
      {
        type: "paragraph",
        content: [
          { type: "text", content: "I finally finished my first " },
          { type: "bold", content: "5km race" },
          { type: "text", content: "! You can verify my time at " },
          {
            type: "link",
            content: "this website",
            href: "https://www.race.com"
          },
          { type: "text", content: ". My running number was " },
          { type: "italic", content: "4510" },
          { type: "text", content: "!" }
        ]
      },
      {
        type: "image",
        src: "/running2.jpg",
        alt: "Crossing the finish line"
      }
    ]
  },
  {
    id: "NetworkPlusCert",
    title: "CompTIA Network+ (N10-009) Certified",
    date: "04-02-2024",
    coverImage: "/comptiaNetworkPlusLogo.png",
    summary: "This experience has been incredibly rewarding I've learned so much about networking fundamentals, implementation, operations, security, troubleshooting, and more. A huge thank you to CompTIA for providing such a valuable certification and to Jason Dion for his excellent study resources on Udemy that helped me prepare!",
    author: "Ryan Tsang",
    blocks: [
      {
        type: "image",
        src: "/comptiaNetworkPlusLogo.png",
        alt: "CompTIA Network+ logo"
      },
      {
        type: "paragraph",
        content: [
          { type: "text", content: "Super excited to share that during my Arch Semester Away at RPI, I spent months studying and have finally passed the CompTIA Network+ certification exam🎉" },
          { type: "text", content: "This experience has been incredibly rewarding I've learned so much about networking fundamentals, implementation, operations, security, troubleshooting, and more. A huge thank you to CompTIA for providing such a valuable certification and to Jason Dion for his excellent study resources on Udemy that helped me prepare!" },
          { type: "text", content: "I'm proud to have earned this certification and look forward to applying these skills in my future IT endeavors." },
          { type: "text", content: "Verify " },
          {
            type: "link",
            content: "Here",
            href: "https://www.certmetrics.com/comptia/public/verification.aspx"
          },
          { type: "text", content: ". With code: " },
          { type: "bold", content: "RLXTC0Z56MB11T5D" }
          
        ]
      }
    ]
  },
  {
    id: "SummerInternshipCourts",
    title: "Summer Internship at the U.S. District Courts",
    date: "08-01-2025",
    coverImage: "/courtInternship.jpg",
    summary: "During this internship, I had the opportunity to work on multiple projects that benefit the Federal Court, including: vastly improving the in-house developed public information kiosk fleet to include an interactive \"Court History\" module, pulling and terminating network drops, performing production router upgrades after hours, working inside network closets to document, validate, and ensure that patch cables met compliance/continuity standards, and updating Cisco 9400 series switches interface descriptions.",
    author: "Ryan Tsang",
    blocks: [
      {
        type: "image",
        src: "/courtInternship.jpg",
        alt: "U.S. District Courts internship image"
      },
      {
        type: "paragraph",
        content: [
          { type: "text", content: "Just finished my Junior Summer internship at the U.S. District Courts as an IT Intern! It was lawsome 😎 🧑‍⚖️" },
          { type: "text", content: "During this internship, I had the opportunity to work on multiple projects that benefit the Federal Court, including: vastly improving the in-house developed public information kiosk fleet to include an interactive \"Court History\" module, pulling and terminating network drops, performing production router upgrades after hours, working inside network closets to document, validate, and ensure that patch cables met compliance/continuity standards, and updating Cisco 9400 series switches interface descriptions." },
          { type: "text", content: "This internship began with me shadowing helpdesk technicians and ended with me working alongside them as I addressed helpdesk tickets for both federal judges, law clerks, and court staff. I was able to gain experience in working on desktop virtualization, wiping and re-imaging devices, and troubleshooting issues in the Windows 11 environment." },
          { type: "text", content: "I want to thank my mentor and the IT Director Mr. Newton for your support and always taking the time out of your schedule to teach me more about networking and allowing me to get experience working within the court's network closets, server room, and teaching us more about networking fundamentals. Thank you to the New Haven IT Team, Hartford IT team, and Bridgeport IT team for always being supportive and making each project an amazing learning opportunity!" }
          
        ]
      }
    ]
  },
  {
    id: "SecurityPlusCert",
    title: "CompTIA Security+ (SY0-701) Certified",
    date: "08-01-2025",
    coverImage: "/SecurityPlusLogo.png",
    summary: "Over the course of 3 month I studied for this certification while on my internship and passed! Thanks to Jason Dion's course and exam kits on Udemy and Professor Messer's videos on YouTube I was able to learn about General Security Concepts, Threats, Vulnerabilities, Mitigation Techniques, Security Architecture, Security Operations, and Security Program Management.",
    author: "Ryan Tsang",
    blocks: [
      {
        type: "image",
        src: "/SecurityPlusLogo.png",
        alt: "CompTIA Security+ logo"
      },
      {
        type: "paragraph",
        content: [
          { type: "text", content: "Celebrating my CompTIA Security+ ce Certification! 🥳" },
          { type: "text", content: "Over the course of 3 month I studied for this certification while on my internship and passed!" },
          { type: "text", content: "Thanks to Jason Dion's course and exam kits on Udemy and Professor Messer's videos on YouTube I was able to learn about General Security Concepts, Threats, Vulnerabilities, Mitigation Techniques, Security Architecture, Security Operations, and Security Program Management." },
          { type: "text", content: "Thanks to CompTIA for providing a valuable certification to break into the IT field and further develop my cybersecurity skills! 🤖" },
          { type: "text", content: "Verify " },
          {
            type: "link",
            content: "Here",
            href: "https://www.certmetrics.com/comptia/public/verification.aspx"
          },
          { type: "text", content: ". With code: " },
          { type: "bold", content: "S5MWZBYQ9ERE1YV2" }
          
        ]
      }
    ]
  }
];
