document.addEventListener("DOMContentLoaded", function() {
    var button = document.getElementById("back__to__top");
  
    function toggleBackToTopButton() {
        if (window.scrollY > 200) {
            button.style.display = "block";
        } else {
            button.style.display = "none";
        }
    }
  
    button.addEventListener("click", function() {
        window.scrollTo({ top: 0, behavior: "smooth" });
    });
  
    window.addEventListener("scroll", toggleBackToTopButton);
  
    toggleBackToTopButton();
  });  