$(() => {
  document.querySelectorAll('[data-sound]').forEach(button => {
    button.addEventListener('click', () => {
      const soundId = button.getAttribute('data-sound');
      playSound(soundId);
    });
  });
});