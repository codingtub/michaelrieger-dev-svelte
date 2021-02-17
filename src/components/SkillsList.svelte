<script lang="ts">
  import { Skill, SkillManager } from '../_shared/types/skill';

  const skillManager = new SkillManager();

  skillManager.

  export let skills: Skill[];
</script>

<div class="skills__list">
  {#each skills as skill}
    <article class="skill">
      <header class="skill__header">
        <img src={skill.icon} alt={skill.title + ' icon'} class="skill__icon" />
        <h3 class="skill__title">{skill.title}</h3>
      </header>
      <div class="skill__content">
        <h4>{skill.skillsTitle}</h4>
        <p>{skill.description}</p>
        <ul>
          {#each skill.skillsList as skillItem}
            <li>{skillItem}</li>
          {/each}
        </ul>
        <h4>{skill.toolsTitle}</h4>
        <ul>
          {#each skill.toolsList as tool}
            <li>{tool}</li>
          {/each}
        </ul>
      </div>
    </article>
  {/each}
</div>

<style>
  .skills__list {
    display: flex;
    flex-flow: column wrap;
    min-height: 600px;

    box-sizing: border-box;
    padding: 0 var(--content-side-padding);
    margin-top: -12.5em;

    position: relative;

    border-radius: var(--border-radius);
  }

  article {
    display: flex;
    flex-flow: column wrap;
    align-items: center;

    min-height: 200px;

    box-sizing: border-box;
    padding: 1.5em;

    background: var(--color-bg);
    border-radius: 0;
    box-shadow: var(--box-shadow);
  }

  article:first-child {
    border-radius: var(--border-radius) var(--border-radius) 0 0;
    border-bottom: 1px solid var(--color-border);
  }

  article:last-child {
    border-radius: 0 0 var(--border-radius) var(--border-radius);
    border-top: 1px solid var(--color-border);
  }

  .icon {
    height: 40px;
    width: auto;
  }
</style>
