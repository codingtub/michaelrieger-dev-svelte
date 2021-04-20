<svelte:head>
  <title>Imprint</title>
  <meta name="description" content="Information about the website operator" />
  <html lang="en" />
</svelte:head>

<div class="imprint">
  <div class="imprint__content">
    <h1 class="imprint__title heading-l">Imprint</h1>
    <ul class="imprint__info text-m">
      <li><strong>Name</strong><br />Michael Rieger</li>
      <li><strong>Location</strong><br />Tulln an der Donau</li>
      <li><strong>Description</strong><br />Personal Portfolio Website</li>
    </ul>
  </div>
</div>

<style>
  .imprint {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 4em var(--content-side-padding);
  }

  .imprint__content {
    width: 100%;
    max-width: 1440px;
  }

  .imprint__title {
    margin-bottom: 1em;
  }

  li + li {
    margin-top: 1em;
  }

  .imprint__info {
    list-style: none;
    margin: 0;
    padding: 0;
  }
</style>
