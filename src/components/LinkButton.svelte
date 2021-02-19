<script lang="ts">
  export let url: string;
  export let title: string;
  export let external = false;
</script>

<a href={url} target={external ? "_blank" : ""} class="link">
  <slot name="start" />
  <span class="link__label">{title}</span>
  <slot name="end" />
</a>

<style>
  .link {
    display: flex;
    align-items: center;
    justify-content: center;

    max-width: max-content;
    height: 50px;

    box-sizing: border-box;
    padding: 0.5em 1.5em;

    font-size: 1rem;
    text-decoration: none;
    border-radius: 50px;
    border: 2px solid var(--color-primary);
    transition: background 0.3s ease-in-out, color 0.3s ease-in-out;
  }

  .link:hover,
  .link:focus,
  .link:focus-within {
    background: var(--color-primary);
  }

  .link__label {
    text-align: center;
    color: var(--color-primary);
  }

  .link:hover .link__label {
    color: var(--color-text-light);
  }

  .link :global(img) {
    height: 24px;
    width: auto;
  }

  .link:hover :global(img) {
    filter: brightness(10);
  }

  .link :global(img:first-child) {
    margin-right: 1em;
  }

  .link :global(img:last-child) {
    margin-left: 1em;
  }
</style>
