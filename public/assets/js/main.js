
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
















  
  