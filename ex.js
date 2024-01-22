document.addEventListener('DOMContentLoaded', function () {
  const leftH1 = document.querySelector('.left-h1');

  function isInViewport(element) {
      const rect = element.getBoundingClientRect();
      return (
          rect.top >= 0 &&
          rect.left >= 0 &&
          rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
          rect.right <= (window.innerWidth || document.documentElement.clientWidth)
      );
  }

  function handleScroll() {
      if (isInViewport(leftH1)) {
          leftH1.classList.remove('fade-out');
      } else {
          leftH1.classList.add('fade-out');
      }
  }

  let lastScrollPosition = window.scrollY;

  function checkScrollDirection() {
      const scrollPosition = window.scrollY;

      if (scrollPosition > lastScrollPosition) {
          // Scrolling down
          leftH1.classList.add('fade-out');
      } else {
          // Scrolling up
          leftH1.classList.remove('fade-out');
      }

      lastScrollPosition = scrollPosition;
  }

  window.addEventListener('scroll', function () {
      handleScroll();
      checkScrollDirection();
  });

  handleScroll(); // Initial check
});
