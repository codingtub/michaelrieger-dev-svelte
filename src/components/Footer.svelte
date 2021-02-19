<script>
  import iconTwitter from "images/iconTwitter.svg";
  import iconLinkedIn from "images/iconLinkedin.svg";
  import iconGithub from "images/iconGithub.svg";
  import iconSend from "images/iconSend.svg";
  import iconHeart from "images/iconHeart.svg";
  import ContactCard from "./ContactCard.svelte";

  const currentDate = new Date(Date.now());
</script>

<footer class="footer">
  <div class="footer__contact">
    <ContactCard class="footer__contact" />
  </div>
  <div class="footer__inner">
    <div class="footer__social">
      <a class="footer__link-button" href="/">
        <img src={iconTwitter} alt="Twitter icon" />
      </a>
      <a class="footer__link-button" href="/">
        <img src={iconLinkedIn} alt="LinkedIn icon" />
      </a>
      <a class="footer__link-button" href="/">
        <img src={iconGithub} alt="GitHub icon" />
      </a>
    </div>
    <div class="footer__legal">
      <a href="/imprint" class="footer__legal-link text-s">Imprint</a>
      <a href="/privacy" class="footer__legal-link text-s">Privacy Policy</a>
    </div>
    <p class="footer__copyight text-s">
      Made with <img src={iconHeart} alt="Heart icon" /> by me © {currentDate.getFullYear()}
    </p>
  </div>
</footer>

<style>
  .footer {
    padding-top: 4em;
  }

  .footer__contact {
    margin-bottom: -10em;
    box-sizing: border-box;
    padding: 0 var(--content-side-padding);
  }

  .footer__inner {
    text-align: center;
    background: var(--color-primary);
    box-sizing: border-box;
    padding: 16em var(--content-side-padding) 4em;
  }

  .footer__inner > * {
    margin: 0 auto;
  }

  .footer__inner > :not(:last-child) {
    margin-bottom: 3em;
  }

  .footer__social {
    display: flex;
    justify-content: space-between;
    width: 100%;
    max-width: 180px;
  }

  .footer__link-button {
    display: inline-flex;
    justify-content: center;
    align-items: center;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    border: 2px solid var(--color-text-footer);
  }

  .footer__link-button img {
    width: 18px;
    height: auto;
    filter: brightness(1);
  }

  .footer__legal-link {
    display: block;
    text-decoration: none;
    color: var(--color-text-footer);
  }

  .footer__copyight {
    color: var(--color-text-footer);
  }

  .footer__copyight img {
    height: 0.8em;
    width: auto;
    filter: brightness(1);
  }
</style>
