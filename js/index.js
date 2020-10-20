
//control navbar color change on scroll

        jQuery(window).scroll(function() {
            var scroll = jQuery(window).scrollTop();

            if (scroll >= 525) {
                jQuery(".myNav").addClass("blue");
            } else {
                jQuery(".myNav").removeClass("blue");
            }
        });


// control title change
document.getElementById("imagination").addEventListener("mouseenter", function(event) {
    document.getElementById("imagination").innerHTML = "DREAMS";
    console.log(event);
});

document.getElementById("imagination").addEventListener("mouseout", function(event) {
    document.getElementById("imagination").innerHTML = "imagination";
    console.log(event);
});


// fade in
var scroll = window.requestAnimationFrame ||
             function(callback) {window.setTimeout(callback, 1000/60)};

var elementsToShow = document.querySelectorAll('.show-on-scroll');

function loop() {
    elementsToShow.forEach(function(element) {
        if(isElementInViewport(element)) {
            element.classList.add('is-visible');
        } else {
            element.classList.remove('is-visible');
        }
    });
    scroll(loop);
}

loop();

// Helper function from: http://stackoverflow.com/a/7557433/274826
function isElementInViewport(el) {
    // special bonus for those using jQuery
    if (typeof jQuery === "function" && el instanceof jQuery) {
      el = el[0];
    }
    var rect = el.getBoundingClientRect();
    return (
      (rect.top <= 0
        && rect.bottom >= 0)
      ||
      (rect.bottom >= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.top <= (window.innerHeight || document.documentElement.clientHeight))
      ||
      (rect.top >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight))
    );
  }
