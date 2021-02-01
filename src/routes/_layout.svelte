<script lang="ts">
  import Nav from "../components/Nav.svelte";
</script>

<Nav />

<main>
  <slot />
</main>

<style>
  main {
    box-sizing: border-box;
  }
</style>
