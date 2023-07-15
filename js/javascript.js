let check = false;
function displayWindow() {
  check = !check;
  if (check) {
    document.getElementById("arch--burger-content").style.display = "flex";
  } else {
    document.getElementById("arch--burger-content").style.display = "none";
  }
}

function closeWindow() {
  document.getElementById("arch--burger-content").style.display = "none";
  check = !check
}



const water = document.getElementById('s_water');
const s_image = document.getElementById('s_image');

function show_water(){
    water.style.width = "100%";
    water.style.visibility = "visible";
    water.classList.add('rotate');
}

s_image.addEventListener('mouseover', show_water);
s_image.addEventListener('mouseout', () => {
    water.classList.remove('rotate');
    water.style.visibility = "hidden";
});


// monti




var button1 = document.getElementById("song-1");
var button2 = document.getElementById("song-2");
var button3 = document.getElementById("song-3");
var text = document.getElementById("m-main-text-p");

button1.addEventListener("click", function() {
  text.textContent = "Холлофайбер широко применяется в текстильной промышленности для создания мягкой и удобной мебели, постельных принадлежностей и одежды. ";
  console.log('first change');
});
button2.addEventListener("click", function() {
  text.textContent = "Синтепон часто применяется в текстильной и мебельной промышленности для создания мягких изделий, таких как подушки, одеяла и матрасы.";
  console.log('second change');
});
button3.addEventListener("click", function() {
  text.textContent = "Альполюкс известен своей высокой прочностью и устойчивостью к воздействию влаги, что делает его идеальным выбором для наружных конструкций, таких как крыши и фасады зданий.";
  console.log('thrdh change');
});
