const smoothScroll = document.querySelectorAll('.smooth-scroll');

for (const anchor of smoothScroll) {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const targetClass = this.getAttribute('href').substring(1); 
    const targetElements = document.querySelectorAll('.' + targetClass); 
    if (targetElements.length > 0) {
      const navbarHeight = 80; // Height of your fixed navbar
      window.scrollTo({
        top: targetElements[0].offsetTop - navbarHeight, 
        behavior: 'smooth'
      });
    } else if (targetClass === "home") { 
      // If the target is the "home" section
      window.scrollTo({
        top: 0, // Scroll to the top of the page
        behavior: 'smooth'
      });
    }
  });
}