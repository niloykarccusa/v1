// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
  
  // Register GSAP ScrollTrigger plugin
  gsap.registerPlugin(ScrollTrigger);

  // ===================================
  // HEADER SCROLL EFFECT
  // ===================================
  const header = document.querySelector('.header-nav');

  if (header) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 50) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }
    });
  }

  // ===================================
  // SMOOTH SCROLL FOR NAVIGATION LINKS
  // ===================================
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        const headerHeight = header ? header.offsetHeight : 0;
        const targetPosition = target.offsetTop - headerHeight;
        
        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        });
      }
    });
  });

  // ===================================
  // HERO SECTION ANIMATIONS
  // ===================================
  const heroHeading = document.querySelector('.hero-section .hero-content h1');
  const heroParagraph = document.querySelector('.hero-section .hero-content p');
  const heroButton = document.querySelector('.hero-section .btn-primary');

  if (heroHeading) {
    gsap.from(heroHeading, {
      opacity: 0,
      y: 50,
      duration: 1,
      delay: 0.3,
      ease: 'power3.out'
    });
  }

  if (heroParagraph) {
    gsap.from(heroParagraph, {
      opacity: 0,
      y: 30,
      duration: 1,
      delay: 0.6,
      ease: 'power3.out'
    });
  }

  if (heroButton) {
    gsap.from(heroButton, {
      opacity: 0,
      scale: 0.9,
      duration: 0.8,
      delay: 0.9,
      ease: 'back.out(1.7)'
    });
  }

  // ===================================
  // PARALLAX EFFECT ON HERO IMAGE
  // ===================================
  const heroImage = document.querySelector('.hero-section img');
  if (heroImage) {
    gsap.to(heroImage, {
      yPercent: 30,
      ease: 'none',
      scrollTrigger: {
        trigger: '.hero-section',
        start: 'top top',
        end: 'bottom top',
        scrub: 1
      }
    });
  }

  // ===================================
  // FADE IN SECTIONS ON SCROLL
  // ===================================
  const fadeInSections = document.querySelectorAll('.people-section, .diamond-section, .founder-section, .build-section');

  fadeInSections.forEach(section => {
    gsap.from(section, {
      opacity: 0,
      y: 60,
      duration: 1,
      scrollTrigger: {
        trigger: section,
        start: 'top 80%',
        end: 'top 50%',
        toggleActions: 'play none none reverse'
      }
    });
  });

  // ===================================
  // IMAGE GRID STAGGER ANIMATION
  // ===================================
  const imageGridItems = document.querySelectorAll('.image-grid-item');
  if (imageGridItems.length > 0) {
    gsap.from(imageGridItems, {
      opacity: 0,
      y: 50,
      stagger: 0.2,
      duration: 0.8,
      scrollTrigger: {
        trigger: '.image-grid',
        start: 'top 75%',
        toggleActions: 'play none none reverse'
      }
    });
  }

  // ===================================
  // DIAMOND SECTION ROTATION ANIMATION
  // ===================================
  const diamondImage = document.querySelector('.diamond-image');
  const diamondText = document.querySelector('.diamond-text');

  if (diamondImage) {
    gsap.from(diamondImage, {
      opacity: 0,
      rotation: -10,
      scale: 0.9,
      duration: 1.2,
      scrollTrigger: {
        trigger: '.diamond-section',
        start: 'top 70%',
        toggleActions: 'play none none reverse'
      }
    });
  }

  if (diamondText) {
    gsap.from(diamondText, {
      opacity: 0,
      x: 50,
      duration: 1,
      delay: 0.3,
      scrollTrigger: {
        trigger: '.diamond-section',
        start: 'top 70%',
        toggleActions: 'play none none reverse'
      }
    });
  }

  // ===================================
  // POETIC SECTIONS FADE IN
  // ===================================
  const poeticSections = document.querySelectorAll('.poetic-section');

  poeticSections.forEach(section => {
    const paragraph = section.querySelector('p');
    if (paragraph) {
      gsap.from(paragraph, {
        opacity: 0,
        y: 40,
        duration: 1,
        scrollTrigger: {
          trigger: section,
          start: 'top 75%',
          toggleActions: 'play none none reverse'
        }
      });
    }
  });

  // ===================================
  // EXPERIENCE SECTION PARALLAX
  // ===================================
  const experienceImage = document.querySelector('.experience-section img');
  if (experienceImage) {
    gsap.to(experienceImage, {
      yPercent: 20,
      ease: 'none',
      scrollTrigger: {
        trigger: '.experience-section',
        start: 'top bottom',
        end: 'bottom top',
        scrub: 1
      }
    });
  }

  const experienceHeading = document.querySelector('.experience-content h2');
  if (experienceHeading) {
    gsap.from(experienceHeading, {
      opacity: 0,
      y: 50,
      duration: 1,
      scrollTrigger: {
        trigger: '.experience-section',
        start: 'top 70%',
        toggleActions: 'play none none reverse'
      }
    });
  }

  // ===================================
  // FOUNDER SECTION ANIMATIONS
  // ===================================
  const founderContent = document.querySelector('.founder-content');
  const founderImage = document.querySelector('.founder-image');

  if (founderContent) {
    gsap.from(founderContent, {
      opacity: 0,
      x: -50,
      duration: 1,
      scrollTrigger: {
        trigger: '.founder-section',
        start: 'top 70%',
        toggleActions: 'play none none reverse'
      }
    });
  }

  if (founderImage) {
    gsap.from(founderImage, {
      opacity: 0,
      x: 50,
      duration: 1,
      scrollTrigger: {
        trigger: '.founder-section',
        start: 'top 70%',
        toggleActions: 'play none none reverse'
      }
    });
  }

  // ===================================
  // CRAFTED HOMES HERO SCALE ANIMATION
  // ===================================
  const craftedHeading = document.querySelector('.crafted-hero h2');
  const craftedImage = document.querySelector('.crafted-hero .house-image');

  if (craftedHeading) {
    gsap.from(craftedHeading, {
      opacity: 0,
      scale: 0.8,
      duration: 1.5,
      scrollTrigger: {
        trigger: '.crafted-hero',
        start: 'top 70%',
        toggleActions: 'play none none reverse'
      }
    });
  }

  if (craftedImage) {
    gsap.from(craftedImage, {
      opacity: 0,
      y: 100,
      duration: 1.2,
      delay: 0.3,
      scrollTrigger: {
        trigger: '.crafted-hero',
        start: 'top 70%',
        toggleActions: 'play none none reverse'
      }
    });
  }

  // ===================================
  // BLOG CARDS STAGGER ANIMATION
  // ===================================
  const blogCards = document.querySelectorAll('.blog-card');
  if (blogCards.length > 0) {
    gsap.from(blogCards, {
      opacity: 0,
      y: 50,
      stagger: 0.15,
      duration: 0.8,
      scrollTrigger: {
        trigger: '.blog-grid',
        start: 'top 75%',
        toggleActions: 'play none none reverse'
      }
    });
  }

  // ===================================
  // FINAL CTA PARALLAX
  // ===================================
  const finalCtaImage = document.querySelector('.final-cta img');
  if (finalCtaImage) {
    gsap.to(finalCtaImage, {
      yPercent: 20,
      ease: 'none',
      scrollTrigger: {
        trigger: '.final-cta',
        start: 'top bottom',
        end: 'bottom top',
        scrub: 1
      }
    });
  }

  const finalCtaContent = document.querySelector('.final-cta-content');
  if (finalCtaContent) {
    gsap.from(finalCtaContent, {
      opacity: 0,
      y: 50,
      duration: 1,
      scrollTrigger: {
        trigger: '.final-cta',
        start: 'top 70%',
        toggleActions: 'play none none reverse'
      }
    });
  }

  // ===================================
  // FOOTER FADE IN
  // ===================================
  const footer = document.querySelector('.footer');
  if (footer) {
    gsap.from(footer, {
      opacity: 0,
      y: 30,
      duration: 1,
      scrollTrigger: {
        trigger: '.footer',
        start: 'top 85%',
        toggleActions: 'play none none reverse'
      }
    });
  }

  // ===================================
  // BUTTON HOVER ANIMATIONS
  // ===================================
  const buttons = document.querySelectorAll('.btn-primary, .btn-header');

  buttons.forEach(button => {
    button.addEventListener('mouseenter', function() {
      gsap.to(this, {
        scale: 1.05,
        duration: 0.3,
        ease: 'power2.out'
      });
    });
    
    button.addEventListener('mouseleave', function() {
      gsap.to(this, {
        scale: 1,
        duration: 0.3,
        ease: 'power2.out'
      });
    });
  });

  // ===================================
  // BLOG CARD HOVER EFFECT
  // ===================================
  blogCards.forEach(card => {
    const image = card.querySelector('img');
    
    if (image) {
      card.addEventListener('mouseenter', function() {
        gsap.to(image, {
          scale: 1.1,
          duration: 0.5,
          ease: 'power2.out'
        });
      });
      
      card.addEventListener('mouseleave', function() {
        gsap.to(image, {
          scale: 1,
          duration: 0.5,
          ease: 'power2.out'
        });
      });
    }
  });

  // ===================================
  // NAVIGATION LINK ACTIVE STATE
  // ===================================
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.main-nav a');

  if (sections.length > 0 && navLinks.length > 0) {
    window.addEventListener('scroll', () => {
      let current = '';
      
      sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        const headerHeight = header ? header.offsetHeight : 0;
        
        if (window.scrollY >= (sectionTop - headerHeight - 100)) {
          current = section.getAttribute('id');
        }
      });
      
      navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
          link.classList.add('active');
        }
      });
    });
  }

  console.log('✅ Animations initialized successfully!');
  console.log('📊 GSAP version:', gsap.version);
  console.log('🎯 ScrollTrigger registered:', ScrollTrigger ? 'Yes' : 'No');
  
});