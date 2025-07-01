export const nav = [
  {
    symbol: "[h]",
    title: "home",
    url: "/",
  },
  {
    symbol: "[p]",
    title: "projects",
    url: "/projects",
  },
  {
    symbol: "[b]",
    title: "blogs",
    url: "/blogs",
  },
];

export const profile = {
  name: "edwin jim olivares",
  location: "los angeles, ca",
  current: "freelancer and developer @ STS",
  desc: "usually just working on some personal projects to learn about the new technologies that are coming out. reformed javaScript hater. bad habit of looking for green checkmark on stackoverflow.",
};

export const work = [
  {
    company: "Secure Tech Solutions",
    job: [
      {
        position: "Full Stack Developer",
        time: "oct 2023 - present",
        desc: "prototype, develop, and maintain inital phishing tool complete with analytics; as well as, employee training",
      },
      {
        position: "System Integration Engineer",
        time: "jun 2024 - july 2024",
        desc: "redesign company site and branding, setup proper infrastructure for managed services",
      },
    ],
  },
  {
    company: "Raytheon",
    job: [
      {
        position: "Software Engineer 1",
        time: "jan 2023 - jun 2023",
        desc: "develop oltp system for classified radar system programs, and optimize gui based search (utilizing caching)",
      },
      {
        position: "Software Engineer Intern",
        time: "jun 2022 - jan 2023",
        desc: "support software projects through creation of software test procedure/description documentation. cross check project requirements with DOORs",
      },
    ],
  },
];

export const projects = [
  {
    name: "aremes fermentis",
    role: "developer & designer",
    desc: "transfer legacy system to shopify, and redesign site according to brand identity. integrate shop with 3rd party vendors like macy's",
    url: "https://aremesfermentis.com",
    points: [
      "customize shopify liquid to further match brand identity",
      "customize company emails",
      "setup mailchimp for client newsletter signup",
    ],
  },
  {
    name: "drive clone",
    role: "developer & creator",
    desc: "simple google drive clone with user management(clerk), rate limits, analytics(posthog), site health analytics(sentry), and file/image upload (uploadthing)",
    url: "https://drive-klone.netlify.app",
    points: [
      "successfully implement core google drive functionality",
      "implement modern data fetching techniques (ex. data access layer)",
      "learned how to set permissions and handle authorization/authentication",
    ],
  },
  {
    name: "so plumbing inc",
    role: "site creator & designer",
    desc: "in the process of remaking company site to something more modern, which displays company information(licenses and contact info)first and foremost",
    url: "https://so-plumbing-inc.vercel.app",
    points: [
      "modernize company website to comprehensively display company information",
      "add job/invoice request functionality",
    ],
  },
  {
    name: "personal site v3",
    role: "developer & designer",
    desc: "learning how to use tools like aceturnity for flashy animations, and shadcn for nicely styled components",
    url: "https://personal-animated-personal-site-team.vercel.app",
    points: [
      "learned how to implement schadcn components w/ aceternity",
      "understand fundmentals of component tree w/ use of server/client components",
    ],
  },
  {
    name: "biovizit",
    role: "prototyper",
    desc: "create prototype company looking to move their online tool from free to use to closed. setup user registration, payment capture, and auth",
    url: "https://biovizit.webflow.io",
    points: [
      "understand the process of creating a proof of concept",
      "integrate with 3rd party tools like clerk and stripe",
    ],
  },
];

export const urls = [
  {
    title: "email",
    url: "mailto:mail@edwinolivares.com",
  },
  {
    title: "linkedin",
    url: "https://www.linkedin.com/in/ejo-3914811a1/",
  },
  {
    title: "github",
    url: "https://github.com/edolivar",
  },
];

export const blogs = [
  {
    id: "1",
    name: "how using neovim made me a vscode user",
    date: "jul 01 2025",
    url: "/blogs/b/1",
    content: [
      "i've been programming for a long time now; my journey started with robotc, programming robot functionality to remote cotrols. i studied computer science at cal poly (slo) and since then have worked for raytheon and done a wide range of freelance projects. throughout that time one thing has remained consistent my coding setup. for the longest time i was rocking the generic vs code config with not much customization, the most i would do is install a few plugins and change the theme. for my termial i was rocking an item2 setup i had gotten from my brother but never really understood what was going on under the hood (i was using it because i didn't know any better).",
      "at the beginning of last year, i started getting into customizing my computer and trying new tools. I tested a bunch of new browsers, terminal emulators, window managers, etc. I even dabbled with nvim as my code editor of choice because i had heard it was lightweight(in some cases) and customizable. I first started with nvim distros like lazyvim and even setup my own config from scratch(using lua but it was really janky so i moved back to lazyvim). learning about all of the shortcuts keybindings, being able to use lazyvim like legos and add plugins like lazygit made my experience more enjoyable/productive and showed me the world of incredible tools that very talented developers have created.",
      "now how does all of this make me a better vscode user?",
      'i noticed after i got to my "optimal" setup it was looking a lot like vs code and i believe i heard somewhere if you are just remaking vs code you should probably just use vs code, especially since it has a bigger plugin eco-system (less setup and worry about updates breaking something). through neovim forcing me to use shortcuts and new tools i was able to distill the aspects i really wanted/needed into vs code and be much more intentional with my configs. most importantly it was tailored to what i wanted and not what some article or youtube video told me.',
    ],
  },
  {
    id: "2",
    name: "how i configured my setup",
    date: "coming soon",
    url: "",
    content: [],
  },
];
