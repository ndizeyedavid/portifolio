import { Icons } from "@/components/icons";
import { HomeIcon, Instagram, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "David NDIZEYE",
  initials: "DV",
  url: "https://davidndizeye.vercel.app",
  location: "Kigali, Rwanda",
  locationLink: "https://www.google.com/maps/place/kigali",
  description: "Ze best brogrammer🦆",
  summary:
    "I build fun stuff, break it, fix it, and repeat all while chasing Code, coffee, and chaos - that's the grind. I'm a chill Rwandan brogrammer leveling up in full-stack dev, always building side quests like IoT projects, school platforms, and health apps. I don't just write code, I drop combos in games too🎮",
  avatarUrl: "/me.png",
  skills: [
    "React",
    "Next.js",
    "TypeScript",
    "Pocketbase",
    "Node.js",
    "Express",
    "MongoDB",
    "Prisma",
    "Flutter",
    "Python",
    "TensorFlow",
    "Docker",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "davidndizeye101@gmail.com",
    tel: "+250 796 140 857",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/ndizeyedavid",
        icon: Icons.github,
        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/david-ndizeye-960844343/",
        icon: Icons.linkedin,
        navbar: true,
      },
      Instagram: {
        name: "Instagram",
        url: "https://www.instagram.com/mellow_junior1/",
        icon: Instagram,
        navbar: true,
      },
    },
  },

  work: [
    {
      company: "Solvit Africa",
      href: "https://solvit.africa/",
      badges: [],
      location: "On-site",
      title: "Intern",
      logoUrl: "/solvit.png",
      start: "2024",
      end: "2025",
      description:
        "This internship helped me master the concepts of team work and project management. We focused mainly on Backend Development using Node.js + Express with MongoDB. I built projects like INKINGI Rescue during this time and many more",
    },
  ],
  education: [
    {
      school: "ESSA Nyarugunga",
      href: "https://essanyarugunga1.netlify.app",
      degree: "High school",
      logoUrl: "/essanyarugunga.png",
      start: "2023",
      end: "2025",
    },
  ],
  projects: [
    {
      title: "Sheja Cards",
      href: "/sheja.jpg",
      dates: "2025 - Present",
      active: true,
      description:
        "A multi-tenant platform for schools to register, manage student data, and generate ID cards. Includes role-based access for admins, teachers, and staff.",
      technologies: [
        "Next.js",
        "TypeScript",
        "Pocketbase",
        "MongoDB",
        "TailwindCSS",
        "Shadcn UI",
      ],
      links: [
        {
          type: "Repository",
          href: "https://github.com/ndizeyedavid/sheja-cards",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/sheja.jpg",
    },
    {
      title: "Moyi Billiards",
      href: "https://thegreatmoyibilliards.netlify.app/",
      dates: "2024 - 2025",
      active: true,
      description:
        "Platform to connect hospitals and health centers across Rwanda. Handles patient records and referral transfers with map integration (Mapbox).",
      technologies: ["React", "Appwrite", "Tailwind", "Framer-motion"],
      links: [
        {
          type: "Website",
          href: "https://thegreatmoyibilliards.netlify.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Repository",
          href: "https://github.com/ndizeyedavid/GREAT-MOYI-BILLIARDS/",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/great-moyi.png",
    },
    {
      title: "ESSA Nyarugunga Website",
      href: "https://essanyarugunga1.netlify.app/",
      dates: "2023 - 2024",
      active: true,
      description: "Official website of ESSA Nyarugunga high school.",
      technologies: ["React", "Tailwind", "Framer-motion"],
      links: [
        {
          type: "Website",
          href: "https://essanyarugunga1.netlify.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Repository",
          href: "https://github.com/Kalumeli/essa-nyarugunga",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/essanyarugunga-proj.png",
    },
    {
      title: "Inkingi Rescue",
      href: "/inkingi.png",
      dates: "2025",
      active: true,
      description:
        "An open-source emergency tracking and SOS alerting system for the community by the community",
      technologies: ["Flutter", "Firebase", "Node.js", "AI Ranking"],
      links: [
        {
          type: "Repository",
          href: "https://github.com/ndizeyedavid/inkingi-rescue-frontend",
          icon: <Icons.github className="size-3" />,
        },
      ],

      image: "/inkingi-rescue.png",
    },
  ],
  hackathons: [
    {
      title: "HackNoel",
      dates: "Dec 24 2024",
      location: "Rwanda",
      description:
        "Participated in an end-of-year hackathon hosted by Youth Code Camp, a coding club within Hack Club which brought together students from high schools to work on their projects, creating web apps, mobile apps, chatbots, etc...",
      image: "/hacknoel.gif",
      links: [],
    },
    {
      title: "Africa's Talking Open Hackathon",
      dates: "Feb 15 2025",
      location: "Rwanda",
      description:
        "Africa's Talking, proudly presented a hackathon aimed at redefining the future of security government digitization solutions while exploring 2G, AI and IoT solutions.",
      image: "/africastalking.jpg",
      links: [],
    },
    {
      title: "YIHub Hackathons",
      dates: "Mar 15 2025",
      location: "Rwanda",
      description:
        "Participated in a hackathon hosted in a school: ETSK Musha, and my team won the 1st place",
      image: "/yihub.png",
      links: [],
    },
    {
      title: "Hack with me",
      dates: "Aug 16 2025 - Aug 17 2025",
      location: "Rwanda",
      description:
        "Participated in a 100+ high schoolers hackathon for an exciting 2 days hackathon! by collaborating, building projects, and competing.",
      image: "/hackwithme.jpg",
      links: [
        {
          type: "Instagram",
          href: "https://www.instagram.com/hackwithme_official/",
          icon: <Instagram className="size-3" />,
        },
        {
          type: "Website",
          href: "https://www.hackwithme2025.com/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
    },
  ],
} as const;
