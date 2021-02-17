<script lang="ts">
  import Footer from '../components/Footer.svelte';
  import Nav from '../components/Nav.svelte';
</script>

<Nav />

<main>
  <slot />
</main>

<Footer />

<style>
  main {
    box-sizing: border-box;
  }
</style>
