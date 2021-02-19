<script lang="ts">
  import iconSend from "images/iconSend.svg";
  import LinkButton from "./LinkButton.svelte";

  export let title = "Wanna chat?";
  export let text =
    "I'm currently not for hire but if you'd like to talk I'm always open for it. Just send me an email, @ me on Twitter or send me a message on LinkedIn.";
  export let link = {
    url: "mailto:hello@michaelrieger.dev",
    title: "Hit me up",
  };
</script>

<div class="contact">
  <h2 class="contact__title heading-m">{title}</h2>
  <p class="contact__text text-s">{text}</p>
  <LinkButton {...link}>
    <img slot="end" src={iconSend} alt="Send icon" />
  </LinkButton>
</div>

<style>
  .contact {
    display: flex;
    flex-flow: column wrap;
    align-items: center;

    width: 100%;
    max-width: 600px;

    box-sizing: border-box;
    padding: 2em;
    margin: 0 auto;
    position: relative;

    background: white;
    border-radius: var(--border-radius);
    border: 1px solid var(--color-border);
    box-shadow: var(--box-shadow);
    text-align: center;
  }

  .contact__title {
    margin-bottom: 0.5em;
  }

  .contact__text {
    max-width: 32ch;
    margin-bottom: 2em;
    color: var(--color-text-skills);
  }
</style>
