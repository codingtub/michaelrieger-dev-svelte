<script lang="ts">
  import type { Skill } from "../_shared/types/skill";

  import SkillsList from "./SkillsList.svelte";

  export let skills: Skill[];
</script>

<section class="skills">
  <div class="skills__bg">
    <h2 class="skills__title heading-m">Servus, I'm Mike. Nice to meet you!</h2>
    <p class="skills__introduction text-l">
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

  .skills__bg {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    width: 100%;
    box-sizing: border-box;
    padding-top: 6em;
    padding-bottom: 16em;
    background: var(--color-primary);
  }

  .skills__bg > * {
    padding: 0 var(--content-side-padding);
    text-align: center;
  }

  .skills__title {
    max-width: 15ch;
    color: var(--color-text-light);
    margin-bottom: 1em;
  }

  .skills__introduction {
    color: var(--color-text-lighter);
  }
</style>
