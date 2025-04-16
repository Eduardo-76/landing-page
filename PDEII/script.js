// script.js

document.addEventListener('DOMContentLoaded', () => {
    // Rolagem suave para todos os links internos (caso você adicione âncoras futuramente)
    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach(link => {
      link.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
          target.scrollIntoView({ behavior: 'smooth' });
        }
      });
    });
  
    // Animações de fade-in ao rolar a página
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('show');
        }
      });
    }, {
      threshold: 0.1
    });
  
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
      section.classList.add('hidden');
      observer.observe(section);
    });
  });
  