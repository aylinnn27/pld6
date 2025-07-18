const hamburger = document.getElementById('hamburger');
const nav = document.getElementById('nav');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  nav.classList.toggle('active');
});



    
    const testimonials = document.querySelectorAll('.testimonial');
    const nextBtn = document.getElementById('next');
    const prevBtn = document.getElementById('prev');
    let index = 0;

    function showTestimonial(i) {
      testimonials.forEach((t, idx) => {
        t.classList.remove('active');
        if (idx === i) t.classList.add('active');
      });
    }

    function nextSlide() {
      index = (index + 1) % testimonials.length;
      showTestimonial(index);
    }

    function prevSlide() {
      index = (index - 1 + testimonials.length) % testimonials.length;
      showTestimonial(index);
    }

    nextBtn.addEventListener('click', nextSlide);
    prevBtn.addEventListener('click', prevSlide);

    showTestimonial(index); 
    setInterval(nextSlide, 5000); 
  ;





const form = document.getElementById('contactForm');
const successMessage = document.getElementById('successMessage');

form.addEventListener('submit', function (e) {
  e.preventDefault();

  const name = form.name.value.trim();
  const email = form.email.value.trim();
  const message = form.message.value.trim();

  if (name === '' || email === '' || message === '') {
    alert('Please fill in all fields.');
    return;
  }

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email)) {
    alert('Please enter a valid email address.');
    return;
  }

  successMessage.style.display = 'block';
  form.reset();
});
