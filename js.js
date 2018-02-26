$(document).ready(function(){
    setBindings();
    scrollActive();
});

function setBindings() {
    $("li a").click(function(e){

        e.preventDefault();
        var sectionID = e.currentTarget.id + "Section";
        

       $("html").animate({scrollTop: $("#" + sectionID).offset().top}, 1000)
    })
}

/*function setActive(){
        $('ul.nav > li').click(function (e) {
            e.preventDefault();
            $('ul.nav > li').removeClass('active');
            $(this).addClass('active');                
        });  }*/

function scrollActive(){
    var top = document.getElementById('header'); 
    var homeSection = document.getElementById('homeSection').offsetTop;
    var aboutSection = document.getElementById('aboutSection').offsetTop;
    var servicesSection = document.getElementById('servicesSection').offsetTop;
    var contactSection = document.getElementById('contactSection').offsetTop;
    var scrollNow = window.pageYOffset;
    var heigth = window.innerHeight;



    
    if (0 <= scrollNow && scrollNow < aboutSection)
        {
            $('ul.nav > li').removeClass('active');
            $('.00').addClass('active'); 
        }
    else if (servicesSection > scrollNow && scrollNow >= aboutSection)
        {
            $('ul.nav > li').removeClass('active');
            $('.11').addClass('active'); 
        } 
    else if ((contactSection - heigth) > scrollNow && scrollNow >= servicesSection)
        {
            $('ul.nav > li').removeClass('active');
            $('.22').addClass('active');
        } 
    else if ((contactSection - heigth) < scrollNow)
        {
            $('ul.nav > li').removeClass('active');
            $('.33').addClass('active');
        } 

    
    window.addEventListener("scroll", scrollActive);
}