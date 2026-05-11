/* ============================================
   main.js — Global interactions
   ============================================ */
document.addEventListener('DOMContentLoaded', () => {

  /* ── 페이지 진입 애니메이션 ── */
  const mainEl = document.querySelector('main') || document.querySelector('.hero') || document.body;
mainEl.classList.add('page-enter');

  /* ── 스크롤 시 nav 테두리 강조 ── */
  const nav = document.querySelector('nav');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      nav.style.borderBottomColor = 'rgba(240,237,230,0.12)';
    } else {
      nav.style.borderBottomColor = '';
    }
  }, { passive: true });

  /* ── 토글 nav — 슬라이딩 active indicator ── */
  const navLinks = document.querySelectorAll('.nav-links li a');
  const currentPath = window.location.pathname;

  // active indicator 엘리먼트 생성
  const pill = document.querySelector('.nav-links');
  const indicator = document.createElement('span');
  indicator.className = 'nav-indicator';
  pill.appendChild(indicator);

  // 현재 페이지 기준으로 active 설정
  let activeLink = null;
  navLinks.forEach(link => {
    const href = link.getAttribute('href');
    const isAbout = currentPath.includes('about');
    const isWork = !isAbout;

    if ((href.includes('about') && isAbout) || (href.includes('index') && isWork)) {
      link.classList.add('active');
      activeLink = link;
    } else {
      link.classList.remove('active');
    }
  });

  // indicator 초기 위치 설정 (애니메이션 없이)
  function setIndicator(el, animate) {
    if (!el) return;
    const pillRect = pill.getBoundingClientRect();
    const elRect = el.getBoundingClientRect();
    indicator.style.transition = animate ? 'left 0.3s cubic-bezier(0.22,1,0.36,1), width 0.3s cubic-bezier(0.22,1,0.36,1)' : 'none';
    indicator.style.left = (elRect.left - pillRect.left) + 'px';
    indicator.style.width = elRect.width + 'px';
    indicator.style.height = elRect.height + 'px';
    indicator.style.top = (elRect.top - pillRect.top) + 'px';
  }

  // 초기 위치 (transition 없이)
  if (activeLink) {
    requestAnimationFrame(() => setIndicator(activeLink, false));
  }

  // 클릭 시 — 토글 먼저 이동, 딜레이 후 페이지 전환
  navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      const href = link.getAttribute('href');
      const isCurrentPage = link.classList.contains('active');
      if (isCurrentPage) return; // 현재 페이지면 아무것도 안 함

      e.preventDefault();

      // active 클래스 이동
      navLinks.forEach(l => l.classList.remove('active'));
      link.classList.add('active');

      // indicator 슬라이드
      setIndicator(link, true);

      // 200ms 후 페이지 전환
      setTimeout(() => {
        window.location.href = href;
      }, 220);
    });
  });

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
