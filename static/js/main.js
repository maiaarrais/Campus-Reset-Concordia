function showPage(id) {
    document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
    const page = document.getElementById('page-' + id);
    if (page) {
      page.classList.add('active');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
    document.getElementById('navLinks').classList.remove('open');
    // Fire a virtual pageview so Google Analytics tracks each page separately
    if (typeof gtag !== 'undefined') {
      gtag('event', 'page_view', {
        page_title: id.charAt(0).toUpperCase() + id.slice(1),
        page_location: window.location.href.split('#')[0] + '#' + id,
        page_path: '/' + id
      });
    }
    return false;
  }

  function toggleMenu() {
    document.getElementById('navLinks').classList.toggle('open');
  }

  function submitForm() {
    document.getElementById('joinFormWrap').style.display = 'none';
    document.getElementById('thankyouBox').classList.add('visible');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  function toggleFaq(btn) {
    const answer = btn.nextElementSibling;
    const chevron = btn.querySelector('.faq-chevron');
    const isOpen = answer.classList.contains('open');
    document.querySelectorAll('.faq-answer').forEach(a => a.classList.remove('open'));
    document.querySelectorAll('.faq-chevron').forEach(c => c.classList.remove('rotated'));
    if (!isOpen) {
      answer.classList.add('open');
      chevron.classList.add('rotated');
    }
  }

  function openArticle(id) {
    document.getElementById('resources-list').classList.add('hidden');
    document.querySelectorAll('.article-view').forEach(a => a.classList.remove('visible'));
    document.getElementById(id).classList.add('visible');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  function closeArticle() {
    document.querySelectorAll('.article-view').forEach(a => a.classList.remove('visible'));
    document.getElementById('resources-list').classList.remove('hidden');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }