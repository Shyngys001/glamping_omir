let swipeButton = document.getElementById("arch--swipe-to-home");

swipeButton.addEventListener("click", function() {
  document.getElementById("arch--swipe-block").classList.add("arch--swipe-page-animate");

  setTimeout(function() {
    document.getElementById("arch--activity-section").style.display = "none";
  }, 2000);

  setTimeout(function() {
    document.getElementById("arch--page-1").style.display = "none";
  }, 3405);
});