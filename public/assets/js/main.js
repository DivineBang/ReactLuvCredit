
  $(document).ready(function(){
    $('.center').slick({
      centerMode: true,
      autoplay: true,
      autoplaySpeed: 4500,
      speed: 1500,
      centerPadding: '10px',
      slidesToShow: 3,
      responsive: [
        {
          breakpoint: 1900,
          settings: {
    
            centerMode: true,
            centerPadding: '10px',
            slidesToShow: 2
          }
        },
        {
          breakpoint: 993,
          settings: {
            
            centerMode: true,
            centerPadding: '10px',
            slidesToShow: 2
          }
        },
        
        {
          breakpoint: 769,
          settings: {
            arrows: false,
            centerMode: true,
            centerPadding: '10px',
            slidesToShow: 1
          }
        },
        {
          breakpoint: 577,
          settings: {
            arrows: false,
            centerMode: true,
            centerPadding: '5px',
            slidesToShow: 1
          }
          
        },
        {
          breakpoint: 450,
          settings: {
            arrows: false,
            centerMode: true,
            centerPadding: '0',
            slidesToShow: 1
          }
          
        }
        
      ]
    });
  });

/*   Card */
  /* document.querySelectorAll('.card__wrapp').forEach(card => {
    const text = card.querySelector('.card__text');
    const img = card.querySelector('.card__wrapp_img');
    card.addEventListener('click', () => {
        card.classList.toggle('active');
        if (card.classList.contains('active')) {
            text.style.maxHeight = text.scrollHeight + 'px';
            img.style.transform = 'translateY(-50%) rotate(-45deg)';
        } else {
            text.style.maxHeight = '0';
            img.style.transform = 'translateY(-50%) rotate(0deg)';
            text.addEventListener('transitionend', () => {
                if (!card.classList.contains('active')) {
                    text.style.display = 'none';
                }
            });
        }
    });
  }); */



//Прокрут до секции 
document.addEventListener('DOMContentLoaded', function() {
  const menuLinks = document.querySelectorAll('.lender__btn');

  menuLinks.forEach(link => {
      link.addEventListener('click', function(e) {
          e.preventDefault();

          const targetId = link.getAttribute('href'); // Получаем атрибут href ссылки
          const targetSection = document.querySelector(targetId); // Находим соответствующую секцию по ID

          if (targetSection) {
              targetSection.scrollIntoView({ behavior: 'smooth' }); // Прокручиваем к секции плавно
          }
      });
  });
});











  
  