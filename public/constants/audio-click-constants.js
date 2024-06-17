const handleTouchClick = (e) => {
  const button = e.currentTarget;
  const soundId = button.getAttribute('data-sound');
  playSound(soundId);
}

$(() => {
  document.querySelectorAll('[data-sound]').forEach(button => {
      button.addEventListener('click', handleTouchClick);
      button.addEventListener('touchend', handleTouchClick);
    });

  });