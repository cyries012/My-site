function setBindings() {
    $('#myNavbar a').click(function (event) {
        var id = event
                    .target
                    .getAttribute('href')
                    .slice(1);

        $('html, body')
            .animate({
                scrollTop: $(document.getElementById(id)).position().top
            }, 300);

        return false;
    });
}

function scrollActive() {
    var ID = 0;
    var POSITION = 1;
    var positions = [
        'homeSection',
        'aboutSection',
        'servicesSection',
        'contactSection'
    ].map(function (id) {
        var $el = $(document.getElementById(id));
        var offsetTop = $el.offset().top;
        var outerHeight = $el.outerHeight();

        return [id, [offsetTop, offsetTop + outerHeight]];
    });
    var currentPosition = document.body.scrollTop;
    var heigth = window.innerHeight;
    var baseOffset = $('.navbar').outerHeight();
    var currentSections = positions.filter(function (position) {
        return currentPosition + baseOffset >= position[POSITION][0] && currentPosition <= position[POSITION][1];
    });
    var currentSection = null;

    if (currentSections.length) {
        currentSection = currentSections[0][ID];
    }

    if (!currentPosition) {
        return;
    }
    
    $('#myNavbar [href^="#"]')
        .parent()
        .removeClass('active');
    $('#myNavbar [href="#' + currentSection + '"]')
        .parent()
        .addClass('active');
}

$(document).ready(function () {
    setBindings();
    scrollActive();
});
/**
 * Po staremu to za kazdym odpaleniem scrollActive dodajesz
 * event listenera do scrolla. To troche malo optymalne ;)
 */
window.addEventListener('scroll', scrollActive);