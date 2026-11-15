// Edit everything here: links, schedule, prices, announcements, reels, FAQ.
export const LINKS = {
  register: "#",
  whatsapp: "#",
  venmo: "#",
  zelle: "#",
  cashapp: "#",
  stripe: "#",
  instagram: "#",
  tiktok: "#",
  linktree: "#",
  email: "#",
  emailLabel: "[your-email]@sinvnyc.com",
};

export const NAV = [
  { id: "about", label: "About" },
  { id: "classes", label: "Classes" },
  { id: "schedule", label: "Schedule" },
  { id: "pricing", label: "Pricing" },
  { id: "poppin", label: "What's poppin'" },
  { id: "faq", label: "FAQ" },
  { id: "location", label: "Location" },
];

export const MARQUEE = [
  "Cintura Movement",
  "No Sabo Sundays",
  "Sin vergüenza, sin juicio",
  "First cumbia is free",
  "Walk-ins welcome",
  "¡Vamos!",
  "Two left feet? Bienvenido",
];

export const VALUES = [
  { icon: "Footprints", title: "Zero experience? Perfect.", text: "Never danced? Ideal. We start from the very first paso." },
  { icon: "GraduationCap", title: "Student prices", text: "Made by broke college kids. Priced like it." },
  { icon: "Smile", title: "Good vibes only", text: "No judging, no divas. Mess up, laugh, go again." },
  { icon: "DoorOpen", title: "Walk-ins welcome", text: "Just show up. Seriously, la puerta está abierta." },
];

export const CLASSES = [
  {
    key: "salsa",
    name: "Salsa",
    nick: "Salsa con Sazón",
    img: "/img/p5.jpg",
    alt: "Crowd of people dancing salsa together on a studio floor",
    text: "Fast feet, turns and spins. You'll stop counting 1-2-3 out loud... eventually.",
    levels: ["Absolute Beginner", "Advanced Beginner", "Intermediate"],
    color: "bg-[#E0007A] text-white",
  },
  {
    key: "bachata",
    name: "Bachata",
    nick: "Bachata con Flow",
    img: "/img/p10.jpg",
    alt: "Couple dancing bachata close together outdoors",
    text: "Hips, feeling and Romeo Santos on repeat. Ask for el chino bachatero.",
    levels: ["Absolute Beginner", "Advanced Beginner", "Intermediate"],
    color: "bg-[#4D5BFF] text-white",
  },
  {
    key: "cumbia",
    name: "Cumbia",
    nick: "Cumbia Caliente",
    img: "/img/p6.jpg",
    alt: "Smiling couple in colorful outfits dancing cumbia in front of a mural",
    text: "The friendliest dance on earth. If you can walk, you can cumbia. Promise.",
    levels: ["Absolute Beginner", "Advanced Beginner", "Intermediate"],
    color: "bg-[#FF6B2C] text-black",
  },
];

export const SCHEDULE = [
  {
    key: "saturday",
    day: "SINV Saturdays",
    sub: "Level up day",
    style: "bg-[#C8FF2E] text-black -rotate-2",
    items: [
      { time: "1:20 PM", name: "Salsa", level: "Adv. Beginner" },
      { time: "2:30 PM", name: "Bachata", level: "Adv. Beginner" },
      { time: "3:40 PM", name: "Intermediate", level: "Intermediate" },
    ],
  },
  {
    key: "sunday",
    day: "\u201cNo Sabo\u201d Sundays",
    sub: "4-week series for absolute beginners",
    style: "bg-white text-black rotate-1",
    items: [
      { time: "2:00 PM", name: "No Sabo Salsa", level: "Absolute Beginner" },
      { time: "3:00 PM", name: "No Sabo Bachata", level: "Absolute Beginner" },
      { time: "4:00 PM", name: "No Sabo Cumbia", level: "Absolute Beginner" },
    ],
  },
];

export const ANNOUNCEMENTS = [
  {
    date: "NOV",
    title: "November themes are here",
    text: "Cumbia Caliente, Salsa con Sazón, Bachata con Flow. Pick one. Or all three, sin vergüenza.",
    tag: "Class",
    link: "#",
  },
  {
    date: "NOV 26",
    title: "Thanksgiving Social",
    text: "Our turkey said: \u201cBefore they burn me alive, I want to dance bachata!\u201d Respect his last wish.",
    tag: "Social",
    link: "#",
  },
  {
    date: "DEC 06",
    title: "3 followers, one song",
    text: "Who danced best? Live mini dance-off after Saturday class. The crowd decides.",
    tag: "Event",
    link: "#",
  },
  {
    date: "DEC 07",
    title: "New No Sabo series starts",
    text: "Fresh 4-week beginner series. Zero experience needed, cero pena required.",
    tag: "Class",
    link: "#",
  },
];

export const REELS = [
  { img: "/img/p2.jpg", alt: "Group of dancers mid-move in a bright studio", caption: "Siblings or dating?" },
  { img: "/img/p3.jpg", alt: "Four friends dancing in a sunlit studio", caption: "3 followers, one song, who danced best?" },
  { img: "/img/p1.jpg", alt: "Dancer dipping his partner under pink and purple lights", caption: "el chino bachatero strikes again" },
  { img: "/img/p7.jpg", alt: "Dancer with arms raised in a dark studio", caption: "POV: week 4 of No Sabo Sundays" },
  { img: "/img/p4.jpg", alt: "Packed crowd dancing at a social", caption: "When the DJ drops Aventura" },
  { img: "/img/p9.jpg", alt: "Blurred dancers at a lively party under blue lights", caption: "no sabo salsa \u2192 sí sabo salsa" },
];

export const FAQ = [
  {
    q: "Do I need a partner?",
    a: "Nope. Come solo, we rotate partners all class. You'll leave with 15 new friends and maybe a crush.",
  },
  {
    q: "I have two left feet, can I still come?",
    a: "Two left feet is literally our target audience. No Sabo Sundays were invented for you.",
  },
  {
    q: "What should I wear?",
    a: "Comfy clothes you can sweat in and shoes that spin (sneakers are fine). Leave the heavy boots at home.",
  },
  {
    q: "Do I have to be a college student?",
    a: "Not at all. Everyone is welcome. College students just get the cheaper price (bring your student ID).",
  },
];
