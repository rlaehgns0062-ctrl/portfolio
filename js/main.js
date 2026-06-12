/* ============================================
   main.js — Global interactions
   ============================================ */
document.addEventListener('DOMContentLoaded', () => {

  /* ── 데스크탑 커서 포인트 ── */
  const canUseCursorPoint = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
  if (canUseCursorPoint) {
    const cursorPoint = document.createElement('div');
    cursorPoint.className = 'cursor-point';
    cursorPoint.setAttribute('aria-hidden', 'true');
    document.body.appendChild(cursorPoint);

    const cursorOffsetX = 22;
    const cursorOffsetY = 24;
    let pointerX = window.innerWidth / 2;
    let pointerY = window.innerHeight / 2;
    let pointX = pointerX;
    let pointY = pointerY;

    function animateCursorPoint() {
      pointX += (pointerX - pointX) * 0.24;
      pointY += (pointerY - pointY) * 0.24;
      cursorPoint.style.transform = `translate3d(${pointX}px, ${pointY}px, 0) translate(-50%, -50%)`;
      requestAnimationFrame(animateCursorPoint);
    }

    window.addEventListener('pointermove', (e) => {
      pointerX = e.clientX + cursorOffsetX;
      pointerY = e.clientY + cursorOffsetY;
      cursorPoint.classList.add('is-visible');
    }, { passive: true });

    document.addEventListener('pointerover', (e) => {
      const interactive = e.target.closest('a, button, [role="button"], input, textarea, select, summary, .project-card, .study-card:not(.is-disabled), [data-work-tab], [data-top-button], [data-project-prev], [data-project-next], [data-study-prev], [data-study-next]');
      cursorPoint.classList.toggle('is-active', Boolean(interactive));
    });

    document.addEventListener('pointerout', (e) => {
      if (!e.relatedTarget || !e.relatedTarget.closest || !e.relatedTarget.closest('a, button, [role="button"], input, textarea, select, summary, .project-card, .study-card:not(.is-disabled), [data-work-tab], [data-top-button], [data-project-prev], [data-project-next], [data-study-prev], [data-study-next]')) {
        cursorPoint.classList.remove('is-active');
      }
    });

    document.addEventListener('mouseleave', () => {
      cursorPoint.classList.remove('is-visible', 'is-active');
    });

    animateCursorPoint();
  }

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

  /* ── 푸터 TOP 버튼 ── */
  document.querySelectorAll('[data-top-button]').forEach(button => {
    button.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  });

  /* ── 탭 nav active 상태 ── */
  const navLinks = document.querySelectorAll('.nav-links li a, .mobile-menu a');
  const currentPath = window.location.pathname;
  const isDetailWork = currentPath.includes('/work/');
  const isWorkPage = currentPath.endsWith('/work.html') || isDetailWork;
  const isAboutPage = currentPath.includes('about.html');

  navLinks.forEach(link => {
    const href = link.getAttribute('href');
    const pointsToHome = href.includes('index.html');
    const pointsToAbout = href.includes('about.html');
    const pointsToWork = href.includes('work.html');
    const shouldActivate =
      (pointsToWork && isWorkPage) ||
      (pointsToAbout && isAboutPage) ||
      (pointsToHome && !isWorkPage && !isAboutPage);

    link.classList.toggle('active', shouldActivate);
  });

  /* ── 모바일 햄버거 메뉴 ── */
  const menuToggle = document.querySelector('.nav-menu-toggle');
  const mobileMenu = document.querySelector('.mobile-menu');
  if (menuToggle && mobileMenu) {
    function setMenu(open) {
      menuToggle.classList.toggle('is-open', open);
      mobileMenu.classList.toggle('is-open', open);
      menuToggle.setAttribute('aria-expanded', String(open));
    }

    menuToggle.addEventListener('click', () => {
      setMenu(!mobileMenu.classList.contains('is-open'));
    });

    mobileMenu.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => setMenu(false));
    });

    window.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') setMenu(false);
    });
  }

  /* ── Work 하위 탭 ── */
  const workTabs = document.querySelectorAll('[data-work-tab]');
  const workPanels = document.querySelectorAll('[data-work-panel]');
  if (workTabs.length && workPanels.length) {
    function setWorkTab(tabName) {
      workTabs.forEach(tab => {
        tab.classList.toggle('active', tab.dataset.workTab === tabName);
      });
      workPanels.forEach(panel => {
        panel.classList.toggle('is-active', panel.dataset.workPanel === tabName);
      });
    }

    const initialTab = window.location.hash === '#studies' ? 'studies' : 'projects';
    setWorkTab(initialTab);

    workTabs.forEach(tab => {
      tab.addEventListener('click', (e) => {
        e.preventDefault();
        const tabName = tab.dataset.workTab;
        setWorkTab(tabName);
        history.replaceState(null, '', `#${tabName}`);
      });
    });
  }

  /* ── 홈 프로젝트 페이지 넘버링 ── */
  const projectPager = document.querySelector('[data-project-pager]');
  if (projectPager) {
    const slides = Array.from(projectPager.querySelectorAll('[data-project-slide]'));
    const currentEl = document.querySelector('[data-project-current]');
    const totalEl = document.querySelector('[data-project-total]');
    const prevBtn = document.querySelector('[data-project-prev]');
    const nextBtn = document.querySelector('[data-project-next]');
    const pageSize = 3;
    const totalPages = Math.max(1, Math.ceil(slides.length / pageSize));
    let activePage = 0;

    if (totalEl) totalEl.textContent = String(totalPages).padStart(2, '0');

    function renderProjectPage(nextPage) {
      activePage = (nextPage + totalPages) % totalPages;
      const start = activePage * pageSize;
      const end = start + pageSize;
      slides.forEach((slide, index) => {
        slide.classList.toggle('is-active', index >= start && index < end);
      });
      if (currentEl) currentEl.textContent = String(activePage + 1).padStart(2, '0');
      if (prevBtn) prevBtn.disabled = totalPages <= 1;
      if (nextBtn) nextBtn.disabled = totalPages <= 1;
    }

    if (prevBtn) {
      prevBtn.addEventListener('click', () => renderProjectPage(activePage - 1));
    }
    if (nextBtn) {
      nextBtn.addEventListener('click', () => renderProjectPage(activePage + 1));
    }

    renderProjectPage(0);
  }

  /* ── 홈 Studies 가로 갤러리 ── */
  const studyRail = document.querySelector('[data-study-rail]');
  const studyPrev = document.querySelector('[data-study-prev]');
  const studyNext = document.querySelector('[data-study-next]');
  if (studyRail && studyPrev && studyNext) {
    function scrollStudies(direction) {
      const card = studyRail.querySelector('.study-card');
      const step = card ? card.getBoundingClientRect().width + 14 : 320;
      studyRail.scrollBy({ left: direction * step, behavior: 'smooth' });
    }

    studyPrev.addEventListener('click', () => scrollStudies(-1));
    studyNext.addEventListener('click', () => scrollStudies(1));
  }

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
