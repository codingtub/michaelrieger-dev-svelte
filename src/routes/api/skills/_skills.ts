import type { Skill } from "../../../_shared/types/skill";
import iconDev from "images/iconDev.svg";
import iconDesign from "images/iconDesign.svg";
import iconInvader from "images/iconInvader.svg";

export const skills: Skill[] = [
  {
    icon: iconDev,
    title: "Full-Stack Developer",
    description:
      "I love to learn and explore. I love to create and the process coming with it. Web development along with its tools, frameworks and community never fails to scratch those itches.",
    skillsTitle: "What I mostly use:",
    skillsList: [
      "HTML / Twig",
      "TypeScript",
      "JavaScript",
      "good ol' CSS / Sass",
      "PHP (WordPress)",
    ],
    toolsTitle: "My tools of choice:",
    toolsList: [
      "VS Code",
      "JetBrains PHPStorm",
      "fish/PowerShell w/Starship",
      "Angular",
      "Next.js / Stencil.js",
      "Svelte",
    ],
  },
  {
    icon: iconDesign,
    title: "Designer",
    description:
      "Being able to visualize vague ideas is a key skill that I develop by letting out my creativity. Designing not only helps me to understand customer’s perspectives, it helps me appreciate the work before for, if and else.",
    skillsTitle: "What I design:",
    skillsList: ["Websites", "Web Apps", "Mobile Apps", "Logos"],
    toolsTitle: "My tools of choice:",
    toolsList: [
      "Adobe XD",
      "Affinity Photo",
      "Affinity Designer",
      "Pen & Paper",
    ],
  },
  {
    icon: iconInvader,
    title: "Gamer, Musician, Blogger?",
    description:
      "Everybody needs some time off, I mostly love to immersive myself in different worlds, create music and maybe will try myself at writing a blog? Everybody’s doing that now, right?",
    skillsTitle: "What else I do:",
    skillsList: [
      "Gaming on PC / PS4 / Switch",
      "Playing the guitar",
      "Listening to Metal",
      "Watching countless hours of DnD",
      "Trying to stick to a daily routine",
    ],
    toolsTitle: "My tools of choice:",
    toolsList: [
      "World of Warcraft",
      "Legend of Zelda",
      "Blind Guardian",
      "Critical Role",
      "Headspace",
      "Daily Diary",
    ],
  },
];
