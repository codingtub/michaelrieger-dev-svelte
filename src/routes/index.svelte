<script context="module" lang="ts">
  import type { Skill } from '../_shared/types/skill';

  export async function preload() {
    const res = await this.fetch('/api/skills.json');
    const skills = await res.json();

    return { skills };
  }
</script>

<script lang="ts">
  import Hero from '../components/Hero.svelte';
  import Skills from '../components/Skills.svelte';

  export let skills: Skill[];
</script>

<svelte:head>
  <title>Michael Rieger</title>
  <meta name="description" content="Welcome to my personal domain of okayishly organized information about me. (Mostly) Front-End Dev, CTO at LightCyde, and lover of tech, games and music.">
  <html lang="en" />
</svelte:head>

<Hero />
{#if skills}
  <Skills {skills} />
{/if}

<style>
</style>
