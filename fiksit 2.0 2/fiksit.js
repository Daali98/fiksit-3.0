console.log("blablabla")

function display(input,bc) {


  var check = document.getElementsByClassName('repair_list');
  var name = document.getElementById(input);
  var background = document.getElementById(background);
  var bc = document.getElementById(bc);
  var global_bc = document.getElementsByClassName('brand');
  var brand = document.getElementById('brand_model');
  var i;

  if (name.style.display === "block") {
    name.style.display = "none";
    brand.style.height = "36vh";
    bc.style.backgroundColor = "#FFF8F0";
    bc.style.color ="#102542";
    return;
  }


  for (i = 0; i < check.length; i++) {
     check[i].style.display = "none";
     global_bc[i].style.backgroundColor = "#FFF8F0";
     global_bc[i].style.color = "#102542";
     brand.style.height = "36vh";


  }

  if (name.style.display === "none") {
    name.style.display = "block";
    brand.style.height = "auto";
    bc.style.backgroundColor = "#FFF8F0";
    bc.style.color = "#102542";
  }


}

function display_brand(input) {
  var name = document.getElementById(input);
  var rotate = document.getElementById('arrow_0');
  var check = document.getElementsByClassName('repair_list');
  var check_2 = document.getElementsByClassName('brand');


  for (i = 0; i < check.length; i++) {
     check[i].style.display = "none";
     check_2[i].style.backgroundColor = "#FFF8F0";
  }

  if (name.style.height === "0vh") {
    name.style.visibility = "visible";
    name.style.height = "36vh";
    rotate.style.transform = "rotate(180deg)";

  } else {
    name.style.visibility = "hidden";
    name.style.height = "0vh";
    rotate.style.transform = "rotate(0deg)";
  }


}

function display_mobile(input,bc) {


  var check = document.getElementsByClassName('repair_list');
  var name = document.getElementById(input);
  var background = document.getElementById(background);
  var bc = document.getElementById(bc);
  var global_bc = document.getElementsByClassName('brand');
  var i;

  if (name.style.display === "block") {
    name.style.display = "none";
    bc.style.backgroundColor = "#FFFFFF";
    bc.style.color ="#102542";
    console.log("work1");
    return;
  }


  for (i = 0; i < check.length; i++) {
     check[i].style.display = "none";
     global_bc[i].style.backgroundColor = "#FFFFFF";
     global_bc[i].style.color = "#102542";


  }

  if (name.style.display === "none") {
    name.style.display = "block";
    bc.style.backgroundColor = "#E5E4E2";
    bc.style.color = "#102542";
    console.log("work");
  }


}

function display_brand_mobile(input) {
  var name = document.getElementById(input);
  var rotate = document.getElementById('arrow_1');
  var check = document.getElementsByClassName('repair_list_mobile');
  var height = document.getElementById('static_core_mobile')

  for (i = 0; i < check.length; i++) {
     check[i].style.display = "none";
  }

  if (name.style.display === "none") {
    name.style.display = "block";
    rotate.style.transform = "rotate(180deg)";
    height.style.height = "100vh"


  } else {
    name.style.display = "none";
    rotate.style.transform = "rotate(0deg)";
    height.style.height = "auto"
  }


}



function question(box,plus,minus,bc,height) {

  var check = document.getElementsByClassName('awnsers');
  var awnser = document.getElementById(box);
  var plus = document.getElementById(plus);
  var global_plus = document.getElementsByClassName('plus');
  var minus = document.getElementById(minus);
  var global_minus = document.getElementsByClassName('minus');
  var bc = document.getElementById(bc);
  var global_bc = document.getElementsByClassName('questions');
  var i;

  if (awnser.style.visibility === "visible") {
    bc.style.backgroundColor = "#FFF8F0";
    bc.style.color ="#102542";
    awnser.style.height = "0px";
    awnser.style.visibility = "hidden";
    minus.style.display = "none";
    plus.style.display = "block";
    console.log("1");
    return;
  }


  for (i = 0; i < check.length; i++) {
     check[i].style.height = "0vh";
     check[i].style.visibility = "hidden";
     global_bc[i].style.backgroundColor = "#FFF8F0";
     global_bc[i].style.color = "#102542";
     global_minus[i].style.display = "none";
     global_plus[i].style.display = "block";

  }

  if (awnser.style.visibility === "hidden") {
    awnser.style.visibility = "visible";
    awnser.style.height = height;
    minus.style.display = "block";
    plus.style.display = "none";
    bc.style.backgroundColor = "#FFFFFF";
    bc.style.color = "#102542";

  }



}




var slideIndex = 1;
showSlides(slideIndex);


function showSlides() {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    for (i = 0; i < slides.length; i++) {
       slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1;}
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
    setTimeout(showSlides, 6000); // Change image every 2 seconds
}

$ (window).scroll( function hide(){

  var currentScrollPos = window.pageYOffset;
  console.log("workwindow");
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("header_mobile").style.top = "0";
    console.log("workwindow");
  } else {
    document.getElementById("header_mobile").style.top = "-20vh";
  }
  prevScrollpos = currentScrollPos;
}
);

var scroll = documnet.getElementById('non_static_core');

scroll.addEventListener('scroll',
    function stuff() {
      console.log("work");
    }
);
