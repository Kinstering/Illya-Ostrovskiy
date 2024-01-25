// slowly scroll

var $page = $('html, body');
$('a[href*="#"]').click(function() {
    $page.animate({
        scrollTop: $($.attr(this, 'href')).offset().top
    }, 800);
    return false;
});

// deactivate & activate header
$(window).scroll(function() {    
    var scroll = $(window).scrollTop();

    if (scroll >= 100) {
        $(".header").addClass("active");
    } else {
        $(".header").removeClass("active");
    }
});

// slowly writing text in main page
var typed = new Typed('.typed', {
    strings: ["Hi, welcome to my creative world"],
    typeSpeed: 80
  });


let swithMode = document.getElementById("swithMode")


// switch theme site
swithMode.onclick = function() {
    let theme = document.getElementById("theme")

     if(theme.getAttribute("href") == "css/light-style.css") {
        theme.href = "css/dark-style.css"
     } else {
        theme.href = "css/light-style.css"
     }
}

// SLIDER

document.addEventListener("DOMContentLoaded", function () {
    const slides = document.querySelectorAll(".slide");
    const radioButtons = document.querySelectorAll('input[name="point"]');
    let currentIndex = 0;

    function showSlide(index) {
        const transformValue = -index * 100 + "%";
        slides.forEach((slide) => (slide.style.transform = "translateX(" + transformValue + ")"));
    }

    radioButtons.forEach((radioButton, index) => {
        radioButton.addEventListener("change", () => {
            currentIndex = index;
            showSlide(currentIndex);
        });
    });

    setInterval(() => {
        currentIndex = (currentIndex + 1) % slides.length;
        radioButtons[currentIndex].checked = true;
        showSlide(currentIndex);
    }, 5000); // Change slide every 5 seconds (adjust as needed)
});



