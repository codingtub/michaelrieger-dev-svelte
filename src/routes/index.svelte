<script context="module" lang="ts">
  import type { Skill } from "../_shared/types/skill";

  export async function preload() {
    const res = await this.fetch("/api/skills.json");
    const skills = await res.json();

    return { skills };
  }
</script>

<script lang="ts">
  import Hero from "../components/Hero.svelte";
  import Skills from "../components/Skills.svelte";
  import Footer from "../components/Footer.svelte";

  export let skills: Skill[];
</script>

<svelte:head>
  <title>Michael Rieger</title>
</svelte:head>

<Hero />
{#if skills}
  <Skills {skills} />
{/if}

<style>
</style>
