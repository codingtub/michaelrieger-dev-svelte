<script lang="ts">
  import avatarDefault from "images/avatarDefault.svg";

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
      width="280"
      height="300"
    />
    <div class="hero__content">
      <h1 class="hero__title heading-l">Full-stack Dev, Designer & Nerd</h1>
      <p class="hero__text text-l">
        I build web stuff, read blog posts and fantasy books and play a lot of video games.
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
    color: var(--color-text-dark);
  }

  .hero__text {
    max-width: 22ch;
  }

  @media (min-width: 43em) {
    .hero {
      padding: 6em var(--content-side-padding) 8em;
    }
    .hero__title {
      max-width: unset;
    }

    .hero__text {
      max-width: unset;
    }
  }
</style>
