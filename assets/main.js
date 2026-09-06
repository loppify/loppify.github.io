const copyButton = document.querySelector('[data-copy-email]');
const copyStatus = document.querySelector('.copy-status');
copyButton.addEventListener('click', async () => {
  try {
    await navigator.clipboard.writeText('rostyslav.tarasov.l@gmail.com');
    copyButton.textContent = 'Copied ✓';
    copyStatus.textContent = 'Email address copied.';
    window.setTimeout(() => { copyButton.textContent = 'Copy email'; }, 2500);
  } catch {
    copyStatus.textContent = 'Select the email address above to copy it, or click it to open your email app.';
  }
});
document.querySelector('#year').textContent = new Date().getFullYear();
