/* ============================================
   main.js — Global interactions
   ============================================ */

document.addEventListener('DOMContentLoaded', () => {

  /* ── 페이지 진입 애니메이션 ── */
  document.body.classList.add('page-enter');

  /* ── 스크롤 시 nav 테두리 강조 ── */
  const nav = document.querySelector('nav');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      nav.style.borderBottomColor = 'rgba(240,237,230,0.12)';
    } else {
      nav.style.borderBottomColor = '';
    }
  }, { passive: true });

  /* ── 프로젝트 카드 호버 시 번호 강조 ── */
  const cards = document.querySelectorAll('.project-card');
  cards.forEach(card => {
    card.addEventListener('mouseenter', () => {
      const num = card.querySelector('.p-num');
      if (num) num.style.color = 'var(--text-secondary)';
    });
    card.addEventListener('mouseleave', () => {
      const num = card.querySelector('.p-num');
      if (num) num.style.color = '';
    });
  });

  /* ── 히어로 그라데이션 오브 미세 패럴랙스 ── */
  const orbs = document.querySelectorAll('.grad-orb');
  if (orbs.length) {
    window.addEventListener('mousemove', (e) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 20;
      const y = (e.clientY / window.innerHeight - 0.5) * 20;
      orbs.forEach((orb, i) => {
        const factor = (i + 1) * 0.4;
        orb.style.transform = `translate(${x * factor}px, ${y * factor}px)`;
      });
    }, { passive: true });
  }

});
