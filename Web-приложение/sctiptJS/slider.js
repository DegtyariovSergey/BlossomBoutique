const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
      prevEl: '.swiper-button-prev',
      nextEl: '.swiper-button-next',
      
    },
  
    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },
  });



  const baloonSwiper = new Swiper('.baloon', {
    
    direction:  'horizontal',
    loop: true,
    
  
    
  
    
    navigation: {
      nextEl: '.button-next',
      prevEl: '.button-prev',
    },
  
    
    
  });
 
