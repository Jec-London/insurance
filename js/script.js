function slowScroll(id){
    var offset;
    
    if(id == "#service"){
    offset=0;
    
    }else offset=0;

    if(id == "#about"){
        offset=0;
        
        }else offset=0;

    if(id == "#top"){
        offset=0;
            
         }else offset=0;
        
     if(id == "#contact"){
        offset=0;
            
         }else offset=0;

    console.log($(id).offset());
    $('html, body').animate({
        scrollTop: $(id).offset().top + offset
        }, 1000);

       
        return false;
    };


    const toggleBtn = document.querySelector('.toggle-btn');

toggleBtn.addEventListener('click', () => {
  toggleBtn.classList.toggle('active');
})