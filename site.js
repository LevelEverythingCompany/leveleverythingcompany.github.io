(() => {
  const year = document.querySelectorAll('[data-year]');
  year.forEach(el => el.textContent = new Date().getFullYear());
  const filters = document.querySelectorAll('[data-filter]');
  const projects = document.querySelectorAll('[data-project]');
  filters.forEach(btn => btn.addEventListener('click', () => {
    const filter = btn.dataset.filter;
    filters.forEach(b => b.setAttribute('aria-pressed', String(b === btn)));
    projects.forEach(p => { p.hidden = filter !== 'all' && !p.dataset.project.split(' ').includes(filter); });
  }));
  const phrases = [
    'What if history could find you instead of the other way around?',
    'What if an ordinary machine had one extraordinary use?',
    'What if the idea that sounds strange is the one worth building?',
    'What if useful software belonged to everyone?',
    'What if curiosity was a perfectly valid career path?',
    'No single skill tree. No final level.'
  ];
  const signalText = document.getElementById('signal-text');
  const signalButton = document.getElementById('signal-next');
  let index = 0;
  if (signalText && signalButton) signalButton.addEventListener('click', () => {
    index = (index + 1) % phrases.length;
    signalText.textContent = phrases[index];
  });
})();
