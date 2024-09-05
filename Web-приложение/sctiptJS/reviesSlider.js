
  document.addEventListener( 'DOMContentLoaded', function() {
    var splide = new Splide( '.splide',{
        type   : 'loop',
        perPage: 3,
        
        rewind : true,
        lazyLoad: 'nearby',
        
        gap: 80,
        focus  : 'center',
        breakpoints: {
          1440: {
            perPage: 1,
          },
            960: {
              perPage: 1,
            },
            
          },
          
          
    } );
    
    splide.mount();
    
  } );
