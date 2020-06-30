// scrolls the navbar up and down when navigating the website
var didScroll;
var lastScrollTop = 0;
var delta = 5;
var navbarHeight = $('#navbar').outerHeight();
console.log(navbarHeight);

$(window).scroll(function(event){
    didScroll = true;
});

function hasScrolled() {
    var st = $(this).scrollTop();
    var diff = Math.abs(lastScrollTop - st)
    console.log(diff);

    if(diff <= delta)
        return;

    if (st > lastScrollTop && st > navbarHeight){
        $('#navbar').removeClass('nav-down').addClass('nav-up');
        console.log('case1')
    } else {
        if(st + $(window).height() < $(document).height()) {
            $('#navbar').removeClass('nav-up').addClass('nav-down');
            console.log('case2')
        }
        console.log('case3')
    }

    lastScrollTop = st;
}

setInterval(function() {
    if (didScroll) {
        hasScrolled();
        didScroll = false;
    }
}, 250);
