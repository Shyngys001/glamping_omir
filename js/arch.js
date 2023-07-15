let body = document.getElementById("body");
let switch_home_to_arch = document.getElementById("tour");
let switch_arch_to_home = document.getElementById("arch--switch-home-page-button");
let switch_arch_block = document.getElementById("arch--switch-block");
let activity_page = document.getElementById("arch--activity-section");
let page_header = document.getElementById("home-page-header");

switch_home_to_arch.addEventListener("click", function() {
  switch_arch_block.classList.add("arch--switch-block-animate");

  setTimeout(function() {
    body.classList.add("body-style");
    activity_page.style.display = "initial";
    page_header.style.display = "none";
  }, 1650);

  setTimeout(function() {
    switch_arch_block.classList.remove("arch--switch-block-animate");
  }, 4000);
});

switch_arch_to_home.addEventListener("click", function() {
  switch_arch_block.classList.add("arch--switch-block-animate");

  setTimeout(function() {
    body.classList.remove("body-style");
    activity_page.style.display = "none";
    page_header.style.display = "flex";
  }, 2000);

  setTimeout(function() {
    switch_arch_block.classList.remove("arch--switch-block-animate");
  }, 4000);
});
