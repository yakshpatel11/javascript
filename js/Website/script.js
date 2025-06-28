  const toggleBtn = document.getElementById('modeToggle');
  const body = document.body;


  const savedMode = localStorage.getItem('theme');

  if (savedMode === 'dark') {
    body.classList.add('dark-mode');
    toggleBtn.textContent = "☀️ Light Mode";
  } else {
    body.classList.remove('dark-mode');
    toggleBtn.textContent = "🌙 Dark Mode";
  }


  toggleBtn.addEventListener('click', () => {
    body.classList.toggle('dark-mode');

    if (body.classList.contains('dark-mode')) {
      toggleBtn.textContent = "☀️ Light Mode";
      localStorage.setItem('theme', 'dark');
    } else {
      toggleBtn.textContent = "🌙 Dark Mode";
      localStorage.setItem('theme', 'light');
    }
  });
