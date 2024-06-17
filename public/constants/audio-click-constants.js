$(() => {
  document.querySelectorAll('[data-sound]').forEach(button => {
    button.addEventListener('mousedown', () => {
      const soundId = button.getAttribute('data-sound');
      playSound(soundId);
      });
    });

  });