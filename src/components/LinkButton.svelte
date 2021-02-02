<script lang="ts">
  interface Link {
    title: string;
    url: string;
    external?: boolean;
  }

  export let link: Link;
</script>

<a href={link.url} target={link.external ? '_blank' : ''}>
  <slot name="start" class="icon icon-start" />
  <span>{link.title}</span>
  <slot name="end" class="icon icon-end" />
</a>

<style>
  a {
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

  a:hover {
    background: var(--color-primary);
  }

  a > span {
    text-align: center;
    color: var(--color-primary);
  }

  a:hover > span {
    color: var(--color-text-light);
  }

  a :global(img) {
    height: 24px;
    width: auto;
  }

  a :global(img:first-child) {
    margin-right: 1em;
  }

  a :global(img:last-child) {
    margin-left: 1em;
  }
</style>
