// 개발자 웹 이력서 인터랙션 스크립트

// 다크모드 토글: 선택한 테마를 localStorage에 저장
function initThemeToggle() {
  const button = document.getElementById('theme-toggle');
  if (!button) return;

  button.addEventListener('click', () => {
    const isDark = document.documentElement.classList.toggle('dark');
    const meta = document.querySelector('meta[name="theme-color"]');
    if (meta) meta.setAttribute('content', isDark ? '#0E141C' : '#F7F8FA');
    try {
      localStorage.setItem('theme', isDark ? 'dark' : 'light');
    } catch (error) {
      // 저장소 접근이 막힌 환경에서는 저장을 건너뜀
    }
  });
}

// 통계 숫자 카운트업: 화면에 보이면 0에서 목표값까지 증가
function initCountUp() {
  const items = document.querySelectorAll('[data-count]');
  if (!items.length) return;

  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (reduceMotion || !('IntersectionObserver' in window)) return; // HTML에 최종값이 이미 들어 있음

  const animate = (el) => {
    const target = Number(el.dataset.count);
    const duration = 1200;
    const start = performance.now();
    const tick = (now) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      el.textContent = String(Math.round(target * eased));
      if (progress < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  };

  const observer = new IntersectionObserver((entries, self) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      animate(entry.target);
      self.unobserve(entry.target);
    });
  }, { threshold: 0.6 });

  items.forEach((item) => observer.observe(item));
}

// 모바일 햄버거 메뉴 토글
function initMobileMenu() {
  const button = document.getElementById('menu-toggle');
  const menu = document.getElementById('nav-menu');
  if (!button || !menu) return;

  // 모바일에서 열렸을 때의 세로 메뉴 스타일
  const openClasses = ['absolute', 'left-0', 'right-0', 'top-full', 'flex-col', 'items-start', 'gap-5',
    'border-b', 'border-line', 'bg-canvas', 'px-5', 'py-6', 'sm:px-8'];

  const setOpen = (open) => {
    menu.classList.toggle('hidden', !open);
    menu.classList.toggle('flex', open);
    openClasses.forEach((name) => menu.classList.toggle(name, open));
    button.setAttribute('aria-expanded', String(open));
    button.setAttribute('aria-label', open ? '메뉴 닫기' : '메뉴 열기');
  };

  button.addEventListener('click', () => {
    setOpen(button.getAttribute('aria-expanded') !== 'true');
  });

  // 메뉴 링크를 누르면 메뉴를 닫음
  menu.addEventListener('click', (event) => {
    if (event.target.closest('a')) setOpen(false);
  });

  // 화면이 데스크톱 폭으로 커지면 모바일 상태를 초기화
  window.matchMedia('(min-width: 768px)').addEventListener('change', (event) => {
    if (event.matches) {
      setOpen(false);
      menu.classList.remove('hidden');
      menu.classList.add('flex');
    }
  });
}

// 앵커 링크 부드러운 스크롤
function initSmoothScroll() {
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  document.querySelectorAll('a[href^="#"]').forEach((link) => {
    link.addEventListener('click', (event) => {
      const targetId = link.getAttribute('href');
      const target = targetId.length > 1 ? document.querySelector(targetId) : null;
      if (!target) return;

      event.preventDefault();
      target.scrollIntoView({ behavior: reduceMotion ? 'auto' : 'smooth' });
      history.replaceState(null, '', targetId);
    });
  });
}

// 현재 보이는 섹션에 맞춰 네비게이션 링크 강조
function initActiveNav() {
  const links = document.querySelectorAll('.nav-link');
  const sections = [...links]
    .map((link) => document.querySelector(link.getAttribute('href')))
    .filter(Boolean);
  if (!sections.length || !('IntersectionObserver' in window)) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      links.forEach((link) => {
        link.classList.toggle('is-active', link.getAttribute('href') === `#${entry.target.id}`);
      });
    });
  }, { rootMargin: '-40% 0px -55% 0px' });

  sections.forEach((section) => observer.observe(section));
}

// 스크롤 시 섹션 등장 애니메이션
function initRevealOnScroll() {
  const items = document.querySelectorAll('.reveal');
  if (!('IntersectionObserver' in window)) {
    items.forEach((item) => item.classList.add('is-visible'));
    return;
  }

  const observer = new IntersectionObserver((entries, self) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add('is-visible');
      self.unobserve(entry.target);
    });
  }, { threshold: 0.1 });

  items.forEach((item) => observer.observe(item));
}

// 맨 위로 이동 버튼
function initScrollTopButton() {
  const button = document.getElementById('scroll-top');
  if (!button) return;

  const toggleVisibility = () => {
    button.classList.toggle('is-visible', window.scrollY > 400);
  };
  window.addEventListener('scroll', toggleVisibility, { passive: true });
  toggleVisibility();

  button.addEventListener('click', () => {
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    window.scrollTo({ top: 0, behavior: reduceMotion ? 'auto' : 'smooth' });
  });
}

document.addEventListener('DOMContentLoaded', () => {
  initThemeToggle();
  initMobileMenu();
  initSmoothScroll();
  initActiveNav();
  initRevealOnScroll();
  initCountUp();
  initScrollTopButton();
});
