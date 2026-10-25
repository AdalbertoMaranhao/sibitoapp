(() => {
  const toggle = document.querySelector('.menu-toggle');
  const navigation = document.querySelector('#primary-navigation');
  const mobile = window.matchMedia('(max-width: 1023px)');

  if (!toggle || !navigation) return;

  const setMenu = (open, restoreFocus = false) => {
    const expanded = mobile.matches && open;
    navigation.hidden = mobile.matches && !expanded;
    toggle.hidden = !mobile.matches;
    toggle.setAttribute('aria-expanded', String(expanded));
    toggle.setAttribute('aria-label', expanded ? 'Fechar menu' : 'Abrir menu');
    toggle.classList.toggle('is-open', expanded);
    if (restoreFocus && mobile.matches) toggle.focus();
  };

  toggle.addEventListener('click', () => {
    setMenu(toggle.getAttribute('aria-expanded') !== 'true');
  });

  navigation.addEventListener('click', (event) => {
    const link = event.target.closest('a');
    if (!link || !mobile.matches) return;
    setMenu(false);

    // Keep keyboard focus at the section after hiding the menu's links.
    if (link.hash && link.origin === window.location.origin) {
      const target = document.getElementById(link.hash.slice(1));
      if (target) target.focus({ preventScroll: true });
    }
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && toggle.getAttribute('aria-expanded') === 'true') {
      setMenu(false, true);
    }
  });

  mobile.addEventListener('change', () => {
    const focusWillBeHidden = mobile.matches && navigation.contains(document.activeElement);
    setMenu(false, focusWillBeHidden);
  });

  setMenu(false);
})();
