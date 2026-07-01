document.addEventListener('DOMContentLoaded', function () {

    var nav = document.querySelector('.navbar');

    if (nav) {
        window.addEventListener('scroll', function () {
            if (window.scrollY > 20) {
                nav.classList.add('header-scrolled');
            } else {
                nav.classList.remove('header-scrolled');
            }
        }, { passive: true }); }

        
    var navLinks  = document.querySelectorAll('.nav-link');
    var navCollapse = document.querySelector('#navbarNav');

    if (navCollapse && navLinks.length) {
        var bsCollapse = new bootstrap.Collapse(navCollapse, { toggle: false });

        navLinks.forEach(function (link) {
            link.addEventListener('click', function () {
           
                if (window.innerWidth < 992 && navCollapse.classList.contains('show')) {
                    bsCollapse.hide();
                }
            });
        });
    }

 
    var sections = document.querySelectorAll('section[id], div[id]');
    var allNavLinks = document.querySelectorAll('.menu-navbar-nav .nav-link');

    if (sections.length && allNavLinks.length) {
        window.addEventListener('scroll', function () {
            var scrollPos = window.scrollY + 80;

            sections.forEach(function (section) {
                if (
                    section.offsetTop <= scrollPos &&
                    section.offsetTop + section.offsetHeight > scrollPos
                ) {
                    allNavLinks.forEach(function (link) {
                        link.classList.remove('active');
                        link.removeAttribute('aria-current');
                        if (link.getAttribute('href') === '#' + section.id) {
                            link.classList.add('active');
                            link.setAttribute('aria-current', 'page');
                        }
                    });
                }
            });
        }, { passive: true });
    }

});
// carousal
$(document).ready(function () {
    if ($('.client-slider-section').length) {
        $('.client-slider-section').owlCarousel({
            loop:               true,
            nav:                false,
            dots:               false,
            autoplay:           true,
            autoplayTimeout:    2500,
            autoplayHoverPause: true,
            smartSpeed:         600,
            responsiveClass:    true,
            responsive: {
                0: {
                    items: 2,
                    margin: 20
                },
                480: {
                    items: 3,
                    margin: 20
                },
                768: {
                    items: 4,
                    margin: 30
                },
                1200: {
                    items: 6,
                    margin: 30
                }
            }
        });
    }
});
