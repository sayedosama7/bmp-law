
$(document).ready(function () {
    function moveActiveIndicator($indicator, $link) {
        $indicator.css({
            width: $link.outerWidth(),
            left: $link.position().left,
            transform: 'translateX(' + $link.position().left + 'px)'
        });
    }

    function setActive($link) {
        var $parent = $link.closest('.nav-item');
        $('.navbar-nav .nav-item').removeClass('active');
        $('.active-indicator').remove();
        $parent.addClass('active');
        var $indicator = $('<div class="active-indicator"></div>');
        $parent.append($indicator);
        moveActiveIndicator($indicator, $link);
    }

    $('.navbar-nav .nav-link').click(function (e) {
        e.preventDefault();
        var $this = $(this);
        setActive($this);
        var targetUrl = $this.attr('href');
        setTimeout(function () {
            window.location.href = targetUrl;
        }, 300);
    });

    function setActiveNavItem() {
        var currentPath = window.location.pathname.split("/").pop();
        $('.navbar-nav .nav-item').each(function () {
            var href = $(this).find('a').attr('href');
            if (href === currentPath) {
                setActive($(this).find('.nav-link'));
            }
        });
    }

    setActiveNavItem();

    $(window).resize(function () {
        setActiveNavItem();
    });
});

// validation 
function validateForm() {
    var form = document.getElementById("serviceForm");
    if (form.checkValidity() === false) {
        return false;
    }
    var email = document.getElementById("email").value;
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        return false;
    }
    return true;
}

// swiper 
const swiperEl = document.querySelector('swiper-container')
Object.assign(swiperEl, {
    slidesPerView: 1,
    spaceBetween: 10,
    pagination: {
        clickable: true,
    },
    breakpoints: {
        640: {
            slidesPerView: 1,
            spaceBetween: 20,
        },
        768: {
            slidesPerView: 2,
            spaceBetween: 40,
        },
        1024: {
            slidesPerView: 3,
            spaceBetween: 50,
        },
    },
});
swiperEl.initialize();

// start loader 
document.addEventListener("DOMContentLoaded", function () {
    setTimeout(function () {
        document.querySelector('.initial-color').style.display = 'none';
        document.querySelector('.main-color').style.display = 'block';
        document.getElementById('blackBar').style.display = 'block';
    }, 500);

    setTimeout(function () {
        document.documentElement.style.setProperty('--main-color', '#17a2b8');
        document.body.classList.add("loaded");
        document.body.style.overflow = 'auto';
        document.querySelector('.loader-container').style.position = 'static';
        document.querySelector('.loader-container').style.overflowX = 'hidden';
    }, 2500);
});




