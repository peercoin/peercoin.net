export function handleHash() {
  window.onhashchange = handleHash;

  const hash = window.location.hash;
  
  if (hash) {
    const element = document.querySelector(`[data-id="${hash.replace('#', '')}"]`);

    if (!element) {
      setTimeout(() => {
        handleHash();
      }, 1500);
      return;
    }

    const { top } = getOffset(element);

    window.scrollTo({ left: 0, top: top - 80, behavior: 'smooth' });
  } else {
    window.scrollTo({left: 0, top: 0});
  }
}

function getOffset(el) {
  var _x = 0;
  var _y = 0;
  while( el && !isNaN( el.offsetLeft ) && !isNaN( el.offsetTop ) ) {
      _x += el.offsetLeft - el.scrollLeft;
      _y += el.offsetTop - el.scrollTop;
      el = el.offsetParent;
  }
  return { top: _y, left: _x };
}
