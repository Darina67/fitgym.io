$(function(){
    var header = $("#header"),
     introH = $("#header").innerHeight(),
     scrollOffset =   $(window).scrollTop();
  
    //  fixed Header
     checkScroll(scrollOffset);
  
  
    $(window).on("scroll", function() {
  
        scrollOffset = $(this).scrollTop();
  
        checkScroll(scrollOffset);
        
        });
  
        function checkScroll(scrollOffset){
  
            console.log(scrollOffset);
    
            if( scrollOffset >= introH) {
                header.addClass("fixed");
    
            }
            else{
                header.removeClass("fixed");
            }
        }
    })
