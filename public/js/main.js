/* =========================================================
   SAE Crecer en Bienestar — Interacciones del sitio
   ========================================================= */
(function () {
  'use strict';

  /* ---------- 1. Menú móvil accesible ---------- */
  const toggle = document.getElementById('menuToggle');
  const nav = document.getElementById('navMenu');
  const overlay = document.getElementById('navOverlay');
  const body = document.body;

  const MOBILE_BP = 860; // debe coincidir con el breakpoint del CSS

  function isMobile() {
    return window.matchMedia(`(max-width: ${MOBILE_BP}px)`).matches;
  }

  function openMenu() {
    nav.classList.add('is-open');
    overlay.classList.add('is-visible');
    body.classList.add('nav-open');
    toggle.setAttribute('aria-expanded', 'true');
    toggle.setAttribute('aria-label', 'Cerrar menú de navegación');
    // Foco al primer enlace
    const firstLink = nav.querySelector('a');
    if (firstLink) firstLink.focus({ preventScroll: true });
  }

  function closeMenu(returnFocus = true) {
    nav.classList.remove('is-open');
    overlay.classList.remove('is-visible');
    body.classList.remove('nav-open');
    toggle.setAttribute('aria-expanded', 'false');
    toggle.setAttribute('aria-label', 'Abrir menú de navegación');
    if (returnFocus) toggle.focus({ preventScroll: true });
  }

  if (toggle && nav && overlay) {
    toggle.addEventListener('click', () => {
      const open = nav.classList.contains('is-open');
      open ? closeMenu() : openMenu();
    });

    // Cerrar al hacer clic en el overlay
    overlay.addEventListener('click', () => closeMenu());

    // Cerrar al hacer clic en un enlace del menú
    nav.querySelectorAll('a').forEach((link) => {
      link.addEventListener('click', () => {
        if (isMobile()) closeMenu(false);
      });
    });

    // Cerrar con tecla ESC
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && nav.classList.contains('is-open')) {
        closeMenu();
      }
    });

    // Focus trap básico dentro del menú cuando está abierto
    nav.addEventListener('keydown', (e) => {
      if (e.key !== 'Tab' || !nav.classList.contains('is-open')) return;
      const focusables = nav.querySelectorAll('a, button, [tabindex]:not([tabindex="-1"])');
      if (!focusables.length) return;
      const first = focusables[0];
      const last = focusables[focusables.length - 1];

      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    });

    // Si el viewport pasa a desktop, cerrar y limpiar
    const mq = window.matchMedia(`(max-width: ${MOBILE_BP}px)`);
    const handleViewportChange = (e) => {
      if (!e.matches) closeMenu(false);
    };
    if (mq.addEventListener) mq.addEventListener('change', handleViewportChange);
    else mq.addListener(handleViewportChange);
  }

  /* ---------- 2. Header con sombra al hacer scroll ---------- */
  const header = document.getElementById('header');
  if (header) {
    let ticking = false;
    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        header.classList.toggle('is-scrolled', window.scrollY > 12);
        ticking = false;
      });
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  }

  /* ---------- 3. Reveal al hacer scroll (IntersectionObserver) ---------- */
  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const revealTargets = document.querySelectorAll(
    '.card, .section__header, .mv-card, .contacto-card, .transparencia-item, .info-item'
  );

  if (!prefersReduced && 'IntersectionObserver' in window && revealTargets.length) {
    revealTargets.forEach((el) => {
      el.style.opacity = '0';
      el.style.transform = 'translateY(16px)';
      el.style.willChange = 'opacity, transform';
    });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const el = entry.target;
            el.style.transition =
              'opacity 500ms ease, transform 500ms cubic-bezier(0.4,0,0.2,1)';
            el.style.opacity = '1';
            el.style.transform = 'translateY(0)';
            observer.unobserve(el);
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
    );

    revealTargets.forEach((el) => observer.observe(el));
  }

  /* ---------- 4. Formulario de participación ---------- */
  const form = document.getElementById('formParticipa');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const btn = form.querySelector('button[type="submit"]');
      if (!btn || btn.disabled) return;

      const original = btn.textContent;
      btn.disabled = true;
      btn.textContent = 'Enviando…';

      // Simulación de envío (reemplaza por fetch() al backend real)
      setTimeout(() => {
        btn.textContent = '✅ ¡Solicitud enviada!';

        // Anuncio accesible
        const live = document.createElement('p');
        live.className = 'form__success';
        live.setAttribute('role', 'status');
        live.textContent =
          'Gracias por escribirnos. Te contactaremos en un máximo de 48 horas hábiles.';
        form.appendChild(live);

        setTimeout(() => {
          form.reset();
          btn.textContent = original;
          btn.disabled = false;
          live.remove();
        }, 4000);
      }, 1000);
    });
  }

  /* ---------- 5. Log de bienvenida ---------- */
  console.log(
    '%c🌱 SAE Crecer en Bienestar',
    'font-size: 1.1rem; color: #6d28d9; font-weight: 700;'
  );
  console.log('Acompañamos tu crecimiento, cultivamos tu bienestar.');
})();