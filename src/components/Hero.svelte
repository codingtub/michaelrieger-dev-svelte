<script lang="ts">
  import bgMobile from 'images/bgMobile.svg';
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

<section class="hero">
  <!-- {#if !desktop}
    <img
      transition:fade
      src={bgMobile}
      alt="Background consisting out of different icons like a computer, a mobile phone, a cup with pencils and Super Mario"
      class='hero__bg'
    />
  {/if}
  {#if desktop}
    <img
      transition:fade
      src={bgDesktop}
      alt="Background consisting out of different icons like a computer, a mobile phone, a cup with pencils and Super Mario"
      class='hero__bg'
      />
  {/if} -->
  <div class="hero__inner">
    <img
      src={avatarDefault}
      alt="A comic version of myself"
      class="hero__avatar"
    />
    <div class="hero__content">
      <h1 class="hero__title">Full-stack Dev, Designer & Nerd</h1>
      <p class="hero__text">
        I build web stuff, read blog posts and fantasy books, and I love it.
      </p>
    </div>
  </div>
</section>

<style>
  .hero {
    padding-top: 1em;
    padding-bottom: 10vh;
  }
  .hero__bg {
    width: 100%;
    height: 100vh;
    object-fit: contain;
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
  }

  .hero__inner {
    display: flex;
    flex-flow: column wrap;
    align-items: center;
  }

  .hero__avatar {
    width: clamp(160px, 20vw, 280px);
    height: auto;
    margin-bottom: 3em;
  }

  .hero__content {
    display: flex;
    flex-flow: column wrap;
    align-items: center;
    text-align: center;
  }

  .hero__title {
    max-width: 15ch;
    margin-bottom: 0.5em;
    font-size: clamp(1.75rem, 5vw, 3.75rem);
    line-height: 1.25em;
    font-weight: bold;
  }
  
  .hero__text {
    max-width: 22ch;
    font-size: clamp(1.125rem, 4vw, 1.25rem);
    line-height: 1.5em;
  }

  @media (min-width: 43em) {
    .hero {
      padding-top: 4em;
    }
    .hero__title {
      max-width: unset;
    }

    .hero__text {
      max-width: unset;
    }
  }
</style>
