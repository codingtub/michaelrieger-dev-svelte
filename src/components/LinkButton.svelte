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
    max-width: max-content;
    height: 60px;
    border: 2px solid var(--color-primary);
    box-sizing: border-box;
    padding: .5em 2em;
    border-radius: 50px;
    text-decoration: none;
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
