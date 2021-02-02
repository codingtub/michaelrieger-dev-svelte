<script lang="ts">
  import LinkButton from '../components/LinkButton.svelte';

  export let contactEmail: string = 'hello@michaelrieger.dev';
</script>

<nav>
  <p>Michael Rieger</p>
  <LinkButton link={{ title: 'Wanna chat?', url: 'mailto:' + contactEmail }}>
    <!-- <img slot="end" src="images/i-send.svg" alt="Send icon" /> -->
  </LinkButton>
</nav>

<style>
  nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-sizing: border-box;
    padding: 2em var(--content-side-padding);
  }

  p {
    font-size: clamp(1rem, 3vw, 1.5rem);
  }
</style>
