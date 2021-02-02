<script>
  // import bgMobile from 'images/bgMobile.svg';
  import bgDesktop from 'images/bgDesktop.svg';
  import avatarDefault from 'images/avatarDefault.svg';
  import { fade } from 'svelte/transition';

  let desktop = false;

  const setBackground = () => {
    const vw = document.body.clientWidth;
    if (vw >= 1200 && !desktop) {
      desktop = true;
    } else if (vw < 1200 && desktop) {
      desktop = false;
    }
  };
</script>

<svelte:window on:load={setBackground} on:resize={setBackground} />

<section>
  {#if desktop}
    <img
      transition:fade
      src={bgDesktop}
      alt="Background consisting out of different icons like a computer, a mobile phone, a cup with pencils and Super Mario"
    />
  {/if}
  <div>
    <img src={avatarDefault} alt="A comic version of myself" class="avatar" />
    <div class="content">
      <h1>Full-stack Dev, Designer & Nerd</h1>
      <p>
        I build web stuff, read blog posts and fantasy books, and I love it.
      </p>
    </div>
  </div>
</section>

<style>
  section > img {
    width: 100%;
    height: 100vh;
    object-fit: contain;
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
  }

  section > div {
    display: flex;
    flex-flow: column wrap;
    align-items: center;
  }

  .content {
    display: flex;
    flex-flow: column wrap;
    align-items: center;
    text-align: center;
  }

  .avatar {
    width: clamp(160px, 20vw, 280px);
    height: auto;
    margin-bottom: 3em;
  }

  h1 {
    max-width: 15ch;
    margin-bottom: 0.5em;
    font-size: clamp(1.75rem, 5vw, 3.75rem);
    line-height: 1.25em;
    font-weight: bold;
  }

  p {
    max-width: 22ch;
    font-size: clamp(1.125rem, 4vw, 1.25rem);
    line-height: 1.5em;
  }

  @media (min-width: 43em) {
    h1 {
      max-width: unset;
    }

    p {
      max-width: unset;
    }
  }
</style>
