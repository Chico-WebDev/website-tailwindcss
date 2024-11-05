const themeToggle = document.getElementById('theme-toggle');

themeToggle.addEventListener('click', () => {
  document.documentElement.classList.toggle('dark');
  
  // Enregistre le mode dans le stockage local
  if (document.documentElement.classList.contains('dark')) {
    localStorage.setItem('theme', 'dark');
  } else {
    localStorage.setItem('theme', 'light');
  }
});

// Appliquer le thème enregistré
if (localStorage.getItem('theme') === 'dark') {
  document.documentElement.classList.add('dark');
};

const navMenu = document.getElementById('navMenu');
const del = document.getElementById('delete');
const hamburgerMenu = document.getElementById('hamburger');

hamburgerMenu.addEventListener('click', () => {
  hamburgerMenu.classList.toggle('hidden');
    navMenu.classList.toggle('hidden');
    del.classList.toggle('hidden');
});

del.addEventListener('click', () => {
  hamburgerMenu.classList.toggle('hidden');
    navMenu.classList.add('hidden');
    del.classList.add('hidden');
});


window.onscroll = function() {
  var backToTopBtn = document.getElementById("backToTopBtn");
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
      backToTopBtn.style.display = "block";
  } else {
      backToTopBtn.style.display = "none";
  }
};

  document.getElementById("backToTopBtn").onclick = function()  {
      window.scrollTo({top: 0, behavior: 'smooth'});
  };

 