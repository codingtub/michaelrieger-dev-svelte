<script lang="ts">
  import type { Skill } from '../_shared/types/skill';
  import iconSend from 'images/iconSend.svg';
  import SkillsList from './SkillsList.svelte';

  const skills: Skill[] = [
    {
      icon: iconSend,
      title: 'Full-Stack Developer',
      description:
        'I love to learn and explore. I love to create and the process coming with it. Web development along with its tools, frameworks and community never fails to scratch those itches.',
      skillsTitle: 'What I mostly use:',
      skillsList: [
        'HTML/Twig',
        'TypeScript',
        'JavaScript',
        'good ol\' CSS/Sass',
        'PHP (WordPress)'
      ],
      toolsTitle: 'My tools of choice:',
      toolsList: [
        'VS Code',
        'JetBrains PHPStorm',
        'fish/PowerShell w/Starship',
        'Angular',
        'Next.js / Stencil.js',
        'Svelte'
      ]
    },
  ];
</script>

<section class="skills">
  <div class="skills__bg">
    <h2 class="skills__title">Servus, I'm Mike. Nice to meet you!</h2>
    <p class="skills__introduction">
      Since starting to screw around with computers about 15 years ago, I got my
      Bachelor's degree in Mobile Computing and shifted my interests into the
      web and design world about three years ago. I'm the CTO of a wonderful
      Austrian agency called LightCyde and spend most of my time in frontend
      development and reading books and blog posts about everything web dev and
      productivity. Designing applications, websites and logos is kind of a
      passion that I only pursue in my free time to blow of some steam through
      my creativity vent.
    </p>
  </div>
  <SkillsList {skills} />
</section>

<style>
  .skills {
    padding: 0;
    padding-bottom: 4em;
  }

  .skills__title {
    color: var(--color-text-light);
  }

  .skills__bg {
    width: 100%;
    box-sizing: border-box;
    padding-top: 4em;
    background: var(--color-primary);
  }

  .skills__bg > * {
    padding: 0 var(--content-side-padding);
    text-align: center;
  }

  .skills__title {
  }

  .skills__introduction {
  }
</style>
