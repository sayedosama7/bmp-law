$(document).ready(function () {
    // Function to move active indicator
    function moveActiveIndicator($indicator, $link) {
        $indicator.css({
            width: $link.outerWidth(),
            left: $link.position().left,
            transform: 'translateX(' + $link.position().left + 'px)'
        });
    }

    // Function to set active class and move indicator
    function setActive($link) {
        var $parent = $link.closest('.nav-item');
        $('.navbar-nav .nav-item').removeClass('active');
        $('.active-indicator').remove();
        $parent.addClass('active');
        var $indicator = $('<div class="active-indicator"></div>');
        $parent.append($indicator);
        moveActiveIndicator($indicator, $link);
    }

    // Set active class and move indicator on click
    $('.navbar-nav .nav-link').click(function (e) {
        e.preventDefault();
        var $this = $(this);
        setActive($this);
        var targetUrl = $this.attr('href');
        setTimeout(function () {
            window.location.href = targetUrl;
        }, 300);
    });

    // Set active class based on the current URL
    function setActiveNavItem() {
        var currentPath = window.location.pathname.split("/").pop();
        $('.navbar-nav .nav-item').each(function () {
            var href = $(this).find('a').attr('href');
            if (href === currentPath) {
                setActive($(this).find('.nav-link'));
            }
        });
    }

    // Initial setup
    setActiveNavItem();

    // Adjust the active indicator on window resize
    $(window).resize(function () {
        setActiveNavItem();
    });
});

function validateForm() {
    var form = document.getElementById("serviceForm");
    if (form.checkValidity() === false) {
        // Display error messages or styles for invalid fields
        return false;
    }
    // Perform custom validation using JavaScript
    // Example: Validate email format
    var email = document.getElementById("email").value;
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        // Display error message or style for invalid email
        return false;
    }
    // Additional custom validation for other fields
    return true;
}


