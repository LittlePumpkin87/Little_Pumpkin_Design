//preload images for performance

function preload_image(im_url) {
    let img = new Image();
    img.src = im_url;
}
preload_image("/images/designs/Cthulhu_Space_CAT.png");
preload_image("/images/designs/Ghibli_Mix_Up_.png");
preload_image("/images/designs/Aikido.png");
preload_image("/images/designs/Logo_Mockup_KD.png");
preload_image("/images/designs/Sommer.jpg");
preload_image("/images/designs/Own_logo_Mockup.png");
preload_image("/images/designs/Lots_of_emotes.png");
preload_image("/images/designs/Mononoke.png");
preload_image("/images/designs/Main_logo_design.png");

//Nav disapears when scroll down

let prevScrollpos = window.scrollY;
window.onscroll = function () {
    let currentScrollPos = window.scrollY;
    if (prevScrollpos > currentScrollPos) {
        document.getElementById("header").style.top = "0";
    } else {
        document.getElementById("header").style.top = "-20rem";
    }
    prevScrollpos = currentScrollPos;
};

//Hamburger Menu toggle

$("#HamToggle").on("click", function () {
    let HamburgerLink = document.getElementsByClassName("HamburgerLink");
    let MobileNav = document.getElementById("HamToggle");

    if (MobileNav.click) {
        $(HamburgerLink).toggleClass("active");
    }
});

// Carreer Detail show/hide on click

document.addEventListener("DOMContentLoaded", function () {
    const contents = document.querySelectorAll(".content_right");
    contents.forEach(function (content) {
        content.addEventListener("click", function () {
            const Display = content.nextElementSibling;
            const DetailsOpenLeft = document.querySelectorAll(".Details_left:not(.hidden)");
            DetailsOpenLeft.forEach(function (detail) {
                if (detail !== Display) {
                    detail.classList.add("hidden");
                }
            });
            const DetailsOpenRight = document.querySelectorAll(".Details_right:not(.hidden)");
            DetailsOpenRight.forEach(function (detail) {
                if (detail !== Display) {
                    detail.classList.add("hidden");
                }
            });
            Display.classList.toggle("hidden");
        });
    });
});
document.addEventListener("DOMContentLoaded", function () {
    const contentsL = document.querySelectorAll(".content_left");

    contentsL.forEach(function (content) {
        content.addEventListener("click", function () {
            const Display = content.nextElementSibling;
            const DetailsOpenLeft = document.querySelectorAll(".Details_left:not(.hidden)");
            DetailsOpenLeft.forEach(function (detail) {
                if (detail !== Display) {
                    detail.classList.add("hidden");
                }
            });
            const DetailsOpenRight = document.querySelectorAll(".Details_right:not(.hidden)");
            DetailsOpenRight.forEach(function (detail) {
                if (detail !== Display) {
                    detail.classList.add("hidden");
                }
            });
            Display.classList.toggle("hidden");
        });
    });
});

//Gallery

$('.slider').each(function () {
    let $this = $(this);
    let $group = $this.find('.slide_group');
    let $slides = $this.find('.slide');
    let bulletArray = [];
    let currentIndex = 0;
    let timeout;
    function move(newIndex) {
        let animateLeft, slideLeft;
        advance();
        if ($group.is(':animated') || currentIndex === newIndex) {
            return;
        }
        bulletArray[currentIndex].removeClass('active');
        bulletArray[newIndex].addClass('active');
        if (newIndex > currentIndex) {
            slideLeft = '100%';
            animateLeft = '-100%';
        } else {
            slideLeft = '-100%';
            animateLeft = '100%';
        }
        $slides.eq(newIndex).css({
            display: 'block',
            left: slideLeft
        });
        $group.animate({
            left: animateLeft
        }, function () {
            $slides.eq(currentIndex).css({
                display: 'none'
            });
            $slides.eq(newIndex).css({
                left: 0
            });
            $group.css({
                left: 0
            });
            currentIndex = newIndex;
        });
    }
    function advance() {
        clearTimeout(timeout);
        timeout = setTimeout(function () {
            if (currentIndex < ($slides.length - 1)) {
                move(currentIndex + 1);
            } else {
                move(0);
            }
        }, 10000);
    }
    $('.next_btn').on('click', function () {
        if (currentIndex < ($slides.length - 1)) {
            move(currentIndex + 1);
        } else {
            move(0);
        }
    });
    $('.previous_btn').on('click', function () {
        if (currentIndex !== 0) {
            move(currentIndex - 1);
        } else {
            move(9);
        }
    });
    $.each($slides, function (index) {
        let $button = $('<a class="slide_btn">&bull;</a>');

        if (index === currentIndex) {
            $button.addClass('active');
        }
        $button.on('click', function () {
            move(index);
        }).appendTo('.slide_buttons');
        bulletArray.push($button);
    });
    advance();
});
