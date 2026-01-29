export const projects = [
  {
    id: "prospera",
    category: "web",
    title: "Prospera",
    tagline: "Business & tax consulting web platform",
    description: "Prospera is a comprehensive web platform designed for a business and tax consulting firm. It features a robust admin panel for managing clients, tracking service requests, and streamlining business operations.",
    fullDescription: "Built with the modern web stack, Prospera solves the manual tracking issues faced by consulting firms. The platform provides a centralized hub where consultants can manage tax filing progress, client documentation, and communication. The admin panel provides deep insights into business metrics and service delivery timelines.",
    liveUrl: "https://www.prosperagroup.us/Prospera/Home",
    image: "/projects/prospera.png",
    tech: ["React.js", "Next.js", "Node.js", "Tailwind CSS", "REST APIs"],
    problem: "The consulting firm was struggling with manual spreadsheet tracking for hundreds of clients, leading to missed deadlines and fragmented communication.",
    solution: "I developed a custom CRM and operational dashboard that automates service tracking. The solution included a client portal for document uploads and a master admin panel for internal management.",
    features: [
      "Dynamic Admin Dashboard with real-time stats",
      "Client Document Management system",
      "Service Request Tracking pipeline",
      "Automated Tax Filing reminders",
      "Role-based Access Control (RBAC)"
    ],
    challenges: "Handling large document uploads while maintaining a snappy UI was a primary challenge. I solved this by implementing chunked uploads and optimistic UI updates.",
    learnings: "I deepened my understanding of state management for complex forms and learned the intricacies of building role-based dashboard architectures."
  },
  {
    id: "techsolio-website",
    category: "web",
    title: "Techsolio Website",
    tagline: "Modern company showcase and digital solution hub",
    description: "The official company website for Techsolio, designed to showcase their digital services and expertise with a high-performance, SEO-optimized interface.",
    fullDescription: "As the primary digital storefront for Techsolio, this project prioritized speed and visual impact. Utilizing Next.js for server-side rendering, the site achieves near-instant load times while providing a smooth, interactive experience that reflects the company's tech-forward identity.",
    liveUrl: "https://www.techsolio.com/",
    image: "/projects/techsolio.png",
    tech: ["Next.js", "Tailwind CSS", "Framer Motion", "SEO Optimization"],
    problem: "The previous landing page was static, slow to load on mobile, and didn't reflect the high level of technical expertise the company provides.",
    solution: "I rebuilt the site using Next.js, implementing a modular component architecture that allows for easy updates. I integrated Framer Motion for high-end micro-interactions that feel premium.",
    features: [
      "Fully responsive, mobile-first design",
      "High-performance static generation with Next.js",
      "Custom interactive animations with Framer Motion",
      "Advanced SEO structure with dynamic metadata",
      "Clean, modern UI/UX reflecting high-tech standards"
    ],
    challenges: "Balancing complex animations with performance was key. I used Framer Motion's lazy load features and reduced layout shifts to maintain a perfect Lighthouse score.",
    learnings: "Mastered performance profiling in Chrome DevTools and learned advanced Tailwind CSS techniques for highly custom layouts."
  },
  {
    id: "pulsvine-web",
    category: "web",
    title: "Pulsvine Web",
    tagline: "Life-saving blood donation connection platform",
    description: "A comprehensive web portal for managing blood donations, hospital requests, and donor databases in real-time.",
    fullDescription: "Pulsvine Web serves as the central command center for blood donation logistics. It provides hospitals with a robust dashboard to post urgent requirements and allows administrators to manage donor verification through a secure web interface.",
    liveUrl: "https://www.pulsvine.com/",
    image: "/projects/pulsvina.png",
    tech: ["React.js", "Next.js", "Node.js", "MongoDB", "Redux"],
    problem: "Hospitals lacked a unified system to communicate urgent blood needs to the community, often relying on slow manual outreach.",
    solution: "I created a real-time web platform where hospitals can broadcast needs directly to the network. The portal syncs instantly with the mobile application ecosystem.",
    features: [
      "Hospital Management Portal",
      "Real-time Request Analytics",
      "Donor Verification Workflow",
      "Automated Match Notification",
      "Secure Medical Data Handling"
    ],
    challenges: "Syncing real-time data across high-frequency hospital requests while ensuring zero downtime for critical life-saving operations.",
    learnings: "Developed deep expertise in real-time database architecture and mission-critical system design."
  },
  {
    id: "chatrout-web",
    category: "web",
    title: "Chatrout Web",
    tagline: "Desktop-class encrypted communication client",
    description: "A powerful web-based messaging client that brings seamless, encrypted real-time communication to any browser.",
    fullDescription: "Chatrout Web provides a full-featured communication experience on the desktop. It features a sophisticated layout for managing multiple encrypted channels, file sharing, and real-time collaboration with high-performance browser-based decryption.",
    liveUrl: "https://chatrout-web.vercel.app/",
    image: "/projects/chatrout.png",
    tech: ["React.js", "Socket.io", "Web Crypto API", "Tailwind CSS", "Framer Motion"],
    problem: "Users needed a way to access their secure conversations on desktop without the friction of installing local software.",
    solution: "I developed a secure web client using the Web Crypto API for client-side encryption/decryption, ensuring session security without compromising performance.",
    features: [
      "Multi-window Chat Interface",
      "Secure File Transmission",
      "Browser-based End-to-End Encryption",
      "Shared Media Gallery",
      "Real-time Sync with Mobile"
    ],
    challenges: "Implementing complex cryptographic operations in the browser without locking the main thread and maintaining sub-100ms message latency.",
    learnings: "Mastered Web Workers for background processing and advanced browser security headers."
  },
  {
    id: "pulsvine-app",
    category: "app",
    title: "Pulsvine App",
    tagline: "Life-saving blood donation mobile application",
    description: "A high-performance mobile application that connects blood donors with recipients in real-time using location-based Matching.",
    fullDescription: "Pulsvine mobile is a critical tool for medical emergencies. Built with React Native, it features a real-time matching engine that alerts donors when someone nearby needs their blood type. The app handles geolocation, background tasks, and critical push notifications to ensure timely responses.",
    image: "/projects/pulsvine-hero.jpg",
    tech: ["React Native", "Expo", "Firebase", "Geolocation API", "Node.js"],
    problem: "Identifying available blood donors during emergencies used to take hours of calling and social media searching, often resulting in critical delays.",
    solution: "I built a dedicated mobile app that allows users to broadcast urgent requirements. The app uses geofencing to notify donors within a 10km radius immediately.",
    features: [
      "Instant Location-based Alerts",
      "In-app Chat for Donor/Recipient coordination",
      "Donor Verification Badge system",
      "Emergency Broadcast Mode",
      "Offline cache for hospital directories"
    ],
    challenges: "Managing battery-efficient background geolocation and ensuring push notifications were delivered across all Android/iOS versions.",
    learnings: "Mastered React Native lifecycle management and learned how to optimize mobile performance for low-end devices."
  },
  {
    id: "chatrout-app",
    category: "app",
    title: "Chatrout Mobile",
    tagline: "Next-gen encrypted instant messaging app",
    description: "A sleek, privacy-focused mobile application providing real-time encrypted communication with a premium user interface.",
    fullDescription: "Chatrout Mobile is a high-speed instant messaging platform. It utilizes end-to-end encryption for all conversations and features a 'Modern Glass' UI. The app is optimized for low-latency message delivery using WebSockets and handles media compression on-the-fly.",
    image: "/projects/chatrout-hero.jpg",
    tech: ["React Native", "Socket.io", "SQLite", "AES Encryption", "Redux Toolkit"],
    problem: "Users needed a communication tool that was as fast as standard chat but with the security of enterprise-grade encryption.",
    solution: "I implemented a custom messaging protocol on top of Socket.io and integrated local AES encryption. The UI was built with a custom design system for a unique feel.",
    features: [
      "End-to-End Encrypted channels",
      "Real-time Active status & Typing indicators",
      "Local message storage with SQLite",
      "Biometric app locking (Fingerprint/FaceID)",
      "Adaptive dark/light theme engine"
    ],
    challenges: "Implementing stable WebSocket connections over intermittent mobile data networks and handling background message decryption.",
    learnings: "Deepened my knowledge of mobile security best practices and high-performance list rendering in React Native."
  }
];
