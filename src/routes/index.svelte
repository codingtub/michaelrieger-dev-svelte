<script>
  import Hero from "../components/Hero.svelte";
</script>

<svelte:head>
  <title>Michael Rieger</title>
</svelte:head>

<Hero />

<style>
  @font-face {
    font-family: "Silka";
    src: url("/fonts/Silka-Regular.eot");
    src: url("/fonts/Silka-Regular.eot?#iefix") format("embedded-opentype"),
      url("/fonts/Silka-Regular.woff2") format("woff2"),
      url("/fonts/Silka-Regular.woff") format("woff"),
      url("/fonts/Silka-Regular.ttf") format("truetype"),
      url("/fonts/Silka-Regular.svg#Silka-Regular") format("svg");
    font-weight: normal;
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: "Silka";
    src: url("/fonts/Silka-SemiBold.eot");
    src: url("/fonts/Silka-SemiBold.eot?#iefix") format("embedded-opentype"),
      url("/fonts/Silka-SemiBold.woff2") format("woff2"),
      url("/fonts/Silka-SemiBold.woff") format("woff"),
      url("/fonts/Silka-SemiBold.ttf") format("truetype"),
      url("/fonts/Silka-SemiBold.svg#Silka-SemiBold") format("svg");
    font-weight: 600;
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: "Silka";
    src: url("/fonts/Silka-Bold.eot");
    src: url("/fonts/Silka-Bold.eot?#iefix") format("embedded-opentype"),
      url("/fonts/Silka-Bold.woff2") format("woff2"),
      url("/fonts/Silka-Bold.woff") format("woff"),
      url("/fonts/Silka-Bold.ttf") format("truetype"),
      url("/fonts/Silka-Bold.svg#Silka-Bold") format("svg");
    font-weight: bold;
    font-style: normal;
    font-display: swap;
  }

  :global(html, body, *) {
    font-family: "Silka", sans-serif;
  }

  :global(:root) {
    --color-primary: #5b2e48;
    --color-bg: #ffffff;
    --color-text-dark: #131515;
    --color-text-lighter: #738080;
    --color-text-light: #f6f9fc;
    --color-text-darker: #e6d3de;
    --color-text-footer: #b39aa8;
    --color-border: #f2deea;
    --box-shadow: 0 4px 20px rgba(91, 46, 72, 0.1);
  }

  :global(.h1) {
    font-size: 3.75rem;
  }
</style>
