<script lang='ts'>
  import sendIcon from 'images/i-send.svg';
  import LinkButton from '../components/LinkButton.svelte';

  export let contactEmail: string = 'hello@michaelrieger.dev';
</script>

<nav>
  <p>Michael Rieger</p>
  <LinkButton link={{ title: 'Wanna chat?', url: 'mailto:' + contactEmail }}>
    <img slot="end" src={sendIcon} alt="Send icon" />
  </LinkButton>
</nav>

<style>
  nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-sizing: border-box;
    padding: 2em;
  }
</style>
