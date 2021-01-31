<script lang="ts">
  interface Link {
    title: string;
    url: string;
    external?: boolean;
  }

  export let link: Link;
</script>

<a href={link.url} {#if link.external}target="_blank"{/if}>
  <slot name="start"></slot>
  <span>{link.title}</span>
  <slot name="end"></slot>
</a>

<style>
  a {
    display: block;
    height: 60px;
    border: 2px solid 
  }
</style>
