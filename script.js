document.addEventListener("DOMContentLoaded", () => {
    const haimLogo = document.querySelector('.haim-logo-toggle');
    const modal = document.getElementById('haimModal');
    const closeBtn = document.getElementById('closeModal');
  
    if (haimLogo && modal && closeBtn) {
      haimLogo.addEventListener('click', () => {
        if (window.innerWidth <= 768) {
          modal.style.display = 'block';
        }
      });
  
      closeBtn.addEventListener('click', () => {
        modal.style.display = 'none';
      });
  
      window.addEventListener('click', (e) => {
        if (e.target === modal) {
          modal.style.display = 'none';
        }
      });
    }
  });


  /* Back to top button functionality */
  const scrollBtn = document.getElementById("scrollToTopBtn");

// 스크롤 이벤트
window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    scrollBtn.classList.add("show");
  } else {
    scrollBtn.classList.remove("show");
  }
});

// 버튼 클릭 시 상단으로 이동
scrollBtn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});


/* you may also like section */

  const carousel = document.getElementById('projectCarousel');
  const btnLeft = document.querySelector('.scroll-btn.left');
  const btnRight = document.querySelector('.scroll-btn.right');

  btnLeft.addEventListener('click', () => {
    carousel.scrollBy({ left: -320, behavior: 'smooth' });
  });

  btnRight.addEventListener('click', () => {
    carousel.scrollBy({ left: 320, behavior: 'smooth' });
  });



 


