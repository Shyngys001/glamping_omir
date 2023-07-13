let body = document.getElementById("body");
let switch_home_to_arch = document.getElementById("arch--switch-activity-page-button");
let switch_arch_to_home = document.getElementById("arch--switch-home-page-button");
let switch_arch_block = document.getElementById("arch--switch-block");
let activity_page = document.getElementById("arch--activity-section")

switch_home_to_arch.addEventListener("click", function() {
  switch_arch_block.classList.add("arch--switch-block-animate");

  setTimeout(function() {
    body.classList.add("body-style");
    activity_page.style.display = "initial";
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
  }, 2000);

  setTimeout(function() {
    switch_arch_block.classList.remove("arch--switch-block-animate");
  }, 4000);
});
