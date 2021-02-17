<script>
  const currentDate = new Date(Date.now());
</script>

<footer class="footer">
  <div class="footer__social" />
  <div class="footer__legal" />
  <p>Made with <span>🤍</span> by me (c) {currentDate.getFullYear()}</p>
</footer>

<style>
    .footer {
        background: var(--color-primary);
        color: var(--color-text-footer)
    }
</style>
