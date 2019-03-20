window.addEventListener('load', function() {
    var slideIndex = 0;
    var slides = document.getElementsByClassName("mySlides");
    function showSlides() {
        var i;   
        for (i = 0; i < slides.length; i++)
           {
           slides[i].style.display = "none";  
           }
    
        slideIndex++;
        if (slideIndex > slides.length) {slideIndex = 1}     
        slides[slideIndex-1].style.display = "block";   
        setTimeout(showSlides, 4000);
    };
    if(slides.length > 0 ) {
        showSlides();
    }

    var login = document.querySelector('.login-btn');
    var blackout = document.querySelector('.blackout');
    var loginform = document.querySelector('.login-form');
    login.addEventListener('click',function() {
        blackout.style.display = "block";
        loginform.style.display="block";
    })

    blackout.addEventListener('click',function() {
        loginform.style.display = "none";
        this.style.display = "none";
    })
});

