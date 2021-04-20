<script lang="ts">
  import LinkButton from '../components/LinkButton.svelte';
  // import iconSend from 'images/iconSend.svg';

  const contactLink = {
    title: 'Wanna chat?',
    url: 'mailto:hello@michaelrieger.dev',
  };
</script>

<nav class="nav">
  <a href="/" class="nav__title"><p>Michael Rieger</p></a>
  <LinkButton {...contactLink}>
    <!-- <img slot="start" src={iconSend} alt="Send icon" /> -->
  </LinkButton>
</nav>

<style>
  .nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-sizing: border-box;
    padding: 2em var(--content-side-padding);
  }

  .nav__title {
    text-decoration: none;
    color: unset;
    font-size: clamp(1rem, 3vw, 1.5rem);
  }
</style>
